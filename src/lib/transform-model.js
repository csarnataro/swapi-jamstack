/**
 * Used in map to concatenate servername and id depending on the entity type
 * @param {*} serverName provided server name
 * @param {*} entityType entity type of the current model (e.g. `characters` or `films`)
 * @param {*} prefixesMap a map which associate the entity type with corresponding url fragment
 * @returns {Function} a function used in `map` with the current model
 */
function concatenate(serverName, entityType, prefixesMap) {
  const prefix = prefixesMap[entityType];
  return function withId(id) {
    return `${serverName}/api/${prefix}/${id}`;
  };
}
/**
 * Enriches the model transforming the collections with just IDs in collections of
 * URLs with the right prefix.
 *
 * Example:
 * ```
 * {
 *    characters: [1, 2, 3]
 * }
 * ```
 * is transformed in:
 * ```
 * {
 *    characters: [
 *      'http://example.com/api/people/1',
 *      'http://example.com/api/people/2',
 *      'http://example.com/api/people/3'
 *    ]
 * }
 * ```
 *
 * WARNING: it mutates the `model` in input.
 *
 * @param {*} model the model in input
 * @param {*} serverName the server name
 */
function createLinksForCollections(model, serverName) {
  const prefixesMap = {
    characters: 'people',
    films: 'films',
    residents: 'people',
    people: 'people',
    pilots: 'people',
    planets: 'planets',
    homeworld: 'planets',
    starships: 'starships',
    vehicles: 'vehicles',
    species: 'species',
  };

  Object.keys(model).forEach((key) => {
    if (Array.isArray(model[key])) {
      // eslint-disable-next-line no-param-reassign
      model[key] = model[key].map(concatenate(serverName, key, prefixesMap));
    }
  });
  return model;
}

function createLinksForHomeWorld(model, serverName) {
  const prefixesMap = {
    homeworld: 'planets',
  };
  if (model.homeworld) {
    // homeworld is the only known case of a 1-to-n association
    // eslint-disable-next-line no-param-reassign
    model.homeworld = concatenate(serverName, 'homeworld', prefixesMap)(model.homeworld);
  }
}

function createLinkForModel({ prefix, entityId, serverName }) {
  return `${serverName}/api/${prefix}/${entityId}`;
}

function getModelFromDbEntity({
  entity,
  prefix,
  serverName,
  backlinks,
}) {
  const model = { ...entity.fields };

  model.id = entity.pk;

  // console.log(films);
  // model.films = addFilms('characters', films, model.id);

  model.url = createLinkForModel({ prefix, entityId: entity.pk, serverName });

  /*
    backlinks: {
      films: {
        collection: films,
        field: 'characters',
      },
      species: {
        collection: species,
        field: 'people',

      },
    },

  */
  if (backlinks) {
    const backlinksFields = Object.keys(backlinks);
    backlinksFields.forEach((collectionToSearch) => {
      const { collection, field } = backlinks[collectionToSearch];
      const rightItems = collection.filter(
        (backlink) => {
          if (backlink.fields[field]) {
            if (Array.isArray(backlink.fields[field])) {
              return backlink.fields[field].includes(Number(entity.pk));
            }
            if (field === 'homeworld') {
              return backlink.fields[field] === Number(entity.pk);
            }
          }
          return false;
        },
      );
      model[collectionToSearch] = rightItems.map((film) => film.pk);
    });
  }

  // must be called on the final enriched and transformed model
  createLinksForCollections(model, serverName);

  // species and people need a custom link for "homeworld"
  if (prefix === 'species' || prefix === 'people') {
    createLinksForHomeWorld(model, serverName);
  }

  return model;
}

module.exports = getModelFromDbEntity;

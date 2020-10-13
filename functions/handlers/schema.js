const films = require('../../schemas/films.json');
const people = require('../../schemas/people.json');
const planets = require('../../schemas/planets.json');
const species = require('../../schemas/species.json');
const starships = require('../../schemas/starships.json');
const vehicles = require('../../schemas/vehicles.json');

function schema(prefix) {
  /* for some reason, a dynamic require is not supported on netlify
   * so we're creating this not-so-nice switch statement to determine
   * the right entities to use based on the name
   */
  // const entities = require(`../../schemas/${prefix}.json`);

  let jsonSchema = {};
  switch (prefix) {
    case 'films':
      jsonSchema = films;
      break;
    case 'people':
      jsonSchema = people;
      break;
    case 'planets':
      jsonSchema = planets;
      break;
    case 'species':
      jsonSchema = species;
      break;
    case 'starships':
      jsonSchema = starships;
      break;
    case 'vehicles':
      jsonSchema = vehicles;
      break;
    default:
      break;
  }


  return function processRequest(req, res) {
    return res.json(jsonSchema);
  };
}

module.exports = schema;

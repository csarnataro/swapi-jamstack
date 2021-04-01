const films = require('../../schemas/films.json');
const people = require('../../schemas/people.json');
const planets = require('../../schemas/planets.json');
const species = require('../../schemas/species.json');
const starships = require('../../schemas/starships.json');
const vehicles = require('../../schemas/vehicles.json');

const schemas = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles,
};
/**
 * Returns a fastify handler which sends a schema in JSON format, related to a spefic entity type
 *
 * @param {string} entityType the type of the entity for which we want to get the schema
 * @returns {function} a handler which send a JSON related to a spefic schema
 *
 */
function schema(entityType) {
  return function processRequest(request, reply) {
    return reply.send(schemas[entityType]);
  };
}

module.exports = schema;

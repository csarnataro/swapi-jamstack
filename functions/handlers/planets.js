const planets = require('../../data/planets.json');
const films = require('../../data/films.json');
const people = require('../../data/people.json');
const commonRoutes = require('./common-routes');

const params = {
  entityType: 'planets',
  entities: planets,
  backlinks: {
    films: {
      collection: films,
      field: 'planets',
    },
    residents: {
      collection: people,
      field: 'homeworld',
    },
  },
};

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

const species = require('../../data/species.json');
const films = require('../../data/films.json');
const commonRoutes = require('./common-routes');

const params = {
  entityType: 'species',
  entities: species,
  backlinks: {
    films: {
      collection: films,
      field: 'species',
    },
  },
};

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

const films = require('../../data/films.json');
const commonRoutes = require('./common-routes');

const params = { entityType: 'films', entities: films };

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

const schema = require('./schema');
const { all, single } = require('../lib/load-entities');

function commonRoutes(fastify, params) {
  fastify.get(`/api/${params.entityType}`, all(params));
  fastify.get(`/api/${params.entityType}/schema`, schema('films'));
  fastify.get(`/api/${params.entityType}/:id`, single(params));
}

module.exports = commonRoutes;

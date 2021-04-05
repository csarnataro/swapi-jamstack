const getModelFromDbEntity = require('./transform-model');
const buildResultPage = require('./build-result-page');
const getServerName = require('./get-server-name');

function all({ entityType, entities, backlinks }) {
  return function processRequest(req, reply) {
    const serverName = getServerName(req);
    const pageNumber = req.query.page || 1;
    try {
      const transformedModels = entities.map((entity) => getModelFromDbEntity({
        entityType,
        entity,
        serverName,
        backlinks,
      }));
      const resultPage = buildResultPage(
        {
          entityType,
          models: transformedModels,
          serverName,
          pageNumber: Number(pageNumber),
        },
      );
      reply.send(resultPage);
    } catch (e) {
      if (e instanceof RangeError) {
        reply.status(404);
        reply.send({ detail: e.message });
      } else {
        reply.status(500);
        reply.send({ detail: e.message });
      }
    }
  };
}

function single({ entityType, entities, backlinks }) {
  return function processRequest(req, reply) {
    const serverName = getServerName(req);
    const { id } = req.params;
    const foundEntity = entities.filter((_) => _.pk === parseInt(id, 10));
    if (foundEntity.length > 0) {
      const entity = foundEntity[0];
      reply.send(getModelFromDbEntity({
        entityType,
        entity,
        serverName,
        backlinks,
      }));
    } else {
      reply.status(404);
      reply.send({ detail: 'Not found' });
    }
  };
}
module.exports = {
  all,
  single,
};

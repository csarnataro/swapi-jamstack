const getModelFromDbEntity = require('./transform-model');
const buildResultPage = require('./build-result-page');
const getServerName = require('./get-server-name');

function all({ prefix, entities, backlinks }) {
  return function processRequest(req, res) {
    const serverName = getServerName(req);
    const pageNumber = req.query.page || 1;
    try {
      const transformedModels = entities.map((entity) => getModelFromDbEntity({
        prefix,
        entity,
        serverName,
        backlinks,
      }));
      const resultPage = buildResultPage(transformedModels, serverName, Number(pageNumber));
      res.json(resultPage);
      res.end();
    } catch (e) {
      if (e instanceof RangeError) {
        res.status(404);
        res.json({ detail: e.message });
      } else {
        res.status(500);
        res.json({ detail: e.message });
      }
    }

    res.json();
  };
}

function single({ prefix, entities, backlinks }) {
  return function processRequest(req, res) {
    const serverName = getServerName(req);
    const { id } = req.params;
    const foundEntity = entities.filter((_) => _.pk === parseInt(id, 10));
    if (foundEntity.length > 0) {
      const entity = foundEntity[0];
      res.json(getModelFromDbEntity({
        prefix,
        entity,
        serverName,
        backlinks,
      }));
    } else {
      res.status(404);
      res.json({ detail: 'Not found' });
    }

    res.end();
  };
}
module.exports = {
  all,
  single,
};

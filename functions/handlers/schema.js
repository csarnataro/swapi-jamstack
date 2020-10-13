/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

function schema(prefix) {
  const entities = require(`../../schemas/${prefix}.json`);
  return function processRequest(req, res) {
    return res.json(entities);
  };
}

module.exports = schema;

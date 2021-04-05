const getServerName = require('../lib/get-server-name');

function allResources(req, res) {
  res.send([
    'people',
    'planets',
    'films',
    'species',
    'vehicles',
    'starships',
  ].reduce(
    (accumulator, entityType) => (
      {
        ...accumulator,
        [entityType]: `${getServerName(req)}/api/${entityType}`,
      }),
    {}, // <- initial value
  ));
}

module.exports = allResources;

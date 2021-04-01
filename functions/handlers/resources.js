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
    (accumulator, prefix) => (
      {
        ...accumulator,
        [prefix]: `${getServerName(req)}/api/${prefix}`,
      }),
    {}, // <- initial value
  ));
}

module.exports = allResources;

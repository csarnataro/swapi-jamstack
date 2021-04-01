const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');

const vehiclesTable = require('../../data/vehicles.json');
const transportsTable = require('../../data/transport.json');

const vehicles = mergeVehiclesWithTransport({
  allVehicles: vehiclesTable,
  allTransports: transportsTable,
});

const params = {
  prefix: 'vehicles',
  entities: vehicles,
  backlinks: {
    films: {
      collection: films,
      field: 'vehicles',
    },
  },
};

module.exports = {
  all: all(params),
  single: single(params),
};

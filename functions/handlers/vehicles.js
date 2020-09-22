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

function allVehicles(req, res) {
  all(params)(req, res);
}

function singleVehicle(req, res) {
  single(params)(req, res);
}

module.exports = {
  allVehicles,
  singleVehicle,
};

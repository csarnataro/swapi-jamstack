const films = require('../../data/films.json');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');

const vehiclesTable = require('../../data/vehicles.json');
const transportsTable = require('../../data/transport.json');
const commonRoutes = require('./common-routes');

const vehicles = mergeVehiclesWithTransport({
  allVehicles: vehiclesTable,
  allTransports: transportsTable,
});

const params = {
  entityType: 'vehicles',
  entities: vehicles,
  backlinks: {
    films: {
      collection: films,
      field: 'vehicles',
    },
  },
};

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

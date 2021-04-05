const films = require('../../data/films.json');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');

const starshipsTable = require('../../data/starships.json');
const transportsTable = require('../../data/transport.json');
const commonRoutes = require('./common-routes');

const starships = mergeVehiclesWithTransport({
  allVehicles: starshipsTable,
  allTransports: transportsTable,
});

const params = {
  entityType: 'starships',
  entities: starships,
  backlinks: {
    films: {
      collection: films,
      field: 'starships',
    },
  },
};

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

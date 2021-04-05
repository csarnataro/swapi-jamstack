const people = require('../../data/people.json');
const films = require('../../data/films.json');
const species = require('../../data/species.json');
const vehiclesTable = require('../../data/vehicles.json');
const starshipsTable = require('../../data/starships.json');
const transportsTable = require('../../data/transport.json');

const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');
const commonRoutes = require('./common-routes');

const vehicles = mergeVehiclesWithTransport({
  allVehicles: vehiclesTable,
  allTransports: transportsTable,
});

const starships = mergeVehiclesWithTransport({
  allVehicles: starshipsTable,
  allTransports: transportsTable,
});


const params = {
  entityType: 'people',
  entities: people,
  backlinks: {
    films: {
      collection: films,
      field: 'characters',
    },
    species: {
      collection: species,
      field: 'people',
    },
    vehicles: {
      collection: vehicles,
      field: 'pilots',
    },
    starships: {
      collection: starships,
      field: 'pilots',
    },
  },
};

async function routes(fastify) {
  commonRoutes(fastify, params);
}

module.exports = routes;

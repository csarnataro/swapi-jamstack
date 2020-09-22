const people = require('../../data/people.json');
const films = require('../../data/films.json');
const species = require('../../data/species.json');
const vehiclesTable = require('../../data/vehicles.json');
const starshipsTable = require('../../data/starships.json');
const transportsTable = require('../../data/transport.json');

const { all, single } = require('../lib/load-entities');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');

const vehicles = mergeVehiclesWithTransport({
  allVehicles: vehiclesTable,
  allTransports: transportsTable,
});

const starships = mergeVehiclesWithTransport({
  allVehicles: starshipsTable,
  allTransports: transportsTable,
});


const params = {
  prefix: 'people',
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


function allPeople(req, res) {
  all(params)(req, res);
}

function singlePerson(req, res) {
  single(params)(req, res);
}

module.exports = {
  allPeople,
  singlePerson,
};

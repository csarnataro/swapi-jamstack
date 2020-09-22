const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');

const starshipsTable = require('../../data/starships.json');
const transportsTable = require('../../data/transport.json');

const starships = mergeVehiclesWithTransport({
  allVehicles: starshipsTable,
  allTransports: transportsTable,
});

const params = {
  prefix: 'starships',
  entities: starships,
  backlinks: {
    films: {
      collection: films,
      field: 'starships',
    },
  },
};

function allStarships(req, res) {
  all(params)(req, res);
}

function singleStarship(req, res) {
  single(params)(req, res);
}

module.exports = {
  allStarships,
  singleStarship,
};

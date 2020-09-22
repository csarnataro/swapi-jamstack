const species = require('../../data/species.json');
const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');

const PREFIX = 'planets';

const params = {
  prefix: PREFIX,
  entities: species,
  backlinks: {
    films: {
      collection: films,
      field: 'species',
    },
  },
};

function allSpecies(req, res) {
  all(params)(req, res);
}

function singleSpecies(req, res) {
  single(params)(req, res);
}

module.exports = {
  allSpecies,
  singleSpecies,
};

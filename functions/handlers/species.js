const species = require('../../data/species.json');
const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');

const params = {
  prefix: 'species',
  entities: species,
  backlinks: {
    films: {
      collection: films,
      field: 'species',
    },
  },
};

module.exports = {
  all: all(params),
  single: single(params),
};

const planets = require('../../data/planets.json');
const films = require('../../data/films.json');
const people = require('../../data/people.json');
const { all, single } = require('../lib/load-entities');

const params = {
  prefix: 'planets',
  entities: planets,
  backlinks: {
    films: {
      collection: films,
      field: 'planets',
    },
    residents: {
      collection: people,
      field: 'homeworld',
    },
  },
};

module.exports = {
  all: all(params),
  single: single(params),
};

const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');

const params = { prefix: 'films', entities: films };

module.exports = {
  all: all(params),
  single: single(params),
};

const films = require('../../data/films.json');
const { all, single } = require('../lib/load-entities');

const params = { prefix: 'films', entities: films };

function allFilms(req, res) {
  all(params)(req, res);
}

function singleFilm(req, res) {
  single(params)(req, res);
}

module.exports = {
  allFilms,
  singleFilm,
};

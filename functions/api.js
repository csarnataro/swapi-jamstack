/* eslint-disable prefer-rest-params */
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const responseTimeMiddleware = require('./lib/response-time-middleware');
const wookieMiddleware = require('./lib/wookiee-middleware');
const { allFilms, singleFilm } = require('./handlers/films');
const { allPeople, singlePerson } = require('./handlers/people');
const { allPlanets, singlePlanet } = require('./handlers/planets');
const { allSpecies, singleSpecies } = require('./handlers/species');
const allResources = require('./handlers/resources');
const { allStarships, singleStarship } = require('./handlers/starships');
const { allVehicles, singleVehicle } = require('./handlers/vehicles');

const app = express();

app.use(cors());
app.use(responseTimeMiddleware);

app.use(wookieMiddleware);

app.get('/api', allResources);

app.get('/api/films', allFilms);
app.get('/api/films/:id', singleFilm);

app.get('/api/people', allPeople);
app.get('/api/people/:id', singlePerson);

app.get('/api/planets', allPlanets);
app.get('/api/planets/:id', singlePlanet);

app.get('/api/species', allSpecies);
app.get('/api/species/:id', singleSpecies);

app.get('/api/starships', allStarships);
app.get('/api/starships/:id', singleStarship);

app.get('/api/vehicles', allVehicles);
app.get('/api/vehicles/:id', singleVehicle);

app.get('/*', (req, res) => {
  res.write('It works');
  res.end();
});

module.exports = {
  handler: process.env.NODE_ENV === 'local' ? app : serverless(app),
};

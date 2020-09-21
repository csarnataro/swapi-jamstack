const serverless = require('serverless-http');
const express = require('express');
const responseTimeMiddleware = require('../lib/response-time-middleware');
const { all, single } = require('../lib/load-entities');
const mergeVehiclesWithTransport = require('../lib/merge-vehicles-with-transport');
const films = require('../../data/films.json');
const people = require('../../data/people.json');
const species = require('../../data/species.json');
const planets = require('../../data/planets.json');
const vehiclesTable = require('../../data/vehicles.json');
const starshipsTable = require('../../data/starships.json');
const transportsTable = require('../../data/transport.json');

const vehicles = mergeVehiclesWithTransport({
  allVehicles: vehiclesTable,
  allTransports: transportsTable,
});

const starships = mergeVehiclesWithTransport({
  allVehicles: starshipsTable,
  allTransports: transportsTable,
});


const app = express();

app.use(responseTimeMiddleware);

function catchAll(req, res) {
  res.write('It works');
  res.end();
}

const peopleBacklinks = {
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
};


app.get('/api/films', all({ prefix: 'films', entities: films, backlinks: undefined }));
app.get('/api/films/:id', single({ prefix: 'films', entities: films, backlinks: undefined }));

app.get('/api/people', all({
  prefix: 'people',
  entities: people,
  backlinks: peopleBacklinks,
}));
app.get('/api/people/:id',
  single({
    prefix: 'people',
    entities: people,
    backlinks: peopleBacklinks,
  }));

app.get('/api/planets', all({
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
}));
app.get('/api/planets/:id', single({
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
}));

app.get('/api/species', all({
  prefix: 'species',
  entities: species,
  backlinks: {
    films: {
      collection: films,
      field: 'species',
    },
  },
}));
app.get('/api/species/:id', single({
  prefix: 'species',
  entities: species,
  backlinks: {
    films: {
      collection: films,
      field: 'species',
    },
  },
}));

app.get('/api/starships', all({
  prefix: 'starships',
  entities: starships,
  backlinks: {
    films: {
      collection: films,
      field: 'starships',
    },
  },
}));
app.get('/api/starships/:id', single({
  prefix: 'starships',
  entities: starships,
  backlinks: {
    films: {
      collection: films,
      field: 'starships',
    },
  },
}));

app.get('/api/vehicles', all({
  prefix: 'vehicles',
  entities: vehicles,
  backlinks: {
    films: {
      collection: films,
      field: 'vehicles',
    },
  },
}));
app.get('/api/vehicles/:id', single({
  prefix: 'vehicles',
  entities: vehicles,
  backlinks: {
    films: {
      collection: films,
      field: 'vehicles',
    },
  },
}));

app.get('/*', catchAll);

module.exports = {
  handler: process.env.NODE_ENV === 'local' ? app : serverless(app),
};

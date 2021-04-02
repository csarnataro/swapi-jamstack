/* eslint-disable global-require */
function init() {
  const fastify = require('fastify')({
    logger: true,
    requestIdHeader: 'X-Request-ID',
  });
  // const responseTimeMiddleware = require('./lib/response-time-middleware');

  const schema = require('../handlers/schema');
  const filmsHandler = require('../handlers/films');
  const peopleHanlder = require('../handlers/people');
  const planetsHandler = require('../handlers/planets');
  const speciesHandler = require('../handlers/species');
  const allResources = require('../handlers/resources');
  const starshipsHandler = require('../handlers/starships');
  const vehiclesHandler = require('../handlers/vehicles');

  fastify.register(require('fastify-cors'));
  fastify.register(require('fastify-x-request-id'));
  fastify.addHook('preSerialization', require('../lib/wookiee-hook'));

  fastify.get('/api', allResources);

  fastify.get('/api/films', filmsHandler.all);
  fastify.get('/api/films/schema', schema('films'));
  fastify.get('/api/films/:id', filmsHandler.single);

  fastify.get('/api/people', peopleHanlder.all);
  fastify.get('/api/people/schema', schema('people'));
  fastify.get('/api/people/:id', peopleHanlder.single);

  fastify.get('/api/planets', planetsHandler.all);
  fastify.get('/api/planets/schema', schema('planets'));
  fastify.get('/api/planets/:id', planetsHandler.single);

  fastify.get('/api/species', speciesHandler.all);
  fastify.get('/api/species/schema', schema('species'));
  fastify.get('/api/species/:id', speciesHandler.single);

  // fastify.use(responseTimeMiddleware);
  fastify.get('/api/starships', starshipsHandler.all);
  fastify.get('/api/starships/schema', schema('starships'));
  fastify.get('/api/starships/:id', starshipsHandler.single);

  fastify.get('/api/vehicles', vehiclesHandler.all);
  fastify.get('/api/vehicles/schema', schema('vehicles'));
  fastify.get('/api/vehicles/:id', vehiclesHandler.single);

  fastify.get('/api/*', (req, reply) => {
    reply.code(404);
    reply.send({ detail: 'Not found' });
    reply.end();
  });

  fastify.get('/*', (req, reply) => {
    reply.send('It works');
    reply.end();
  });


  return fastify;
}

const port = 4000;
if (require.main === module) {
  // called directly i.e. "node app"
  init().listen(port, (err) => {
    if (err) console.error(err);
    console.log(`server listening on ${port}`);
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = init;
}

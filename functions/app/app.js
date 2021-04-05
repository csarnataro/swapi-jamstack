/* eslint-disable global-require */
function init() {
  const fastify = require('fastify')({
    logger: true,
    requestIdHeader: 'X-Request-ID',
  });
  fastify.register(require('fastify-cors'));
  fastify.register(require('fastify-x-request-id'));
  fastify.addHook('preSerialization', require('../lib/wookiee-hook'));

  fastify.get('/api', require('../handlers/resources'));

  /* API for all entity types, e.g.
   * /api/films, /api/films/schema, /api/films/schema
   */
  fastify.register(require('../handlers/films'));
  fastify.register(require('../handlers/people'));
  fastify.register(require('../handlers/planets'));
  fastify.register(require('../handlers/species'));
  fastify.register(require('../handlers/starships'));
  fastify.register(require('../handlers/vehicles'));

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

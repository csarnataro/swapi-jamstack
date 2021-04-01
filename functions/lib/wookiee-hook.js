const translateToWookiee = require('shyriiwook');

/**
 * A fastify hook which translate a response in Wookiee format
 * @param {*} request fastify request
 * @param {*} reply fastify reply
 * @param {*} payload the payload (e.g. the JSON with the result of a call)
 * @param {*} done cb
 */
const wookieeHook = (request, reply, payload, done) => {
  if (request.query.format === 'wookiee') {
    try {
      const newPayload = JSON.parse(translateToWookiee(JSON.stringify(payload)));
      done(null, newPayload);
    } catch (err) {
      done(err);
    }
  } else {
    done(null, payload);
  }
};

module.exports = wookieeHook;

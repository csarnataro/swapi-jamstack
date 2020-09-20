/** Credits: http://www.sheshbabu.com/posts/measuring-response-times-of-express-route-handlers/ */
// response-time-middleware.js

function responseTimeMiddleware(req, res, next) {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.log('%s : %fms', req.path, elapsedTimeInMs);
  });

  next();
}

module.exports = responseTimeMiddleware;

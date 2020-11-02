const translateToWookiee = require('shyriiwook');

function wookieMiddleware(req, res, next) {
  if (req.query.format === 'wookiee') {
    const originalSend = res.send;

    res.send = (...args) => {
      const newArgs = args;
      newArgs[0] = translateToWookiee(args[0]);
      originalSend.apply(res, newArgs);
    };
  }
  next();
}

module.exports = wookieMiddleware;

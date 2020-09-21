function getServerName(request) {
  let protocol = 'https';
  // useful when developing in local env
  const { host } = request.headers;
  if (host.includes('localhost') || host.includes('127.0.0.1') || host.includes('::1')) {
    protocol = 'http';
  }
  return `${protocol}://${host}`;
}

module.exports = getServerName;

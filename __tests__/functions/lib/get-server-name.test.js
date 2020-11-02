const getServerName = require('../../../functions/lib/get-server-name');

describe('getServerName', () => {
  test('should return http://localhost:4000 on local host', () => {
    const mockRequest = {
      headers: {
        host: 'localhost:4000',
      },
    };
    const serverName = getServerName(mockRequest);
    expect(serverName).toEqual('http://localhost:4000');
  });

  test('should return http://::1:4000 on local host (IPV6)', () => {
    const mockRequest = {
      headers: {
        host: '::1:4000',
      },
    };
    const serverName = getServerName(mockRequest);
    expect(serverName).toEqual('http://::1:4000');
  });

  test('should return a real server name with https', () => {
    const mockRequest = {
      headers: {
        host: 'swapi-io.netlify.app',
      },
    };
    const serverName = getServerName(mockRequest);
    expect(serverName).toEqual('https://swapi-io.netlify.app');
  });
});

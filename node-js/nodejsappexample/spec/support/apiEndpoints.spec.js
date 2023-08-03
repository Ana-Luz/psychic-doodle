const axios = require('axios');
const app = require('../../app');

describe('GET /getRequest', () => {
  let server;
  let port = 3000;

  afterAll(done => {
    server.close(done);
  });

  it('should return a status code of 200 and "hello world"', async () => {
    const response = await axios.get(`http://localhost:${port}/getRequest`);
    expect(response.status).toBe(200);
    expect(response.data).toBe('hello world');
  });
});

describe('POST /postRequest', () => {
  let server;
  let port;

  afterAll(done => {
    server.close(done);
  });

  it('should return a status code of 201 and "hello world"', async () => {
    const response = await axios.post(`http://localhost:${port}/postRequest`);
    expect(response.status).toBe(201);
    expect(response.data).toBe('hello world');
  });
});

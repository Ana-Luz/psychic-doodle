const axios = require('axios');
const app = require('/Users/anaclaraluz/Documents/GitHub/psychic-doodle/node-js/nodejsappexample/app.js');

describe('GET /getRequest', () => {
  let server;
  let port;

  beforeAll((done) => {
    server = app.listen(0, () => {
      port = server.address().port;
      done();
    });
  });

  afterAll((done) => {
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

  beforeAll((done) => {
    server = app.listen(0, () => {
      port = server.address().port;
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a status code of 201 and "hello world"', async () => {
    const response = await axios.post(`http://localhost:${port}/postRequest`);
    expect(response.status).toBe(201);
    expect(response.data).toBe('hello world');
  });
});

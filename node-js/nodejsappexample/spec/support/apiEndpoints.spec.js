const axios = require('axios');
const {app, server} = require('../../app');

describe('GET /getRequest', () => {

  console.log("Building up...")
  console.log(server.address().port)

  it('should return a status code of 200 and "hello world"', async () => {
    const response = await axios.get(`http://localhost:${server.address().port}/getRequest`);
    expect(response.status).toBe(200);
    expect(response.data).toBe('hello world');
  });
});

describe('POST /postRequest', () => {

  it('should return a status code of 201 and "hello world"', async () => {
    const response = await axios.post(`http://localhost:${server.address().port}/postRequest`);
    expect(response.status).toBe(201);
    expect(response.data).toBe('hello world');
  });
});

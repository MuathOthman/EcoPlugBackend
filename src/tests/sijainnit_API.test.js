const supertest = require('supertest');
const app = require('../app.js');
const request = supertest(app);

// Test the GET route
test('gets the sijainnit endpoint', async () => {
    const response = await request.get('/sijainnit');
    expect(response.status).toBe(200);

});


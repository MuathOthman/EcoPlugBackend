const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('Charging Controller Tests', () => {
    test('should start charging', async () => {
        const response = await request.post('/charging/start-charging').send({
            latauspisteID: 3,
            latausID: 81,
        });
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Charging stated' });
    });
});



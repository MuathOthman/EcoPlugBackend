const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

let randomPisteID = Math.floor(Math.random() * 141);
let randomLatausID = Math.floor(Math.random() * 201);



describe('Charging Controller Tests', () => {
    test('should start charging', async () => {
        const response = await request.post('/charging/start-charging').send({
            latauspisteID: randomPisteID,
            latausID: randomLatausID,
        });
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Charging stated' });
    });
});



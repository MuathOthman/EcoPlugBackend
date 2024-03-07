const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('User Controller Tests', () => {
    test('should create user', async () => {
        const response = await request.post('/user/create-user').send({
            phoneNumber: '+358442379461',
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'User created successfully.');
        expect(response.body).toHaveProperty('latausId');
    });

    test('should get user', async () => {
        const response = await request.post('/user/get-user').send({
            phoneNumber: '+358442379461',
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('latausId');
    });

    test('should update user (updateLataus)', async () => {
        const response = await request.post('/user/update-user').send({
            latausID: 123,
            chargingTime: 5.5,
            totalCost: 10.0,
            phoneNumber: '+358442379461',
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Lataus updated successfully.');
    });

    test('should free latauspiste (freeLatauspiste)', async () => {
        const response = await request.post('/user/free-latauspiste').send({
            latauspisteID: 1,
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Latauspiste updated successfully.');
    });
});

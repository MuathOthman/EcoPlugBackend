const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);

describe('Sijainnit Controller Tests', () => {
    test('should get all sijainnit', async () => {
        const response = await request.get('/sijainnit');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([]));
    });

    test('should get free parking spots', async () => {
        const response = await request.get('/sijainnit/specific/11');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    count: expect.any(Number),
                }),
            ])
        );
    });

    test('should get parking spots', async () => {
        const response = await request.get('/sijainnit/parkings/5');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    parkki: expect.any(String),
                    tila: expect.any(Number),
                }),
            ])
        );
    });

    test('should reserve parking spot', async () => {
        const response = await request.post('/sijainnit/reserve/5');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Parking spot reserved successfully.');
    });
});

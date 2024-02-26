const supertest = require('supertest');
const app = require('../app.js');
const request = supertest(app);


// Test to connect to the database


// Test the GET route
test('gets the sijainnit endpoint', async () => {
    const response = await request.get('/sijainnit');
    expect(response.status).toBe(200);

});

test('gets free parking spots', async () => {
    const response = await request.get('/sijainnit/specific/10');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                count: expect.any(Number)
            })
        ])
    );
}
);

test('gets parking spots', async () => {
    const response = await request.get('/sijainnit/parkings/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                parkki: expect.any(String),
                tila: expect.any(Number)
            })
        ])
    );
}
);




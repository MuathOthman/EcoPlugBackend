const supertest = require('supertest');
const app = require('../app.js');
const request = supertest(app);

test('sendOTP', async () => {
        const response = await request.post('/otp/send-otp').send({
            phoneNumber: '+358442379461'
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({message: 'OTP sent successfully.'});
    }
);

test('verifyOTP', async () => {
        const response = await request.post('/otp/verify-otp').send({
            otp: '123456',
            phoneNumber: '+358442379461'
        });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({message: 'pending'});
    }
);


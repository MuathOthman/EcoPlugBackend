const dotenv = require('dotenv');
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
let number = "+358442379461"


const sendOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    number = phoneNumber;
    try {
        const otpResponse = await client.verify.v2.services(process.env.SID)
            .verifications
            .create({to: phoneNumber, channel: 'sms'});
        console.log(otpResponse);
        otpCode = otpResponse.sid;
        res.status(200).send({message: 'OTP sent successfully.'});
    }
    catch (error) {
        console.log(error);
        res.status(400).send({message: 'Failed to send OTP.'});
    }
}

const verifyOTP = async (req, res) => {
    const {otp, phoneNumber} = req.body;
    try {
        const otpResponse = await client.verify.v2.services(process.env.SID)
            .verificationChecks
            .create({to: phoneNumber, code: otp});
        console.log(otpResponse);
        res.status(200).send({message: otpResponse.status});
    }
    catch (error) {
        console.log(error);
        res.status(400).send({message: 'Failed to verify OTP.'});
    }
}


module.exports = {
    sendOTP,
    verifyOTP
}

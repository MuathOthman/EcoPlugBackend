const express = require('express');
const app = express();
const sijainnitRoutes = require('./routes/sijainnitRoutes');
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const chargingRoutes = require('./routes/chargingRoutes');
const LanguageMiddleware = require('./middleware/LanguageMiddleware');
const PORT = process.env.PORT || 3002;
const cors = require('cors');


app.use(express.json());
app.use(cors());
LanguageMiddleware(app);

app.use('/sijainnit', sijainnitRoutes);
app.use('/otp', otpRoutes);
app.use('/user', userRoutes);
app.use('/charging', chargingRoutes);

module.exports = app;
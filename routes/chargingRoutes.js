const express = require('express');

const router = express.Router();
const chargingController = require('../controllers/chargingController');

router.post('/start-charging', chargingController.createCharge);
module.exports = router;
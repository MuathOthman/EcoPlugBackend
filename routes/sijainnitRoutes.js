const express = require('express');
const mysql = require('mysql');
const app = express();

const router = express.Router();
const SijainnitController = require('../controllers/sijainnitController');


router.get('/', SijainnitController.findAll);
router.get('/specific/:id', SijainnitController.findOne);
router.get('/parkings/:id', SijainnitController.findParkings);
router.post('/reserve/:id', SijainnitController.reserveParkingSpot);
router.post('/update/:id', SijainnitController.updateLocation);

module.exports = router;
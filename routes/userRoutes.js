const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.create);
module.exports = router;
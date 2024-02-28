const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.create);
router.post('/get-user', userController.get);
module.exports = router;

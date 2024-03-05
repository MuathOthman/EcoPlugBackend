const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create-user', userController.create);
router.post('/get-user', userController.get);
router.post('/update-user', userController.updateLataus);
router.post('/free-latauspiste', userController.freeLatauspiste);
module.exports = router;
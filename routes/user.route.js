const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user.controller');

router.post('/user', UserCtrl.addUser);
router.post('/users/login', UserCtrl.signInUser);

module.exports = router;

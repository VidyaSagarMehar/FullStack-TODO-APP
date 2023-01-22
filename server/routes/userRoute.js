const express = require('express');
const { register, login, getuser } = require('../Controllers/userController');

const auth = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/getuser', auth, getuser);

module.exports = router;

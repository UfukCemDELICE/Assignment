const express = require('express');
const {register, login}  = require('../controllers/auth.js');

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;
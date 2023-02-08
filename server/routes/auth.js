const express = require('express');
const register  = require('../controllers/auth.js');

const router = express.Router();

router.post('/auth', register);


module.exports = router;
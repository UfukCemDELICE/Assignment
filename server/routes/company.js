const express = require('express');
const { createCompany, getCompany, updateCompany, deleteCompany } = require('../controllers/company');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/createCompany', auth, createCompany);
router.get('/getCompany',auth, getCompany);
router.patch('/updateCompany:id',auth, updateCompany);
router.delete('/deleteCompany:id',auth, deleteCompany);

module.exports = router;

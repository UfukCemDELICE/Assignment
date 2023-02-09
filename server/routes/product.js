const express = require('express');
const { createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/createProduct',auth, createProduct);
router.get('/getProduct',auth, getProduct);
router.patch('/updateProduct:id',auth, updateProduct);
router.delete('/deleteProduct:id',auth, deleteProduct);

module.exports = router;

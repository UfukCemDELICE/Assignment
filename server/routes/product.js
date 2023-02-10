const express = require("express");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
//const auth = require('../middlewares/auth');

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getProduct", getProduct);
router.patch("/updateProduct:id", updateProduct);
router.delete("/deleteProduct:id", deleteProduct);

module.exports = router;

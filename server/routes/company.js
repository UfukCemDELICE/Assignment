const express = require("express");
const {
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");
//const auth = require('../middlewares/auth');
const router = express.Router();

router.post("/createCompany", createCompany);
router.get("/getCompany", getCompany);
router.patch("/updateCompany:id", updateCompany);
router.delete("/deleteCompany:id", deleteCompany);

module.exports = router;

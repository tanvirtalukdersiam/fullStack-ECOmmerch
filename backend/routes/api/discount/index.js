const express = require("express");
const createDiscount = require("../../../controller/createDiscount");

const router = express.Router();

router.post("/createDiscount", createDiscount);
module.exports = router;

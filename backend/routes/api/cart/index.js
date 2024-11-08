const express = require("express");
const addCartController = require("../../../controller/addCartController");
const getAllCartController = require("../../../controller/getAllCartController");
const quantityUpdate = require("../../../controller/quantityUpdate");
const router = express.Router();

router.post("/addCart", addCartController);
router.post("/quantityUpdate/:id", quantityUpdate);
router.get("/allCart/:id", getAllCartController);
module.exports = router;

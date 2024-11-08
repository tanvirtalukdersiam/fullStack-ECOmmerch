const express = require("express");
const storeController = require("../../../controller/storeController");
const getallStore = require("../../../controller/getAllStore");
const router = express.Router();

router.post("/CreateStore", storeController);
router.get("/allStore", getallStore);

module.exports = router;

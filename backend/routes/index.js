const express = require("express");
const router = express.Router();
const api = require("./api");
const apiRoutes = process.env.APIROUTES;

router.use(apiRoutes, api);
module.exports = router;

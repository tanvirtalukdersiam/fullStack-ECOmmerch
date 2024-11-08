const express = require("express");
const reviewController = require("../../../controller/reviewController");
const getAllReview = require("../../../controller/getAllReviewController");
const router = express.Router();

router.post("/submitReview", reviewController);
router.get("/getAllReview", getAllReview);
module.exports = router;

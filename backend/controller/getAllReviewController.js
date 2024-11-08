const reviewSchema = require("../model/reviewSchema");

async function getAllReview(req, res) {
  try {
    let allReview = await reviewSchema.find({});

    res.status(200).send({ allReview });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

module.exports = getAllReview;

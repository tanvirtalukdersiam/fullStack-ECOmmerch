const productSchema = require("../model/productSchema");
const reviewSchema = require("../model/reviewSchema");

async function reviewController(req, res) {
  let { product, rating, message, reviewBy } = req.body;

  const review = new reviewSchema({
    product,
    rating,
    message,
    reviewBy,
  });

  try {
    await review.save();
    let updateProduct = await productSchema.findOneAndUpdate(
      { _id: product },
      { $set: { review: review._id } },
      {
        new: true,
      }
    );
    res.send("Review created successfully");
  } catch (error) {
    return res.status(400).send({ error: error });
  }
}
module.exports = reviewController;

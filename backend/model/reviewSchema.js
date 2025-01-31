const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  reviewBy: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
});

//Export the model
module.exports = mongoose.model("Review", reviewSchema);

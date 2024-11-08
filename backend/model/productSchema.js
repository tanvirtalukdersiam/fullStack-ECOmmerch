const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    sellingprice: {
      type: String,
    },
    price: {
      type: String,
    },
    sellerId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    storeId: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
    },
    review: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", ProductSchema);

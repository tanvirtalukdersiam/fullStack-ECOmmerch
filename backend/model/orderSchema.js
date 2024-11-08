const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  orderItem: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Order", discountSchema);

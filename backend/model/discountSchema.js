const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var discountSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "category",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});

//Export the model
module.exports = mongoose.model("Discount", discountSchema);

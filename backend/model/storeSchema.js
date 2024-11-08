const mongoose = require("mongoose"); // Erase if already required

let storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  productId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
});

//Export the model
module.exports = mongoose.model("Store", storeSchema);

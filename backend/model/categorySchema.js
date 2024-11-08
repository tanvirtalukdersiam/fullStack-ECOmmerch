const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  productId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  discount: {
    type: String,
  },
});
module.exports = mongoose.model("category", categorySchema);

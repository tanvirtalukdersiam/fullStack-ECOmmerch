const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const bannerSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Banner", bannerSchema);

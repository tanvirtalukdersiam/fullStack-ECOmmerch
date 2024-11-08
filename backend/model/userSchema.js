const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is require"],
  },
  email: {
    type: String,
    require: [true, "email is require"],
  },
  password: {
    type: String,
    require: [true, "Password is require"],
  },
  phone: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    enum: ["member", "merchant", "admin"],
    default: "member",
  },
  token: {
    type: String,
  },
  emailVerified: {
    type: String,
    default: false,
  },
  otp: {
    type: Number,
  },
});

module.exports = mongoose.model("users", userSchema);

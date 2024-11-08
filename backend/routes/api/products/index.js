const express = require("express");
const createProductController = require("../../../controller/productController");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const multer = require("multer");
const getAllProductController = require("../../../controller/getAllProductController");
const singleProductController = require("../../../controller/singleProductController");

cloudinary.config({
  cloud_name: "dfd0jzdf7",
  api_key: "396552551143357",
  api_secret: "emhH0W9qMpgxmAE7Pr7634dsxxI", // Click 'View API Keys' above to copy
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/createProduct", upload.single("image"), createProductController);
router.get("/allProduct", getAllProductController);
router.get("/singleProduct/:id", singleProductController);
module.exports = router;

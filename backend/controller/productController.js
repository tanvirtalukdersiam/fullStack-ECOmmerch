const { log, Console } = require("console");
const productSchema = require("../model/productSchema");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const storeSchema = require("../model/storeSchema");
const categorySchema = require("../model/categorySchema");

async function createProductController(req, res) {
  let { name, description, category, sellingprice, price, sellerId, storeId } =
    req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "folder_name",
    });

    fs.unlink(req.file.path, () => {
      console.log("Image  deleted successfully");
    });

    let product = new productSchema({
      name,
      description,
      image: result.secure_url,
      category,
      sellingprice,
      price,
      sellerId,
      storeId,
    });
    await product.save();
    await storeSchema.findOneAndUpdate(
      { _id: storeId },
      { $push: { productId: product._id } },
      { new: true }
    );
    await categorySchema.findOneAndUpdate(
      { _id: category },
      { $push: { productId: product._id } },
      { new: true }
    );
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
}

module.exports = createProductController;

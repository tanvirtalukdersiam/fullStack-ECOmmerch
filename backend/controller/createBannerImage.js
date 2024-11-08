const bannerSchema = require("../model/bannerSchema");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
async function createBannerImage(req, res) {
  try {
    let existingBanner = await bannerSchema.find({});
    if (existingBanner.length < 3) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "folder_name",
      });

      let bannerImage = new bannerSchema({
        image: result.secure_url,
      });
      await bannerImage.save();
      fs.unlink(req.file.path, () => {
        console.log("Image  deleted successfully");
      });

      res.send({ bannerImage });
    } else {
      res.send("only 3 images uploaded");
    }
  } catch (error) {
    res.send({ error: error });
  }
}
module.exports = createBannerImage;

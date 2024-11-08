const bannerSchema = require("../model/bannerSchema");

async function getBannerImageController(req, res) {
  try {
    let getBannerImage = await bannerSchema.find({});
    res.status(200).send({ Images: getBannerImage });
  } catch (error) {
    res.status(501).send({ error: error });
  }
}

module.exports = getBannerImageController;

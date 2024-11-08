const productSchema = require("../model/productSchema");

async function singleProductController(req, res) {
  const { id } = req.params;

  try {
    let singleProduct = await productSchema
      .findOne({ _id: id })
      .populate("review");
    res.status(200).send({ singleProduct });
  } catch (error) {
    res.status(404).send({ error: error });
  }
}
module.exports = singleProductController;

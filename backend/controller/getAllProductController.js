const productSchema = require("../model/productSchema");

async function getAllProductController(req, res) {
  try {
    let getAllProduct = await productSchema.find({});
    res.status(200).send({ getAllProduct });
  } catch (error) {
    res.status(501).send({ error: error });
  }
}
module.exports = getAllProductController;

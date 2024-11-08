const cartSchema = require("../model/cartSchema");

async function getAllCartController(req, res) {
  const { id } = req.params;
  try {
    let getAllCart = await cartSchema
      .find({ userId: id })
      .populate("productId");
    res.status(200).send({ getAllCart });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

module.exports = getAllCartController;

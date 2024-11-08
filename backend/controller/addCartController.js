const cartSchema = require("../model/cartSchema");

async function addCartController(req, res) {
  const { productId, userId, quantity } = req.body;
  let existingCart = await cartSchema.findOne({ productId });
  if (existingCart) {
    let updateCart = await cartSchema.findOneAndUpdate(
      { productId: productId },
      { $inc: { quantity: 1 } },
      {
        new: true,
      }
    );
    res.send({ updateCart });
  } else {
    let addCart = new cartSchema({
      productId,
      userId,
      quantity,
    });
    await addCart.save();
    res.send(addCart);
  }
}
module.exports = addCartController;

const cartSchema = require("../model/cartSchema");

async function quantityUpdate(req, res) {
  let { quentityInc, quantityDec } = req.query;
  let { id } = req.params;
  console.log(id, quentityInc);

  try {
    if (quentityInc == inc) {
      let quantityUpdate = await cartSchema.find(
        { _id: id }
        // { $inc: { quantity: 1 } },
        // { new: true }
      );
      res.send({ quantityUpdate });
    }
  } catch (error) {
    res.status(404).send({ error: error });
  }
}

module.exports = quantityUpdate;

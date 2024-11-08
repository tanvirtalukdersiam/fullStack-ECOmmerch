const categorySchema = require("../model/categorySchema");
const discountSchema = require("../model/discountSchema");
const userSchema = require("../model/userSchema");

async function createDiscount(req, res) {
  let { amount, category, user } = req.body;

  try {
    let existingUser = await userSchema.findOne({ _id: user });
    if (existingUser.role === "admin" || existingUser.role === "merchant") {
      let createDiscount = new discountSchema({
        amount,
        category,
        user,
      });
      await createDiscount.save();
      await categorySchema.findOneAndUpdate(
        { _id: category },
        { $set: { discount: amount } },
        { new: true }
      );
      res.status(200).send({ discount: createDiscount });
    } else {
      res.status(404).send({ error: "Sorry, You can't access " });
    }
  } catch (error) {
    res.status(501).send({ error: error });
  }
}

module.exports = createDiscount;

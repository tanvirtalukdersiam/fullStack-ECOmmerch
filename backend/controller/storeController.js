const storeSchema = require("../model/storeSchema");
const userSchema = require("../model/userSchema");

async function storeController(req, res) {
  let { name, userId, productId } = req.body;

  let existingUser = await userSchema.findOne({ _id: userId });
  if (existingUser) {
    if (existingUser.role === "admin" || existingUser.role === "merchant") {
      try {
        let store = new storeSchema({
          name,
          userId,
          productId,
        });
        await store.save();
        res.send({ message: "Store Created", store });
      } catch (error) {
        res.send({ error: error });
      }
    } else {
      res.send("Sorry,you cannot create this");
    }
  } else {
    res.send("User Not Found");
  }
}

module.exports = storeController;

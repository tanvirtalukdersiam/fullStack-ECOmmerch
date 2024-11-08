const storeSchema = require("../model/storeSchema");

async function getallStore(req, res) {
  try {
    let allStore = await storeSchema.find({});
    res.status(200).send({ allStore });
  } catch (error) {
    res.status(501).send({ error: error });
  }
}
module.exports = getallStore;

const categorySchema = require("../model/categorySchema");
const userSchema = require("../model/userSchema");
async function createCategoryController(req, res) {
  let { name, description } = req.body;

  try {
    let existingCategory = await categorySchema.find({ name });
    if (existingCategory.length > 0) {
      res.status(404).send({ Error: "Category name already exist" });
    } else {
      let createSchema = new categorySchema({
        name,
        description,
      });
      await createSchema.save();
      res.status(200).send(createSchema);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

async function createApproveController(req, res) {
  let { email, category, isActive } = req.body;

  try {
    let user = await userSchema.findOne({ email });

    if (user) {
      if (user.role == "admin") {
        if (isActive) {
          let categoryData = await categorySchema.findByIdAndUpdate(
            { _id: category },
            { isActive: true },
            { new: true }
          );
          res.send({ success: "Category Approved" }, categoryData);
        } else {
          let categoryData = await categorySchema.findByIdAndUpdate(
            { _id: category },
            { isActive: false },
            { new: true }
          );
          res.send({ success: "Category Approved" }, categoryData);
        }
      } else {
        return res.status(404).send({ error: "Only admin can access this" });
      }
    } else {
      return res.status(404).send({ error: "user not found" });
    }
    res.send(user);
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}
async function categoryDelete(req, res) {
  let { email, category } = req.body;

  let user = await userSchema.findOne({ email });

  try {
    if (user) {
      if (user.role == "admin") {
        let categoryDelete = await categorySchema.findOneAndDelete(
          {
            _id: category,
          },
          { new: true }
        );
        res.send(categoryDelete);
      }
    } else {
      return res.status(404).send({ error: "user not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function getAllCategoryController(req, res) {
  try {
    let category = await categorySchema.find({});
    res.status(200).send({ category });
  } catch (error) {
    res.status(404).send({ error: error });
  }
}

async function singleCategoryController(req, res) {
  const { id } = req.params;
  try {
    let category = await categorySchema.findOne({ id });
    res.status(200).send({ category });
  } catch (error) {
    res.status(404).send({ error: error });
  }
}
module.exports = {
  createCategoryController,
  createApproveController,
  categoryDelete,
  getAllCategoryController,
  singleCategoryController,
};

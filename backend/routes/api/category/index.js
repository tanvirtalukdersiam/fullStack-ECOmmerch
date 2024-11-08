const express = require("express");
const {
  createCategoryController,
  createApproveController,
  categoryDelete,
  getAllCategoryController,
  singleCategoryController,
} = require("../../../controller/createCategoryController");
const router = express.Router();

router.post("/createCategory", createCategoryController);
router.post("/categoryApprove", createApproveController);
router.post("/categoryDelete", categoryDelete);
router.get("/allCategory", getAllCategoryController);
router.get("/singleCategory/:id", singleCategoryController);

module.exports = router;

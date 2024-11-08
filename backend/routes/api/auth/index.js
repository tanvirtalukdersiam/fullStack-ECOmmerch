const express = require("express");
const {
  registrationController,
  loginController,
  otpVerifyController,
  forgetPassword,
  changePasswordController,
  allUserController,
  updateUserController,
  updateRoleController,
} = require("../../../controller/authController");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/login", loginController);
router.post("/otpverify", otpVerifyController);
router.post("/forgetPassword", forgetPassword);
router.post("/changePassword", changePasswordController);
router.get("/allUser", allUserController);
router.post("/updateUser", updateUserController);
router.post("/updateRole", updateRoleController);

module.exports = router;

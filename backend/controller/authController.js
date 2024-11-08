const emailValidation = require("../helpers/emailValidation");
const sendOtpEmail = require("../helpers/sendOtpEmail");
const userSchema = require("../model/userSchema");
const bcrypt = require("bcrypt");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
const forgetPasswordEmail = require("../helpers/forgetPasswordEmail");
async function registrationController(req, res) {
  let { name, email, password, phone, avatar } = req.body;
  let exitingUser = await userSchema.find({ email });
  if (!name || !email || !password) {
    return res.send({ error: "Invalid Credential" });
  } else if (!emailValidation(email)) {
    return res.send({ error: "Please send a valid email" });
  } else if (exitingUser.length > 0) {
    return res.send({ error: "Email already registered" });
  } else if (password.length < 8) {
    return res.send({ error: "Please input 8 digit password " });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.send({ error: err });
      } else {
        let user = new userSchema({
          name,
          email,
          password: hash,
          phone,
          avatar,
        });
        const generator1 = aleaRNGFactory(Date.now());
        let generator = generator1.uInt32();
        let randomOtp = generator.toString().substring(1, 5);

        try {
          await user.save();
          sendOtpEmail(email, name, randomOtp);
          await userSchema.findOneAndUpdate(
            { email },
            { $set: { otp: randomOtp } },
            { new: true }
          );
          res.send(user);
        } catch (error) {
          res.send(error);
        }
      }
    });
  }
}

async function loginController(req, res) {
  let { email, password } = req.body;
  let exitingUser = await userSchema.find({ email });
  if (exitingUser.length > 0) {
    bcrypt.compare(password, exitingUser[0].password, function (err, result) {
      if (result) {
        res
          .status(200)
          .send({ success: "Login Successful", user: exitingUser[0] });
      } else {
        res.status(404).send({ error: "Login Failed" });
      }
    });
  } else {
    res.status(404).send({ error: "Login Failed" });
  }
}

async function otpVerifyController(req, res) {
  let { email, otp } = req.body;

  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser.length > 0) {
      if (existingUser[0].otp == otp) {
        let updateVerifyOtp = await userSchema.findOneAndUpdate(
          { email },
          { emailVerified: "true", otp: "" }
        );
        res.status(200).send("Email Verified");
      } else {
        return res.status(404).send("Otp not match");
      }
    } else {
      return res.status(404).send("Email not found");
    }
  } catch (error) {
    res.send({ error: error });
  }
  res.send("Otp bltaci");
}

async function forgetPassword(req, res) {
  let { email } = req.body;
  let existingUser = await userSchema.find({ email });
  if (existingUser.length > 0) {
    var token = jwt.sign({ email }, "mern");

    let setToken = await userSchema.findOneAndUpdate(
      { email },
      { token: token },
      { new: true }
    );
    forgetPasswordEmail(email, token);
  } else {
    return res.status(404).send({ error: "Email not found" });
  }

  res.send(existingUser);
}

async function changePasswordController(req, res) {
  let { email, newPassword } = req.body;
  let { token } = req.headers;
  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser.length > 0) {
      jwt.verify(token, "mern", function (err, decoded) {
        if (err) {
          return res.status(404).send({ error: "Email not found" });
        } else {
          if (decoded.email == email) {
            bcrypt.hash(newPassword, 10, async function (err, hash) {
              let changePassword = await userSchema.findOneAndUpdate(
                { email },
                { password: hash },
                { new: true }
              );
              res.send(changePassword);
            });
          }
        }
      });
    } else {
      return res.status(404).send({ error: "Email not found" });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function allUserController(req, res) {
  let users = await userSchema.find({});
  res.send(users);
}

async function updateUserController(req, res) {
  let { email, name } = req.body;
  try {
    let user = await userSchema.findOneAndUpdate(
      { email },
      { name },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(404).send({ error: error });
  }
}
async function updateRoleController(req, res) {
  let { email, role } = req.body;
  try {
    let existingUser = await userSchema.find({ email });
    if (existingUser[0].role == "admin") {
      let user = await userSchema.findOneAndUpdate(
        { email },
        { role },
        { new: true }
      );
      res.send(user);
    } else {
      res.send({ error: "Only Admin can change it" });
    }
  } catch (error) {
    res.status(404).send({ error: error });
  }
}

module.exports = {
  registrationController,
  loginController,
  otpVerifyController,
  forgetPassword,
  changePasswordController,
  allUserController,
  updateUserController,
  updateRoleController,
};

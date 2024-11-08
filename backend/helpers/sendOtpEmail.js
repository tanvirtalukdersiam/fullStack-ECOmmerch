const nodemailer = require("nodemailer");

async function sendOtpEmail(email, name, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Please verify your email",
    html: `<body style="font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif"><img alt=oreby src=https://i.ibb.co/Lg7dSTp/Logo.png><h4 style=font-size:24px>Hi ${name}</h4><b style=font-size:20px>Your verification code is ${otp}.</b><p style=font-size:18px>Enter this code in our [website or app] to activate your [customer portal] account.<p style=font-size:16px>We’re glad you’re here!<p style=font-size:16px>The Oreby team`, // html body
  });
}

module.exports = sendOtpEmail;

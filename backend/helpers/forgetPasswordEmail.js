const nodemailer = require("nodemailer");
async function forgetPasswordEmail(email, token) {
  let link = `http://localhost:5173/changePassword/${token}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL, // sender address
    to: email, // list of receivers
    subject: "Please change  your password", // Subject line

    html: `<a href=https://imgbb.com/ ><img src=https://i.ibb.co/Wv6tcQp/forrget.jpg style=height:200px></a><p style="font-size:18px;font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif">hello<p style="font-size:16px;font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif"><p style="font-size:18px;font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif">We have sent you this email in response to your request to reset your password on company name.<p style="font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;font-size:18px">To reset your password, please follow the link below:</p><a href =${link} style=" text-decoration: none; font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;background:#000;color:#f0f8ff;padding:10px;display:inline-block">Change Password</a><br><br><a href=https://imgbb.com/ ><img src=https://i.ibb.co/FBGsf8t/Logo.png alt=Logo border=0></a><p style=font-size:16px>The Oreby team`, // html body
  });
}

module.exports = forgetPasswordEmail;

const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const e = require('express');

dotenv.config();

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "rajatlovescoding@gmail.com",
      pass: "vkrz rcrn nyge dily",
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);

  var mailOptions = {
    from: "rajatlovescoding@gmail.com",
    to: email,
    subject: "File Sharing App by Rajat Kumar Thakur",
    text: "Hello, This is a test email from File Sharing App by Rajat Kumar Thakur",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
});

module.exports = { sendEmail };
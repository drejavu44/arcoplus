const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/", (req, res) => {
  res.send(`Hello there PORT ${PORT}`);
});

app.post("/send-email", (req, res) => {
  const { to, subject, text, name, phone, message } = req.body;

  const mailOptions = {
    from: "arcoplusph@gmail.com",
    to,
    subject,
    text,
    html:`<p><b>This is to test the html field in mail options. Here are the values:\n name: ${name}, phone: ${phone}, message: ${message}, email: ${to}</b></p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

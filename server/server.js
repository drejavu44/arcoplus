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
  const { email, subject, name, phone, message } = req.body;

  const mailOptions = {
    from: "arcoplusph@gmail.com",
    to : email,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <p style="font-size: 16px;"><b>Hello ${name},</b></p>
        <p style="font-size: 16px;">We wanted to inform you that we've received your request and now have your information ready:</p>
        <ul>
          <li style="font-size: 16px;"><b>Name:</b> ${name}</li>
          <li style="font-size: 16px;"><b>Phone:</b> ${phone}</li>
          <li style="font-size: 16px;"><b>Message:</b> ${message}</li>
          <li style="font-size: 16px;"><b>Email:</b> ${email}</li>
        </ul>
        <p style="font-size: 16px;">Please wait for us as we will contact you shortly.</p>
      </div>
    `
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

app.post("/application/send-email", (req, res) => {
  const { email, name, phone, jobPosition, resumeUrl } = req.body;

  const mailOptions = {
    from: "arcoplusph@gmail.com",
    to : email,
    subject: "New Application Received",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <p style="font-size: 16px;"><b>Hello ${name},</b></p>
        <p style="font-size: 16px;">We wanted to inform you that we've received your request and now have your information ready:</p>
        <ul>
          <li style="font-size: 16px;"><b>Name:</b> ${name}</li>
          <li style="font-size: 16px;"><b>Phone:</b> ${phone}</li>
          <li style="font-size: 16px;"><b>Job Position:</b> ${jobPosition}</li>
          <li style="font-size: 16px;"><b>Email:</b> ${email}</li>
          <li style="font-size: 16px;"><b>Resume:</b> <a href="${resumeUrl}">${name}'s resume</a></li>
        </ul>
        <p style="font-size: 16px;">Please wait for us as we will contact you shortly.</p>
      </div>
    `
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

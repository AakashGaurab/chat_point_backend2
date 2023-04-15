const connection = require("./config/db.js");
const mongoose = require("mongoose");
const express = require("express");
const { user } = require("./routes/user");
const { admin } = require("./routes/admin");
const { logger } = require("./middleware/logger.js");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const {passport} = require("./google.outh");



app.use(express.json());
app.use(cors({ origin: "*" }));

/* ****************************Email Part ***************************************** */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vipin4147@gmail.com",
    pass: process.env.App_Password,
  },
});

let loggerTouse = (req, res, next) => {
  logger.log("info", `A ${req.method} request is made on url:${req.url}`);
  if(req.method!="GET"){
    let email = req.body.email || req.user.email || vipin;

    let mailOptions = {
      from: "vipin4147@gmail.com",
      to: email,
      subject: "Email from Chat Point",
      text: "info" + " " + `A ${req.method} request is made on url:${req.url}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("email sent successfully");
      }
    });
  }
  next();
};

/* ************************************************************************************* */

app.get("/",(req,res)=>{
  res.json("Welcome to Backend Side Chat-Point");
})
app.use(loggerTouse);
app.use("/admin", admin);
app.use("/user", user);

/* *************************************google oauth*************************************** */



app.get('/auth/google',passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' ,session:false}),function(req, res) {
    res.redirect("https://stellar-blini-b6e6e0.netlify.app/entry.html")
  });


 /*  ******************************************************************************** */



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

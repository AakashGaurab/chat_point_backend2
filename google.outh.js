
const userModel = require("./Models/user_model");

const cors = require("cors");




const passport = require("passport");
//const { v4: uuidv4 } = require('uuid');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "573107347042-ptgrj9v6g5fcoden848gpivrql1h2fe0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3500/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    await userModel.insertMany([{name:profile._json.name,email:profile._json.email,password:"123"}]);
    return cb(null, "user");
  }
));


module.exports={passport};
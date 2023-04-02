const jwt = require("jsonwebtoken");

require("dotenv").config();

const { createClient } = require("redis");

const myredis = createClient({
  url: process.env.REDIS_URL,
});

myredis.on("error", (err) => console.log("Redis Client Error", err));

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  await myredis.connect();

  const red_token = await myredis.get("token");
  await myredis.disconnect();
  if (!token) {
    console.log("access denied");
    res.send("Please login first");
  } else {
    if (token == red_token) {
      res.send("please login again");
    } else {
      const user = jwt.verify(token, process.env.JWT);
      const { userId } = user;

      req.user = userId;
      next();
    }
  }
};

module.exports = {
  authenticate,
};

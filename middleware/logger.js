const winston = require("winston");
const { MongoDB } = require("winston-mongodb");

const logger = winston.createLogger({
  level: "error",
  transports: [
    new MongoDB({
      db: process.env.mongoUrl,
      collection: "errors",
      options: { useUnifiedTopology: true },
    }),
  ],
});

module.exports = { logger };

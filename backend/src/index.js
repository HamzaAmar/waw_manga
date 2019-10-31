require("dotenv/config");
const server = require("./createServer");
const DB = require("./db");

const { FRONTEND_URL } = process.env;

server.start(
  {
    cors: {
      credentials: true,
      origin: FRONTEND_URL
    }
  },
  deets => {
    console.log(deets);
    console.log(`you are connected to the port ${deets.port}`);
  }
);

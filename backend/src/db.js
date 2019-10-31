require("dotenv/config");
const { Prisma } = require("prisma-binding");

const { PRISMA_ENDPOINT, PRISMA_SECRET } = process.env;

const db = new Prisma({
  typeDefs: __dirname + "/generated/schema.graphql",
  endpoint: PRISMA_ENDPOINT,
  secret: PRISMA_SECRET
});

module.exports = db;

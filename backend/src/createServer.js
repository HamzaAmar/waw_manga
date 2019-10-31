const { GraphQLServer } = require("graphql-yoga");
const Query = require("./query");
const Mutation = require("./mutation");
const DB = require("./db");

const server = new GraphQLServer({
  typeDefs: __dirname + "/generated/schema.graphql",
  resolvers: {
    Query,
    Mutation
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db
  })
});

module.exports = server;

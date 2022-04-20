const { join } = require('path');
const { ApolloServer } = require('apollo-server');
const { loadTypedefsSync } = require('@graphql-tools/load');                    // graphql-tools' module
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');    // graphql-tools' module
const GraphQLDateTime = require('graphql-type-datetime');

// Load from local file
const sources = loadTypedefsSync(join(__dirname, './typeDefs.gql'), {
    loaders: [
        new GraphQLFileLoader()         // One of the possible loaders https://www.graphql-tools.com/docs/api/interfaces/utils_src.Loader
    ]
});

// Get the source with all the documents indicated in the .gql
const typeDefs = sources.map(source => source.document)

// A map of functions to populate data for individual schema fields
const resolvers = {
  Query: {},
};

const server = new ApolloServer({
  typeDefs,                 // Document or documents which represent your server's GraphQL schema
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor iniciado en ${url}`);
});

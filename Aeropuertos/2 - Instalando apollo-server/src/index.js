const { ApolloServer, gql } = require('apollo-server');
// ApolloServer     Allow us creating HTTP server to expose GraphQL
// gql              Add remarked syntax

// GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// How to resolve the previous queries === Response to return
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port:process.env.PORT}).then(({ url }) => {
  console.log(`Servidor iniciado en ${url}`);
});
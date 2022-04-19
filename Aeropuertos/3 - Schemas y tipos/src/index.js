const { ApolloServer, gql } = require('apollo-server');

// We have defined the schema in a separated .gql file, but we aren't using yet in this module
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor iniciado en ${url}`);
});

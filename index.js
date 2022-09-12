import { ApolloServer } from 'apollo-server';
import { resolvers } from './src/resolvers.js';
import { typeDefs } from './src/schema.js';


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log('server is up on: ' + url);
});
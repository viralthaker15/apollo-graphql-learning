import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/schema.js';
import resolvers from './src/resolvers/index.js';
import { categories, products, reviews } from './assets/db.js';

const server = new ApolloServer({
  typeDefs, resolvers,
  context: { products, categories, reviews }
});

server.listen().then(({ url }) => {
  console.log('server is up on: ' + url);
});
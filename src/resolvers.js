import { categories, products } from '../assets/warehouse.js';

/* Resolvers: Methods which returns the Values
   of the types defined in typeDefs */
export const resolvers = {
  Query: {
    products: () => products,
    product: (parent, args, context) => products.find((product) => product.id === args?.id),
    categories: () => categories,
    category: (parent, args, context) => categories.find((category) => category.id === args?.id)
  },

  Category: {
    products: (parent, args, context) => products.filter((product) => product.categoryID === parent.id)
  },

  Product: {
    categories: (parent, args, context) => categories.filter((category) => category.id === parent.categoryID)
  }
};
import { gql } from 'apollo-server';

/* Type definitions: Schemas 
  [similar like typescript in which we provide types ] */
export const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: String): Product
    categories: [Category!]!
    category(id: String): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryID: ID!
    categories: [Category!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

const Query = {
  products: (parent, args, { products }) => products,
  product: (parent, args, { products }) => products.find((product) => product.id === args?.id),
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => categories.find((category) => category.id === args?.id)
};

export default Query;
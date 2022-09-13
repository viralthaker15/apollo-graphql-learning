
const Category = {
  products: (parent, args, { products }) => products.filter((product) => product.categoryID === parent.id)
};

export default Category;
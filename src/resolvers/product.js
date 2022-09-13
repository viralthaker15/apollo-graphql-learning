
const Product = {
  categories: ({ categoryID }, args, { categories }) => categories.filter((category) => category.id === categoryID),
  reviews: ({ id }, args, { reviews }) => reviews.filter((review) => review.productId === id)
};

export default Product;
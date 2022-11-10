const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const products = await response.json();
    return products;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const product = await response.json();
    return product;
  } catch (err) {
    console.log(err);
    return err;
  }
};

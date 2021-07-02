import axios from 'axios';

const url = '/api/products';

/***
 * @router  GET: /api/products
 * @desc    Get all products
 * @access  Public
 * ***/
export const getProducts = (source) => {
  try {
    return axios.get(url, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error from api ${error.message}`);
    }
    return error;
  }
};

/***
 * @router  GET: api/products/:id
 * @desc    Get single product
 * @access  Public
 * ***/
export const getProduct = (productId, source) => {
  try {
    return axios.get(`${url}/${productId}`, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error from api${error.message}`);
    }
    return error;
  }
};

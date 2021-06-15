import axios from 'axios';

const url = '/api/products';

/***
 * @router  GET: api/products
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
      console.log(`Error ${error.message}`);
    }
    return error;
  }
};
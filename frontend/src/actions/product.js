import * as api from '../api/product';
import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_FAIL } from '../constant/types';

export const getProducts = (source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getProducts(source);
      // const { data } = await axios.get('/api/products', {
      //   cancelToken: source.token,
      // });

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getProduct = (productId, source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getProduct(productId, source);
      // const { data } = await axios.get(`/api/products/${productId}`, {
      //   cancelToken: source.token,
      // });

      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log('Error from product action:', error.response);
      dispatch({
        type: PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

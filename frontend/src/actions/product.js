import * as api from '../api/product';
import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_ERROR } from '../constant/types';

export const getProducts = (source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getProducts(source);
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: {
          msg: error.response.data.message,
          status: error.response.status,
        },
      });
    }
  };
};

export const getProduct = (productId, source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getProduct(productId, source);
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: {
          msg: error.response.data.message,
          status: error.response.status,
        },
      });
    }
  };
};

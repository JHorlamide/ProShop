import * as api from '../api/productApi';
import { setAlert } from './alertAction';
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
} from '../constants/productConstant';

export const getProducts = (source) => {
  return async (dispatch) => {
    try {
      const { data } = await api.getProducts(source);
      console.log('products', data);
      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log('Error from product action:', error.response);
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: PRODUCT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
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
      if (error.response && error.response.data.message) {
        console.log('Error from product action:', error.response);
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: PRODUCT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();
      const { data } = await api.deleteProduct(productId, userInfo.token);

      dispatch({type: PRODUCT_DELETE_SUCCESS});

      dispatch(setAlert(data.message, 'success'));
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log('Error from product action:', error.response);
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: PRODUCT_DELETE_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    }
  };
};

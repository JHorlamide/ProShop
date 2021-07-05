import * as api from '../api/orderApi';
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_USER_REQUEST,
  ORDER_USER_SUCCESS,
  ORDER_USER_FAIL,
} from '../constants/orderConstant';
import { setAlert } from './alertAction';

/* Create Order */
export const createOrder = (orderData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.createOrder(orderData, userInfo.token);

      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: ORDER_CREATE_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/* Order Details */
export const getOrderDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.getOrderDetails(id, userInfo.token);

      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: ORDER_DETAILS_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/* Order Pay */
export const payOrder = (orderId, paymentResult) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_PAY_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.payOrder(
        orderId,
        userInfo.token,
        paymentResult
      );

      console.log(data);

      dispatch({ type: ORDER_PAY_SUCCESS });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: ORDER_PAY_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/* Reset Order Pay */
export const orderPayReset = () => {
  return async (dispatch) => dispatch({ type: ORDER_PAY_RESET });
};

/* User Order */
export const getUserOrder = (orderId, paymentResult) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_USER_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.getUserOrder(userInfo.token);

      dispatch({ type: ORDER_USER_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: ORDER_USER_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

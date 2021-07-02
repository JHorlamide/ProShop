import * as api from '../api/orderApi';
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstant';
import { setAlert } from './alertAction';

export const createOrder = (orderData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      console.log(userInfo.token);

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

import * as api from '../api/userApi';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constant/userConstant';

export const userLogin = (loginData) => {
  return async (dispatch) => {
    try {
      const { data } = await api.userLogin(loginData);
      dispatch({ type: USER_LOGIN_REQUEST });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      localStorage.setItem('token', JSON.stringify(data));
    } catch (error) {
      if (error.response.data.message) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

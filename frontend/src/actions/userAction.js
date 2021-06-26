import * as api from '../api/userApi';
import { setAlert } from './alertAction';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstant';

export const userLogin = (loginData) => {
  return async (dispatch) => {
    try {
      const { data } = await api.loginUser(loginData);
      dispatch({ type: USER_LOGIN_REQUEST });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    }
  };
};

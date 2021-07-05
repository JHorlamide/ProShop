import * as api from '../api/userApi';
import { setAlert } from './alertAction';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
} from '../constants/userConstant';
import { ORDER_USER_RESET } from '../constants/orderConstant';
import { CART_RESET } from '../constants/cartConstant';

/* Register action */
export const register = (registerData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { data } = await api.register(registerData);

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/* Login action */
export const login = (loginData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const { data } = await api.login(loginData);

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/* Logout action */
export const logoutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: ORDER_USER_RESET });
    dispatch({ type: USER_LIST_RESET });
  };
};

/*** Get User Profile ***/
export const getUserProfile = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.getUserProfile(id, userInfo.token);

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_DETAILS_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/*** Update User Profile ***/
export const updateUserProfile = (profileData) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.updateUserProfile(profileData, userInfo.token);

      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_UPDATE_PROFILE_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/*** Get users ***/
export const getUserList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_LIST_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.userList(userInfo.token);

      dispatch({ type: USER_LIST_SUCCESS, payload: data });
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_LIST_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

/*** Get users ***/
export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const { data } = await api.deleteUser(id, userInfo.token);

      dispatch({ type: USER_DELETE_SUCCESS, payload: data });

      dispatch(setAlert(data.message, 'success'));
    } catch (error) {
      if (error.response && error.response.data.message) {
        dispatch(setAlert(error.response.data.message, 'danger'));
        dispatch({
          type: USER_DELETE_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

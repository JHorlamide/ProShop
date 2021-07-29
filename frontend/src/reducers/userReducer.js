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
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  ADMIN_USER_DETAILS_REQUEST,
  ADMIN_USER_DETAILS_SUCCESS,
  ADMIN_USER_DETAILS_FAIL,
  ADMIN_USER_UPDATE_REQUEST,
  ADMIN_USER_UPDATE_SUCCESS,
  ADMIN_USER_UPDATE_FAIL,
  ADMIN_USER_UPDATE_RESET,
} from '../constants/userConstant';

/* User Register Reducer */
export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

/* User Login Reducer */
export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

/*  User Logout Reducer*/
export const logoutUserReducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

/*  User Details Reducer */
export const userProfileReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

/* User Profile Update Reducer*/
export const userUpdateProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

/*  User Details Reducer */
export const userDetailsReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ADMIN_USER_DETAILS_SUCCESS:
      return { loading: false, user: payload };
    case ADMIN_USER_DETAILS_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

/* User List Reducer | Admin User Only */
export const userListReducer = (state = { users: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };

    case USER_LIST_SUCCESS:
      return { loading: false, users: payload };

    case USER_LIST_FAIL:
      return { loading: false, error: payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

/* User Delete Reducer | Admin User Only */
export const userDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DELETE_REQUEST:
      return { loading: true };

    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };

    case USER_DELETE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

/*  Admin Get User By Id Only */
export const adminUserUpdateReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_USER_UPDATE_REQUEST:
      return { loading: true };

    case ADMIN_USER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case ADMIN_USER_UPDATE_FAIL:
      return { loading: false, error: payload };

    case ADMIN_USER_UPDATE_RESET:
      return { user: {} };

    default:
      return state;
  }
};

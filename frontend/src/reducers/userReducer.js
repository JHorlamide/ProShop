import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOADED_REQUEST,
  USER_LOADED,
} from '../constant/userConstant';

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

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const getAuthUserReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED_REQUEST:
      return { loading: true };
    case USER_LOADED:
      return { loading: false, userInfon: payload };
    default:
      return state;
  }
};

// const userReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_LOADED:
//       return {
//         ...state,
//         user: payload,
//         loading: false,
//       };

//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         ...payload,
//         loading: false,
//       };

//     case REGISTER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };

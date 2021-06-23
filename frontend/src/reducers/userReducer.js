import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED } from '../constant';

const initialState = {
  token: null,
  user: null,
  loading: true,
  error: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;

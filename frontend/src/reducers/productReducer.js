import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
} from '../constants/productConstant';

export const productListReducer = (
  state = { products: [], product: {}, loading: true, error: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };

    case PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (
  state = { loading: false, success: false, error: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_DELETE_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

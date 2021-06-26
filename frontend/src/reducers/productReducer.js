import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_FAIL } from '../constants/productConstant';

const initialState = {
  product: {},
  products: [],
  loading: true,
  error: {},
};

export const productReducer = (state = initialState, action) => {
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
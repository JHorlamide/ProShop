import { GET_PRODUCTS, GET_PRODUCT } from '../constant/types';

const initialState = {
  product: {},
  products: [],
  loading: true,
  error: {},
};

const productReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default productReducer;

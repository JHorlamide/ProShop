import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/types';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;

      const existItem = state.cartItems.find((cartItem) => {
        return (cartItem.product = item.product);
      });

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            return (cartItem.product = existItem.product ? item : cartItem);
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {};
    default:
      return state;
  }
};

export default cartReducer;

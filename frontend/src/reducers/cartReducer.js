import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/cartConstant';

const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;

      const existItem = state.cartItems.find((cartItem) => {
        return cartItem.product === item.product;
      });

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) => {
            return cartItem.product === existItem.product ? item : cartItem;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.product !== payload.product;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;

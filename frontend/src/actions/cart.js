import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/types';
import axios from 'axios';

export const addToCart = (id, qty, source) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`, {
        cancelToken: source.token,
      });

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          qty,
        },
      });

      /* store cart item in localStorage */
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      dispatch({
        type: CART_REMOVE_ITEM,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

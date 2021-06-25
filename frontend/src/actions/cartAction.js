import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/cartConstant';
import axios from 'axios';

export const addToCart = (id, qty, source) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`, source);

      console.log('From cart action', data);

      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          numberInStock: data.numberInStock,
          qty,
        },
      });

      /* store cart item in localStorage */
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFromCart = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: {
        product: id,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

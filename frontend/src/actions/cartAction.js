import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstant';

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

export const saveShippingAddress = (data) => {
  return async (dispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });

    console.log(data);

    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
};

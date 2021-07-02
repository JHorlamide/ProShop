import axios from 'axios';

const url = '/api/orders';

/* Create Order Reducer */
export const createOrder = (orderData, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(url, orderData, config);
};

/* Order  Details*/
export const orderDetails = (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(`${url}/${id}`, config);
};

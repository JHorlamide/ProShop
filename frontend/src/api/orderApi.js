import axios from 'axios';

const url = '/api/orders';

export const createOrder = (orderData, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(url, orderData, config);
};

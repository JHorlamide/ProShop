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
export const getOrderDetails = (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`${url}/${id}`, config);
};

/* Pay Order */
export const payOrder = (orderId, token, paymentResult) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.put(`${url}/${orderId}/pay`, paymentResult, config);
};

/* Pay Order */
export const getUserOrder = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`${url}/myorders`, config);
};

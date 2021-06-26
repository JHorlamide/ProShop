import axios from 'axios';

export const registerUer = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

export const loginUser = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

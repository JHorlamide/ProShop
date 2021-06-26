import axios from 'axios';

export const registerUer = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

export const login = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

export const register = (registerData) => {
  return axios.post('/api/users/register', registerData);
};

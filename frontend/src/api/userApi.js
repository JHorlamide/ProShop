import axios from 'axios';

export const userLogin = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

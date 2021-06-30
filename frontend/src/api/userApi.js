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

export const getUserProfile = (id, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`/api/users/${id}`, config);
};

export const updateUserProfile = (profileData, token) => {
   const config = {
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
     },
   };

  return axios.put('/api/users/profile', profileData, config);
};

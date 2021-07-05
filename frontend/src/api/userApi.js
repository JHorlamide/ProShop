import axios from 'axios';

/* Register user */
export const registerUer = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

/* User authentication */
export const login = (loginData) => {
  return axios.post('/api/auth/login', loginData);
};

/* Register new user */
export const register = (registerData) => {
  return axios.post('/api/users/register', registerData);
};

/* Get user profile */
export const getUserProfile = (id, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`/api/users/${id}`, config);
};

/* Update user */
export const updateUserProfile = (profileData, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.put('/api/users/profile', profileData, config);
};

/* Get users | Admin Users Only*/
export const userList = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get('/api/users', config);
};

/* Delete User | Admin User Only */
export const deleteUser = (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.delete(`/api/users/${id}`, config);
};

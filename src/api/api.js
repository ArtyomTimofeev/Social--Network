import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'df64f2ff-f9bf-4d2c-851b-941296ed5d30',
  },
});

const API = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage} & count=${pageSize}`)
      .then((response) => response.data);
  },

  deleteUserSubscription(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },

  addUserSubscription(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  getAuthMe() {
    return instance.get('auth/me').then((response) => response.data);
  },
};

export default API;

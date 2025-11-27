import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const userAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/users`),
  getById: (id) => axios.get(`${API_BASE_URL}/users/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/users`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/users/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/users/${id}`)
};

export const itemAPI = {
  getAll: () => axios.get(`${API_BASE_URL}/items`),
  getById: (id) => axios.get(`${API_BASE_URL}/items/${id}`),
  create: (data) => axios.post(`${API_BASE_URL}/items`, data),
  update: (id, data) => axios.put(`${API_BASE_URL}/items/${id}`, data),
  delete: (id) => axios.delete(`${API_BASE_URL}/items/${id}`)
};

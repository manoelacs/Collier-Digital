import axios from 'axios';

export const TOKEN_KEY = "__collier_digital__";

export const getAuthenticationToken = () => localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = getAuthenticationToken()
  if (token) {
    const { headers } = config;
    return {
      ...config,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return config;
});

export default api;
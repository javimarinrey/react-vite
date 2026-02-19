import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tu-api.com/api', // Cambia esto por tu URL real
  timeout: 8000, // 8 segundos de espera antes de dar error
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token automáticamente a cada petición
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
);

export default api;
import axios from "axios";

export const apiFetch = axios.create({
    baseURL: 'https://pruebareactjs.test-class.com/Api', // URL base de la api
  });
  
  // Interceptor para agregar el token a cada solicitud
  apiFetch.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
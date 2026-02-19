import axios from 'axios';
import {handleApiError} from "../utils/errorHandler.ts";

// Instancia para Autenticación
export const authApi = axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_URL,
    timeout: 5000,
});

// Instancia para Datos de la App (con interceptor de token)
export const dataApi = axios.create({
    baseURL: import.meta.env.VITE_DATA_API_URL,
    timeout: 8000,
});

// Interceptor para la API de datos
dataApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

dataApi.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = handleApiError(error);

        if (error.response?.status === 401) {
            // Opcional: limpiar localStorage y redirigir
            localStorage.clear();
            window.location.href = '/login?error=session_expired';
        }

        // Devolvemos el error ya procesado para que el componente lo use
        return Promise.reject({ ...error, friendlyMessage: message });
    }
);

// Instancia para un servicio externo (sin token o con API Key diferente)
export const externalApi = axios.create({
    baseURL: import.meta.env.VITE_EXTERNAL_SERVICE_URL,
    headers: { 'X-Custom-Header': 'ValorEspecial' }
});
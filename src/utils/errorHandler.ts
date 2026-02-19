import axios from 'axios';

export const handleApiError = (error: any): string => {
    // 1. Error de Cancelación (AbortController)
    if (axios.isCancel(error)) {
        return 'Petición cancelada por el usuario.';
    }

    // 2. El servidor respondió con un error (4xx, 5xx)
    if (error.response) {
        const status = error.response.status;
        const msg = error.response.data?.message;

        switch (status) {
            case 400: return msg || 'Datos inválidos.';
            case 401: return 'Sesión expirada. Por favor, ingresa de nuevo.';
            case 403: return 'No tienes permiso para realizar esta acción.';
            case 404: return 'El recurso solicitado no existe.';
            case 500: return 'Error interno del servidor. Intenta más tarde.';
            default: return msg || 'Ocurrió un error inesperado.';
        }
    }

    // 3. La petición se hizo pero no hubo respuesta (Red/Timeout)
    if (error.request) {
        if (error.code === 'ECONNABORTED') {
            return 'El servidor está tardando demasiado en responder.';
        }
        return 'No se pudo conectar con el servidor. Revisa tu internet.';
    }

    // 4. Algo pasó al configurar la petición
    return error.message || 'Error al procesar la solicitud.';
};
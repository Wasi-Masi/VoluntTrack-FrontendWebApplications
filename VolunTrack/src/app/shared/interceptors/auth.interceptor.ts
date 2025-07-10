// src/app/shared/interceptors/auth.interceptor.ts

import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('jwt_token');

  // AÑADE ESTE CONSOLE.LOG AQUÍ
  console.log('AuthInterceptor: Token encontrado en localStorage:', token ? 'Sí' : 'No');
  if (token) {
    console.log('AuthInterceptor: Token (primeros 20 caracteres):', token.substring(0, 20) + '...'); // Muestra parte del token para evitar imprimir el token completo en consola
  } else {
    console.warn('AuthInterceptor: No hay token JWT en localStorage. La solicitud se enviará sin autenticación.');
  }


  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    // No hagas nada si no hay token, la solicitud continuará sin el encabezado Authorization.
    // Esto es correcto si hay endpoints públicos que no requieren autenticación.
  }

  return next(request);
};

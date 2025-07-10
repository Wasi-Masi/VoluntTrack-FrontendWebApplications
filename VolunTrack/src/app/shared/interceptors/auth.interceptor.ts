// src/app/shared/interceptors/auth.interceptor.ts

import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('jwt_token');

  // AÑADE ESTE CONSOLE.LOG AQUÍ
  if (token) {
  } else {
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

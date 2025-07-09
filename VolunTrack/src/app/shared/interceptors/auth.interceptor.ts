// src/app/shared/interceptors/auth.interceptor.ts

import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('jwt_token');
  console.log('--- AuthInterceptor Funcional Activo ---');
  console.log('Petición interceptada:', request.url);

  if (token) {
    console.log('Token encontrado en localStorage.');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Encabezado Authorization añadido a la petición.');
  } else {
    console.log('Token NO encontrado en localStorage.');
  }

  return next(request);
};

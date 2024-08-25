import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export function AuthInterceptor(
  req: any,
  next: any
): Observable<HttpEvent<unknown>> {
  const cloneReq = req.clone({
    setHeaders: {
      auth: '53453245435345.53453534553535345.35435',
    },
  });
  return next(cloneReq);
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = window.sessionStorage.getItem('auth-token');

    if (token) {
      const cloneReq = req.clone({
        setHeaders: {
          auth: token,
        },
      });
      return next.handle(cloneReq);
    }

    return next.handle(req);
  }
}

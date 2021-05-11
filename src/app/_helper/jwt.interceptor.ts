/**
 * @description: Can use to JWT authentication. We can pass bearer token inside headers at one place
 * @author: windya yasas
 */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

   /**
     * send authenticated request.
     * set bearer token to request header.
     * @param request - The outgoing request object to handle
     * @param next - The next interceptor in the chain, or the backend if no interceptors remain in the chain
     * @returns - An observable of the event stream.
     */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}

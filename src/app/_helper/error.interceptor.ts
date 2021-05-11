/**
 * @class: JwtInterceptor
 * Purpose is this module is to handle HTTP request
 * @description: call the API’s by providing the token in the Authorization header as a bearer token
 * @author: windya yasas
 */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }
  /**
  * send authenticated request.
  * set bearer token to request header.
  * @param request - The outgoing request object to handle
  * @param next - The next interceptor in the chain, or the backend if no interceptors remain in the chain
  * @returns - An observable of the event stream.
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      // Handle 'timeout over' error
      if (err instanceof TimeoutError) {
        return throwError('Request timeout');
      }

      const error = err;
      return throwError(error);
    }))
  }
}

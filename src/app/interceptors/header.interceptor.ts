import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('HEADER Interceptor', request.url);

    request = request.clone({
      setHeaders: {
        token: 'asdfasdfasdfasdfadsf',
        token2: 'asdfasdfasdfasdfadsf',
        token3: 'asdfasdfasdfasdfadsf',
        token4: 'asdfasdfasdfasdfadsf',
      },
    });

    console.log(request.headers);

    return next.handle(request);
  }
}

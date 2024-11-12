import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

// functional interceptor
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('loggingInterceptor');
  console.log(req.urlWithParams);
  return next(req)
    .pipe(tap((event) => {
      // console.log(event);
      if (event.type == HttpEventType.Response) {
        console.log(event.body);
      }
    }));
};

// class-based interceptor
/*
class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('LoggingInterceptor - intercept');
    return next.handle(req);
  }
}

export const loggingInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true };
*/
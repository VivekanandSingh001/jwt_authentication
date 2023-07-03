import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class VerifyjwtInterceptor implements HttpInterceptor {
  storedValue: any;
  constructor(private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.storedValue = localStorage.getItem('token');
    console.log("interceptor", this.storedValue)
    if (this.authService.isLoggedIn()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.storedValue // Basic or Bearer
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authService.logout();
            this.router.navigate(['/login']);
          } else if (err.status === 404) {
            this.authService.logout();
            this.router.navigate(['/login']);
          } else if (err.status === 500) {

          } else {

          }
        }
        return throwError(errorMsg);
      })
    );
  }
}

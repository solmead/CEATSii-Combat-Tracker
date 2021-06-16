import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '@/services';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    ////debugger;
    console.error(error);
    let customError: string = "";
    if (error.error) {
      customError = error.status === 400 ? error.error : error.statusText
    }
    return throwError(customError || 'Server error');
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@/services';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    debugger;
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.securityStamp) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.securityStamp}`
        }
      });
    }

    return next.handle(request);
  }
}

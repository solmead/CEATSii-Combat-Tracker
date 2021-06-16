import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' } )
export class ApiPathInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      var bUrl = '';//this.getBaseUrl();
        var rUrl = req.url;
        ////debugger;
      const apiReq = req.clone({ url: bUrl + `/${rUrl}` });
        return next.handle(apiReq);
    }

    //getBaseUrl() {
    //    var str = (<any>document.getElementsByTagName('baseapi')[0]).attributes[0].nodeValue;
    //    //alert(str);
    //    return str;
    //}


}

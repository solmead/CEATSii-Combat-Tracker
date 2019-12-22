import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var bUrl = this.getBaseUrl();
        var rUrl = req.url;
        //debugger;
        const apiReq = req.clone({ url: this.getBaseUrl() + `/${req.url}` });
        return next.handle(apiReq);
    }

    getBaseUrl() {
        return (<any>document.getElementsByTagName('baseapi')[0]).attributes[0].nodeValue;
    }


}
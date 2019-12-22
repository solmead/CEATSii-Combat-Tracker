var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var APIInterceptor = /** @class */ (function () {
    function APIInterceptor() {
    }
    APIInterceptor.prototype.intercept = function (req, next) {
        var bUrl = this.getBaseUrl();
        var rUrl = req.url;
        //debugger;
        var apiReq = req.clone({ url: this.getBaseUrl() + ("/" + req.url) });
        return next.handle(apiReq);
    };
    APIInterceptor.prototype.getBaseUrl = function () {
        var str = document.getElementsByTagName('baseapi')[0].attributes[0].nodeValue;
        alert(str);
        return str;
    };
    APIInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], APIInterceptor);
    return APIInterceptor;
}());
export { APIInterceptor };
//# sourceMappingURL=APIIntercepter.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SampleDataRepository } from '../../repositories/SampleData.repository';
var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(sampleRepo) {
        var _this = this;
        this.sampleRepo = sampleRepo;
        this.forecasts = new Array();
        sampleRepo.weatherForecasts().subscribe(function (response) { return _this.forecasts = response; });
    }
    FetchDataComponent = __decorate([
        Component({
            selector: 'fetchdata',
            templateUrl: './fetchdata.component.html'
        }),
        __metadata("design:paramtypes", [SampleDataRepository])
    ], FetchDataComponent);
    return FetchDataComponent;
}());
export { FetchDataComponent };
//# sourceMappingURL=fetchdata.component.js.map
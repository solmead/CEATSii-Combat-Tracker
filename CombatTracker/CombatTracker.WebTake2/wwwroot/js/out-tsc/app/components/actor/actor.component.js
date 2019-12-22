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
import { Router, ActivatedRoute } from '@angular/router';
import { EncounterService } from "../../services/Encounter.service";
var ActorComponent = /** @class */ (function () {
    /** actor ctor */
    function ActorComponent(route, router, encounterService) {
        this.route = route;
        this.router = router;
        this.encounterService = encounterService;
    }
    ActorComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.encounterService.selectActor(id);
    };
    ActorComponent = __decorate([
        Component({
            selector: 'app-actor',
            templateUrl: './actor.component.html',
            styleUrls: ['./actor.component.css']
        })
        /** actor component*/
        ,
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EncounterService])
    ], ActorComponent);
    return ActorComponent;
}());
export { ActorComponent };
//# sourceMappingURL=actor.component.js.map
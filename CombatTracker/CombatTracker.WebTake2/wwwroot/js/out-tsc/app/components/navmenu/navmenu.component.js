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
import { EncounterService } from "../../services/Encounter.service";
import * as Enums from '../../entities/EnumDefinitions';
var GameType = Enums.EnumDefinitions.GameType;
import { EnumEx } from "../../entities/EnumEx";
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(gameView) {
        this.gameView = gameView;
    }
    Object.defineProperty(NavMenuComponent.prototype, "gameTypes", {
        get: function () {
            var lst = EnumEx.getNamesAndValues(GameType);
            return lst;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.onChange = function (newValue) {
        this.gameView.setGameType(newValue);
    };
    Object.defineProperty(NavMenuComponent.prototype, "systemSettings", {
        get: function () {
            return this.gameView.systemSettings;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.setGameType = function (value) {
        this.gameView.setGameType(value);
    };
    Object.defineProperty(NavMenuComponent.prototype, "selectedActor", {
        //set gameSystem(gType: string) {
        //    var gt = <GameType><any>GameType[<any>gType];
        //    this.gameView.gameSystem = gt;
        //}
        get: function () {
            return this.gameView.selectedActor;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent.prototype.selectActor = function (actor) {
        this.gameView.selectedActor = actor;
    };
    Object.defineProperty(NavMenuComponent.prototype, "actors", {
        get: function () {
            return this.gameView.actors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavMenuComponent.prototype, "game", {
        get: function () {
            return this.gameView.currentGame;
        },
        enumerable: true,
        configurable: true
    });
    NavMenuComponent = __decorate([
        Component({
            selector: 'nav-menu',
            templateUrl: './navmenu.component.html',
            styleUrls: ['./navmenu.component.css']
        }),
        __metadata("design:paramtypes", [EncounterService])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
export { NavMenuComponent };
//# sourceMappingURL=navmenu.component.js.map
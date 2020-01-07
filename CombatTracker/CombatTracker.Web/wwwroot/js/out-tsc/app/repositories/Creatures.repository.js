var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
var CreaturesRepository = /** @class */ (function () {
    function CreaturesRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Creature/getCreatures?gameType=${gameType}
        //public getCreatures = (gameType: GameType, callback: (data: Creature[])=>void) : void => {
        //	this.getCreaturesObserve(gameType).subscribe(response => callback(response));
        //}
        this.getCreaturesAsync = function (gameType) {
            return new Promise(function (resolve, reject) {
                _this.getCreatures(gameType)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCreatures = function (gameType) {
            var _Url = "api/Creature/getCreatures?gameType=" + gameType;
            return _this._httpClient.get(_Url)
                .pipe(catchError(_this.handleError));
        };
        // get: api/Creature/getCreature?id=${id}
        //public getCreature = (id: number, callback: (data: Creature)=>void) : void => {
        //	this.getCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.getCreatureAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getCreature(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCreature = function (id) {
            var _Url = "api/Creature/getCreature?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(catchError(_this.handleError));
        };
        // post: api/Creature/saveCreature
        //public saveCreature = (creature: Creature, callback: (data: Creature)=>void) : void => {
        //	this.saveCreatureObserve(creature).subscribe(response => callback(response));
        //}
        this.saveCreatureAsync = function (creature) {
            return new Promise(function (resolve, reject) {
                _this.saveCreature(creature)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveCreature = function (creature) {
            var _Url = "api/Creature/saveCreature";
            return _this._httpClient.post(_Url, creature)
                .pipe(catchError(_this.handleError));
        };
        // delete: api/Creature/deleteCreature?id=${id}
        //public deleteCreature = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCreatureAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteCreature(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteCreature = function (id) {
            var _Url = "api/Creature/deleteCreature?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(catchError(_this.handleError));
        };
    }
    // Utility
    CreaturesRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return Observable.throw(customError || 'Server error');
    };
    CreaturesRepository = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CreaturesRepository);
    return CreaturesRepository;
}());
export { CreaturesRepository };
//# sourceMappingURL=Creatures.repository.js.map
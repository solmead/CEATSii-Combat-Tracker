(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule, getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.shared.module */ "./ClientApp/app/app.shared.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/app.component */ "./ClientApp/app/components/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_APIIntercepter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/APIIntercepter */ "./ClientApp/app/services/APIIntercepter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_shared_module__WEBPACK_IMPORTED_MODULE_3__["AppModuleShared"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _services_APIIntercepter__WEBPACK_IMPORTED_MODULE_6__["APIInterceptor"],
                    multi: true,
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}


/***/ }),

/***/ "./ClientApp/app/app.shared.module.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/app.shared.module.ts ***!
  \********************************************/
/*! exports provided: AppModuleShared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleShared", function() { return AppModuleShared; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "./ClientApp/app/components/app/app.component.ts");
/* harmony import */ var _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navmenu/navmenu.component */ "./ClientApp/app/components/navmenu/navmenu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/game.component */ "./ClientApp/app/components/game/game.component.ts");
/* harmony import */ var _components_game_game_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game/game-edit.component */ "./ClientApp/app/components/game/game-edit.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/character/character.component */ "./ClientApp/app/components/character/character.component.ts");
/* harmony import */ var _components_character_character_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/character/character-edit.component */ "./ClientApp/app/components/character/character-edit.component.ts");
/* harmony import */ var _components_creature_creature_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/creature/creature.component */ "./ClientApp/app/components/creature/creature.component.ts");
/* harmony import */ var _components_creature_creature_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/creature/creature-edit.component */ "./ClientApp/app/components/creature/creature-edit.component.ts");
/* harmony import */ var _components_armor_armor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/armor/armor.component */ "./ClientApp/app/components/armor/armor.component.ts");
/* harmony import */ var _components_armor_armor_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/armor/armor-edit.component */ "./ClientApp/app/components/armor/armor-edit.component.ts");
/* harmony import */ var _components_attack_attack_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/attack/attack.component */ "./ClientApp/app/components/attack/attack.component.ts");
/* harmony import */ var _components_attack_attack_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/attack/attack-edit.component */ "./ClientApp/app/components/attack/attack-edit.component.ts");
/* harmony import */ var _components_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/weapon/weapon.component */ "./ClientApp/app/components/weapon/weapon.component.ts");
/* harmony import */ var _components_weapon_weapon_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/weapon/weapon-edit.component */ "./ClientApp/app/components/weapon/weapon-edit.component.ts");
/* harmony import */ var _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/actor/actor.component */ "./ClientApp/app/components/actor/actor.component.ts");
/* harmony import */ var _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/encounter/encounter.component */ "./ClientApp/app/components/encounter/encounter.component.ts");
/* harmony import */ var _elements_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./elements/modal/modal.component */ "./ClientApp/app/elements/modal/modal.component.ts");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./elements/modal/modal.service */ "./ClientApp/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories_repositories_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./repositories/repositories.module */ "./ClientApp/app/repositories/repositories.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/services.module */ "./ClientApp/app/services/services.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'games', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"] },
    { path: 'character', component: _components_character_character_component__WEBPACK_IMPORTED_MODULE_11__["CharacterComponent"] },
    { path: 'creature', component: _components_creature_creature_component__WEBPACK_IMPORTED_MODULE_13__["CreatureComponent"] },
    { path: 'encounter/:id', component: _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_22__["EncounterComponent"] },
    { path: 'actor/:id', component: _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_21__["ActorComponent"] },
    { path: '**', redirectTo: 'games' }
];
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"]
            ],
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
                _components_game_game_edit_component__WEBPACK_IMPORTED_MODULE_10__["GameEditComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_character_character_edit_component__WEBPACK_IMPORTED_MODULE_12__["CharacterEditComponent"],
                _components_character_character_component__WEBPACK_IMPORTED_MODULE_11__["CharacterComponent"],
                _components_creature_creature_component__WEBPACK_IMPORTED_MODULE_13__["CreatureComponent"],
                _components_creature_creature_edit_component__WEBPACK_IMPORTED_MODULE_14__["CreatureEditComponent"],
                _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_21__["ActorComponent"],
                _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_22__["EncounterComponent"],
                _components_armor_armor_component__WEBPACK_IMPORTED_MODULE_15__["ArmorComponent"],
                _components_armor_armor_edit_component__WEBPACK_IMPORTED_MODULE_16__["ArmorEditComponent"],
                _components_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_19__["WeaponComponent"],
                _components_weapon_weapon_edit_component__WEBPACK_IMPORTED_MODULE_20__["WeaponEditComponent"],
                _elements_modal_modal_component__WEBPACK_IMPORTED_MODULE_23__["ModalComponent"],
                _components_attack_attack_component__WEBPACK_IMPORTED_MODULE_17__["AttackComponent"],
                _components_attack_attack_edit_component__WEBPACK_IMPORTED_MODULE_18__["AttackEditComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _repositories_repositories_module__WEBPACK_IMPORTED_MODULE_25__["RepositoriesModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_26__["ServicesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ]
        })
    ], AppModuleShared);
    return AppModuleShared;
}());



/***/ }),

/***/ "./ClientApp/app/components/actor/actor.component.css":
/*!************************************************************!*\
  !*** ./ClientApp/app/components/actor/actor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWN0b3IvYWN0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./ClientApp/app/components/actor/actor.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/actor/actor.component.ts ***!
  \***********************************************************/
/*! exports provided: ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return ActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    ActorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
    ]; };
    ActorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor',
            template: __webpack_require__(/*! raw-loader!./actor.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/actor/actor.component.html"),
            styles: [__webpack_require__(/*! ./actor.component.css */ "./ClientApp/app/components/actor/actor.component.css")]
        })
        /** actor component*/
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
    ], ActorComponent);
    return ActorComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/app/app.component.css":
/*!********************************************************!*\
  !*** ./ClientApp/app/components/app/app.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.body-content {\r\n    border: 1px solid #aaa;\r\n    border-radius: 5px;\r\n    background: white;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin: 5px 5px 5px 0;\r\n    padding: 10px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20%;\r\n    bottom: 0;\r\n    width: 79.5%;\r\n    overflow: auto;\r\n}\r\n\r\n.menu-column {\r\n    padding: 0;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 20%;\r\n}\r\n\r\n.apparea {\r\n    background: #222 !important;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n        border: 1px solid #aaa;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    .menu-column {\r\n        padding:0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0FBQ2I7O0FBSUE7SUFDSSw2RkFBNkY7SUFDN0Y7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uYm9keS1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDc5LjUlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5tZW51LWNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLmFwcGFyZWEge1xyXG4gICAgYmFja2dyb3VuZDogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gICAgLmJvZHktY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtY29sdW1uIHtcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/components/app/app.component.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/components/app/app.component.ts ***!
  \*******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/armor/armor-edit.component.css":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/armor/armor-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-area {\r\n    width: 220px;\r\n}\r\n\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hcmVhIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oYWxmLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IC5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWFyZWEge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhLW51bWJlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./ClientApp/app/components/armor/armor-edit.component.ts":
/*!****************************************************************!*\
  !*** ./ClientApp/app/components/armor/armor-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ArmorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorEditComponent", function() { return ArmorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Armor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Armor */ "./ClientApp/app/entities/Armor.ts");
/* harmony import */ var _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Combat.repository */ "./ClientApp/app/repositories/Combat.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArmorEditComponent = /** @class */ (function () {
    /** ArmorEdit ctor */
    function ArmorEditComponent(combatRepo) {
        this.combatRepo = combatRepo;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ArmorEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.armor);
    };
    ArmorEditComponent.ctorParameters = function () { return [
        { type: _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Armor__WEBPACK_IMPORTED_MODULE_1__["Armor"])
    ], ArmorEditComponent.prototype, "armor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArmorEditComponent.prototype, "onDelete", void 0);
    ArmorEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armor-edit',
            template: __webpack_require__(/*! raw-loader!./armor-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/armor/armor-edit.component.html"),
            styles: [__webpack_require__(/*! ./armor-edit.component.css */ "./ClientApp/app/components/armor/armor-edit.component.css")]
        })
        /** ArmorEdit component*/
        ,
        __metadata("design:paramtypes", [_repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"]])
    ], ArmorEditComponent);
    return ArmorEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/armor/armor.component.css":
/*!************************************************************!*\
  !*** ./ClientApp/app/components/armor/armor.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./ClientApp/app/components/armor/armor.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/components/armor/armor.component.ts ***!
  \***********************************************************/
/*! exports provided: ArmorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorComponent", function() { return ArmorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Armor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Armor */ "./ClientApp/app/entities/Armor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmorComponent = /** @class */ (function () {
    /** Armor ctor */
    function ArmorComponent() {
        this.armors = new Array();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ArmorComponent.prototype.ngOnChanges = function () {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    };
    ArmorComponent.prototype.ngOnInit = function () {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    };
    ArmorComponent.prototype.newArmor = function () {
        var arm = new _entities_Armor__WEBPACK_IMPORTED_MODULE_1__["Armor"]();
        arm.characterId = this.charId;
        this.selectedArmor = arm;
        this.armors.push(arm);
        //this.cnt = this.cnt + 1;
    };
    ArmorComponent.prototype.onArmorDeleted = function (armor) {
        this.onDelete.emit(armor);
    };
    //onArmorSaved(armor: Armor) {
    //    var arm = this.armors.find((a) => a.id == armor.id);
    //    if (arm == null) {
    //        this.armors.push(armor);
    //    }
    //}
    ArmorComponent.prototype.selectArmor = function (armor) {
        this.selectedArmor = armor;
    };
    Object.defineProperty(ArmorComponent.prototype, "selectedArmorId", {
        get: function () {
            if (this.selectedArmor != null) {
                return this.selectedArmor.type;
            }
            return 0;
        },
        set: function (value) {
            this.selectedArmor = this.armors.find(function (a) { return a.type == value; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ArmorComponent.prototype, "armors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ArmorComponent.prototype, "charId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArmorComponent.prototype, "onDelete", void 0);
    ArmorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armor',
            template: __webpack_require__(/*! raw-loader!./armor.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/armor/armor.component.html"),
            styles: [__webpack_require__(/*! ./armor.component.css */ "./ClientApp/app/components/armor/armor.component.css")]
        })
        /** Armor component*/
        ,
        __metadata("design:paramtypes", [])
    ], ArmorComponent);
    return ArmorComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/attack/attack-edit.component.css":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/attack/attack-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-area {\r\n    width: 220px;\r\n}\r\n\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hdHRhY2svYXR0YWNrLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2F0dGFjay9hdHRhY2stZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYXJlYSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFsZi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1sYWJlbCB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIHdpZHRoOiA3NnB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIHdpZHRoOiAxMDhweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYXJlYS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/components/attack/attack-edit.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/attack/attack-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: AttackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackEditComponent", function() { return AttackEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Attack */ "./ClientApp/app/entities/Attack.ts");
/* harmony import */ var _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Combat.repository */ "./ClientApp/app/repositories/Combat.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _services_References_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/References.service */ "./ClientApp/app/services/References.service.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
/* harmony import */ var _entities_Weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/Weapon */ "./ClientApp/app/entities/Weapon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].GameType;

var AttackEditComponent = /** @class */ (function () {
    /** ArmorEdit ctor */
    function AttackEditComponent(combatRepo, encounterService, referencesService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(AttackEditComponent.prototype, "weaponTypeId", {
        get: function () {
            var _this = this;
            var at = this.referencesService.WeaponTypes.find(function (a) { return _this.attack.weaponUsed != null && a.name == _this.attack.weaponUsed.name; });
            if (at != null) {
                return at.id;
            }
            return null;
        },
        set: function (value) {
            var at = this.referencesService.WeaponTypes.find(function (a) { return a.id == value; });
            if (this.attack.weaponUsed == null) {
                this.attack.weaponUsed = new _entities_Weapon__WEBPACK_IMPORTED_MODULE_6__["Weapon"]();
            }
            this.attack.weaponUsed.name = at.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttackEditComponent.prototype, "isRolemaster", {
        get: function () {
            return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
        },
        enumerable: true,
        configurable: true
    });
    AttackEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.attack);
    };
    AttackEditComponent.ctorParameters = function () { return [
        { type: _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
        { type: _services_References_service__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Attack__WEBPACK_IMPORTED_MODULE_1__["Attack"])
    ], AttackEditComponent.prototype, "attack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AttackEditComponent.prototype, "onDelete", void 0);
    AttackEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attack-edit',
            template: __webpack_require__(/*! raw-loader!./attack-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/attack/attack-edit.component.html"),
            styles: [__webpack_require__(/*! ./attack-edit.component.css */ "./ClientApp/app/components/attack/attack-edit.component.css")]
        })
        /** AttackEdit component*/
        ,
        __metadata("design:paramtypes", [_repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
            _services_References_service__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"]])
    ], AttackEditComponent);
    return AttackEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/attack/attack.component.css":
/*!**************************************************************!*\
  !*** ./ClientApp/app/components/attack/attack.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hdHRhY2svYXR0YWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2F0dGFjay9hdHRhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/components/attack/attack.component.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/attack/attack.component.ts ***!
  \*************************************************************/
/*! exports provided: AttackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackComponent", function() { return AttackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Attack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Attack */ "./ClientApp/app/entities/Attack.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttackComponent = /** @class */ (function () {
    /** Armor ctor */
    function AttackComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cnt = 1;
    }
    AttackComponent.prototype.ngOnChanges = function () {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    };
    AttackComponent.prototype.ngOnInit = function () {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    };
    AttackComponent.prototype.newAttack = function () {
        var attack = new _entities_Attack__WEBPACK_IMPORTED_MODULE_1__["Attack"]();
        //weapon.id = this.cnt;
        attack.name = "Attack " + this.cnt;
        attack.creatureOn_ID = this.creatureId;
        this.selectedAttack = attack;
        this.attacks.push(attack);
        this.cnt = this.cnt + 1;
    };
    AttackComponent.prototype.onAttackDeleted = function (attack) {
        this.onDelete.emit(attack);
    };
    AttackComponent.prototype.selectAttack = function (attack) {
        this.selectedAttack = attack;
    };
    Object.defineProperty(AttackComponent.prototype, "selectedAttackId", {
        get: function () {
            if (this.selectedAttack != null) {
                return this.selectedAttack.id;
            }
            return null;
        },
        set: function (value) {
            this.selectedAttack = this.attacks.find(function (a) { return a.id == value; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AttackComponent.prototype, "attacks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AttackComponent.prototype, "creatureId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AttackComponent.prototype, "onDelete", void 0);
    AttackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attack',
            template: __webpack_require__(/*! raw-loader!./attack.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/attack/attack.component.html"),
            styles: [__webpack_require__(/*! ./attack.component.css */ "./ClientApp/app/components/attack/attack.component.css")]
        })
        /** Attack component*/
        ,
        __metadata("design:paramtypes", [])
    ], AttackComponent);
    return AttackComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/character/character-edit.component.css":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/components/character/character-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    white-space: nowrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyL2NoYXJhY3Rlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./ClientApp/app/components/character/character-edit.component.ts":
/*!************************************************************************!*\
  !*** ./ClientApp/app/components/character/character-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return CharacterEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/modal/modal.service */ "./ClientApp/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Characters.repository */ "./ClientApp/app/repositories/Characters.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _entities_Character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/Character */ "./ClientApp/app/entities/Character.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].GameType;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].CharacterType;
var CharacterEditComponent = /** @class */ (function () {
    function CharacterEditComponent(encounterService, charRepo, modalService) {
        var _this = this;
        this.encounterService = encounterService;
        this.charRepo = charRepo;
        this.modalService = modalService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveCharacter = function () { return __awaiter(_this, void 0, void 0, function () {
            var g;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.character.gameType = this.encounterService.systemSettings.gameSystem;
                        return [4 /*yield*/, this.charRepo.saveCharacterAsync(this.character)];
                    case 1:
                        g = _a.sent();
                        if (!this.character.id) {
                            this.character.id = g.id;
                        }
                        this.onSave.emit(this.character);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    Object.defineProperty(CharacterEditComponent.prototype, "isRolemaster", {
        get: function () {
            return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterEditComponent.prototype, "hasCurrentGame", {
        get: function () {
            return (this.encounterService.currentGame != null);
        },
        enumerable: true,
        configurable: true
    });
    CharacterEditComponent.prototype.onWeaponDeleted = function (weapon) {
        var index = this.character.weapons.indexOf(weapon);
        if (index !== -1) {
            this.character.weapons.splice(index, 1);
        }
    };
    CharacterEditComponent.prototype.onArmorDeleted = function (armor) {
        var index = this.character.armors.indexOf(armor);
        if (index !== -1) {
            this.character.armors.splice(index, 1);
        }
    };
    CharacterEditComponent.prototype.addToEncounter = function () {
        if (this.character.type == CharacterType.PC) {
            this.modalService.open('custom-modal-2');
        }
        else {
            this.encounterService.addCharacterToEncounter(this.character);
        }
    };
    CharacterEditComponent.prototype.closeEdit = function () {
        //this.charView.refresh();
    };
    CharacterEditComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    CharacterEditComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
        this.encounterService.addCharacterToEncounter(this.character, this.rolledInit);
    };
    CharacterEditComponent.ctorParameters = function () { return [
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
        { type: _repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"] },
        { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Character__WEBPACK_IMPORTED_MODULE_4__["Character"])
    ], CharacterEditComponent.prototype, "character", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CharacterEditComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CharacterEditComponent.prototype, "onSave", void 0);
    CharacterEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-edit',
            template: __webpack_require__(/*! raw-loader!./character-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/character/character-edit.component.html"),
            styles: [__webpack_require__(/*! ./character-edit.component.css */ "./ClientApp/app/components/character/character-edit.component.css")]
        })
        /** characterDetail component*/
        ,
        __metadata("design:paramtypes", [_services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
            _repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"],
            _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], CharacterEditComponent);
    return CharacterEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/character/character.component.css":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/character/character.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksWUFBWTtJQUNoQiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAvKndpZHRoOiAxMjBweDsqL1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/components/character/character.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/character/character.component.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/Characters.repository */ "./ClientApp/app/repositories/Characters.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _entities_Character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/Character */ "./ClientApp/app/entities/Character.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CharacterComponent = /** @class */ (function () {
    /** character ctor */
    function CharacterComponent(characterRepo, encounterService) {
        var _this = this;
        this.characterRepo = characterRepo;
        this.encounterService = encounterService;
        this.characters = new Array();
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.characterRepo.getCharactersAsync(this.encounterService.systemSettings.gameSystem)];
                    case 1:
                        _a.characters = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.selectCharacter = function (charId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.characterRepo.getCharacterAsync(charId)];
                    case 1:
                        _a.selectedCharacter = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onCharacterSave = function (character) {
            _this.refresh();
        };
        this.onCharacterDeleted = function (character) {
            _this.refresh();
        };
        this.refresh();
    }
    CharacterComponent.prototype.ngOnChanges = function () {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            }
            else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    };
    CharacterComponent.prototype.ngOnInit = function () {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            }
            else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    };
    CharacterComponent.prototype.newCharacter = function () {
        this.selectedCharacter = new _entities_Character__WEBPACK_IMPORTED_MODULE_3__["Character"]();
    };
    CharacterComponent.ctorParameters = function () { return [
        { type: _repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_1__["CharactersRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
    ]; };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character',
            template: __webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./ClientApp/app/components/character/character.component.css")]
        })
        /** character component*/
        ,
        __metadata("design:paramtypes", [_repositories_Characters_repository__WEBPACK_IMPORTED_MODULE_1__["CharactersRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/creature/creature-edit.component.css":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/components/creature/creature-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    white-space: nowrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jcmVhdHVyZS9jcmVhdHVyZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NyZWF0dXJlL2NyZWF0dXJlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./ClientApp/app/components/creature/creature-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/components/creature/creature-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureEditComponent", function() { return CreatureEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/modal/modal.service */ "./ClientApp/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Creatures.repository */ "./ClientApp/app/repositories/Creatures.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _services_References_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/References.service */ "./ClientApp/app/services/References.service.ts");
/* harmony import */ var _entities_Creature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/Creature */ "./ClientApp/app/entities/Creature.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].GameType;
var CreatureEditComponent = /** @class */ (function () {
    function CreatureEditComponent(encounterService, creatureRepo, modalService, referencesService) {
        var _this = this;
        this.encounterService = encounterService;
        this.creatureRepo = creatureRepo;
        this.modalService = modalService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveCreature = function () { return __awaiter(_this, void 0, void 0, function () {
            var g;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.creature.gameType = this.encounterService.systemSettings.gameSystem;
                        return [4 /*yield*/, this.creatureRepo.saveCreatureAsync(this.creature)];
                    case 1:
                        g = _a.sent();
                        if (!this.creature.id) {
                            this.creature.id = g.id;
                        }
                        this.onSave.emit(this.creature);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    Object.defineProperty(CreatureEditComponent.prototype, "isRolemaster", {
        get: function () {
            return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatureEditComponent.prototype, "hasCurrentGame", {
        get: function () {
            return (this.encounterService.currentGame != null);
        },
        enumerable: true,
        configurable: true
    });
    CreatureEditComponent.prototype.onAttackDeleted = function (attack) {
        var index = this.creature.attacks.indexOf(attack);
        if (index !== -1) {
            this.creature.attacks.splice(index, 1);
        }
    };
    CreatureEditComponent.prototype.addToEncounter = function () {
        this.encounterService.addCreatureToEncounter(this.creature);
    };
    CreatureEditComponent.prototype.closeEdit = function () {
        //this.charView.refresh();
    };
    CreatureEditComponent.ctorParameters = function () { return [
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
        { type: _repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"] },
        { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] },
        { type: _services_References_service__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Creature__WEBPACK_IMPORTED_MODULE_5__["Creature"])
    ], CreatureEditComponent.prototype, "creature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreatureEditComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreatureEditComponent.prototype, "onSave", void 0);
    CreatureEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creature-edit',
            template: __webpack_require__(/*! raw-loader!./creature-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/creature/creature-edit.component.html"),
            styles: [__webpack_require__(/*! ./creature-edit.component.css */ "./ClientApp/app/components/creature/creature-edit.component.css")]
        })
        /** CreatureEdit component*/
        ,
        __metadata("design:paramtypes", [_services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
            _repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"],
            _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
            _services_References_service__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"]])
    ], CreatureEditComponent);
    return CreatureEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/creature/creature.component.css":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/creature/creature.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jcmVhdHVyZS9jcmVhdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NyZWF0dXJlL2NyZWF0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIC8qd2lkdGg6IDEyMHB4OyovXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./ClientApp/app/components/creature/creature.component.ts":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/components/creature/creature.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return CreatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../repositories/Creatures.repository */ "./ClientApp/app/repositories/Creatures.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _entities_Creature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/Creature */ "./ClientApp/app/entities/Creature.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CreatureComponent = /** @class */ (function () {
    /** character ctor */
    function CreatureComponent(creatureRepo, encounterService) {
        var _this = this;
        this.creatureRepo = creatureRepo;
        this.encounterService = encounterService;
        this.creatures = new Array();
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.creatureRepo.getCreaturesAsync(this.encounterService.systemSettings.gameSystem)];
                    case 1:
                        _a.creatures = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.selectCreature = function (charId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.creatureRepo.getCreatureAsync(charId)];
                    case 1:
                        _a.selectedCreature = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onCreatureSave = function (creature) {
            _this.refresh();
        };
        this.onCreatureDeleted = function (creature) {
            _this.refresh();
        };
        this.refresh();
    }
    CreatureComponent.prototype.ngOnChanges = function () {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            }
            else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    };
    CreatureComponent.prototype.ngOnInit = function () {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            }
            else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    };
    CreatureComponent.prototype.newCreature = function () {
        this.selectedCreature = new _entities_Creature__WEBPACK_IMPORTED_MODULE_3__["Creature"]();
    };
    CreatureComponent.ctorParameters = function () { return [
        { type: _repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_1__["CreaturesRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
    ]; };
    CreatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-creature',
            template: __webpack_require__(/*! raw-loader!./creature.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/creature/creature.component.html"),
            styles: [__webpack_require__(/*! ./creature.component.css */ "./ClientApp/app/components/creature/creature.component.css")]
        })
        /** creature component*/
        ,
        __metadata("design:paramtypes", [_repositories_Creatures_repository__WEBPACK_IMPORTED_MODULE_1__["CreaturesRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
    ], CreatureComponent);
    return CreatureComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/encounter/encounter.component.css":
/*!********************************************************************!*\
  !*** ./ClientApp/app/components/encounter/encounter.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZW5jb3VudGVyL2VuY291bnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./ClientApp/app/components/encounter/encounter.component.ts":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/encounter/encounter.component.ts ***!
  \*******************************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EncounterComponent = /** @class */ (function () {
    /** encounter ctor */
    function EncounterComponent() {
    }
    EncounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encounter',
            template: __webpack_require__(/*! raw-loader!./encounter.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/encounter/encounter.component.html"),
            styles: [__webpack_require__(/*! ./encounter.component.css */ "./ClientApp/app/components/encounter/encounter.component.css")]
        })
        /** encounter component*/
        ,
        __metadata("design:paramtypes", [])
    ], EncounterComponent);
    return EncounterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/game/game-edit.component.css":
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/game/game-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./ClientApp/app/components/game/game-edit.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/components/game/game-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return GameEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entities_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/Game */ "./ClientApp/app/entities/Game.ts");
/* harmony import */ var _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/Games.repository */ "./ClientApp/app/repositories/Games.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GameEditComponent = /** @class */ (function () {
    function GameEditComponent(router, gamesRepo, encounterService) {
        var _this = this;
        this.router = router;
        this.gamesRepo = gamesRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var g;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.game.id && this.encounterService.systemSettings != null) {
                            this.game.gameType = this.encounterService.systemSettings.gameSystem;
                        }
                        return [4 /*yield*/, this.gamesRepo.saveGameAsync(this.game)];
                    case 1:
                        g = _a.sent();
                        if (!this.game.id) {
                            this.game.id = g.id;
                        }
                        return [4 /*yield*/, this.encounterService.refresh()];
                    case 2:
                        _a.sent();
                        this.onSave.emit(this.game);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    GameEditComponent.prototype.closeEdit = function () {
        //this.gameView.refresh();
    };
    GameEditComponent.prototype.selectEncounter = function () {
        this.encounterService.currentGame = this.game;
        this.router.navigate(['/encounter', this.game.id]);
    };
    GameEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Game__WEBPACK_IMPORTED_MODULE_2__["Game"])
    ], GameEditComponent.prototype, "game", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameEditComponent.prototype, "onDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GameEditComponent.prototype, "onSave", void 0);
    GameEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-edit',
            template: __webpack_require__(/*! raw-loader!./game-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/game/game-edit.component.html"),
            styles: [__webpack_require__(/*! ./game-edit.component.css */ "./ClientApp/app/components/game/game-edit.component.css")]
        })
        /** GameEdit component*/
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]])
    ], GameEditComponent);
    return GameEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/game/game.component.css":
/*!**********************************************************!*\
  !*** ./ClientApp/app/components/game/game.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyp3aWR0aDogMTIwcHg7Ki9cclxufVxyXG5cclxuICAgIC5tYWluTGlzdCBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./ClientApp/app/components/game/game.component.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/game/game.component.ts ***!
  \*********************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Games.repository */ "./ClientApp/app/repositories/Games.repository.ts");
/* harmony import */ var _entities_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/Game */ "./ClientApp/app/entities/Game.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var GameComponent = /** @class */ (function () {
    /** character ctor */
    function GameComponent(gameRepo, encounterService) {
        var _this = this;
        this.gameRepo = gameRepo;
        this.encounterService = encounterService;
        this.games = new Array();
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.gameRepo.getGamesAsync(this.encounterService.systemSettings.gameSystem)];
                    case 1:
                        _a.games = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.selectGame = function (gameId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.gameRepo.getGameAsync(gameId)];
                    case 1:
                        _a.selectedGame = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.onGameSave = function (game) {
            _this.refresh();
        };
        this.onGameDeleted = function (game) {
            _this.refresh();
        };
        this.refresh();
    }
    GameComponent.prototype.ngOnChanges = function () {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            }
            else {
                this.selectGame(this.games[0].id);
            }
        }
    };
    GameComponent.prototype.ngOnInit = function () {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            }
            else {
                this.selectGame(this.games[0].id);
            }
        }
    };
    GameComponent.prototype.newGame = function () {
        var _game = new _entities_Game__WEBPACK_IMPORTED_MODULE_3__["Game"]();
        _game.gameType = this.encounterService.systemSettings.gameSystem;
        _game.gameTypeString = this.encounterService.systemSettings.gameSystemString;
        this.selectedGame = _game;
    };
    GameComponent.ctorParameters = function () { return [
        { type: _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__["EncounterService"] }
    ]; };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./ClientApp/app/components/game/game.component.css")]
        })
        /** Game component*/
        ,
        __metadata("design:paramtypes", [_repositories_Games_repository__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__["EncounterService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.name = "Angular! v" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.css":
/*!****************************************************************!*\
  !*** ./ClientApp/app/components/navmenu/navmenu.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli ul {\r\n    padding-left: 5px;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    /*position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;*/\r\n    z-index: 1;\r\n}\r\n\r\n.navbar li li {\r\n    font-size: 12px;\r\n}\r\n\r\n.navbar-inverse .navbar-nav > li a {\r\n    color: #9d9d9d;\r\n}\r\n\r\n.navbar-inverse .navbar-nav > li  a:hover,\r\n.navbar-inverse .navbar-nav > li  a:focus {\r\n    color: #fff;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-inverse .navbar-nav li.link-active > a,\r\n.navbar-inverse .navbar-nav li.link-active > a:hover,\r\n.navbar-inverse .navbar-nav li.link-active > a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        /*width: calc(25% - 20px);*/\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li li {\r\n        font-size: 12px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7O0FBRTFDO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLHlFQUF5RTs7QUFDekU7SUFDSTs7O2NBR1U7SUFDVixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBQ0E7OztJQUdJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksaUVBQWlFO0lBQ2pFO1FBQ0ksWUFBWTtRQUNaLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtREFBbUQ7UUFDbkQsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkgLmdseXBoaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cclxuXHJcbmxpIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xyXG4ubWFpbi1uYXYge1xyXG4gICAgLypwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7Ki9cclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLm5hdmJhciBsaSBsaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgYSB7XHJcbiAgICBjb2xvcjogIzlkOWQ5ZDtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSAgYTpob3ZlcixcclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhLFxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmhvdmVyLFxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xyXG4gICAgLm1haW4tbmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLyp3aWR0aDogY2FsYygyNSUgLSAyMHB4KTsqL1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgdWwge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBsaSBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBsaSBhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciBhIHtcclxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./ClientApp/app/components/navmenu/navmenu.component.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/components/navmenu/navmenu.component.ts ***!
  \***************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
/* harmony import */ var _entities_EnumEx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/EnumEx */ "./ClientApp/app/entities/EnumEx.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].GameType;

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(gameView) {
        this.gameView = gameView;
    }
    Object.defineProperty(NavMenuComponent.prototype, "gameTypes", {
        get: function () {
            var lst = _entities_EnumEx__WEBPACK_IMPORTED_MODULE_3__["EnumEx"].getNamesAndValues(GameType);
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
    NavMenuComponent.ctorParameters = function () { return [
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__["EncounterService"] }
    ]; };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-menu',
            template: __webpack_require__(/*! raw-loader!./navmenu.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./ClientApp/app/components/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Encounter_service__WEBPACK_IMPORTED_MODULE_1__["EncounterService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/weapon/weapon-edit.component.css":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/components/weapon/weapon-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-area {\r\n    width: 220px;\r\n}\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvd2VhcG9uL3dlYXBvbi1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hcmVhIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG4uZnVsbC1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGFsZi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmZ1bGwtcm93IC5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIHdpZHRoOiAxMDhweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYXJlYS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./ClientApp/app/components/weapon/weapon-edit.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/components/weapon/weapon-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: WeaponEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponEditComponent", function() { return WeaponEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Weapon */ "./ClientApp/app/entities/Weapon.ts");
/* harmony import */ var _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/Combat.repository */ "./ClientApp/app/repositories/Combat.repository.ts");
/* harmony import */ var _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__["EnumDefinitions"].GameType;
var WeaponEditComponent = /** @class */ (function () {
    /** ArmorEdit ctor */
    function WeaponEditComponent(combatRepo, encounterService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(WeaponEditComponent.prototype, "isRolemaster", {
        get: function () {
            return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
        },
        enumerable: true,
        configurable: true
    });
    WeaponEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.weapon);
    };
    WeaponEditComponent.ctorParameters = function () { return [
        { type: _repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] },
        { type: _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _entities_Weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"])
    ], WeaponEditComponent.prototype, "weapon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WeaponEditComponent.prototype, "onDelete", void 0);
    WeaponEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weapon-edit',
            template: __webpack_require__(/*! raw-loader!./weapon-edit.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/weapon/weapon-edit.component.html"),
            styles: [__webpack_require__(/*! ./weapon-edit.component.css */ "./ClientApp/app/components/weapon/weapon-edit.component.css")]
        })
        /** WeaponEdit component*/
        ,
        __metadata("design:paramtypes", [_repositories_Combat_repository__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"],
            _services_Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]])
    ], WeaponEditComponent);
    return WeaponEditComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/weapon/weapon.component.css":
/*!**************************************************************!*\
  !*** ./ClientApp/app/components/weapon/weapon.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./ClientApp/app/components/weapon/weapon.component.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/components/weapon/weapon.component.ts ***!
  \*************************************************************/
/*! exports provided: WeaponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponComponent", function() { return WeaponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_Weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/Weapon */ "./ClientApp/app/entities/Weapon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeaponComponent = /** @class */ (function () {
    /** Armor ctor */
    function WeaponComponent() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cnt = 1;
    }
    WeaponComponent.prototype.ngOnChanges = function () {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    };
    WeaponComponent.prototype.ngOnInit = function () {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    };
    WeaponComponent.prototype.newWeapon = function () {
        var weapon = new _entities_Weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
        //weapon.id = this.cnt;
        weapon.name = "Weapon " + this.cnt;
        weapon.characterId = this.charId;
        this.selectedWeapon = weapon;
        this.weapons.push(weapon);
        this.cnt = this.cnt + 1;
    };
    WeaponComponent.prototype.onWeaponDeleted = function (weapon) {
        this.onDelete.emit(weapon);
    };
    WeaponComponent.prototype.selectWeapon = function (weapon) {
        this.selectedWeapon = weapon;
    };
    Object.defineProperty(WeaponComponent.prototype, "selectedWeaponId", {
        get: function () {
            if (this.selectedWeapon != null) {
                return this.selectedWeapon.name;
            }
            return "";
        },
        set: function (value) {
            this.selectedWeapon = this.weapons.find(function (a) { return a.name == value; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WeaponComponent.prototype, "weapons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WeaponComponent.prototype, "charId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WeaponComponent.prototype, "onDelete", void 0);
    WeaponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weapon',
            template: __webpack_require__(/*! raw-loader!./weapon.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/components/weapon/weapon.component.html"),
            styles: [__webpack_require__(/*! ./weapon.component.css */ "./ClientApp/app/components/weapon/weapon.component.css")]
        })
        /** Weapon component*/
        ,
        __metadata("design:paramtypes", [])
    ], WeaponComponent);
    return WeaponComponent;
}());



/***/ }),

/***/ "./ClientApp/app/elements/modal/modal.component.css":
/*!**********************************************************!*\
  !*** ./ClientApp/app/elements/modal/modal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2VsZW1lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./ClientApp/app/elements/modal/modal.component.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/elements/modal/modal.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./ClientApp/app/elements/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    //private dialog: JQuery;
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = jquery__WEBPACK_IMPORTED_MODULE_1__(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        this.element.appendTo('body');
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        //this.dialog.dialog("open");
        this.element.show();
        this.element.children().show();
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('modal-open');
        this.openEvent.emit();
    };
    // close modal
    ModalComponent.prototype.close = function () {
        //this.dialog.dialog("close");
        this.element.hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('modal-open');
        this.closedEvent.emit();
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "openEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closedEvent", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/elements/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./ClientApp/app/elements/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./ClientApp/app/elements/modal/modal.service.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/elements/modal/modal.service.ts ***!
  \*******************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id == id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.find(function (x) { return x.id == id; });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.find(function (x) { return x.id == id; });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Armor.ts":
/*!*****************************************!*\
  !*** ./ClientApp/app/entities/Armor.ts ***!
  \*****************************************/
/*! exports provided: Armor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
var Armor = /** @class */ (function () {
    function Armor() {
    }
    return Armor;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Attack.ts":
/*!******************************************!*\
  !*** ./ClientApp/app/entities/Attack.ts ***!
  \******************************************/
/*! exports provided: Attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return Attack; });
var Attack = /** @class */ (function () {
    function Attack() {
    }
    return Attack;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Character.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/entities/Character.ts ***!
  \*********************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Creature.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/entities/Creature.ts ***!
  \********************************************/
/*! exports provided: Creature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return Creature; });
var Creature = /** @class */ (function () {
    function Creature() {
    }
    return Creature;
}());



/***/ }),

/***/ "./ClientApp/app/entities/EnumDefinitions.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/entities/EnumDefinitions.ts ***!
  \***************************************************/
/*! exports provided: EnumDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return EnumDefinitions; });
var EnumDefinitions;
(function (EnumDefinitions) {
    var ResponseEnum;
    (function (ResponseEnum) {
        ResponseEnum[ResponseEnum["ChooseNextAction"] = 0] = "ChooseNextAction";
        ResponseEnum[ResponseEnum["DisplayMessage"] = 1] = "DisplayMessage";
        ResponseEnum[ResponseEnum["AutoAdvance"] = 2] = "AutoAdvance";
    })(ResponseEnum = EnumDefinitions.ResponseEnum || (EnumDefinitions.ResponseEnum = {}));
    var GameType;
    (function (GameType) {
        GameType[GameType["RMSS"] = 0] = "RMSS";
        GameType[GameType["DnD5e"] = 1] = "DnD5e";
    })(GameType = EnumDefinitions.GameType || (EnumDefinitions.GameType = {}));
    var CriticalLevels;
    (function (CriticalLevels) {
        CriticalLevels[CriticalLevels["Same"] = 0] = "Same";
        CriticalLevels[CriticalLevels["A"] = 1] = "A";
        CriticalLevels[CriticalLevels["B"] = 2] = "B";
        CriticalLevels[CriticalLevels["C"] = 3] = "C";
        CriticalLevels[CriticalLevels["D"] = 4] = "D";
        CriticalLevels[CriticalLevels["E"] = 5] = "E";
    })(CriticalLevels = EnumDefinitions.CriticalLevels || (EnumDefinitions.CriticalLevels = {}));
    var CharacterType;
    (function (CharacterType) {
        CharacterType[CharacterType["NPC"] = 0] = "NPC";
        CharacterType[CharacterType["PC"] = 1] = "PC";
    })(CharacterType = EnumDefinitions.CharacterType || (EnumDefinitions.CharacterType = {}));
    var ActorActionType;
    (function (ActorActionType) {
        ActorActionType[ActorActionType["None"] = 0] = "None";
        ActorActionType[ActorActionType["Normal"] = 1] = "Normal";
        ActorActionType[ActorActionType["Attack"] = 2] = "Attack";
        ActorActionType[ActorActionType["Spell"] = 3] = "Spell";
        ActorActionType[ActorActionType["Prep"] = 4] = "Prep";
        ActorActionType[ActorActionType["Movement"] = 5] = "Movement";
        ActorActionType[ActorActionType["Bleed"] = 6] = "Bleed";
        ActorActionType[ActorActionType["Critical"] = 7] = "Critical";
        ActorActionType[ActorActionType["Death"] = 8] = "Death";
        ActorActionType[ActorActionType["Psychic"] = 9] = "Psychic";
        ActorActionType[ActorActionType["SpellEffect"] = 10] = "SpellEffect";
    })(ActorActionType = EnumDefinitions.ActorActionType || (EnumDefinitions.ActorActionType = {}));
    var ActionProblem;
    (function (ActionProblem) {
        ActionProblem[ActionProblem["IsOK"] = 0] = "IsOK";
        ActionProblem[ActionProblem["IsWarning"] = 1] = "IsWarning";
        ActionProblem[ActionProblem["IsError"] = 2] = "IsError";
    })(ActionProblem = EnumDefinitions.ActionProblem || (EnumDefinitions.ActionProblem = {}));
    var ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["None"] = 0] = "None";
        ActionTypeEnum[ActionTypeEnum["Current"] = 1] = "Current";
        ActionTypeEnum[ActionTypeEnum["Proposed"] = 2] = "Proposed";
        ActionTypeEnum[ActionTypeEnum["Next"] = 3] = "Next";
        ActionTypeEnum[ActionTypeEnum["Effect"] = 4] = "Effect";
        ActionTypeEnum[ActionTypeEnum["Interrupted"] = 5] = "Interrupted";
        ActionTypeEnum[ActionTypeEnum["Completed"] = 6] = "Completed";
    })(ActionTypeEnum = EnumDefinitions.ActionTypeEnum || (EnumDefinitions.ActionTypeEnum = {}));
    var BaseActionType;
    (function (BaseActionType) {
        BaseActionType[BaseActionType["None"] = 0] = "None";
        BaseActionType[BaseActionType["Normal"] = 1] = "Normal";
        BaseActionType[BaseActionType["Attack"] = 2] = "Attack";
        BaseActionType[BaseActionType["Spell"] = 3] = "Spell";
        BaseActionType[BaseActionType["Prep"] = 4] = "Prep";
        BaseActionType[BaseActionType["Movement"] = 5] = "Movement";
    })(BaseActionType = EnumDefinitions.BaseActionType || (EnumDefinitions.BaseActionType = {}));
    var ParryType;
    (function (ParryType) {
        ParryType[ParryType["Fine"] = 0] = "Fine";
        ParryType[ParryType["Must_Parry"] = 1] = "Must_Parry";
        ParryType[ParryType["No_Parry"] = 2] = "No_Parry";
    })(ParryType = EnumDefinitions.ParryType || (EnumDefinitions.ParryType = {}));
})(EnumDefinitions || (EnumDefinitions = {}));


/***/ }),

/***/ "./ClientApp/app/entities/EnumEx.ts":
/*!******************************************!*\
  !*** ./ClientApp/app/entities/EnumEx.ts ***!
  \******************************************/
/*! exports provided: EnumEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return EnumEx; });
var EnumEx = /** @class */ (function () {
    function EnumEx() {
    }
    EnumEx.getNamesAndValues = function (e) {
        var nms = EnumEx.getNames(e);
        var mpped = nms.map(function (n) { return ({ name: n, value: e[n] }); });
        var a = 1;
        return mpped;
    };
    EnumEx.getNames = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumEx.getValues = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumEx.getObjValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumEx;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Game.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/entities/Game.ts ***!
  \****************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());



/***/ }),

/***/ "./ClientApp/app/entities/MySettings.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/entities/MySettings.ts ***!
  \**********************************************/
/*! exports provided: MySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return MySettings; });
var MySettings = /** @class */ (function () {
    function MySettings() {
    }
    return MySettings;
}());



/***/ }),

/***/ "./ClientApp/app/entities/Weapon.ts":
/*!******************************************!*\
  !*** ./ClientApp/app/entities/Weapon.ts ***!
  \******************************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    return Weapon;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Actions.repository.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/repositories/Actions.repository.ts ***!
  \**********************************************************/
/*! exports provided: ActionsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return ActionsRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var ActionsRepository = /** @class */ (function () {
    function ActionsRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Actions/getActionsOnActor?actorId=${actorId}
        //public getActionsOnActor = (actorId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getActionsOnActorAsync = function (actorId) {
            return new Promise(function (resolve, reject) {
                _this.getActionsOnActor(actorId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActionsOnActor = function (actorId) {
            var _Url = "api/Actions/getActionsOnActor?actorId=" + actorId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Actions/getActionsInGame?gameId=${gameId}
        //public getActionsInGame = (gameId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsInGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActionsInGameAsync = function (gameId) {
            return new Promise(function (resolve, reject) {
                _this.getActionsInGame(gameId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActionsInGame = function (gameId) {
            var _Url = "api/Actions/getActionsInGame?gameId=" + gameId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Actions/getAction?id=${id}
        //public getAction = (id: number, callback: (data: BaseAction)=>void) : void => {
        //	this.getActionObserve(id).subscribe(response => callback(response));
        //}
        this.getActionAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getAction(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAction = function (id) {
            var _Url = "api/Actions/getAction?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Actions/[action]
        //public saveAction = (action: BaseAction, callback: (data: BaseAction)=>void) : void => {
        //	this.saveActionObserve(action).subscribe(response => callback(response));
        //}
        this.saveActionAsync = function (action) {
            return new Promise(function (resolve, reject) {
                _this.saveAction(action)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveAction = function (action) {
            var _Url = "api/Actions/[action]";
            return _this._httpClient.post(_Url, action)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Actions/deleteAction?id=${id}
        //public deleteAction = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActionObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActionAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteAction(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteAction = function (id) {
            var _Url = "api/Actions/deleteAction?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    ActionsRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    ActionsRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ActionsRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActionsRepository);
    return ActionsRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Actors.repository.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/repositories/Actors.repository.ts ***!
  \*********************************************************/
/*! exports provided: ActorsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return ActorsRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var ActorsRepository = /** @class */ (function () {
    function ActorsRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Actors/getActors?gameId=${gameId}
        //public getActors = (gameId: number, callback: (data: Actor[])=>void) : void => {
        //	this.getActorsObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActorsAsync = function (gameId) {
            return new Promise(function (resolve, reject) {
                _this.getActors(gameId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActors = function (gameId) {
            var _Url = "api/Actors/getActors?gameId=" + gameId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Actors/getActor?id=${id}
        //public getActor = (id: number, callback: (data: Actor)=>void) : void => {
        //	this.getActorObserve(id).subscribe(response => callback(response));
        //}
        this.getActorAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getActor(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActor = function (id) {
            var _Url = "api/Actors/getActor?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Actors/saveActor
        //public saveActor = (actor: Actor, callback: (data: Actor)=>void) : void => {
        //	this.saveActorObserve(actor).subscribe(response => callback(response));
        //}
        this.saveActorAsync = function (actor) {
            return new Promise(function (resolve, reject) {
                _this.saveActor(actor)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveActor = function (actor) {
            var _Url = "api/Actors/saveActor";
            return _this._httpClient.post(_Url, actor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Actors/deleteActor?id=${id}
        //public deleteActor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActorAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteActor(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteActor = function (id) {
            var _Url = "api/Actors/deleteActor?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    ActorsRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    ActorsRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ActorsRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActorsRepository);
    return ActorsRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Characters.repository.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/repositories/Characters.repository.ts ***!
  \*************************************************************/
/*! exports provided: CharactersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return CharactersRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var CharactersRepository = /** @class */ (function () {
    function CharactersRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Characters/getCharacters?gameType=${gameType}
        //public getCharacters = (gameType: GameType, callback: (data: Character[])=>void) : void => {
        //	this.getCharactersObserve(gameType).subscribe(response => callback(response));
        //}
        this.getCharactersAsync = function (gameType) {
            return new Promise(function (resolve, reject) {
                _this.getCharacters(gameType)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCharacters = function (gameType) {
            var _Url = "api/Characters/getCharacters?gameType=" + gameType;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Characters/getCharacter?id=${id}
        //public getCharacter = (id: number, callback: (data: Character)=>void) : void => {
        //	this.getCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.getCharacterAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getCharacter(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCharacter = function (id) {
            var _Url = "api/Characters/getCharacter?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Characters/saveCharacter
        //public saveCharacter = (character: Character, callback: (data: Character)=>void) : void => {
        //	this.saveCharacterObserve(character).subscribe(response => callback(response));
        //}
        this.saveCharacterAsync = function (character) {
            return new Promise(function (resolve, reject) {
                _this.saveCharacter(character)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveCharacter = function (character) {
            var _Url = "api/Characters/saveCharacter";
            return _this._httpClient.post(_Url, character)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Characters/deleteCharacter?id=${id}
        //public deleteCharacter = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCharacterAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteCharacter(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteCharacter = function (id) {
            var _Url = "api/Characters/deleteCharacter?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    CharactersRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    CharactersRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CharactersRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CharactersRepository);
    return CharactersRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Combat.repository.ts":
/*!*********************************************************!*\
  !*** ./ClientApp/app/repositories/Combat.repository.ts ***!
  \*********************************************************/
/*! exports provided: CombatRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return CombatRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var CombatRepository = /** @class */ (function () {
    function CombatRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // delete: api/Combat/deleteArmor?id=${id}
        //public deleteArmor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteArmorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteArmorAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteArmor(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteArmor = function (id) {
            var _Url = "api/Combat/deleteArmor?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Combat/deleteAttack?id=${id}
        //public deleteAttack = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteAttackObserve(id).subscribe(response => callback(response));
        //}
        this.deleteAttackAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteAttack(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteAttack = function (id) {
            var _Url = "api/Combat/deleteAttack?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Combat/deleteWeapon?id=${id}
        //public deleteWeapon = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.deleteWeaponAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteWeapon(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteWeapon = function (id) {
            var _Url = "api/Combat/deleteWeapon?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getArmor?id=${id}
        //public getArmor = (id: number, callback: (data: Armor)=>void) : void => {
        //	this.getArmorObserve(id).subscribe(response => callback(response));
        //}
        this.getArmorAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getArmor(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getArmor = function (id) {
            var _Url = "api/Combat/getArmor?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getArmors
        //public getArmors = (, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsObserve().subscribe(response => callback(response));
        //}
        this.getArmorsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getArmors()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getArmors = function () {
            var _Url = "api/Combat/getArmors";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getArmorsOnCharacter?characterId=${characterId}
        //public getArmorsOnCharacter = (characterId: number, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getArmorsOnCharacterAsync = function (characterId) {
            return new Promise(function (resolve, reject) {
                _this.getArmorsOnCharacter(characterId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getArmorsOnCharacter = function (characterId) {
            var _Url = "api/Combat/getArmorsOnCharacter?characterId=" + characterId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getAttack?id=${id}
        //public getAttack = (id: number, callback: (data: Attack)=>void) : void => {
        //	this.getAttackObserve(id).subscribe(response => callback(response));
        //}
        this.getAttackAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getAttack(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAttack = function (id) {
            var _Url = "api/Combat/getAttack?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getAttacks
        //public getAttacks = (, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksObserve().subscribe(response => callback(response));
        //}
        this.getAttacksAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getAttacks()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAttacks = function () {
            var _Url = "api/Combat/getAttacks";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getAttacksOnActor?actorId=${actorId}
        //public getAttacksOnActor = (actorId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getAttacksOnActorAsync = function (actorId) {
            return new Promise(function (resolve, reject) {
                _this.getAttacksOnActor(actorId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAttacksOnActor = function (actorId) {
            var _Url = "api/Combat/getAttacksOnActor?actorId=" + actorId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getAttacksOnCreature?creatureId=${creatureId}
        //public getAttacksOnCreature = (creatureId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.getAttacksOnCreatureAsync = function (creatureId) {
            return new Promise(function (resolve, reject) {
                _this.getAttacksOnCreature(creatureId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAttacksOnCreature = function (creatureId) {
            var _Url = "api/Combat/getAttacksOnCreature?creatureId=" + creatureId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getWeapon?id=${id}
        //public getWeapon = (id: number, callback: (data: Weapon)=>void) : void => {
        //	this.getWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.getWeaponAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getWeapon(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getWeapon = function (id) {
            var _Url = "api/Combat/getWeapon?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getWeapons
        //public getWeapons = (, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsObserve().subscribe(response => callback(response));
        //}
        this.getWeaponsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getWeapons()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getWeapons = function () {
            var _Url = "api/Combat/getWeapons";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Combat/getWeaponsOnCharacter?characterId=${characterId}
        //public getWeaponsOnCharacter = (characterId: number, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getWeaponsOnCharacterAsync = function (characterId) {
            return new Promise(function (resolve, reject) {
                _this.getWeaponsOnCharacter(characterId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getWeaponsOnCharacter = function (characterId) {
            var _Url = "api/Combat/getWeaponsOnCharacter?characterId=" + characterId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Combat/saveArmor
        //public saveArmor = (armor: Armor, callback: (data: Armor)=>void) : void => {
        //	this.saveArmorObserve(armor).subscribe(response => callback(response));
        //}
        this.saveArmorAsync = function (armor) {
            return new Promise(function (resolve, reject) {
                _this.saveArmor(armor)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveArmor = function (armor) {
            var _Url = "api/Combat/saveArmor";
            return _this._httpClient.post(_Url, armor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Combat/saveAttack
        //public saveAttack = (attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackObserve(attack).subscribe(response => callback(response));
        //}
        this.saveAttackAsync = function (attack) {
            return new Promise(function (resolve, reject) {
                _this.saveAttack(attack)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveAttack = function (attack) {
            var _Url = "api/Combat/saveAttack";
            return _this._httpClient.post(_Url, attack)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Combat/saveAttackOnActor?actorId=${actorId}
        //public saveAttackOnActor = (actorId: number, attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackOnActorObserve(actorId, attack).subscribe(response => callback(response));
        //}
        this.saveAttackOnActorAsync = function (actorId, attack) {
            return new Promise(function (resolve, reject) {
                _this.saveAttackOnActor(actorId, attack)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveAttackOnActor = function (actorId, attack) {
            var _Url = "api/Combat/saveAttackOnActor?actorId=" + actorId;
            return _this._httpClient.post(_Url, actorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Combat/saveWeapon
        //public saveWeapon = (weapon: Weapon, callback: (data: Weapon)=>void) : void => {
        //	this.saveWeaponObserve(weapon).subscribe(response => callback(response));
        //}
        this.saveWeaponAsync = function (weapon) {
            return new Promise(function (resolve, reject) {
                _this.saveWeapon(weapon)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveWeapon = function (weapon) {
            var _Url = "api/Combat/saveWeapon";
            return _this._httpClient.post(_Url, weapon)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    CombatRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    CombatRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CombatRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CombatRepository);
    return CombatRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Creatures.repository.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/repositories/Creatures.repository.ts ***!
  \************************************************************/
/*! exports provided: CreaturesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return CreaturesRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    CreaturesRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    CreaturesRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CreaturesRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CreaturesRepository);
    return CreaturesRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/CriticalEffects.repository.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/repositories/CriticalEffects.repository.ts ***!
  \******************************************************************/
/*! exports provided: CriticalEffectsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return CriticalEffectsRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var CriticalEffectsRepository = /** @class */ (function () {
    function CriticalEffectsRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/CriticalEffects/getCriticalEffects?actorId=${actorId}
        //public getCriticalEffects = (actorId: number, callback: (data: CriticalEffect[])=>void) : void => {
        //	this.getCriticalEffectsObserve(actorId).subscribe(response => callback(response));
        //}
        this.getCriticalEffectsAsync = function (actorId) {
            return new Promise(function (resolve, reject) {
                _this.getCriticalEffects(actorId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCriticalEffects = function (actorId) {
            var _Url = "api/CriticalEffects/getCriticalEffects?actorId=" + actorId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/CriticalEffects/getCriticalEffect?id=${id}
        //public getCriticalEffect = (id: number, callback: (data: CriticalEffect)=>void) : void => {
        //	this.getCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.getCriticalEffectAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getCriticalEffect(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCriticalEffect = function (id) {
            var _Url = "api/CriticalEffects/getCriticalEffect?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/CriticalEffects/saveCriticalEffect
        //public saveCriticalEffect = (criticalEffect: CriticalEffect, callback: (data: CriticalEffect)=>void) : void => {
        //	this.saveCriticalEffectObserve(criticalEffect).subscribe(response => callback(response));
        //}
        this.saveCriticalEffectAsync = function (criticalEffect) {
            return new Promise(function (resolve, reject) {
                _this.saveCriticalEffect(criticalEffect)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveCriticalEffect = function (criticalEffect) {
            var _Url = "api/CriticalEffects/saveCriticalEffect";
            return _this._httpClient.post(_Url, criticalEffect)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/CriticalEffects/deleteCriticalEffect?id=${id}
        //public deleteCriticalEffect = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCriticalEffectAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteCriticalEffect(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteCriticalEffect = function (id) {
            var _Url = "api/CriticalEffects/deleteCriticalEffect?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    CriticalEffectsRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    CriticalEffectsRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CriticalEffectsRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CriticalEffectsRepository);
    return CriticalEffectsRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Encounter.repository.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/repositories/Encounter.repository.ts ***!
  \************************************************************/
/*! exports provided: EncounterRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return EncounterRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var EncounterRepository = /** @class */ (function () {
    function EncounterRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Encounter/getCurrentGame
        //public getCurrentGame = (, callback: (data: Game)=>void) : void => {
        //	this.getCurrentGameObserve().subscribe(response => callback(response));
        //}
        this.getCurrentGameAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getCurrentGame()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCurrentGame = function () {
            var _Url = "api/Encounter/getCurrentGame";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/setCurrentGame?gameId=${gameId}
        //public setCurrentGame = (gameId: number, callback: (data: Game)=>void) : void => {
        //	this.setCurrentGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.setCurrentGameAsync = function (gameId) {
            return new Promise(function (resolve, reject) {
                _this.setCurrentGame(gameId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.setCurrentGame = function (gameId) {
            var _Url = "api/Encounter/setCurrentGame?gameId=" + gameId;
            return _this._httpClient.post(_Url, gameId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/createActorFromCreature?creatureId=${creatureId}
        //public createActorFromCreature = (creatureId: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.createActorFromCreatureAsync = function (creatureId) {
            return new Promise(function (resolve, reject) {
                _this.createActorFromCreature(creatureId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.createActorFromCreature = function (creatureId) {
            var _Url = "api/Encounter/createActorFromCreature?creatureId=" + creatureId;
            return _this._httpClient.post(_Url, creatureId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/createActorFromCharacter?characterId=${characterId}&rolledInit=${rolledInit}
        //public createActorFromCharacter = (characterId: number, rolledInit: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCharacterObserve(characterId, rolledInit).subscribe(response => callback(response));
        //}
        this.createActorFromCharacterAsync = function (characterId, rolledInit) {
            return new Promise(function (resolve, reject) {
                _this.createActorFromCharacter(characterId, rolledInit)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.createActorFromCharacter = function (characterId, rolledInit) {
            var _Url = "api/Encounter/createActorFromCharacter?characterId=" + characterId + "&rolledInit=" + rolledInit;
            return _this._httpClient.post(_Url, characterId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/moveToNext?none=${none}
        //public moveToNext = (none: boolean, callback: (data: MoveNextResult)=>void) : void => {
        //	this.moveToNextObserve(none).subscribe(response => callback(response));
        //}
        this.moveToNextAsync = function (none) {
            return new Promise(function (resolve, reject) {
                _this.moveToNext(none)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.moveToNext = function (none) {
            var _Url = "api/Encounter/moveToNext?none=" + none;
            return _this._httpClient.post(_Url, none)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/proposeActionUnconscious?actorId=${actorId}
        //public proposeActionUnconscious = (actorId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionUnconsciousObserve(actorId).subscribe(response => callback(response));
        //}
        this.proposeActionUnconsciousAsync = function (actorId) {
            return new Promise(function (resolve, reject) {
                _this.proposeActionUnconscious(actorId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.proposeActionUnconscious = function (actorId) {
            var _Url = "api/Encounter/proposeActionUnconscious?actorId=" + actorId;
            return _this._httpClient.post(_Url, actorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/proposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}
        //public proposeAction = (actionDefId: number, whomId: number, modifier: number, attackId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionObserve(actionDefId, whomId, modifier, attackId).subscribe(response => callback(response));
        //}
        this.proposeActionAsync = function (actionDefId, whomId, modifier, attackId) {
            return new Promise(function (resolve, reject) {
                _this.proposeAction(actionDefId, whomId, modifier, attackId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.proposeAction = function (actionDefId, whomId, modifier, attackId) {
            var _Url = "api/Encounter/proposeAction?actionDefId=" + actionDefId + "&whomId=" + whomId + "&modifier=" + modifier + "&attackId=" + attackId;
            return _this._httpClient.post(_Url, actionDefId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/proposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}
        //public proposeActionContinue = (previousActionId: number, whomId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionContinueObserve(previousActionId, whomId).subscribe(response => callback(response));
        //}
        this.proposeActionContinueAsync = function (previousActionId, whomId) {
            return new Promise(function (resolve, reject) {
                _this.proposeActionContinue(previousActionId, whomId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.proposeActionContinue = function (previousActionId, whomId) {
            var _Url = "api/Encounter/proposeActionContinue?previousActionId=" + previousActionId + "&whomId=" + whomId;
            return _this._httpClient.post(_Url, previousActionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/addBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}
        //public addBleedEffect = (whomId: number, bleedRate: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addBleedEffectObserve(whomId, bleedRate).subscribe(response => callback(response));
        //}
        this.addBleedEffectAsync = function (whomId, bleedRate) {
            return new Promise(function (resolve, reject) {
                _this.addBleedEffect(whomId, bleedRate)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.addBleedEffect = function (whomId, bleedRate) {
            var _Url = "api/Encounter/addBleedEffect?whomId=" + whomId + "&bleedRate=" + bleedRate;
            return _this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/addCriticalEffect?whomId=${whomId}&rounds=${rounds}
        //public addCriticalEffect = (whomId: number, crit: CriticalEffect, rounds: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addCriticalEffectObserve(whomId, crit, rounds).subscribe(response => callback(response));
        //}
        this.addCriticalEffectAsync = function (whomId, crit, rounds) {
            return new Promise(function (resolve, reject) {
                _this.addCriticalEffect(whomId, crit, rounds)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.addCriticalEffect = function (whomId, crit, rounds) {
            var _Url = "api/Encounter/addCriticalEffect?whomId=" + whomId + "&rounds=" + rounds;
            return _this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/addPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}
        //public addPsychicEffect = (whomId: number, psychicLevel: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addPsychicEffectObserve(whomId, psychicLevel).subscribe(response => callback(response));
        //}
        this.addPsychicEffectAsync = function (whomId, psychicLevel) {
            return new Promise(function (resolve, reject) {
                _this.addPsychicEffect(whomId, psychicLevel)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.addPsychicEffect = function (whomId, psychicLevel) {
            var _Url = "api/Encounter/addPsychicEffect?whomId=" + whomId + "&psychicLevel=" + psychicLevel;
            return _this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/addSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}
        //public addSpellEffect = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addSpellEffectObserve(effectedActorId, casterId, spellName, rounds, hastePercent).subscribe(response => callback(response));
        //}
        this.addSpellEffectAsync = function (effectedActorId, casterId, spellName, rounds, hastePercent) {
            return new Promise(function (resolve, reject) {
                _this.addSpellEffect(effectedActorId, casterId, spellName, rounds, hastePercent)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.addSpellEffect = function (effectedActorId, casterId, spellName, rounds, hastePercent) {
            var _Url = "api/Encounter/addSpellEffect?effectedActorId=" + effectedActorId + "&casterId=" + casterId + "&spellName=" + encodeURIComponent(spellName) + "&rounds=" + rounds + "&hastePercent=" + hastePercent;
            return _this._httpClient.post(_Url, effectedActorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/removeEffect?actionId=${actionId}
        //public removeEffect = (actionId: number, callback: (data: void)=>void) : void => {
        //	this.removeEffectObserve(actionId).subscribe(response => callback(response));
        //}
        this.removeEffectAsync = function (actionId) {
            return new Promise(function (resolve, reject) {
                _this.removeEffect(actionId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.removeEffect = function (actionId) {
            var _Url = "api/Encounter/removeEffect?actionId=" + actionId;
            return _this._httpClient.post(_Url, actionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/removeCriticalsFromActor?whomId=${whomId}&count=${count}
        //public removeCriticalsFromActor = (whomId: number, count: number, callback: (data: void)=>void) : void => {
        //	this.removeCriticalsFromActorObserve(whomId, count).subscribe(response => callback(response));
        //}
        this.removeCriticalsFromActorAsync = function (whomId, count) {
            return new Promise(function (resolve, reject) {
                _this.removeCriticalsFromActor(whomId, count)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.removeCriticalsFromActor = function (whomId, count) {
            var _Url = "api/Encounter/removeCriticalsFromActor?whomId=" + whomId + "&count=" + count;
            return _this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/doProposedAction?whomId=${whomId}
        //public doProposedAction = (whomId: number, callback: (data: void)=>void) : void => {
        //	this.doProposedActionObserve(whomId).subscribe(response => callback(response));
        //}
        this.doProposedActionAsync = function (whomId) {
            return new Promise(function (resolve, reject) {
                _this.doProposedAction(whomId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.doProposedAction = function (whomId) {
            var _Url = "api/Encounter/doProposedAction?whomId=" + whomId;
            return _this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/setModifierOnAction?actionId=${actionId}&modifier=${modifier}
        //public setModifierOnAction = (actionId: number, modifier: number, callback: (data: void)=>void) : void => {
        //	this.setModifierOnActionObserve(actionId, modifier).subscribe(response => callback(response));
        //}
        this.setModifierOnActionAsync = function (actionId, modifier) {
            return new Promise(function (resolve, reject) {
                _this.setModifierOnAction(actionId, modifier)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.setModifierOnAction = function (actionId, modifier) {
            var _Url = "api/Encounter/setModifierOnAction?actionId=" + actionId + "&modifier=" + modifier;
            return _this._httpClient.post(_Url, actionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Encounter/setAttackOnAction?actionId=${actionId}&attackId=${attackId}
        //public setAttackOnAction = (actionId: number, attackId: number, callback: (data: void)=>void) : void => {
        //	this.setAttackOnActionObserve(actionId, attackId).subscribe(response => callback(response));
        //}
        this.setAttackOnActionAsync = function (actionId, attackId) {
            return new Promise(function (resolve, reject) {
                _this.setAttackOnAction(actionId, attackId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.setAttackOnAction = function (actionId, attackId) {
            var _Url = "api/Encounter/setAttackOnAction?actionId=" + actionId + "&attackId=" + attackId;
            return _this._httpClient.post(_Url, actionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    EncounterRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    EncounterRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EncounterRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EncounterRepository);
    return EncounterRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Games.repository.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/repositories/Games.repository.ts ***!
  \********************************************************/
/*! exports provided: GamesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return GamesRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var GamesRepository = /** @class */ (function () {
    function GamesRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Games/getGames?gameType=${gameType}
        //public getGames = (gameType: GameType, callback: (data: Game[])=>void) : void => {
        //	this.getGamesObserve(gameType).subscribe(response => callback(response));
        //}
        this.getGamesAsync = function (gameType) {
            return new Promise(function (resolve, reject) {
                _this.getGames(gameType)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getGames = function (gameType) {
            var _Url = "api/Games/getGames?gameType=" + gameType;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Games/getGame?id=${id}
        //public getGame = (id: number, callback: (data: Game)=>void) : void => {
        //	this.getGameObserve(id).subscribe(response => callback(response));
        //}
        this.getGameAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.getGame(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getGame = function (id) {
            var _Url = "api/Games/getGame?id=" + id;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Games/saveGame
        //public saveGame = (game: Game, callback: (data: Game)=>void) : void => {
        //	this.saveGameObserve(game).subscribe(response => callback(response));
        //}
        this.saveGameAsync = function (game) {
            return new Promise(function (resolve, reject) {
                _this.saveGame(game)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.saveGame = function (game) {
            var _Url = "api/Games/saveGame";
            return _this._httpClient.post(_Url, game)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // delete: api/Games/deleteGame?id=${id}
        //public deleteGame = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteGameObserve(id).subscribe(response => callback(response));
        //}
        this.deleteGameAsync = function (id) {
            return new Promise(function (resolve, reject) {
                _this.deleteGame(id)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.deleteGame = function (id) {
            var _Url = "api/Games/deleteGame?id=" + id;
            return _this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    GamesRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    GamesRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GamesRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GamesRepository);
    return GamesRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Reference.repository.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/repositories/Reference.repository.ts ***!
  \************************************************************/
/*! exports provided: ReferenceRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return ReferenceRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var ReferenceRepository = /** @class */ (function () {
    function ReferenceRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Reference/getActionGroups
        //public getActionGroups = (, callback: (data: ActionGroup[])=>void) : void => {
        //	this.getActionGroupsObserve().subscribe(response => callback(response));
        //}
        this.getActionGroupsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getActionGroups()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActionGroups = function () {
            var _Url = "api/Reference/getActionGroups";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getActions?groupId=${groupId}
        //public getActions = (groupId: number, callback: (data: ActionDefinition[])=>void) : void => {
        //	this.getActionsObserve(groupId).subscribe(response => callback(response));
        //}
        this.getActionsAsync = function (groupId) {
            return new Promise(function (resolve, reject) {
                _this.getActions(groupId)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getActions = function (groupId) {
            var _Url = "api/Reference/getActions?groupId=" + groupId;
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getConstitutionBonusCharts
        //public getConstitutionBonusCharts = (, callback: (data: ConstitutionBonusChart[])=>void) : void => {
        //	this.getConstitutionBonusChartsObserve().subscribe(response => callback(response));
        //}
        this.getConstitutionBonusChartsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getConstitutionBonusCharts()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getConstitutionBonusCharts = function () {
            var _Url = "api/Reference/getConstitutionBonusCharts";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getCriticalCodes
        //public getCriticalCodes = (, callback: (data: CriticalCode[])=>void) : void => {
        //	this.getCriticalCodesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalCodesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getCriticalCodes()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCriticalCodes = function () {
            var _Url = "api/Reference/getCriticalCodes";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getCriticalIgnores
        //public getCriticalIgnores = (, callback: (data: CriticalIgnore[])=>void) : void => {
        //	this.getCriticalIgnoresObserve().subscribe(response => callback(response));
        //}
        this.getCriticalIgnoresAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getCriticalIgnores()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCriticalIgnores = function () {
            var _Url = "api/Reference/getCriticalIgnores";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getIQs
        //public getIQs = (, callback: (data: IQ[])=>void) : void => {
        //	this.getIQsObserve().subscribe(response => callback(response));
        //}
        this.getIQsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getIQs()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getIQs = function () {
            var _Url = "api/Reference/getIQs";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getLevelCharts
        //public getLevelCharts = (, callback: (data: LevelChart[])=>void) : void => {
        //	this.getLevelChartsObserve().subscribe(response => callback(response));
        //}
        this.getLevelChartsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getLevelCharts()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getLevelCharts = function () {
            var _Url = "api/Reference/getLevelCharts";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getOutlooks
        //public getOutlooks = (, callback: (data: Outlook[])=>void) : void => {
        //	this.getOutlooksObserve().subscribe(response => callback(response));
        //}
        this.getOutlooksAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getOutlooks()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getOutlooks = function () {
            var _Url = "api/Reference/getOutlooks";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getPaces
        //public getPaces = (, callback: (data: Pace[])=>void) : void => {
        //	this.getPacesObserve().subscribe(response => callback(response));
        //}
        this.getPacesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getPaces()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getPaces = function () {
            var _Url = "api/Reference/getPaces";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getSizeRatings
        //public getSizeRatings = (, callback: (data: SizeRating[])=>void) : void => {
        //	this.getSizeRatingsObserve().subscribe(response => callback(response));
        //}
        this.getSizeRatingsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getSizeRatings()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getSizeRatings = function () {
            var _Url = "api/Reference/getSizeRatings";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getSpeedCharts
        //public getSpeedCharts = (, callback: (data: SpeedChart[])=>void) : void => {
        //	this.getSpeedChartsObserve().subscribe(response => callback(response));
        //}
        this.getSpeedChartsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getSpeedCharts()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getSpeedCharts = function () {
            var _Url = "api/Reference/getSpeedCharts";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getAttackTypes
        //public getAttackTypes = (, callback: (data: AttackType[])=>void) : void => {
        //	this.getAttackTypesObserve().subscribe(response => callback(response));
        //}
        this.getAttackTypesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getAttackTypes()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getAttackTypes = function () {
            var _Url = "api/Reference/getAttackTypes";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getCriticalTypes
        //public getCriticalTypes = (, callback: (data: CriticalType[])=>void) : void => {
        //	this.getCriticalTypesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalTypesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getCriticalTypes()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getCriticalTypes = function () {
            var _Url = "api/Reference/getCriticalTypes";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getWeaponTypes
        //public getWeaponTypes = (, callback: (data: WeaponType[])=>void) : void => {
        //	this.getWeaponTypesObserve().subscribe(response => callback(response));
        //}
        this.getWeaponTypesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getWeaponTypes()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getWeaponTypes = function () {
            var _Url = "api/Reference/getWeaponTypes";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getBooks
        //public getBooks = (, callback: (data: Book[])=>void) : void => {
        //	this.getBooksObserve().subscribe(response => callback(response));
        //}
        this.getBooksAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getBooks()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getBooks = function () {
            var _Url = "api/Reference/getBooks";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // get: api/Reference/getPsychicRefractoryPeriodEntries
        //public getPsychicRefractoryPeriodEntries = (, callback: (data: PsychicRefractoryPeriodEntry[])=>void) : void => {
        //	this.getPsychicRefractoryPeriodEntriesObserve().subscribe(response => callback(response));
        //}
        this.getPsychicRefractoryPeriodEntriesAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getPsychicRefractoryPeriodEntries()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getPsychicRefractoryPeriodEntries = function () {
            var _Url = "api/Reference/getPsychicRefractoryPeriodEntries";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    ReferenceRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    ReferenceRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ReferenceRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReferenceRepository);
    return ReferenceRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/SampleData.repository.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/repositories/SampleData.repository.ts ***!
  \*************************************************************/
/*! exports provided: SampleDataRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleDataRepository", function() { return SampleDataRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var SampleDataRepository = /** @class */ (function () {
    function SampleDataRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/SampleData/weatherForecasts
        //public weatherForecasts = (, callback: (data: WeatherForecast[])=>void) : void => {
        //	this.weatherForecastsObserve().subscribe(response => callback(response));
        //}
        this.weatherForecastsAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.weatherForecasts()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.weatherForecasts = function () {
            var _Url = "api/SampleData/weatherForecasts";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    SampleDataRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    SampleDataRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SampleDataRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SampleDataRepository);
    return SampleDataRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/Settings.repository.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/repositories/Settings.repository.ts ***!
  \***********************************************************/
/*! exports provided: SettingsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return SettingsRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var SettingsRepository = /** @class */ (function () {
    function SettingsRepository(_httpClient) {
        var _this = this;
        this._httpClient = _httpClient;
        // get: api/Settings/getSetting
        //public getSetting = (, callback: (data: MySettings)=>void) : void => {
        //	this.getSettingObserve().subscribe(response => callback(response));
        //}
        this.getSettingAsync = function () {
            return new Promise(function (resolve, reject) {
                _this.getSetting()
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.getSetting = function () {
            var _Url = "api/Settings/getSetting";
            return _this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
        // post: api/Settings/setGameType?gameType=${gameType}
        //public setGameType = (gameType: GameType, callback: (data: void)=>void) : void => {
        //	this.setGameTypeObserve(gameType).subscribe(response => callback(response));
        //}
        this.setGameTypeAsync = function (gameType) {
            return new Promise(function (resolve, reject) {
                _this.setGameType(gameType)
                    .subscribe(function (res) {
                    resolve(res);
                });
            });
        };
        this.setGameType = function (gameType) {
            var _Url = "api/Settings/setGameType?gameType=" + gameType;
            return _this._httpClient.post(_Url, gameType)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError));
        };
    }
    // Utility
    SettingsRepository.prototype.handleError = function (error) {
        console.error(error);
        var customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(customError || 'Server error');
    };
    SettingsRepository.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SettingsRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsRepository);
    return SettingsRepository;
}());



/***/ }),

/***/ "./ClientApp/app/repositories/repositories.module.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/repositories/repositories.module.ts ***!
  \***********************************************************/
/*! exports provided: RepositoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesModule", function() { return RepositoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Actions_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions.repository */ "./ClientApp/app/repositories/Actions.repository.ts");
/* harmony import */ var _Actors_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actors.repository */ "./ClientApp/app/repositories/Actors.repository.ts");
/* harmony import */ var _Characters_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Characters.repository */ "./ClientApp/app/repositories/Characters.repository.ts");
/* harmony import */ var _Combat_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Combat.repository */ "./ClientApp/app/repositories/Combat.repository.ts");
/* harmony import */ var _Creatures_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Creatures.repository */ "./ClientApp/app/repositories/Creatures.repository.ts");
/* harmony import */ var _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CriticalEffects.repository */ "./ClientApp/app/repositories/CriticalEffects.repository.ts");
/* harmony import */ var _Encounter_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Encounter.repository */ "./ClientApp/app/repositories/Encounter.repository.ts");
/* harmony import */ var _Games_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Games.repository */ "./ClientApp/app/repositories/Games.repository.ts");
/* harmony import */ var _Reference_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Reference.repository */ "./ClientApp/app/repositories/Reference.repository.ts");
/* harmony import */ var _SampleData_repository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SampleData.repository */ "./ClientApp/app/repositories/SampleData.repository.ts");
/* harmony import */ var _Settings_repository__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Settings.repository */ "./ClientApp/app/repositories/Settings.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var RepositoriesModule = /** @class */ (function () {
    function RepositoriesModule() {
    }
    RepositoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_Actions_repository__WEBPACK_IMPORTED_MODULE_1__["ActionsRepository"],
                _Actors_repository__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"],
                _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_6__["CriticalEffectsRepository"],
                _Games_repository__WEBPACK_IMPORTED_MODULE_8__["GamesRepository"],
                _Reference_repository__WEBPACK_IMPORTED_MODULE_9__["ReferenceRepository"],
                _Characters_repository__WEBPACK_IMPORTED_MODULE_3__["CharactersRepository"],
                _Creatures_repository__WEBPACK_IMPORTED_MODULE_5__["CreaturesRepository"],
                _Combat_repository__WEBPACK_IMPORTED_MODULE_4__["CombatRepository"],
                _SampleData_repository__WEBPACK_IMPORTED_MODULE_10__["SampleDataRepository"],
                _Settings_repository__WEBPACK_IMPORTED_MODULE_11__["SettingsRepository"],
                _Encounter_repository__WEBPACK_IMPORTED_MODULE_7__["EncounterRepository"]]
        })
    ], RepositoriesModule);
    return RepositoriesModule;
}());



/***/ }),

/***/ "./ClientApp/app/services/APIIntercepter.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/services/APIIntercepter.ts ***!
  \**************************************************/
/*! exports provided: APIInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptor", function() { return APIInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        return document.getElementsByTagName('baseapi')[0].attributes[0].nodeValue;
    };
    APIInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], APIInterceptor);
    return APIInterceptor;
}());



/***/ }),

/***/ "./ClientApp/app/services/Encounter.service.ts":
/*!*****************************************************!*\
  !*** ./ClientApp/app/services/Encounter.service.ts ***!
  \*****************************************************/
/*! exports provided: EncounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return EncounterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/Games.repository */ "./ClientApp/app/repositories/Games.repository.ts");
/* harmony import */ var _repositories_Actors_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/Actors.repository */ "./ClientApp/app/repositories/Actors.repository.ts");
/* harmony import */ var _repositories_Actions_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repositories/Actions.repository */ "./ClientApp/app/repositories/Actions.repository.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/EnumDefinitions */ "./ClientApp/app/entities/EnumDefinitions.ts");
/* harmony import */ var _Settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Settings.service */ "./ClientApp/app/services/Settings.service.ts");
/* harmony import */ var _repositories_Encounter_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../repositories/Encounter.repository */ "./ClientApp/app/repositories/Encounter.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var EncounterService = /** @class */ (function () {
    function EncounterService(gameRepo, actorRepo, actionRepo, encounterRepo, settings) {
        var _this = this;
        this.gameRepo = gameRepo;
        this.actorRepo = actorRepo;
        this.actionRepo = actionRepo;
        this.encounterRepo = encounterRepo;
        this.settings = settings;
        this.actors = new Array();
        this.actions = new Array();
        this.selectGame = function (gameId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.encounterRepo.setCurrentGameAsync(gameId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.encounterRepo.getCurrentGameAsync()];
                    case 1:
                        _a._currentGame = _d.sent();
                        if (this._currentGame.id == 0) {
                            this._currentGame = null;
                        }
                        if (!(this.currentGame != null)) return [3 /*break*/, 4];
                        //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);
                        _b = this;
                        return [4 /*yield*/, this.actorRepo.getActorsAsync(this.currentGame.id)];
                    case 2:
                        //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);
                        _b.actors = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.actionRepo.getActionsInGameAsync(this.currentGame.id)];
                    case 3:
                        _c.actions = _d.sent();
                        if (this.selectedActor == null) {
                            this.selectedAction = this.actions[0];
                        }
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.addCreatureToEncounter = function (creature) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.encounterRepo.createActorFromCreatureAsync(creature.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.addCharacterToEncounter = function (character, rolledInit) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.refresh();
    }
    Object.defineProperty(EncounterService.prototype, "systemSettings", {
        get: function () {
            return this.settings.settings;
        },
        enumerable: true,
        configurable: true
    });
    EncounterService.prototype.setGameType = function (value) {
        this.settings.setGameType(value);
    };
    Object.defineProperty(EncounterService.prototype, "selectedAction", {
        get: function () {
            return this._selectedAction;
        },
        set: function (action) {
            this._selectedAction = action;
            var who = this.actors.find(function (item) { return item.id === action.whoIsActing_ID; });
            this._selectedActor = who;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EncounterService.prototype, "selectedActor", {
        get: function () {
            return this._selectedActor;
        },
        set: function (actor) {
            var act = this.actions.find(function (item) { return item.whoIsActing_ID === actor.id && item.actionType == _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__["EnumDefinitions"].ActionTypeEnum.Current; });
            this._selectedAction = act;
            this._selectedActor = actor;
        },
        enumerable: true,
        configurable: true
    });
    EncounterService.prototype.selectActor = function (actorId) {
        this.selectedActor = this.actors.find(function (a) { return a.id == actorId; });
    };
    Object.defineProperty(EncounterService.prototype, "currentGame", {
        get: function () {
            return this._currentGame;
        },
        set: function (game) {
            this.selectGame(game.id);
        },
        enumerable: true,
        configurable: true
    });
    EncounterService.ctorParameters = function () { return [
        { type: _repositories_Games_repository__WEBPACK_IMPORTED_MODULE_1__["GamesRepository"] },
        { type: _repositories_Actors_repository__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"] },
        { type: _repositories_Actions_repository__WEBPACK_IMPORTED_MODULE_3__["ActionsRepository"] },
        { type: _repositories_Encounter_repository__WEBPACK_IMPORTED_MODULE_6__["EncounterRepository"] },
        { type: _Settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }
    ]; };
    EncounterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_Games_repository__WEBPACK_IMPORTED_MODULE_1__["GamesRepository"],
            _repositories_Actors_repository__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"],
            _repositories_Actions_repository__WEBPACK_IMPORTED_MODULE_3__["ActionsRepository"],
            _repositories_Encounter_repository__WEBPACK_IMPORTED_MODULE_6__["EncounterRepository"],
            _Settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], EncounterService);
    return EncounterService;
}());



/***/ }),

/***/ "./ClientApp/app/services/References.service.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/services/References.service.ts ***!
  \******************************************************/
/*! exports provided: ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return ReferencesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_Reference_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/Reference.repository */ "./ClientApp/app/repositories/Reference.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ReferencesService = /** @class */ (function () {
    function ReferencesService(referenceRepo) {
        var _this = this;
        this.referenceRepo = referenceRepo;
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.referenceRepo.getActionGroups()
                    .subscribe(function (items) {
                    _this.ActionGroups = items;
                });
                this.referenceRepo.getConstitutionBonusCharts()
                    .subscribe(function (items) {
                    _this.ConstitutionBonusCharts = items;
                });
                this.referenceRepo.getCriticalCodes()
                    .subscribe(function (items) {
                    _this.CriticalCodes = items;
                });
                this.referenceRepo.getCriticalIgnores()
                    .subscribe(function (items) {
                    _this.CriticalIgnores = items;
                });
                this.referenceRepo.getIQs()
                    .subscribe(function (items) {
                    _this.IQs = items;
                });
                this.referenceRepo.getLevelCharts()
                    .subscribe(function (items) {
                    _this.LevelCharts = items;
                });
                this.referenceRepo.getOutlooks()
                    .subscribe(function (items) {
                    _this.Outlooks = items;
                });
                this.referenceRepo.getPaces()
                    .subscribe(function (items) {
                    _this.Paces = items;
                });
                this.referenceRepo.getSizeRatings()
                    .subscribe(function (items) {
                    _this.SizeRatings = items;
                });
                this.referenceRepo.getSpeedCharts()
                    .subscribe(function (items) {
                    _this.SpeedCharts = items;
                });
                this.referenceRepo.getAttackTypes()
                    .subscribe(function (items) {
                    _this.AttackTypes = items;
                });
                this.referenceRepo.getCriticalTypes()
                    .subscribe(function (items) {
                    _this.CriticalTypes = items;
                });
                this.referenceRepo.getWeaponTypes()
                    .subscribe(function (items) {
                    _this.WeaponTypes = items;
                });
                this.referenceRepo.getBooks()
                    .subscribe(function (items) {
                    _this.Books = items;
                });
                this.referenceRepo.getPsychicRefractoryPeriodEntries()
                    .subscribe(function (items) {
                    _this.PsychicRefractoryPeriodEntrys = items;
                });
                return [2 /*return*/];
            });
        }); };
        this.refresh();
    }
    ReferencesService.ctorParameters = function () { return [
        { type: _repositories_Reference_repository__WEBPACK_IMPORTED_MODULE_1__["ReferenceRepository"] }
    ]; };
    ReferencesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_Reference_repository__WEBPACK_IMPORTED_MODULE_1__["ReferenceRepository"]])
    ], ReferencesService);
    return ReferencesService;
}());



/***/ }),

/***/ "./ClientApp/app/services/Settings.service.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/services/Settings.service.ts ***!
  \****************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _repositories_Settings_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repositories/Settings.repository */ "./ClientApp/app/repositories/Settings.repository.ts");
/* harmony import */ var _entities_MySettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/MySettings */ "./ClientApp/app/entities/MySettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SettingsService = /** @class */ (function () {
    function SettingsService(settingsRepo) {
        var _this = this;
        this.settingsRepo = settingsRepo;
        this.settings = new _entities_MySettings__WEBPACK_IMPORTED_MODULE_3__["MySettings"]();
        this.subscribers = new Array();
        this.refresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.settingsRepo.getSettingAsync()];
                    case 1:
                        _a.settings = _b.sent();
                        this.subscribers.forEach(function (sub) {
                            sub.next(_this.settings);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.setGameType = function (gameType) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsRepo.setGameTypeAsync(gameType)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.refresh();
        this.settingsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obs) {
            //obs.next(this.settings);
            if (_this.settings != null) {
                obs.next(_this.settings);
            }
            _this.subscribers.push(obs);
        });
    }
    SettingsService.ctorParameters = function () { return [
        { type: _repositories_Settings_repository__WEBPACK_IMPORTED_MODULE_2__["SettingsRepository"] }
    ]; };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_Settings_repository__WEBPACK_IMPORTED_MODULE_2__["SettingsRepository"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./ClientApp/app/services/services.module.ts":
/*!***************************************************!*\
  !*** ./ClientApp/app/services/services.module.ts ***!
  \***************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Encounter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Encounter.service */ "./ClientApp/app/services/Encounter.service.ts");
/* harmony import */ var _Settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.service */ "./ClientApp/app/services/Settings.service.ts");
/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./References.service */ "./ClientApp/app/services/References.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                _Encounter_service__WEBPACK_IMPORTED_MODULE_1__["EncounterService"],
                _Settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
                _References_service__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/actor/actor.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/actor/actor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid red\">actor Component</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/app/app.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/app/app.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='apparea'>\r\n        <div class='menu-column'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/armor/armor-edit.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/armor/armor-edit.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"armor\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Armor</legend>\r\n        <!--<form #armorForm=\"ngForm\" class=\"form-horizontal\">-->\r\n        <div class=\"form-group full-row\">\r\n            <label for=\"type\" class=\"control-label\">Armor Type</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input #name=\"ngModel\" name=\"type\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"armor.type\" required style=\"width: 40px;\" />\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a type\r\n                </div>\r\n            </div>\r\n        </div>\r\n            <div class=\"form-group full-row\" style=\"\">\r\n                <label for=\"description\" class=\"control-label\">Description</label>\r\n                <div class=\"control-area\">\r\n                    <input name=\"description\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.description\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group half-row\" style=\"\">\r\n                <label for=\"db\" class=\"control-label\">DB</label>\r\n                <div class=\"control-area control-area-number\">\r\n                    <input name=\"db\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.db\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group half-row\" style=\"\">\r\n                <label for=\"movingManeuverMod\" class=\"control-label\">Moving Maneuver</label>\r\n                <div class=\"control-area control-area-number\">\r\n                    <input name=\"movingManeuverMod\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.movingManeuverMod\" />\r\n                </div>\r\n            </div>\r\n        <div class=\"text-center pt-2\">\r\n            <button class=\"btn btn-danger btn-sm pull-right\" \r\n                    (click)=\"delete()\">\r\n                Remove\r\n            </button>\r\n        </div>\r\n                <!--<div class=\"text-center pt-2\">\r\n\r\n                    <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"armorForm.invalid\"\r\n                            (click)=\"save()\">\r\n                        Save\r\n                    </button>\r\n\r\n                </div>-->\r\n<!--</form>-->\r\n    </fieldset>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/armor/armor.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/armor/armor.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!armors\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newArmor()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Armors\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedArmor\" size=\"5\" [(ngModel)]=\"selectedArmorId\">\r\n                    <option *ngFor=\"let armor of armors\" value={{armor?.type}}>\r\n                        ({{armor?.type}}) {{armor?.description}}\r\n                    </option>\r\n                </select>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-armor-edit [armor]=\"selectedArmor\" (onDelete)=\"onArmorDeleted($event)\"></app-armor-edit>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/attack/attack-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/attack/attack-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"attack\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Attack</legend>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-sm-3\" style=\"padding-right:0;\">\r\n                <div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>OB</label>\r\n                    <input name=\"attackOB\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.ob\" />\r\n                </div>\r\n                <!--<div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>Max</label>\r\n                    <input name=\"attackmaxOB\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.maxOB\" />\r\n                </div>-->\r\n                <div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>%</label>\r\n                    <input name=\"attackpercentChance\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.percentChance\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Attack Type</label>\r\n                <select class=\"form-control\" name=\"selectedAttackType\" [(ngModel)]=\"attack.attackType_ID\">\r\n                    <option *ngFor=\"let item of referencesService.AttackTypes\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div *ngIf=\"attack.attackType_ID!=12\" class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Size</label>\r\n                <select class=\"form-control\" name=\"selectedSize\" [(ngModel)]=\"attack.sizeRating_ID\">\r\n                    <option *ngFor=\"let item of referencesService.SizeRatings\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div *ngIf=\"attack.attackType_ID==12\" class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Weapon Type</label>\r\n                <select class=\"form-control\" name=\"selectedWeaponType\" [(ngModel)]=\"weaponTypeId\">\r\n                    <option *ngFor=\"let item of referencesService.WeaponTypes\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n            <!--<form #weaponForm=\"ngForm\" class=\"form-horizontal\">-->\r\n            <!--<div class=\"form-group full-row\">\r\n        <label for=\"type\" class=\"control-label\">Weapon Name</label>\r\n        <div class=\"control-area\">\r\n            <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.name\" required />\r\n            <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                Please enter a name\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\" \">\r\n        <label for=\"bonus\" class=\"control-label\">Bonus</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"db\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.bonus\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label *ngIf=\"isRolemaster\" for=\"ob\" class=\"control-label\">OB</label>\r\n        <label *ngIf=\"!isRolemaster\" for=\"ob\" class=\"control-label\">ATK Bonus</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"ob\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.ob\" />\r\n        </div>\r\n    </div>\r\n    <div></div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label for=\"weight\" class=\"control-label\">Weight</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"weight\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.weight\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label for=\"is2Handed\" class=\"control-label\" style=\"width: 100%;\">\r\n            <input type=\"checkbox\" name=\"is2Handed\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.is2Handed\" style=\"width: auto; display: inline-block;\" />\r\n            Is 2 Handed\r\n        </label>\r\n    </div>-->\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-danger btn-sm pull-right\"\r\n                        (click)=\"delete()\">\r\n                    Remove\r\n                </button>\r\n            </div>\r\n            <!--<div class=\"text-center pt-2\">\r\n\r\n        <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"weaponForm.invalid\"\r\n                (click)=\"save()\">\r\n            Save\r\n        </button>\r\n\r\n    </div>-->\r\n            <!--</form>-->\r\n</fieldset>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/attack/attack.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/attack/attack.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!attacks\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newAttack()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Attacks\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedAttack\" size=\"5\" [(ngModel)]=\"selectedAttackId\">\r\n                    <option *ngFor=\"let attack of attacks\" value={{attack?.id}}>\r\n                        {{attack?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onWeaponSaved($event)\"-->\r\n            <app-attack-edit [attack]=\"selectedAttack\" (onDelete)=\"onAttackDeleted($event)\"></app-attack-edit>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/character/character-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/character/character-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"character\">\r\n    <fieldset>\r\n        <legend>{{character?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.name\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-6\" style=\"vertical-align:bottom;\">\r\n                    <div class=\"btn-group\">\r\n                        <label><input type=\"radio\" value=\"PC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> PC</label>\r\n                        <label><input type=\"radio\" value=\"NPC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> NPC</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                    <label>Level</label>\r\n                    <input #level=\"ngModel\" name=\"level\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.level\" required />\r\n                    <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                        Please enter a level\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Base Inititive</label>\r\n                    <input #baseInititive=\"ngModel\" name=\"baseInititive\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.baseInititive\" required />\r\n                    <div *ngIf=\"baseInititive.invalid\" class=\"text-danger\">\r\n                        Please enter a base inititive\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Walk Speed</label>\r\n                    <input #walkSpeed=\"ngModel\" name=\"walkSpeed\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.walkSpeed\" required />\r\n                    <div *ngIf=\"walkSpeed.invalid\" class=\"text-danger\">\r\n                        Please enter a Walk Speed\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Strength Bonus</label>\r\n                    <input #strengthBonus=\"ngModel\" name=\"strengthBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.strengthBonus\" required />\r\n                    <div *ngIf=\"strengthBonus.invalid\" class=\"text-danger\">\r\n                        Please enter a Strength Bonus\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Hit<br />Points</label>\r\n                    <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.hitPoints\" required />\r\n                    <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Hit Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n                    <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.powerPoints\" required />\r\n                    <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Power Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n                    <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.exhaustionPoints\" required />\r\n                    <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Exhaustion Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label>Percent Required<br />Adrenal DB</label>\r\n                    <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-6\">\r\n                    <app-weapon [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n                    <app-armor [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></app-armor>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>\r\n<modal id=\"custom-modal-2\">\r\n    <div class=\"modal\">\r\n        <div class=\"modal-body\">\r\n            <h1>Roll Init - 2d10</h1>\r\n            <input name=\"rolledInit\" class=\"form-control\"\r\n                    [(ngModel)]=\"rolledInit\" required />\r\n            <button (click)=\"closeModal('custom-modal-2');\">Add To Encounter</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-background\"></div>\r\n</modal>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/character/character.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/character/character.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!characters\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0; white-space: nowrap;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newCharacter()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Characters\r\n                </h3>\r\n                <table *ngIf=\"characters\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let character of characters\" >\r\n                        <td style=\"white-space: nowrap;\">\r\n                            <a (click)=\"selectCharacter(character.id)\">({{character?.typeString}}) {{character?.name}}</a> ({{character?.level}})\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-character-edit [character]=\"selectedCharacter\" (onDelete)=\"onCharacterDeleted($event)\" (onSave)=\"onCharacterSave($event)\"></app-character-edit>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/creature/creature-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/creature/creature-edit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"creature\">\r\n    <fieldset>\r\n        <legend>{{creature?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"typeName\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.typeName\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Description</label>\r\n                    <textarea name=\"description\" class=\"form-control\"\r\n                              [(ngModel)]=\"creature.description\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Level</label>\r\n                        <input #level=\"ngModel\" name=\"baseLevel\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseLevel\" required />\r\n                        <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                            Please enter a level\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedLevel\" [(ngModel)]=\"creature.levelMod_ID\">\r\n                            <option *ngFor=\"let level of referencesService.LevelCharts\" value={{level?.id}}>\r\n                                {{level?.name}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Size</label>\r\n                    <select class=\"form-control\" name=\"selectedSize\" [(ngModel)]=\"creature.size_ID\">\r\n                        <option *ngFor=\"let item of referencesService.SizeRatings\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Movement Speed</label>\r\n                        <select class=\"form-control\" name=\"selectedMS\" [(ngModel)]=\"creature.msRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Attack Quickness</label>\r\n                        <select class=\"form-control\" name=\"selectedAQ\" [(ngModel)]=\"creature.aqRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Move</label>\r\n                        <input #move=\"ngModel\" name=\"baseMove\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseMove\" required />\r\n                        <div *ngIf=\"move.invalid\" class=\"text-danger\">\r\n                            Please enter a distance\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Max Pace</label>\r\n                    <select class=\"form-control\" name=\"selectedPace\" [(ngModel)]=\"creature.maxPace_ID\">\r\n                        <option *ngFor=\"let item of referencesService.Paces\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-1\">\r\n                    <label>Moving Maneuver Bonus</label>\r\n                    <input #move=\"ngModel\" name=\"MMBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.mmBonus\" required />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Hits</label>\r\n                        <input #hits=\"ngModel\" name=\"baseHits\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseHits\" required />\r\n                        <div *ngIf=\"hits.invalid\" class=\"text-danger\">\r\n                            Please enter hit points\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedHitMod\" [(ngModel)]=\"creature.hitMod_ID\">\r\n                            <option *ngFor=\"let item of referencesService.ConstitutionBonusCharts\" value={{item?.id}}>\r\n                                {{item?.code}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals</label>\r\n                        <select class=\"form-control\" name=\"selectedCritical\" [(ngModel)]=\"creature.criticals_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalCodes\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals Ignored</label>\r\n                        <select class=\"form-control\" name=\"selectedCriticalIgnore\" [(ngModel)]=\"creature.criticalsIgnore_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalIgnores\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>AT</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.at\" required />\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>DB</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.db\" required />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Numbers Encountered</label>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Min</label>\r\n                        <input name=\"baseMin\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.minEncountered\" />\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Max</label>\r\n                        <input name=\"baseMax\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.maxEncountered\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-12\">\r\n                    <app-attack [attacks]=\"creature.attacks\" [creatureId]=\"creature.id\" (onDelete)=\"onAttackDeleted($event)\"></app-attack>\r\n                </div>\r\n            </div>\r\n            <!--\r\n    <div class=\"row\">\r\n        <div class=\"form-group  col-sm-2\">\r\n            <label>Hit<br />Points</label>\r\n            <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.hitPoints\" required />\r\n            <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                Please enter Hit Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n            <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.powerPoints\" required />\r\n            <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                Please enter Power Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n            <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.exhaustionPoints\" required />\r\n            <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                Please enter Exhaustion Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label>Percent Required<br />Adrenal DB</label>\r\n            <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n        </div>\r\n    </div>-->\r\n            <!--<div class=\"row\">\r\n        <div class=\"form-group  col-sm-6\">\r\n            <app-weapon [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n            <app-armor [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></app-armor>\r\n        </div>\r\n    </div>-->\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/creature/creature.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/creature/creature.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!creatures\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0; white-space: nowrap;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newCreature()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Creatures\r\n                </h3>\r\n                <table *ngIf=\"creatures\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let creature of creatures\">\r\n                        <td style=\"white-space: nowrap;\">\r\n                            <a (click)=\"selectCreature(creature.id)\">{{creature?.typeName}}</a> ({{creature?.baseLevel}})\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-creature-edit [creature]=\"selectedCreature\" (onDelete)=\"onCreatureDeleted($event)\" (onSave)=\"onCreatureSave($event)\"></app-creature-edit>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/encounter/encounter.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/encounter/encounter.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid red\">encounter Component</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/game/game-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/game/game-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"game\">\r\n    <fieldset>\r\n        <legend>Game: {{game?.name}}</legend>\r\n        <form #gameForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"game.name\" required/>\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a name\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" style=\"max-width: 100px;\">\r\n                <label>Current Time</label>\r\n                <input name=\"currentTime\" class=\"form-control\"\r\n                       [(ngModel)]=\"game.currentTime\" />\r\n            </div>\r\n            <div class=\"form-group\" style=\"max-width: 100px;\">\r\n                <label>System Type</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"gameType\"\r\n                       [(ngModel)]=\"game.gameTypeString\" name=\"gameType\" readonly  />\r\n                \r\n            </div>\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"gameForm.invalid\"\r\n                        (click)=\"saveGame()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button class=\"btn btn-primary pull-right\"\r\n                        (click)=\"selectEncounter()\">\r\n                    Open Encounter\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/game/game.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/game/game.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tesy\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!games\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newGame()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Games\r\n                </h3>\r\n                <table *ngIf=\"games\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let game of games\">\r\n                        <td style=\"white-space:nowrap;\"><a (click)=\"selectGame(game.id)\">{{game?.name}}</a> ({{game?.currentTime.toFixed(2)}})</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-game-edit [game]=\"selectedGame\" (onDelete)=\"onGameDeleted($event)\" (onSave)=\"onGameSave($event)\"></app-game-edit>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/home/home.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Combat Environment Activity Tracking System</h1>\r\n<h2>Hello {{name}}</h2>\r\n<p>CEATSii second by second, threaded combat system</p>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/navmenu/navmenu.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/navmenu/navmenu.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">CEATSii </a>\r\n            <select name=\"gameSystem\" class=\"form-control\"\r\n                    [(ngModel)]=\"systemSettings.gameSystem\" (ngModelChange)=\"onChange($event)\">\r\n                <option *ngFor=\"let gtype of gameTypes\" [value]=\"gtype.value\">{{gtype.name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li *ngIf=\"game\" [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/encounter', game.id]\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> {{ game?.name }}\r\n                    </a>\r\n                    <ul>\r\n                        <li *ngFor=\"let actor of actors\" [routerLinkActive]=\"['link-active']\">\r\n                            <a [routerLink]=\"['/actor', actor.id]\">\r\n                                <span class='glyphicon glyphicon-user'></span> {{ actor.name }}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/games']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Games\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/character']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Characters\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/creature']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Creatures\r\n                    </a>\r\n                </li>\r\n\r\n                <!--<li [routerLinkActive]=\"['link-active']\">\r\n        <a [routerLink]=\"['/counter']\">\r\n            <span class='glyphicon glyphicon-education'></span> Counter\r\n        </a>\r\n    </li>\r\n    <li [routerLinkActive]=\"['link-active']\">\r\n        <a [routerLink]=\"['/fetch-data']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n        </a>\r\n    </li>-->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/weapon/weapon-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/weapon/weapon-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"weapon\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Weapon</legend>\r\n        <!--<form #weaponForm=\"ngForm\" class=\"form-horizontal\">-->\r\n        <div class=\"form-group full-row\">\r\n            <label for=\"type\" class=\"control-label\">Weapon Name</label>\r\n            <div class=\"control-area\">\r\n                <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.name\" required />\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a name\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\" \">\r\n            <label for=\"bonus\" class=\"control-label\">Bonus</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"db\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.bonus\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label *ngIf=\"isRolemaster\" for=\"ob\" class=\"control-label\">OB</label>\r\n            <label *ngIf=\"!isRolemaster\" for=\"ob\" class=\"control-label\">ATK Bonus</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"ob\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.ob\" />\r\n            </div>\r\n        </div>\r\n        <div></div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label for=\"weight\" class=\"control-label\">Weight</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"weight\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.weight\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label for=\"is2Handed\" class=\"control-label\" style=\"width: 100%;\">\r\n                <input type=\"checkbox\" name=\"is2Handed\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.is2Handed\" style=\"width: auto; display: inline-block;\" />\r\n                Is 2 Handed\r\n            </label>\r\n        </div>\r\n        <div class=\"text-center pt-2\">\r\n            <button class=\"btn btn-danger btn-sm pull-right\"\r\n                    (click)=\"delete()\">\r\n                Remove\r\n            </button>\r\n        </div>\r\n        <!--<div class=\"text-center pt-2\">\r\n\r\n        <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"weaponForm.invalid\"\r\n                (click)=\"save()\">\r\n            Save\r\n        </button>\r\n\r\n    </div>-->\r\n        <!--</form>-->\r\n    </fieldset>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/components/weapon/weapon.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/components/weapon/weapon.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!weapons\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newWeapon()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Weapons\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedWeapon\" size=\"5\" [(ngModel)]=\"selectedWeaponId\">\r\n                    <option *ngFor=\"let weapon of weapons\" value={{weapon?.name}}>\r\n                        {{weapon?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onWeaponSaved($event)\"-->\r\n            <app-weapon-edit [weapon]=\"selectedWeapon\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon-edit>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/elements/modal/modal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/elements/modal/modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal-content\" [style.width]=\"width\">\n        <div class=\"modal-header\">\n            <h3 style=\"display: inline-block; margin-right: 60px;\"><span [innerHTML]=\"title\"></span></h3>\n            <div style=\"float: right;\">\n                <button class=\"btn btn-default\" (click)=\"close();\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Close</button></div>\n        </div>\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" (click)=\"close();\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Close</button>\n        </div>\n    </div>\n    <div class=\"modal-background\"></div>\n</div>\n"

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Personal Projects\CEATSii-Combat-Tracker\CombatTracker\CombatTracker.Web\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
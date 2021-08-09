(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login-menu/login-menu.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login-menu/login-menu.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav\" *ngIf=\"isAuthenticated | async\">\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/profile\"]' title=\"Manage\">Hello {{ userName | async }}</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a  class=\"nav-link text-dark\" [routerLink]='[\"/authentication/logout\"]' [state]='{ local: true }' title=\"Logout\">Logout</a>\r\n    </li>\r\n</ul>\r\n<ul class=\"navbar-nav\" *ngIf=\"!(isAuthenticated | async)\">\r\n  <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/register\"]'>Register</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]='[\"/authentication/login\"]'>Login</a>\r\n    </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"max-width: 600px; padding:40px;\">\r\n    <div class=\"card\">\r\n        <h4 class=\"card-header\">Login</h4>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                        Login\r\n                    </button>\r\n                    <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/profile/profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/profile/profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid red\">profile Component</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/register/register.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/register/register.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n    <h4 class=\"card-header\">Register</h4>\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"firstName\">First Name</label>\r\n                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lastName\">Last Name</label>\r\n                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email</label>\r\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Register\r\n                </button>\r\n                <a routerLink=\"../login\" class=\"btn btn-link\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<header class=\"\" style=\"height: 10%!important;\">\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow h-100 \" style=\"flex-flow: column;\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" asp-area=\"\" asp-controller=\"Home\" asp-action=\"Index\">CEATSii</a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\"\r\n                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n                <app-login-menu class=\"navbar-nav\"></app-login-menu>\r\n\r\n                <main-nav-menu class=\"navbar-nav flex-grow-1\"></main-nav-menu>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"container\" style=\"text-align: center; display: block;\"><alert style=\"\"></alert></div>\r\n    </nav>\r\n</header>\r\n\r\n<div class=\"mainbody\">\r\n    <main role=\"main\" class=\"clear h-100\" style=\"\">\r\n\r\n        <div class=\"h-100\" style=\"position:relative;\">\r\n            <div class='apparea'>\r\n                <!--<div class='menu-column'>\r\n                  <div class=\"displayInfo\"></div>\r\n                  <side-nav-menu></side-nav-menu>\r\n                </div>-->\r\n                <div class='body-content'>\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>\r\n\r\n<footer class=\"border-top footer text-muted\" style=\"height: 10%!important;\">\r\n    <div class=\"container h-100\">\r\n        &copy; 2021 Solmead Productions - CEATSii - <a asp-area=\"\" asp-controller=\"Home\" asp-action=\"Privacy\">Privacy</a>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list h-100\">\r\n    <p *ngIf=\"!actors\"><em>Loading...</em></p>\r\n    <div class=\"initiative-list h-100\">\r\n        <div class=\"combatantsTableOuter h-100\" style=\"\">\r\n            <div class=\"combatantsTable h-100\" style=\"\">\r\n                <table class=\"combatants\" *ngIf=\"actors\">\r\n                    <thead class=\"combatants--header\">\r\n                        <tr>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Init\r\n                            </th>\r\n                            <th rowspan=\"2\">\r\n                                Time\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Name\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Hits\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                PPs\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Exhs\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Attack\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                Armor\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                OB\r\n                            </th>\r\n                            <!--<th style=\"vertical-align: middle;\">\r\n                            Base DB\r\n                        </th>-->\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n                                DB\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" colspan=\"3\">\r\n                                Mods\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n\r\n                            </th>\r\n                            <th style=\"vertical-align: middle;\" rowspan=\"2\">\r\n\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>\r\n                                All\r\n                            </th>\r\n                            <th>\r\n                                Spell\r\n                            </th>\r\n                            <th>\r\n                                OB\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"combatant\" *ngFor=\"let actor of actors\" (click)=\"selectActor(actor)\" [ngClass]=\"{'selected': actor.isSelected,\r\n                                                                                                            'active': actor.isActive}\">\r\n                            <td>\r\n                                {{actor.rolledInititive}}\r\n                            </td>\r\n                            <td>\r\n                                {{currentTime(actor)}}\r\n                            </td>\r\n                            <td class=\"nameColumn\" style=\"text-align:left;\">\r\n                                {{actor.name}}\r\n                            </td>\r\n                            <td class=\"actorColumn\">\r\n                                <span *ngIf=\"isControlledVisible(actor)\"><span [class]=\"actor.damageString\">{{actor.hitsRemaining}}</span>/{{actor.hitsTotal}}</span>\r\n                                <span *ngIf=\"!isControlledVisible(actor)\"><span [class]=\"actor.damageString\">{{actor.damageString}}</span></span>\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor) && actor.powerPointsTotal>0\">{{actor.powerPointsRemaining}}/{{actor.powerPointsTotal}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor)\">{{actor.exhaustionRemaining}}/{{actor.exhaustionTotal}}</span>\r\n                            </td>\r\n                            <td>\r\n                                {{currentWeapon(actor)}}\r\n                            </td>\r\n                            <td>\r\n                                {{currentArmor(actor)}}\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor) && (currentOB(actor)!='' || baseOB(actor))!=''\">{{currentOB(actor)}}/{{baseOB(actor)}}</span>\r\n                            </td>\r\n                            <!--<td>\r\n                            <span *ngIf=\"isControlledVisible(actor)\">{{baseDB(actor)}}</span>\r\n                        </td>-->\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor)\">{{currentDB(actor)}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor) && (actor.negatives + currentModifier(actor) != 0) && !isNaN(actor.negatives + currentModifier(actor))\">{{actor.negatives + currentModifier(actor)}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor) && (actor.spellNegatives + currentModifier(actor) != 0) && !isNaN(actor.spellNegatives + currentModifier(actor))\">{{actor.spellNegatives + currentModifier(actor)}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <span *ngIf=\"isControlledVisible(actor) && (actor.negatives + currentModifier(actor) + currentCrits(actor).parryNegative != 0) && !isNaN(actor.negatives + currentModifier(actor) + currentCrits(actor).parryNegative)\">{{actor.negatives + currentModifier(actor) + currentCrits(actor).parryNegative}}</span>\r\n                            </td>\r\n                            <td>\r\n                                <div *ngIf=\"actor.criticalModified!=null && actor.criticalModified!=''\">\r\n                                    {{actor.criticalModified}}\r\n                                </div>\r\n                                <div *ngIf=\"actor.criticalIgnores!=null && actor.criticalIgnores!=''\">\r\n                                    {{actor.criticalIgnores}}\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"padding:0;\">\r\n                                <div class=\"hasteArea\" style=\"display:inline-block;\">\r\n                                    <span class=\"hasted iconArea\" *ngIf=\"actor.percentAction > 100\">\r\n                                        <i class='material-icons'>directions_run</i>\r\n                                    </span>\r\n                                    <span class=\"slowed iconArea\" *ngIf=\"actor.percentAction < 100\">\r\n                                        <i class='material-icons'>slow_motion_video</i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"suprisedArea\" style=\"display:inline-block;\">\r\n                                    <span class=\"suprised iconArea\" *ngIf=\"actor.suprised\">\r\n                                        <i class='material-icons'>alarm</i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"stunArea\" style=\"display:inline-block;\">\r\n                                    <span class=\"stun iconAreaText\" *ngIf=\"currentCrits(actor).isStunned\"><i class='material-icons'>emergency</i><span class=\"textMod\">->{{actor.stunRounds}}</span></span>\r\n                                </div>\r\n                                <div class=\"\" style=\"display:inline-block;\">\r\n                                    <span class=\"concentrating iconArea\" *ngIf=\"actor.isConcentrating\">\r\n                                        <i class='material-icons'>emoji_objects</i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"\" style=\"display:inline-block;\">\r\n                                    <span class=\"adrenal iconArea\" *ngIf=\"actor.usingAdrenalDB\">\r\n                                        <i class='material-icons'>run_circle</i>\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"\" style=\"display:inline-block;\">\r\n                                    <span class=\"mustParry iconAreaText\" *ngIf=\"isMustParry(actor)\"><i class='material-icons'>error</i><span class=\"textMod\">->{{actor.parryRounds}}</span></span>\r\n                                    <span class=\"noParry iconAreaText\" *ngIf=\"isNoParry(actor)\"><i class='material-icons'>priority_high</i><span class=\"textMod\">->{{actor.parryRounds}}</span></span>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid red\">actor Component</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"armor\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Armor</legend>\r\n        <!--<form #armorForm=\"ngForm\" class=\"form-horizontal\">-->\r\n        <div class=\"form-group full-row\">\r\n            <label for=\"type\" class=\"control-label\">Armor Type</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input #name=\"ngModel\" name=\"type\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"armor.type\" required style=\"width: 40px;\" />\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a type\r\n                </div>\r\n            </div>\r\n        </div>\r\n            <div class=\"form-group full-row\" style=\"\">\r\n                <label for=\"description\" class=\"control-label\">Description</label>\r\n                <div class=\"control-area\">\r\n                    <input name=\"description\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.description\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group half-row\" style=\"\">\r\n                <label for=\"db\" class=\"control-label\">DB</label>\r\n                <div class=\"control-area control-area-number\">\r\n                    <input name=\"db\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.db\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group half-row\" style=\"\">\r\n                <label for=\"movingManeuverMod\" class=\"control-label\">Moving Maneuver</label>\r\n                <div class=\"control-area control-area-number\">\r\n                    <input name=\"movingManeuverMod\" class=\"form-control\"\r\n                           [(ngModel)]=\"armor.movingManeuverMod\" />\r\n                </div>\r\n            </div>\r\n        <div class=\"text-center pt-2\">\r\n            <button class=\"btn btn-danger btn-sm pull-right\" \r\n                    (click)=\"delete()\">\r\n                Remove\r\n            </button>\r\n        </div>\r\n                <!--<div class=\"text-center pt-2\">\r\n\r\n                    <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"armorForm.invalid\"\r\n                            (click)=\"save()\">\r\n                        Save\r\n                    </button>\r\n\r\n                </div>-->\r\n<!--</form>-->\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!armors\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newArmor()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Armors\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedArmor\" size=\"5\" [(ngModel)]=\"selectedArmorId\">\r\n                    <option *ngFor=\"let armor of armors\" value={{armor?.type}}>\r\n                        ({{armor?.type}}) {{armor?.description}}\r\n                    </option>\r\n                </select>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-armor-edit [armor]=\"selectedArmor\" (onDelete)=\"onArmorDeleted($event)\"></app-armor-edit>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-edit.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"attack\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Attack</legend>\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-sm-3\" style=\"padding-right:0;\">\r\n                <div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>OB</label>\r\n                    <input name=\"attackOB\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.ob\" />\r\n                </div>\r\n                <!--<div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>Max</label>\r\n                    <input name=\"attackmaxOB\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.maxOB\" />\r\n                </div>-->\r\n                <div class=\"col-sm-12\" style=\"padding:0\">\r\n                    <label>%</label>\r\n                    <input name=\"attackpercentChance\" class=\"form-control\"\r\n                           [(ngModel)]=\"attack.percentChance\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Attack Type</label>\r\n                <select class=\"form-control\" name=\"selectedAttackType\" [(ngModel)]=\"attack.attackType_ID\">\r\n                    <option *ngFor=\"let item of referencesService.AttackTypes\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div *ngIf=\"attack.attackType_ID!=12\" class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Size</label>\r\n                <select class=\"form-control\" name=\"selectedSize\" [(ngModel)]=\"attack.sizeRating_ID\">\r\n                    <option *ngFor=\"let item of referencesService.SizeRatings\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div *ngIf=\"attack.attackType_ID==12\" class=\"form-group col-sm-4\" style=\"padding:0;\">\r\n                <label>Weapon Type</label>\r\n                <select class=\"form-control\" name=\"selectedWeaponType\" [(ngModel)]=\"weaponTypeId\">\r\n                    <option *ngFor=\"let item of referencesService.WeaponTypes\" value={{item?.id}}>\r\n                        {{item?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n            <!--<form #weaponForm=\"ngForm\" class=\"form-horizontal\">-->\r\n            <!--<div class=\"form-group full-row\">\r\n        <label for=\"type\" class=\"control-label\">Weapon Name</label>\r\n        <div class=\"control-area\">\r\n            <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.name\" required />\r\n            <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                Please enter a name\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\" \">\r\n        <label for=\"bonus\" class=\"control-label\">Bonus</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"db\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.bonus\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label *ngIf=\"isRolemaster\" for=\"ob\" class=\"control-label\">OB</label>\r\n        <label *ngIf=\"!isRolemaster\" for=\"ob\" class=\"control-label\">ATK Bonus</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"ob\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.ob\" />\r\n        </div>\r\n    </div>\r\n    <div></div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label for=\"weight\" class=\"control-label\">Weight</label>\r\n        <div class=\"control-area control-area-number\">\r\n            <input name=\"weight\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.weight\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group half-row\" style=\"\">\r\n        <label for=\"is2Handed\" class=\"control-label\" style=\"width: 100%;\">\r\n            <input type=\"checkbox\" name=\"is2Handed\" class=\"form-control\"\r\n                   [(ngModel)]=\"weapon.is2Handed\" style=\"width: auto; display: inline-block;\" />\r\n            Is 2 Handed\r\n        </label>\r\n    </div>-->\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-danger btn-sm pull-right\"\r\n                        (click)=\"delete()\">\r\n                    Remove\r\n                </button>\r\n            </div>\r\n            <!--<div class=\"text-center pt-2\">\r\n\r\n        <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"weaponForm.invalid\"\r\n                (click)=\"save()\">\r\n            Save\r\n        </button>\r\n\r\n    </div>-->\r\n            <!--</form>-->\r\n</fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!attacks\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newAttack()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Attacks\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedAttack\" size=\"5\" [(ngModel)]=\"selectedAttackId\">\r\n                    <option *ngFor=\"let attack of attacks\" value={{attack?.id}}>\r\n                        {{attack?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onWeaponSaved($event)\"-->\r\n            <app-attack-edit [attack]=\"selectedAttack\" (onDelete)=\"onAttackDeleted($event)\"></app-attack-edit>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-edit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-edit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"character\">\r\n    <fieldset>\r\n        <legend>{{character?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.name\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-6\" style=\"vertical-align:bottom;\">\r\n                    <div class=\"btn-group\">\r\n                        <label><input type=\"radio\" value=\"PC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> PC</label>\r\n                        <label><input type=\"radio\" value=\"NPC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> NPC</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                    <label>Level</label>\r\n                    <input #level=\"ngModel\" name=\"level\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.level\" required />\r\n                    <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                        Please enter a level\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Base Inititive</label>\r\n                    <input #baseInititive=\"ngModel\" name=\"baseInititive\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.baseInititive\" required />\r\n                    <div *ngIf=\"baseInititive.invalid\" class=\"text-danger\">\r\n                        Please enter a base inititive\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Walk Speed</label>\r\n                    <input #walkSpeed=\"ngModel\" name=\"walkSpeed\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.walkSpeed\" required />\r\n                    <div *ngIf=\"walkSpeed.invalid\" class=\"text-danger\">\r\n                        Please enter a Walk Speed\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Strength Bonus</label>\r\n                    <input #strengthBonus=\"ngModel\" name=\"strengthBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.strengthBonus\" required />\r\n                    <div *ngIf=\"strengthBonus.invalid\" class=\"text-danger\">\r\n                        Please enter a Strength Bonus\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Hit<br />Points</label>\r\n                    <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.hitPoints\" required />\r\n                    <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Hit Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n                    <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.powerPoints\" required />\r\n                    <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Power Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n                    <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.exhaustionPoints\" required />\r\n                    <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Exhaustion Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label>Percent Required<br />Adrenal DB</label>\r\n                    <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-6\">\r\n                    <weapon-list [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></weapon-list>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n                    <armor-list [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></armor-list>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>\r\n<modal id=\"custom-modal-2\">\r\n    <div class=\"modal\">\r\n        <div class=\"modal-body\">\r\n            <h1>Roll Init - 2d10</h1>\r\n            <input name=\"rolledInit\" class=\"form-control\"\r\n                    [(ngModel)]=\"rolledInit\" required />\r\n            <button (click)=\"closeModal('custom-modal-2');\">Add To Encounter</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-background\"></div>\r\n</modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!characters\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0; white-space: nowrap;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newCharacter()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Characters\r\n                </h3>\r\n                <table *ngIf=\"characters\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let character of characters\" >\r\n                        <td style=\"white-space: nowrap;\">\r\n                            <a (click)=\"selectCharacter(character.id)\">({{character?.typeString}}) {{character?.name}}</a> ({{character?.level}})\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-character-edit [character]=\"selectedCharacter\" (onDelete)=\"onCharacterDeleted($event)\" (onSave)=\"onCharacterSave($event)\"></app-character-edit>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"creature\">\r\n    <fieldset>\r\n        <legend>{{creature?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"typeName\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.typeName\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Description</label>\r\n                    <textarea name=\"description\" class=\"form-control\"\r\n                              [(ngModel)]=\"creature.description\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Level</label>\r\n                        <input #level=\"ngModel\" name=\"baseLevel\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseLevel\" required />\r\n                        <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                            Please enter a level\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedLevel\" [(ngModel)]=\"creature.levelMod_ID\">\r\n                            <option *ngFor=\"let level of referencesService.LevelCharts\" value={{level?.id}}>\r\n                                {{level?.name}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Size</label>\r\n                    <select class=\"form-control\" name=\"selectedSize\" [(ngModel)]=\"creature.size_ID\">\r\n                        <option *ngFor=\"let item of referencesService.SizeRatings\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Movement Speed</label>\r\n                        <select class=\"form-control\" name=\"selectedMS\" [(ngModel)]=\"creature.msRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Attack Quickness</label>\r\n                        <select class=\"form-control\" name=\"selectedAQ\" [(ngModel)]=\"creature.aqRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Move</label>\r\n                        <input #move=\"ngModel\" name=\"baseMove\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseMove\" required />\r\n                        <div *ngIf=\"move.invalid\" class=\"text-danger\">\r\n                            Please enter a distance\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Max Pace</label>\r\n                    <select class=\"form-control\" name=\"selectedPace\" [(ngModel)]=\"creature.maxPace_ID\">\r\n                        <option *ngFor=\"let item of referencesService.Paces\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-1\">\r\n                    <label>Moving Maneuver Bonus</label>\r\n                    <input #move=\"ngModel\" name=\"MMBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.mmBonus\" required />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Hits</label>\r\n                        <input #hits=\"ngModel\" name=\"baseHits\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseHits\" required />\r\n                        <div *ngIf=\"hits.invalid\" class=\"text-danger\">\r\n                            Please enter hit points\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedHitMod\" [(ngModel)]=\"creature.hitMod_ID\">\r\n                            <option *ngFor=\"let item of referencesService.ConstitutionBonusCharts\" value={{item?.id}}>\r\n                                {{item?.code}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals</label>\r\n                        <select class=\"form-control\" name=\"selectedCritical\" [(ngModel)]=\"creature.criticals_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalCodes\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals Ignored</label>\r\n                        <select class=\"form-control\" name=\"selectedCriticalIgnore\" [(ngModel)]=\"creature.criticalsIgnore_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalIgnores\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>AT</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.at\" required />\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>DB</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.db\" required />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Numbers Encountered</label>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Min</label>\r\n                        <input name=\"baseMin\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.minEncountered\" />\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Max</label>\r\n                        <input name=\"baseMax\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.maxEncountered\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-12\">\r\n                    <attack-list [attacks]=\"creature.attacks\" [creatureId]=\"creature.id\" (onDelete)=\"onAttackDeleted($event)\"></attack-list>\r\n                </div>\r\n            </div>\r\n            <!--\r\n    <div class=\"row\">\r\n        <div class=\"form-group  col-sm-2\">\r\n            <label>Hit<br />Points</label>\r\n            <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.hitPoints\" required />\r\n            <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                Please enter Hit Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n            <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.powerPoints\" required />\r\n            <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                Please enter Power Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n            <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.exhaustionPoints\" required />\r\n            <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                Please enter Exhaustion Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label>Percent Required<br />Adrenal DB</label>\r\n            <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n        </div>\r\n    </div>-->\r\n            <!--<div class=\"row\">\r\n        <div class=\"form-group  col-sm-6\">\r\n            <app-weapon [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n            <app-armor [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></app-armor>\r\n        </div>\r\n    </div>-->\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"wrapper\">\r\n  <div class=\"area\">\r\n    <div class=\"list\">\r\n      <p *ngIf=\"!creatures\"><em>Loading...</em></p>\r\n      <div class=\"mainList\">\r\n        <h3 style=\"display:block; margin-top:0; white-space: nowrap;\">\r\n          <div style=\"float:right;\">\r\n            <button class=\"btn btn-primary btn-sm\" (click)=\"newCreature()\">\r\n              <span class=\"glyphicon glyphicon-plus\"></span> New\r\n            </button>\r\n          </div>\r\n          Creatures\r\n        </h3>\r\n        <table *ngIf=\"creatures\" class=\"table table-striped\">\r\n          <tr>\r\n            <th style=\"vertical-align: middle;\">\r\n              System\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Book\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Name\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Level\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Size\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Number\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Speed\r\n            </th>\r\n          </tr>\r\n          <tr *ngFor=\"let creature of creatures\">\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.gameTypeString}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.book.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              <a (click)=\"selectCreature(creature.id)\">{{creature?.typeName}}</a>\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.baseLevel}}{{creature?.levelMod.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.size.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.minEncountered}} - {{creature?.maxEncountered}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.msRating.name}} / {{creature?.aqRating.name}}\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"edit\">\r\n      <app-creature-edit [creature]=\"selectedCreature\" (onDelete)=\"onCreatureDeleted($event)\" (onSave)=\"onCreatureSave($event)\"></app-creature-edit>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row h-100\">\r\n    <div class=\"col-7 h-100\">\r\n        <app-treeview [treeModel]=\"treeModel\" (onSelect)=\"onTreeSelect($event)\"></app-treeview>\r\n    </div>\r\n    <div class=\"col-2 h-100\">\r\n        <!--<label for=\"modSelect\">Modifier</label>-->\r\n        <select id=\"modSelect\" class=\"form-control\" [attr.size]=\"mods.length\" (change)='onModSelected()'  [(ngModel)]=\"currentModifier\" >\r\n            <option *ngFor=\"let mod of mods\" [value]=\"mod\">{{mod}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-3 h-100\">\r\n        <button class=\"btn btn-warning btn-sm\" (click)=\"doAction()\">\r\n            <i class='material-icons'>stars</i> Do Action\r\n        </button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"cssClasses\"  [style.background-color]=\"currentBackColor\"  [ngClass]=\"{'selected': action.isSelected}\"  (click)=\"selectAction()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-2\">{{currentTime}}</div>\r\n        <div class=\"col-6\" style=\"font-weight:bold;\">{{whoIsActing.name}}</div>\r\n        <div class=\"col-1\" *ngIf=\"isCurrent\">{{whoIsActing.level}}</div>\r\n        <div class=\"col-3\" *ngIf=\"isCurrent\">\r\n            <span *ngIf=\"isControlledVisible\">Hits: {{whoIsActing.hitsRemaining}}/{{whoIsActing.hitsTotal}}</span>\r\n            <span *ngIf=\"!isControlledVisible\">{{whoIsActing.damageString}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-3\">\r\n            <span *ngIf=\"isCurrent\">Init: {{whoIsActing.inititive}}</span>\r\n        </div>\r\n        <div class=\"col-6 nameArea\">{{action.name}}</div>\r\n        <div class=\"col-3\" *ngIf=\"isCurrent && isControlledVisible\">Exhs: {{whoIsActing.exhaustionRemaining}}/{{whoIsActing.exhaustionTotal}}</div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-2\" style=\"text-align:right;\">Note:</div>\r\n        <div class=\"col-7 noteArea\" style=\"font-style: italic;\">{{action.note}}</div>\r\n        <div class=\"col-3 powerPointsArea\" *ngIf=\"isCurrent && whoIsActing.powerPointsTotal>0 && isControlledVisible\">Ppts: {{whoIsActing.powerPointsRemaining}}/{{whoIsActing.powerPointsTotal}}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-2\">\r\n            &nbsp;\r\n        </div>\r\n        <div class=\"col-5 criticalModifiersArea\">\r\n            <span *ngIf=\"isCurrent\">{{whoIsActing.criticalModified}}</span>\r\n        </div>\r\n        <div class=\"col-5 criticalIgnoresArea\">\r\n            <span *ngIf=\"isCurrent\">{{whoIsActing.criticalIgnores}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-1 hasteArea\">\r\n            <span class=\"hasted iconArea\" *ngIf=\"isCurrent && whoIsActing.percentAction > 100\">\r\n                <i class='material-icons'>directions_run</i>\r\n            </span>\r\n            <span class=\"slowed iconArea\" *ngIf=\"isCurrent && whoIsActing.percentAction < 100\">\r\n                <i class='material-icons'>slow_motion_video</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"col-1 suprisedArea\">\r\n            <span class=\"suprised iconArea\" *ngIf=\"isCurrent && whoIsActing.suprised\">\r\n                <i class='material-icons'>alarm</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"col-2 stunArea\">\r\n            <span class=\"stun iconAreaText\" *ngIf=\"isCurrent && currentCrits.isStunned\"><i class='material-icons'>emergency</i><span class=\"textMod\">->{{whoIsActing.stunRounds}}</span></span>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div>\r\n                <span *ngIf=\"isCurrent && isControlledVisible && ((whoIsActing.negatives + action.currentModifier!=0) || (whoIsActing.spellNegatives + action.currentModifier!=0))\">Modifier: {{whoIsActing.negatives + action.currentModifier}}/{{whoIsActing.spellNegatives + action.currentModifier}}</span>\r\n                &nbsp;\r\n            </div>\r\n            <div>\r\n                <span *ngIf=\"isCurrent\">Armor-> {{currentArmor}}</span>\r\n                &nbsp;\r\n            </div>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <div>\r\n                &nbsp;\r\n            </div>\r\n            <div>\r\n                <span *ngIf=\"isCurrent && isControlledVisible\">DB->{{currentDB}}</span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-1\">\r\n            <span class=\"concentrating iconArea\" *ngIf=\"isCurrent && whoIsActing.isConcentrating\">\r\n                <i class='material-icons'>emoji_objects</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"col-1\">\r\n            <span class=\"adrenal iconArea\" *ngIf=\"isCurrent && whoIsActing.usingAdrenalDB\">\r\n                <i class='material-icons'>run_circle</i>\r\n            </span>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <span class=\"mustParry iconAreaText\" *ngIf=\"isCurrent && isMustParry\"><i class='material-icons'>error</i><span class=\"textMod\">->{{whoIsActing.parryRounds}}</span></span>\r\n            <span class=\"noParry iconAreaText\" *ngIf=\"isCurrent && isNoParry\"><i class='material-icons'>priority_high</i><span class=\"textMod\">->{{whoIsActing.parryRounds}}</span></span>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <div *ngIf=\"isCurrent\">Weapon-> {{currentWeapon}}</div>\r\n        </div>\r\n        <div class=\"col-2\">\r\n            <div>\r\n                <span *ngIf=\"isCurrent && isControlledVisible\">OB->{{currentOB}}</span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!--{{action.actionTypeString}}<br />\r\n    {{action.stateString}}<br />\r\n    {{action.typeString}}<br />\r\n    {{action.reoccuring}}-->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/actions-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/actions-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"list\">\r\n    <p *ngIf=\"!actions\"><em>Loading...</em></p>\r\n    <div class=\"mainActionList\">\r\n        <div class=\"ActorActionBack\" *ngFor=\"let action of actions\" [style.margin-left]=\"getLeft(action)\" >\r\n            <action-view [action]=\"action\" [isSelectable]=\"isSelectable\"  (onSelect)=\"selectAction($event)\" [viewType]=\"viewType\"></action-view>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-edit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  *ngIf=\"game\">\r\n    <fieldset>\r\n        <legend>Game: {{game?.name}}</legend>\r\n        <form #gameForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label>Name</label>\r\n                <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"game.name\" required/>\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a name\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\" style=\"max-width: 100px;\">\r\n                <label>Current Time</label>\r\n                <input name=\"currentTime\" class=\"form-control\"\r\n                       [(ngModel)]=\"game.currentTime\" />\r\n            </div>\r\n            <div class=\"form-group\" style=\"max-width: 100px;\">\r\n                <label>System Type</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"gameType\"\r\n                       [(ngModel)]=\"game.gameTypeString\" name=\"gameType\" readonly  />\r\n                \r\n            </div>\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"gameForm.invalid\"\r\n                        (click)=\"saveGame()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button class=\"btn btn-primary pull-right\"\r\n                        (click)=\"selectEncounter()\">\r\n                    Open Encounter\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--tesy\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">-->\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!games\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newGame()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Games\r\n                </h3>\r\n                <table *ngIf=\"games\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let game of games\">\r\n                        <td style=\"white-space:nowrap;\"><a (click)=\"selectGame(game.id)\">{{game?.name}}</a> ({{game?.currentTime.toFixed(2)}})</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"edit\">-->\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <!--<app-game-edit [game]=\"selectedGame\" (onDelete)=\"onGameDeleted($event)\" (onSave)=\"onGameSave($event)\"></app-game-edit>\r\n        </div>\r\n    </div>\r\n</div>-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-edit.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"weapon\" class=\"edit-area\">\r\n    <fieldset>\r\n        <legend>Weapon</legend>\r\n        <!--<form #weaponForm=\"ngForm\" class=\"form-horizontal\">-->\r\n        <div class=\"form-group full-row\">\r\n            <label for=\"type\" class=\"control-label\">Weapon Name</label>\r\n            <div class=\"control-area\">\r\n                <input #name=\"ngModel\" name=\"name\" type=\"text\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.name\" required />\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter a name\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\" \">\r\n            <label for=\"bonus\" class=\"control-label\">Bonus</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"db\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.bonus\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label *ngIf=\"isRolemaster\" for=\"ob\" class=\"control-label\">OB</label>\r\n            <label *ngIf=\"!isRolemaster\" for=\"ob\" class=\"control-label\">ATK Bonus</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"ob\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.ob\" />\r\n            </div>\r\n        </div>\r\n        <div></div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label for=\"weight\" class=\"control-label\">Weight</label>\r\n            <div class=\"control-area control-area-number\">\r\n                <input name=\"weight\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.weight\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group half-row\" style=\"\">\r\n            <label for=\"is2Handed\" class=\"control-label\" style=\"width: 100%;\">\r\n                <input type=\"checkbox\" name=\"is2Handed\" class=\"form-control\"\r\n                       [(ngModel)]=\"weapon.is2Handed\" style=\"width: auto; display: inline-block;\" />\r\n                Is 2 Handed\r\n            </label>\r\n        </div>\r\n        <div class=\"text-center pt-2\">\r\n            <button class=\"btn btn-danger btn-sm pull-right\"\r\n                    (click)=\"delete()\">\r\n                Remove\r\n            </button>\r\n        </div>\r\n        <!--<div class=\"text-center pt-2\">\r\n\r\n        <button class=\"btn btn-danger btn-sm pull-right\" [disabled]=\"weaponForm.invalid\"\r\n                (click)=\"save()\">\r\n            Save\r\n        </button>\r\n\r\n    </div>-->\r\n        <!--</form>-->\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!weapons\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newWeapon()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Weapons\r\n                </h3>\r\n                <select class=\"form-control\" name=\"selectedWeapon\" size=\"5\" [(ngModel)]=\"selectedWeaponId\">\r\n                    <option *ngFor=\"let weapon of weapons\" value={{weapon?.name}}>\r\n                        {{weapon?.name}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onWeaponSaved($event)\"-->\r\n            <app-weapon-edit [weapon]=\"selectedWeapon\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon-edit>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/alert/alert.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/alert/alert.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/modal/modal.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/modal/modal.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal\">\n    <div class=\"modal-content\" [style.width]=\"width\">\n        <div class=\"modal-header\">\n            <h3 style=\"display: inline-block; margin-right: 60px;\"><span [innerHTML]=\"title\"></span></h3>\n            <div style=\"float: right;\">\n                <button class=\"btn btn-default\" (click)=\"close();\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Close</button></div>\n        </div>\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" (click)=\"close();\" data-dismiss=\"modal\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-remove-sign\"></span> Close</button>\n        </div>\n    </div>\n    <div class=\"modal-background\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/treeview/treeview.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elements/treeview/treeview.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"tree-view\">\r\n    <div class=\"tree-view-inner\">\r\n        <ng-container *ngTemplateOutlet=\"treeViewList; context:{ $implicit: items,role:'tree',treeid:model.treeNodeId,parentid:'root',lid:'0' }\">\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n<ng-template #treeViewList let-list let-role='role' let-treeid=\"treeid\" let-parentid=\"parentid\" let-lid=\"lid\">\r\n    <ul [attr.role]=\"role\" id=\"treeView_ul_{{treeid}}_{{parentid}}\" [attr.aria-labelledby]=\"this['tree_view_'+treeid]\" *ngIf=\"isChildrenExists(list)\" #ultags>\r\n        <li *ngFor=\"let item of list;let i=index\"\r\n            [id]=\"getTreeItemId(item,treeid)\"\r\n            [attr.data-code]=\"item[model.cid]\"\r\n            [attr.data-childcount]=\"getChildCount(item)\"\r\n            [attr.data-isSelected]=\"item.isSelected\"\r\n            [attr.data-isOpen]=\"item.isOpen\"\r\n            [attr.data-index]=\"i\"\r\n            [attr.data-first]=\"i==0?1:0\"\r\n            [attr.data-last]=\"i==list.length-1?1:0\"\r\n            role=\"treeitem\"\r\n            #options [attr.aria-expanded]=\"collapsedState(item)\">\r\n            <div class=\"treeNodeText\" (click)=\"toggleSelection($event,item)\">\r\n                <i class='material-icons' [id]=\"getIconId(item,treeid)\">{{getExpandCollapseClass(item)}}</i><span class=\"tree-item-label\">{{item[model.lid]}}</span>\r\n            </div>\r\n            <ng-container *ngTemplateOutlet=\"treeViewList; context:{ $implicit: item.children,role:'group',treeid:model.treeNodeId,parentid:item.code  }\">\r\n            </ng-container>\r\n        </li>\r\n    </ul>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav flex-grow-1\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link text-dark\" [routerLink]=\"['/home']\">Home</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"currentUser\">\r\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n            Encounters</a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"dropdown-item\" >\r\n                <a class=\"nav-link text-dark\" [routerLink]=\"['/creatures']\">Create New Encounter</a>\r\n            </li>\r\n            <li class=\"dropdown-item\" *ngFor=\"let game of games\">\r\n                <a class=\"nav-link text-dark\" [routerLink]=\"['/encounter', game.id]\">{{game.gameTypeString}} - {{game.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"currentUser\">\r\n        <a class=\"nav-link text-dark\" [routerLink]=\"['/creatures']\">Creature Compendium</a>\r\n    </li>\r\n    <li class=\"nav-item\" *ngIf=\"currentUser\">\r\n        <a class=\"nav-link text-dark\" [routerLink]=\"['/mycreatures']\">My Creatures</a>\r\n    </li>\r\n    <!--<li class=\"nav-item\" *ngIf=\"currentUser\">\r\n        <select name=\"gameSystem\" class=\"form-control\"\r\n                [(ngModel)]=\"systemSettings.gameSystem\" (ngModelChange)=\"onChange($event)\">\r\n            <option *ngFor=\"let gtype of gameTypes\" [value]=\"gtype.value\">{{gtype.name}}</option>\r\n        </select>\r\n    </li>-->\r\n    <!--<li class=\"nav-item\">\r\n      <a class=\"nav-link text-dark\" asp-area=\"\" asp-controller=\"Home\" asp-action=\"Privacy\">Privacy</a>\r\n    </li>-->\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/side-nav-menu/side-nav-menu.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/side-nav-menu/side-nav-menu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='main-nav'>\r\n  <div class=''>\r\n    <div class=''>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">CEATSii </a>\r\n      <!--<select name=\"gameSystem\" class=\"form-control\"\r\n              [(ngModel)]=\"systemSettings.gameSystem\" (ngModelChange)=\"onChange($event)\">\r\n        <option *ngFor=\"let gtype of gameTypes\" [value]=\"gtype.value\">{{gtype.name}}</option>\r\n      </select>-->\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class=''>\r\n      <ul class=''>\r\n        <!--<li *ngIf=\"game\" [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/encounter', game.id]\">\r\n            <span class='glyphicon glyphicon-th-list'></span> {{ game?.name }}\r\n          </a>\r\n          <ul>\r\n            <li *ngFor=\"let actor of actors\" [routerLinkActive]=\"['link-active']\">\r\n              <a [routerLink]=\"['/actor', actor.id]\">\r\n                <span class='glyphicon glyphicon-user'></span> {{ actor.name }}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/games']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Games\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/character']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Characters\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/creature']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> Creatures\r\n          </a>\r\n        </li>-->\r\n\r\n        <!--<li [routerLinkActive]=\"['link-active']\">\r\n            <a [routerLink]=\"['/counter']\">\r\n                <span class='glyphicon glyphicon-education'></span> Counter\r\n            </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n            <a [routerLink]=\"['/fetch-data']\">\r\n                <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n            </a>\r\n        </li>-->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/character/character.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/character/character.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid red\">character Component</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid red\">creature Component</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/encounter/encounter.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/encounter/encounter.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100\"  [ngClass]=\"{'fullView': isGM}\">\r\n    <div class=\"row h-100\">\r\n        <div class=\"col-3 h-100 columnLeft\" *ngIf=\"isGM\">\r\n            <div class=\"encounter-box\">\r\n                <h2>Library</h2>\r\n                encounter Component\r\n            </div>\r\n        </div>\r\n        <div class=\"h-100 columnCenter\" [ngClass]=\"{'col-6': isGM,\r\n                                       'col-7': !isGM}\">\r\n            <div class=\" actorListArea\" [ngClass]=\"{'h-50': isGM,\r\n                                       'h-100': !isGM}\">\r\n                <h2 class=\"actorListHeader\">\r\n                    <span *ngIf=\"isGM\" style=\"float:right; display:block;\">\r\n                        <button class=\"btn btn-warning btn-sm\" (click)=\"addDamage()\">\r\n                            <i class='material-icons'>stars</i> Add Damage\r\n                        </button>\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"addSpell()\">\r\n                            <i class='material-icons'>supervised_user_circle</i> Cast Spell/Psychic\r\n                        </button>\r\n                        <button class=\"btn btn-success btn-sm\" (click)=\"addStunned()\">\r\n                            <i class='material-icons'>run_circle</i> Add Stunned Maneuvering\r\n                        </button>\r\n                        <button class=\"btn btn-info btn-sm\" (click)=\"rollD100Open()\">\r\n                            <i class='material-icons'>auto_awesome</i> Roll D100 Open\r\n                        </button>\r\n                        <button class=\"btn btn-info btn-sm\" (click)=\"rollD100()\">\r\n                            <i class='material-icons'>auto_awesome</i> Roll D100\r\n                        </button>\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"resetEncounter()\">\r\n                            <i class='material-icons'>settings_backup_restore</i> Reset Encounter\r\n                        </button>\r\n                    </span>\r\n                    Actors\r\n                </h2>\r\n                <div class=\"h-90\">\r\n                    <actor-list [actors]=\"actors\" [viewType]=\"viewType\" [isSelectable]=\"isGM\" (onSelect)=\"selectActor($event)\" (onDeleteClick)=\"deleteActor($event)\"></actor-list>\r\n                </div>\r\n            </div>\r\n            <div class=\"h-50 row\" *ngIf=\"isGM\">\r\n                <div class=\"col-5 h-100\">\r\n\r\n                </div>\r\n                <div class=\" col-7 h-100\">\r\n                    <div class=\"encounter-box actionEditArea\" *ngIf=\"selectedAction!=null\">\r\n                        <h2>\r\n                            Action\r\n                        </h2>\r\n                        <div class=\"actionEditControl\">\r\n                            <action-edit [selectedAction]=\"selectedAction\" [actionTree]=\"currentActionTree\" (onProposeAction)=\"onProposeAction($event)\" (onDoAction)=\"onDoAction($event)\"></action-edit>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"h-100 columnRight\" [ngClass]=\"{'col-3': isGM,\r\n                                       'col-5': !isGM}\">\r\n            <div class=\"encounter-box actionsList\">\r\n                <h2>\r\n                    <span *ngIf=\"isGM\" style=\"float:right; display:block;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"moveToNext()\">\r\n                            <i class='material-icons'>navigate_next</i> Move Next\r\n                        </button>\r\n                    </span>\r\n                    Actions <span class=\"subText\">Current Time: {{currentTime}}</span>\r\n                </h2>\r\n                <actions-list [actions]=\"actions\" [viewType]=\"viewType\" [isSelectable]=\"isGM\" (onSelect)=\"selectAction($event)\" (onDeleteClick)=\"deleteAction($event)\" ></actions-list>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Combat Environment Activity Tracking System</h1>\r\n    <h2>Hello {{name}}</h2>\r\n    <p>CEATSii second by second, threaded combat system</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_helpers/ApiPath.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/_helpers/ApiPath.interceptor.ts ***!
  \*************************************************/
/*! exports provided: ApiPathInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return ApiPathInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApiPathInterceptor = class ApiPathInterceptor {
    constructor() {
    }
    intercept(req, next) {
        var bUrl = this.getBaseUrl();
        if (bUrl == "/") {
            bUrl = "";
        }
        var rUrl = req.url;
        //debugger;
        const apiReq = req.clone({ url: bUrl + `/${rUrl}` });
        return next.handle(apiReq);
    }
    getBaseUrl() {
        return document.getElementsByTagName('baseapi')[0].attributes[0].nodeValue;
    }
};
ApiPathInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ApiPathInterceptor);



/***/ }),

/***/ "./src/app/_helpers/DateEx.ts":
/*!************************************!*\
  !*** ./src/app/_helpers/DateEx.ts ***!
  \************************************/
/*! exports provided: formatTimeSpan, formatDate, formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeSpan", function() { return formatTimeSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function formatTimeSpan(ts) {
    if (ts <= 0) {
        return "";
    }
    var ms = ts - Math.floor(ts);
    ts = ts - ms;
    var second = ts % 60;
    ts = ts - second;
    second = second + ms;
    ts = ts / 60;
    var minute = ts % 60;
    ts = ts - minute;
    ts = ts / 60;
    var hour = Math.floor(ts);
    var shour = "" + hour;
    var sminute = "" + minute;
    var ssecond = "" + Math.round(second * 1000) / 1000;
    if (hour < 10) {
        shour = "0" + shour;
    }
    if (minute < 10) {
        sminute = "0" + sminute;
    }
    if (second < 10) {
        ssecond = "0" + ssecond;
    }
    return shour + ":" + sminute + ":" + ssecond;
}
function formatDate(dt) {
    var curr_date = dt.getDate();
    var curr_month = dt.getMonth() + 1; //Months are zero based
    var curr_year = dt.getFullYear();
    return '' + curr_month + "/" + curr_date + "/" + curr_year;
}
;
function formatTime(dt, hideMs) {
    hideMs = !!hideMs;
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    var ms = dt.getMilliseconds();
    var ampm = "AM";
    if (hour > 11) {
        hour = hour - 12;
        ampm = "PM";
    }
    if (hour == 0) {
        hour = 12;
    }
    var sminute = "" + minute;
    var ssecond = "" + second;
    if (minute < 10) {
        sminute = "0" + sminute;
    }
    if (second < 10) {
        ssecond = "0" + ssecond;
    }
    return hour + ":" + sminute + (hideMs ? "" : ":" + ssecond) + " " + ampm + (hideMs ? "" : ":" + ms);
}
;
Date.prototype.formatDate = function () {
    return formatDate(this);
};
Date.prototype.formatTime = function (hideMs) {
    return formatTime(this, hideMs);
};


/***/ }),

/***/ "./src/app/_helpers/EnumEx.ts":
/*!************************************!*\
  !*** ./src/app/_helpers/EnumEx.ts ***!
  \************************************/
/*! exports provided: EnumEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return EnumEx; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EnumEx {
    static getNamesAndValues(e) {
        var nms = EnumEx.getNames(e);
        var mpped = nms.map(n => ({ name: n, value: e[n] }));
        var a = 1;
        return mpped;
    }
    static getNames(e) {
        return EnumEx.getObjValues(e).filter(v => typeof v === "string");
    }
    static getValues(e) {
        return EnumEx.getObjValues(e).filter(v => typeof v === "number");
    }
    static getObjValues(e) {
        return Object.keys(e).map(k => e[k]);
    }
}


/***/ }),

/***/ "./src/app/_helpers/LinqToJs.ts":
/*!**************************************!*\
  !*** ./src/app/_helpers/LinqToJs.ts ***!
  \**************************************/
/*! exports provided: Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return Queryable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//module Linq {
class Queryable {
    constructor(array) {
        this.array = array;
        this.add = (item) => {
            this.array.push(item);
        };
        this.remove = (item) => {
            this.array.remove(item);
        };
        this.push = (item) => {
            this.array.push(item);
        };
        this.toArray = () => {
            return this.array.slice(0);
        };
        this.distinct = (compareFunction) => {
            var lst = new Queryable();
            this.forEach((t) => {
                if (!lst.contains(t, compareFunction)) {
                    lst.add(t);
                }
            });
            return lst;
        };
        this.where = (whereClause) => {
            if (!whereClause) {
                return new Queryable(this.array.slice(0));
            }
            var lst2 = [];
            this.array.forEach(item => {
                if (whereClause(item)) {
                    lst2.push(item);
                }
            });
            return new Queryable(lst2);
        };
        this.any = (whereClause) => {
            if (!whereClause) {
                return this.array.length > 0;
            }
            return this.where(whereClause).any();
        };
        this.forEach = (func) => {
            var list = this.array;
            if (func == null) {
                return false;
            }
            $.each(list, (i, item) => {
                func(item);
            });
            return true;
        };
        this.sum = (func) => {
            if (!func) {
                func = (obj) => {
                    return obj;
                };
            }
            var cnt = 0;
            this.forEach(item => { cnt = cnt + func(item); });
            return cnt;
        };
        this.max = (func) => {
            if (!func) {
                func = (obj) => {
                    return obj;
                };
            }
            var mx = func(this.first());
            this.forEach(item => {
                var v = func(item);
                if (mx < v) {
                    mx = v;
                }
            });
            return mx;
        };
        this.min = (func) => {
            if (!func) {
                func = (obj) => {
                    return obj;
                };
            }
            var mx = func(this.first());
            this.forEach(item => {
                var v = func(item);
                if (mx > v) {
                    mx = v;
                }
            });
            return mx;
        };
        this.select = (selectItem) => {
            if (selectItem == null) {
                return new Queryable(this.array.slice(0));
            }
            return new Queryable(this.array.map(selectItem));
        };
        this.sortBy = (orderBy, isDescending = false) => {
            this.sortByFunction((ob1, ob2) => {
                var v1 = orderBy(ob1);
                var v2 = orderBy(ob2);
                if (v1 > v2) {
                    return 1;
                }
                if (v1 < v2) {
                    return -1;
                }
                return 0;
            }, isDescending);
        };
        this.sortByFunction = (orderBy, isDescending = false) => {
            isDescending = !!isDescending;
            if (orderBy == null) {
                return; // new Queryable<T>(this.array.slice(0));
            }
            //var clone = this.array.slice(0);
            this.array.sort(orderBy);
            if (isDescending) {
                this.array = this.array.reverse();
            }
            return; // (new Queryable<T>(clone));
        };
        this.orderBy = (orderBy, isDescending = false) => {
            return this.orderByFunction((ob1, ob2) => {
                var v1 = orderBy(ob1);
                var v2 = orderBy(ob2);
                if (v1 > v2) {
                    return 1;
                }
                if (v1 < v2) {
                    return -1;
                }
                return 0;
            }, isDescending);
        };
        this.orderByFunction = (orderBy, isDescending = false) => {
            isDescending = !!isDescending;
            if (orderBy == null) {
                return new Queryable(this.array.slice(0));
            }
            var clone = this.array.slice(0);
            clone.sort(orderBy);
            if (isDescending) {
                clone = clone.reverse();
            }
            return (new Queryable(clone));
        };
        this.reverse = () => {
            return new Queryable(this.array.reverse());
        };
        this.skip = (count) => {
            if (this.length < count) {
                return new Queryable([]);
            }
            this.array.splice(0, count);
            return new Queryable(this.array.slice(0));
        };
        this.take = (count) => {
            if (this.length == 0) {
                return new Queryable([]);
            }
            if (count > this.length) {
                count = this.length;
            }
            this.array.splice(count - 1, this.length - count);
            return new Queryable(this.array.slice(0));
        };
        this.first = () => {
            if (this.length == 0) {
                return null;
            }
            return this.array[0];
        };
        this.last = () => {
            if (this.length == 0) {
                return null;
            }
            return this.array[this.length - 1];
        };
        this.findItem = (selectItem) => {
            return this.where(selectItem).first();
        };
        this.find = (selectItem) => {
            return this.where(selectItem).first();
        };
        this.contains = (item, compareFunction) => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            return this.where((item2) => compareFunction(item, item2)).any();
        };
        this.union = (arr) => {
            if (arr instanceof Queryable) {
                return new Queryable(this.array.concat(arr.toArray()));
            }
            else {
                return new Queryable(this.array.concat(arr));
            }
        };
        this.intersect = (arr, compareFunction) => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            var q = null;
            if (arr instanceof Queryable) {
                q = arr;
            }
            else {
                q = new Queryable(this.array.concat(arr));
            }
            var lst2 = [];
            this.forEach((item) => {
                if (q.contains(item, compareFunction)) {
                    lst2.push(item);
                }
            });
            return new Queryable(lst2);
        };
        this.difference = (arr, compareFunction) => {
            if (!compareFunction) {
                compareFunction = this.equals;
            }
            var q = null;
            if (arr instanceof Queryable) {
                q = arr;
            }
            else {
                q = new Queryable(this.array.concat(arr));
            }
            var lst2 = [];
            this.forEach((item) => {
                if (!q.contains(item, compareFunction)) {
                    lst2.push(item);
                }
            });
            return new Queryable(lst2);
        };
        this.copy = () => {
            return new Queryable(this.array.slice(0));
        };
        this.asQueryable = () => {
            return new Queryable(this.array.slice(0));
        };
        if (this.array == null) {
            this.array = new Array();
        }
    }
    equals(x, y) {
        if (x === y)
            return true;
        // if both x and y are null or undefined and exactly the same
        if (!(x instanceof Object) || !(y instanceof Object))
            return false;
        // if they are not strictly equal, they both need to be Objects
        if (x.constructor !== y.constructor)
            return false;
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.
        for (var p in x) {
            if (!x.hasOwnProperty(p))
                continue;
            // other properties were tested using x.constructor === y.constructor
            if (!y.hasOwnProperty(p))
                return false;
            // allows to compare x[ p ] and y[ p ] when set to undefined
            if (x[p] === y[p])
                continue;
            // if they have the same strict value or identity then they are equal
            if (typeof (x[p]) !== "object")
                return false;
            // Numbers, Strings, Functions, Booleans must be strictly equal
            if (!this.equals(x[p], y[p]))
                return false;
            // Objects and Arrays must be tested recursively
        }
        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
            // allows x[ p ] to be set to undefined
        }
        return true;
    }
    get length() {
        return this.array.length;
    }
    get count() {
        return this.array.length;
    }
}
//}
Array.prototype.asQueryable = function () {
    return new Queryable(this);
};
Array.prototype.remove = function (item) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//where: (func: (obj: T) => boolean) => Array<T>;
//any: (func: (obj: T) => boolean) => boolean;
////ForEach: (func: (obj: T) => void) => void;
//sum: (func: (obj: T) => number) => number;
//select: (func: (obj: T) => any) => Array<any>;
//orderBy: (func: (obj: T) => number, isDescending: boolean) => Array<T>;
//skip: (count: number) => Array<T>;
//take: (count: number) => Array<T>;
//first: () => T;
//last: () => T;
////FindItem: (func: (obj: T) => boolean) => T;
////Find: (func: (obj: T) => boolean) => T;
//contains: (item: T, func: (obj: T, obj2: T) => boolean) => T;
//union: (arr: Array<T>) => Array<T>;
//intersect: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;
//difference: (arr: Array<T>, func: (obj: T, obj2: T) => boolean) => Array<T>;
Array.prototype.sortBy = function (orderBy, isDescending) {
    var arr = this;
    arr.asQueryable().sortBy(orderBy, isDescending);
};
Array.prototype.where = function (where) {
    var arr = this;
    return arr.asQueryable().where(where).toArray();
};
Array.prototype.any = function (where) {
    var arr = this;
    return arr.asQueryable().any(where);
};
//Array.prototype.ForEach = function (func) {
//    var arr = <Array<any>>this;
//    arr.asQueryable().forEach(func);
//};
Array.prototype.sum = function (func) {
    var arr = this;
    return arr.asQueryable().sum(func);
};
Array.prototype.select = function (func) {
    var arr = this;
    return arr.asQueryable().select(func).toArray();
};
Array.prototype.orderBy = function (orderBy, isDescending) {
    var arr = this;
    return arr.asQueryable().orderBy(orderBy, isDescending).toArray();
};
Array.prototype.skip = function (count) {
    var arr = this;
    return arr.asQueryable().skip(count).toArray();
};
Array.prototype.take = function (count) {
    var arr = this;
    return arr.asQueryable().take(count).toArray();
};
Array.prototype.first = function () {
    var arr = this;
    return arr.asQueryable().first();
};
Array.prototype.last = function () {
    var arr = this;
    return arr.asQueryable().last();
};
//Array.prototype.FindItem = function (select) {
//    var arr = <Array<any>>this;
//    return arr.asQueryable().findItem(select);
//};
//Array.prototype.Find = function (select) {
//    var arr = <Array<any>>this;
//    return arr.asQueryable().findItem(select);
//};
Array.prototype.contains = function (item, compareFunction) {
    var arr = this;
    return arr.asQueryable().contains(item, compareFunction);
};
Array.prototype.union = function (arr) {
    var arr2 = this;
    return arr2.asQueryable().union(arr).toArray();
};
Array.prototype.intersect = function (arr, compareFunction) {
    var arr2 = this;
    return arr2.asQueryable().intersect(arr, compareFunction).toArray();
};
Array.prototype.difference = function (arr, compareFunction) {
    var arr2 = this;
    return arr2.asQueryable().difference(arr, compareFunction).toArray();
};


/***/ }),

/***/ "./src/app/_helpers/Tasks.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/Tasks.ts ***!
  \***********************************/
/*! exports provided: MutexLock, RecurringTask, delay, whenTrue, WhenAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutexLock", function() { return MutexLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringTask", function() { return RecurringTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenTrue", function() { return whenTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhenAll", function() { return WhenAll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MutexLock {
    //private refreshLock:Lock.Locker = null;
    constructor(maxLockTime) {
        this.maxLockTime = maxLockTime;
        this.locked = false;
        this.lastCalled = null;
        //this.refreshLock = new Lock.Locker(maxLockTime);
    }
    get isLocked() {
        var seconds = 0;
        if (this.lastCalled) {
            seconds = ((new Date()).getTime() - this.lastCalled.getTime()) / 1000;
        }
        return this.locked && seconds < this.maxLockTime;
    }
    WhenTrueAsync(func) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var p = new Promise((resolve, reject) => {
                var startTime = new Date();
                var check = () => {
                    if (func) {
                        var t = func();
                        if (t) {
                            resolve();
                            return;
                        }
                    }
                    var seconds = ((new Date()).getTime() - startTime.getTime()) / 1000;
                    if (seconds >= this.maxLockTime) {
                        reject("Max Wait Time for lock hit");
                        return;
                    }
                    setTimeout(check, 100);
                };
                setTimeout(check, 100);
            });
            return p;
        });
    }
    WaitTillUnlocked() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.WhenTrueAsync(() => {
                return !this.isLocked;
            });
            return;
        });
    }
    LockAreaAsync(func) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.BeginLock();
            yield func();
            yield this.EndLock();
        });
    }
    BeginLock() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.WaitTillUnlocked();
            //await this.WhenTrueAsync(() => {
            //    return !this.isLocked;
            //});
            if (this.isLocked) {
                return;
            }
            this.locked = true;
            this.lastCalled = new Date();
        });
    }
    EndLock() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.locked = false;
        });
    }
}
class RecurringTask {
    constructor(callback, timeout, maxLockTime) {
        this.callback = callback;
        this.timeout = timeout;
        this.maxLockTime = maxLockTime;
        this._isRunning = false;
        this.refreshLock = new MutexLock(30000);
        //private set isRunning(value: boolean) {
        //    this._isRunning = value;
        //}
        this.setTimeOut = (time) => {
            this.timeout = time;
        };
        //lock = (): void => {
        //    this.locker.lock();
        //}
        //unLock = (): void => {
        //    this.locker.unLock();
        //}
        //isLocked = (): boolean => {
        //    return this.locker.isLocked();
        //}
        this.start = () => {
            if (!this.isRunning) {
                this._isRunning = true;
                this.timedCall();
            }
        };
        this.stop = () => {
            this._isRunning = false;
        };
    }
    //private locker = new Lock.Locker();
    timedCall() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.callback) {
                yield this.refreshLock.LockAreaAsync(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.callback();
                }));
                //await this.refreshLock.BeginLock();
                //this.callback();
                //await this.refreshLock.EndLock();
            }
            if (this.isRunning) {
                setTimeout(() => { this.timedCall(); }, this.timeout);
            }
        });
    }
    get isRunning() {
        return this._isRunning;
    }
}
function delay(msec) {
    return new Promise((resolve) => {
        setTimeout(resolve, msec);
    });
}
function whenTrue(trueFunc) {
    if (!trueFunc || trueFunc()) {
        return new Promise((resolve) => {
            resolve();
        });
    }
    return new Promise((resolve) => {
        var obj = new RecurringTask(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //obj.lock();
            if (trueFunc()) {
                resolve();
                obj.stop();
            }
            //obj.unLock();
        }), 100);
        obj.start();
    });
}
function WhenAll(list, progressCB) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        var tot = list.length;
        var fin = 0;
        list.forEach((p) => {
            p.then(() => {
                fin++;
                if (progressCB) {
                    progressCB(fin, tot);
                }
            });
        });
        return yield Promise.all(list);
    });
}
//}


/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        ////debugger;
        console.error(error);
        let customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(customError || 'Server error');
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ApiPathInterceptor, AuthGuard, ErrorInterceptor, JwtInterceptor, EnumEx, MutexLock, RecurringTask, delay, whenTrue, WhenAll, formatTimeSpan, formatDate, formatTime, Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiPath.interceptor */ "./src/app/_helpers/ApiPath.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_1__["ApiPathInterceptor"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_3__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });

/* harmony import */ var _EnumEx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EnumEx */ "./src/app/_helpers/EnumEx.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return _EnumEx__WEBPACK_IMPORTED_MODULE_5__["EnumEx"]; });

/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tasks */ "./src/app/_helpers/Tasks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutexLock", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["MutexLock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecurringTask", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["RecurringTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whenTrue", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["whenTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhenAll", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["WhenAll"]; });

/* harmony import */ var _DateEx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateEx */ "./src/app/_helpers/DateEx.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimeSpan", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_7__["formatTimeSpan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_7__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_7__["formatTime"]; });

/* harmony import */ var _LinqToJs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LinqToJs */ "./src/app/_helpers/LinqToJs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return _LinqToJs__WEBPACK_IMPORTED_MODULE_8__["Queryable"]; });







//export * from './Lock';





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        ////debugger;
        let currentUser = this.authenticationService.currentUserValue;
        //if (currentUser) {
        //  return this.authenticationService.getAccessToken().pipe(mergeMap(token => this.processRequestWithToken(token, request, next)));
        //}
        return next.handle(request);
    }
    // Checks if there is an access_token available in the authorize service
    // and adds it to the request in case it's targeted at the same origin as the
    // single page application.
    processRequestWithToken(token, req, next) {
        if (!!token && this.isSameOriginUrl(req)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/api-authorization/api-authorization.constants.ts":
/*!******************************************************************!*\
  !*** ./src/app/api-authorization/api-authorization.constants.ts ***!
  \******************************************************************/
/*! exports provided: ApplicationName, ReturnUrlType, QueryParameterNames, LogoutActions, LoginActions, ApplicationPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnUrlType", function() { return ReturnUrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryParameterNames", function() { return QueryParameterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActions", function() { return LogoutActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActions", function() { return LoginActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationPaths", function() { return ApplicationPaths; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ApplicationName = 'CEATSiiApp';
const ReturnUrlType = 'returnUrl';
const QueryParameterNames = {
    ReturnUrl: ReturnUrlType,
    Message: 'message'
};
const LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
const LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
let applicationPaths = {
    //DefaultLoginRedirectPath: '/Dashboard/App/',
    //ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    //LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    //LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    //LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    //LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
    LoginPathComponents: [],
    //LoginFailedPathComponents: [],
    //LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
};
applicationPaths = Object.assign({}, applicationPaths, { LoginPathComponents: applicationPaths.Login.split('/'), 
    //LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'),
    RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ "./src/app/api-authorization/api-authorization.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/api-authorization/api-authorization.module.ts ***!
  \***************************************************************/
/*! exports provided: ApiAuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function() { return ApiAuthorizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "./src/app/api-authorization/login-menu/login-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/api-authorization/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/api-authorization/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/api-authorization/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/api-authorization/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let ApiAuthorizationModule = class ApiAuthorizationModule {
};
ApiAuthorizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_10__["ApplicationPaths"].Register, component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_10__["ApplicationPaths"].Profile, component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_10__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                //{ path: ApplicationPaths.LoginFailed, component: LoginComponent },
                //{ path: ApplicationPaths.LoginCallback, component: LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_10__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] },
            ])
        ],
        declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_4__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
        exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_4__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]]
    })
], ApiAuthorizationModule);



/***/ }),

/***/ "./src/app/api-authorization/authorize.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/api-authorization/authorize.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthorizeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function() { return AuthorizeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");



//import { AuthorizeService } from './authorize.service';



let AuthorizeGuard = class AuthorizeGuard {
    constructor(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    canActivate(_next, state) {
        return this.authorize.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["QueryParameterNames"].ReturnUrl]: state.url
                }
            });
        }
    }
};
AuthorizeGuard.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthorizeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthorizeGuard);



/***/ }),

/***/ "./src/app/api-authorization/authorize.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/api-authorization/authorize.interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");



let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize) {
        this.authorize = authorize;
    }
    intercept(req, next) {
        return this.processRequestWithToken("", req, next);
    }
    // Checks if there is an access_token available in the authorize service
    // and adds it to the request in case it's targeted at the same origin as the
    // single page application.
    processRequestWithToken(token, req, next) {
        if (!!token && this.isSameOriginUrl(req)) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
    isSameOriginUrl(req) {
        // It's an absolute url with the same origin.
        if (req.url.startsWith(`${window.location.origin}/`)) {
            return true;
        }
        // It's a protocol relative url with the same origin.
        // For example: //www.example.com/api/Products
        if (req.url.startsWith(`//${window.location.host}/`)) {
            return true;
        }
        // It's a relative url like /api/Products
        if (/^\/[^\/].*/.test(req.url)) {
            return true;
        }
        // It's an absolute or protocol relative url that
        // doesn't have the same origin.
        return false;
    }
};
AuthorizeInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthorizeInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "./src/app/api-authorization/login-menu/login-menu.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/api-authorization/login-menu/login-menu.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1hdXRob3JpemF0aW9uL2xvZ2luLW1lbnUvbG9naW4tbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/api-authorization/login-menu/login-menu.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/api-authorization/login-menu/login-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function() { return LoginMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




let LoginMenuComponent = class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => u && u.userName));
    }
};
LoginMenuComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login-menu/login-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-menu.component.css */ "./src/app/api-authorization/login-menu/login-menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], LoginMenuComponent);



/***/ }),

/***/ "./src/app/api-authorization/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/api-authorization/login/login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1hdXRob3JpemF0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/api-authorization/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/api-authorization/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


//import { AuthorizeService, AuthenticationResultStatus } from '../authorize.service';



// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
let LoginComponent = class LoginComponent {
    constructor(formBuilder, authenticationService, route, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loginForm = this.formBuilder.group({
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            // reset alerts on submit
            //this.alertService.clear();
            // stop here if form is invalid
            if (this.loginForm.invalid) {
                return;
            }
            this.loading = true;
            var user = yield this.authenticationService.loginAsync(this.f.username.value, this.f.password.value);
            if (user != null) {
                this.router.navigate([this.returnUrl]);
            }
            else {
                this.loading = false;
                this.submitted = false;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/api-authorization/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/api-authorization/logout/logout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/api-authorization/logout/logout.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1hdXRob3JpemF0aW9uL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/api-authorization/logout/logout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/api-authorization/logout/logout.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
let LogoutComponent = class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authorizeService.logoutAsync();
            this.router.navigateByUrl("/");
        });
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/api-authorization/logout/logout.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/api-authorization/profile/profile.component.less":
/*!******************************************************************!*\
  !*** ./src/app/api-authorization/profile/profile.component.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1hdXRob3JpemF0aW9uL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/api-authorization/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/api-authorization/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = 
/** profile component*/
class ProfileComponent {
    /** profile ctor */
    constructor() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.less */ "./src/app/api-authorization/profile/profile.component.less")).default]
    })
    /** profile component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/api-authorization/register/register.component.less":
/*!********************************************************************!*\
  !*** ./src/app/api-authorization/register/register.component.less ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS1hdXRob3JpemF0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/api-authorization/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/api-authorization/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities */ "./src/app/entities/index.ts");






let RegisterComponent = 
/** Register component*/
class RegisterComponent {
    /** Register ctor */
    constructor(formBuilder, route, router, accountService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            // stop here if form is invalid
            if (this.form.invalid) {
                return;
            }
            this.loading = true;
            var model = new _entities__WEBPACK_IMPORTED_MODULE_5__["RegisterModel"]();
            model.email = this.f.email.value;
            model.firstName = this.f.firstName.value;
            model.lastName = this.f.lastName.value;
            model.password = this.f.password.value;
            model.username = this.f.username.value;
            var u = yield this.accountService.registerAsync(model);
            this.router.navigateByUrl("/");
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.less */ "./src/app/api-authorization/register/register.component.less")).default]
    })
    /** Register component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/top/home */ "./src/app/top/home/index.ts");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/top/creature */ "./src/app/top/creature/index.ts");
/* harmony import */ var _top_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/top/character */ "./src/app/top/character/index.ts");
/* harmony import */ var _top_encounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/top/encounter */ "./src/app/top/encounter/index.ts");
/* harmony import */ var _api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-authorization/authorize.guard */ "./src/app/api-authorization/authorize.guard.ts");



//import { GameComponent } from './components/game/game.component';
//import { CharacterComponent } from './components/character/character.component';
//import { ActorComponent } from './components/actor/actor.component';





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _top_home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'creatures', component: _top_creature__WEBPACK_IMPORTED_MODULE_4__["CreatureComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizeGuard"]] },
    { path: 'characters', component: _top_character__WEBPACK_IMPORTED_MODULE_5__["CharacterComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_7__["AuthorizeGuard"]] },
    { path: 'encounter/:id', component: _top_encounter__WEBPACK_IMPORTED_MODULE_6__["EncounterComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true }) // <-- debugging purposes only)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _approot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/approot */ "./src/app/approot/index.ts");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/top/home */ "./src/app/top/home/index.ts");
/* harmony import */ var _top_encounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/top/encounter */ "./src/app/top/encounter/index.ts");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/top/creature */ "./src/app/top/creature/index.ts");
/* harmony import */ var _top_character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/top/character */ "./src/app/top/character/index.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/navigation */ "./src/app/navigation/index.ts");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/game */ "./src/app/components/game/index.ts");
/* harmony import */ var _components_character__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/character */ "./src/app/components/character/index.ts");
/* harmony import */ var _components_creature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/creature */ "./src/app/components/creature/index.ts");
/* harmony import */ var _components_armor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/armor */ "./src/app/components/armor/index.ts");
/* harmony import */ var _components_attack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/attack */ "./src/app/components/attack/index.ts");
/* harmony import */ var _components_weapon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/weapon */ "./src/app/components/weapon/index.ts");
/* harmony import */ var _components_encounter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/encounter */ "./src/app/components/encounter/index.ts");
/* harmony import */ var _components_actor___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/actor/ */ "./src/app/components/actor/index.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/elements */ "./src/app/elements/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./api-authorization/authorize.interceptor */ "./src/app/api-authorization/authorize.interceptor.ts");
/* harmony import */ var _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./api-authorization/api-authorization.module */ "./src/app/api-authorization/api-authorization.module.ts");












//import { GameComponent } from '@/top/game';
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _top_home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _top_encounter__WEBPACK_IMPORTED_MODULE_8__["EncounterComponent"],
            _top_creature__WEBPACK_IMPORTED_MODULE_9__["CreatureComponent"],
            _top_character__WEBPACK_IMPORTED_MODULE_10__["CharacterComponent"],
            _approot__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_game__WEBPACK_IMPORTED_MODULE_12__["GameListComponent"],
            _components_game__WEBPACK_IMPORTED_MODULE_12__["GameEditComponent"],
            _components_character__WEBPACK_IMPORTED_MODULE_13__["CharacterEditComponent"],
            _components_character__WEBPACK_IMPORTED_MODULE_13__["CharacterListComponent"],
            _components_creature__WEBPACK_IMPORTED_MODULE_14__["CreatureListComponent"],
            _components_creature__WEBPACK_IMPORTED_MODULE_14__["CreatureEditComponent"],
            _components_actor___WEBPACK_IMPORTED_MODULE_19__["ActorComponent"],
            _components_actor___WEBPACK_IMPORTED_MODULE_19__["ActorListComponent"],
            _top_encounter__WEBPACK_IMPORTED_MODULE_8__["EncounterComponent"],
            _components_armor__WEBPACK_IMPORTED_MODULE_15__["ArmorListComponent"],
            _components_armor__WEBPACK_IMPORTED_MODULE_15__["ArmorEditComponent"],
            _components_weapon__WEBPACK_IMPORTED_MODULE_17__["WeaponListComponent"],
            _components_weapon__WEBPACK_IMPORTED_MODULE_17__["WeaponEditComponent"],
            _elements__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
            _elements__WEBPACK_IMPORTED_MODULE_20__["TreeviewComponent"],
            _components_attack__WEBPACK_IMPORTED_MODULE_16__["AttackListComponent"],
            _components_attack__WEBPACK_IMPORTED_MODULE_16__["AttackEditComponent"],
            _components_encounter__WEBPACK_IMPORTED_MODULE_18__["ActionsListComponent"],
            _components_encounter__WEBPACK_IMPORTED_MODULE_18__["ActionEditComponent"],
            _components_encounter__WEBPACK_IMPORTED_MODULE_18__["ActionComponent"],
            _elements__WEBPACK_IMPORTED_MODULE_20__["AlertComponent"],
            _navigation__WEBPACK_IMPORTED_MODULE_11__["MainNavMenuComponent"],
            _navigation__WEBPACK_IMPORTED_MODULE_11__["SideNavMenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            //NgbModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_25__["ApiAuthorizationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"]
        ],
        providers: [
            //{
            //    provide: 'BASE_URL',
            //    useFactory: getBaseUrl
            //},
            //{
            //  provide: 'BASE_URL',
            //  useFactory: getBaseUrl
            //},
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_22__["ApiPathInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthorizeInterceptor"],
                multi: true
            },
            //{
            //  provide: HTTP_INTERCEPTORS,
            //  useClass: JwtInterceptor,
            //  multi: true,
            //  deps: [AuthenticationService]
            //},
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"],
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"]]
            },
            _services__WEBPACK_IMPORTED_MODULE_23__["EncounterService"],
            _services__WEBPACK_IMPORTED_MODULE_23__["EncounterHubService"],
            _services__WEBPACK_IMPORTED_MODULE_23__["AlertService"],
            _services__WEBPACK_IMPORTED_MODULE_23__["ReferencesService"],
        ],
        bootstrap: [_approot__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);

//export function getBaseUrl() {
//    return (<any>document.getElementsByTagName('baseAction')[0]).href;
//}


/***/ }),

/***/ "./src/app/approot/app.component.less":
/*!********************************************!*\
  !*** ./src/app/approot/app.component.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHJvb3QvYXBwLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/approot/app.component.ts":
/*!******************************************!*\
  !*** ./src/app/approot/app.component.ts ***!
  \******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'CEATSiiApp';
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full}`;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/approot/app.component.less")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/approot/index.ts":
/*!**********************************!*\
  !*** ./src/app/approot/index.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/approot/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]; });





/***/ }),

/***/ "./src/app/components/actor/actor-list.component.less":
/*!************************************************************!*\
  !*** ./src/app/components/actor/actor-list.component.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0b3IvYWN0b3ItbGlzdC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/components/actor/actor-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/actor/actor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ActorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return ActorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




var ParryType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ParryType;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ViewTypeEnum;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].CharacterType;

let ActorListComponent = 
/** Actor-List component*/
class ActorListComponent {
    //public selectedActor: Actor = null;
    /** Actor-List ctor */
    constructor(gameView) {
        this.gameView = gameView;
        this.actors = new Array();
        //@Input() actions: Array<BaseAction> = new Array<BaseAction>();
        this.isSelectable = false;
        this.viewType = ViewTypeEnum.Overview;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectActor = (actor) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSelectable) {
                this.onSelect.next(actor);
            }
        });
        this.curAction = (actor) => {
            var act = actor.currentAction;
            return act;
        };
        this.currentArmor = (actor) => {
            if (actor != null && actor.currentArmor != null) {
                return '' + actor.currentArmor.type;
            }
            return "";
        };
        this.currentWeapon = (actor) => {
            var ac = this.curAction(actor);
            //debugger;
            if (ac != null && ac.currentAttack != null && ac.currentAttack.attackType != null) {
                if (ac.currentAttack.attackType.name == "Weapon") {
                    if (ac.currentAttack.weaponUsed != null) {
                        return ac.currentAttack.weaponUsed.name;
                    }
                }
                else {
                    return ac.currentAttack.sizeRating.name + " " + ac.currentAttack.attackType.name;
                }
            }
            return "None";
        };
        this.currentModifier = (actor) => {
            var ac = this.curAction(actor);
            if (ac != null) {
                return this.curAction(actor).currentModifier;
            }
            return 0;
        };
        this.isMustParry = (actor) => {
            return this.currentCrits(actor).parry == ParryType.Must_Parry;
        };
        this.isNoParry = (actor) => {
            return this.currentCrits(actor).parry == ParryType.No_Parry;
        };
        this.currentCrits = (actor) => {
            if (actor.currentCrits == null) {
                return new _entities__WEBPACK_IMPORTED_MODULE_3__["CriticalEffect"]();
            }
            return actor.currentCrits;
        };
        this.baseOB = (actor) => {
            var ac = this.curAction(actor);
            if (ac != null && ac.currentAttack != null) {
                return '' + (ac.currentAttack.ob);
            }
            return "";
        };
        this.currentOB = (actor) => {
            var ac = this.curAction(actor);
            if (ac != null && ac.currentAttack != null) {
                var i = 0;
                if (actor.currentCrits != null) {
                    i = actor.currentCrits.parryNegative;
                }
                return '' + (ac.currentAttack.ob + i);
            }
            return "";
        };
        this.baseDB = (actor) => {
            var ac = this.curAction(actor);
            if (ac != null && actor != null && actor.currentArmor != null) {
                return '' + actor.currentArmor.db;
            }
            return "";
        };
        this.currentDB = (actor) => {
            var ac = this.curAction(actor);
            if (ac != null && actor != null && actor.currentArmor != null) {
                if (ac.currentAttack != null) {
                    return '' + (actor.currentArmor.db);
                }
                return '' + actor.currentArmor.db;
            }
            return "";
        };
        this.currentBackColor = (actor) => {
            //var ac = this.curAction(actor);
            return "rgba(" + actor.color + ")";
        };
    }
    get isGM() {
        return this.viewType == ViewTypeEnum.GM;
    }
    get isPlayer() {
        return this.viewType == ViewTypeEnum.Player;
    }
    get isViewOnly() {
        return this.viewType == ViewTypeEnum.Overview;
    }
    isPC(actor) {
        if (actor != null) {
            return actor.type == CharacterType.PC;
        }
        return false;
    }
    get isCurrentUser() {
        return false;
    }
    isControlledVisible(actor) {
        return this.isGM || (this.isViewOnly && this.isPC(actor)) || (this.isPlayer && this.isCurrentUser);
    }
    currentTime(actor) {
        if (actor.currentAction != null) {
            return '' + Math.floor(actor.currentAction.endTime * 100) / 100;
        }
        return "";
    }
    isNaN(num) {
        return isNaN(num);
    }
};
ActorListComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ActorListComponent.prototype, "actors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ActorListComponent.prototype, "isSelectable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ActorListComponent.prototype, "viewType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActorListComponent.prototype, "onSelect", void 0);
ActorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'actor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actor-list.component.less */ "./src/app/components/actor/actor-list.component.less")).default]
    })
    /** Actor-List component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]])
], ActorListComponent);



/***/ }),

/***/ "./src/app/components/actor/actor.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/actor/actor.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0b3IvYWN0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/actor/actor.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/actor/actor.component.ts ***!
  \*****************************************************/
/*! exports provided: ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return ActorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




let ActorComponent = 
/** actor component*/
class ActorComponent {
    /** actor ctor */
    constructor(route, router, encounterService) {
        this.route = route;
        this.router = router;
        this.encounterService = encounterService;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.encounterService.selectActor(id);
    }
};
ActorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] }
];
ActorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actor.component.css */ "./src/app/components/actor/actor.component.css")).default]
    })
    /** actor component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]])
], ActorComponent);



/***/ }),

/***/ "./src/app/components/actor/index.ts":
/*!*******************************************!*\
  !*** ./src/app/components/actor/index.ts ***!
  \*******************************************/
/*! exports provided: ActorListComponent, ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actor_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor-list.component */ "./src/app/components/actor/actor-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return _actor_list_component__WEBPACK_IMPORTED_MODULE_1__["ActorListComponent"]; });

/* harmony import */ var _actor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actor.component */ "./src/app/components/actor/actor.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return _actor_component__WEBPACK_IMPORTED_MODULE_2__["ActorComponent"]; });






/***/ }),

/***/ "./src/app/components/armor/armor-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/armor/armor-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-area {\r\n    width: 220px;\r\n}\r\n\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hcmVhIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oYWxmLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IC5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWFyZWEge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhLW51bWJlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/armor/armor-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/armor/armor-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ArmorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorEditComponent", function() { return ArmorEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");




let ArmorEditComponent = 
/** ArmorEdit component*/
class ArmorEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo) {
        this.combatRepo = combatRepo;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    delete() {
        this.onDelete.emit(this.armor);
    }
};
ArmorEditComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["Armor"])
], ArmorEditComponent.prototype, "armor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArmorEditComponent.prototype, "onDelete", void 0);
ArmorEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-armor-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./armor-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./armor-edit.component.css */ "./src/app/components/armor/armor-edit.component.css")).default]
    })
    /** ArmorEdit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"]])
], ArmorEditComponent);



/***/ }),

/***/ "./src/app/components/armor/armor-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/armor/armor-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FybW9yL2FybW9yLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/armor/armor-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/armor/armor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ArmorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorListComponent", function() { return ArmorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");



let ArmorListComponent = 
/** Armor component*/
class ArmorListComponent {
    /** Armor ctor */
    constructor() {
        this.armors = new Array();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    }
    ngOnInit() {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    }
    newArmor() {
        var arm = new _entities__WEBPACK_IMPORTED_MODULE_2__["Armor"]();
        arm.characterId = this.charId;
        this.selectedArmor = arm;
        this.armors.push(arm);
        //this.cnt = this.cnt + 1;
    }
    onArmorDeleted(armor) {
        this.onDelete.emit(armor);
    }
    //onArmorSaved(armor: Armor) {
    //    var arm = this.armors.find((a) => a.id == armor.id);
    //    if (arm == null) {
    //        this.armors.push(armor);
    //    }
    //}
    selectArmor(armor) {
        this.selectedArmor = armor;
    }
    get selectedArmorId() {
        if (this.selectedArmor != null) {
            return this.selectedArmor.type;
        }
        return 0;
    }
    set selectedArmorId(value) {
        this.selectedArmor = this.armors.find((a) => a.type == value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ArmorListComponent.prototype, "armors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ArmorListComponent.prototype, "charId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArmorListComponent.prototype, "onDelete", void 0);
ArmorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'armor-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./armor-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./armor-list.component.css */ "./src/app/components/armor/armor-list.component.css")).default]
    })
    /** Armor component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArmorListComponent);



/***/ }),

/***/ "./src/app/components/armor/index.ts":
/*!*******************************************!*\
  !*** ./src/app/components/armor/index.ts ***!
  \*******************************************/
/*! exports provided: ArmorListComponent, ArmorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _armor_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./armor-list.component */ "./src/app/components/armor/armor-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArmorListComponent", function() { return _armor_list_component__WEBPACK_IMPORTED_MODULE_1__["ArmorListComponent"]; });

/* harmony import */ var _armor_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./armor-edit.component */ "./src/app/components/armor/armor-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArmorEditComponent", function() { return _armor_edit_component__WEBPACK_IMPORTED_MODULE_2__["ArmorEditComponent"]; });






/***/ }),

/***/ "./src/app/components/attack/attack-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/attack/attack-edit.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-area {\r\n    width: 220px;\r\n}\r\n\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdHRhY2svYXR0YWNrLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F0dGFjay9hdHRhY2stZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYXJlYSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFsZi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1sYWJlbCB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIHdpZHRoOiA3NnB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIHdpZHRoOiAxMDhweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYXJlYS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/attack/attack-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/attack/attack-edit.component.ts ***!
  \************************************************************/
/*! exports provided: AttackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackEditComponent", function() { return AttackEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");







let AttackEditComponent = 
/** AttackEdit component*/
class AttackEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo, encounterService, referencesService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get weaponTypeId() {
        var at = this.referencesService.WeaponTypes.find((a) => this.attack.weaponUsed != null && a.name == this.attack.weaponUsed.name);
        if (at != null) {
            return at.id;
        }
        return null;
    }
    set weaponTypeId(value) {
        var at = this.referencesService.WeaponTypes.find((a) => a.id == value);
        if (this.attack.weaponUsed == null) {
            this.attack.weaponUsed = new _entities__WEBPACK_IMPORTED_MODULE_2__["Weapon"]();
        }
        this.attack.weaponUsed.name = at.name;
    }
    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}
    delete() {
        this.onDelete.emit(this.attack);
    }
};
AttackEditComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["Attack"])
], AttackEditComponent.prototype, "attack", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AttackEditComponent.prototype, "onDelete", void 0);
AttackEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attack-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attack-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attack-edit.component.css */ "./src/app/components/attack/attack-edit.component.css")).default]
    })
    /** AttackEdit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"],
        _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"]])
], AttackEditComponent);



/***/ }),

/***/ "./src/app/components/attack/attack-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/attack/attack-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdHRhY2svYXR0YWNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksWUFBWTtJQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXR0YWNrL2F0dGFjay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuICAgIC5tYWluTGlzdCBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/attack/attack-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/attack/attack-list.component.ts ***!
  \************************************************************/
/*! exports provided: AttackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackListComponent", function() { return AttackListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");



let AttackListComponent = 
/** Attack component*/
class AttackListComponent {
    /** Armor ctor */
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cnt = 1;
    }
    ngOnChanges() {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    }
    ngOnInit() {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    }
    newAttack() {
        var attack = new _entities__WEBPACK_IMPORTED_MODULE_2__["Attack"]();
        //weapon.id = this.cnt;
        attack.name = "Attack " + this.cnt;
        attack.creatureOn_ID = this.creatureId;
        this.selectedAttack = attack;
        this.attacks.push(attack);
        this.cnt = this.cnt + 1;
    }
    onAttackDeleted(attack) {
        this.onDelete.emit(attack);
    }
    selectAttack(attack) {
        this.selectedAttack = attack;
    }
    get selectedAttackId() {
        if (this.selectedAttack != null) {
            return this.selectedAttack.id;
        }
        return null;
    }
    set selectedAttackId(value) {
        this.selectedAttack = this.attacks.find((a) => a.id == value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AttackListComponent.prototype, "attacks", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AttackListComponent.prototype, "creatureId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AttackListComponent.prototype, "onDelete", void 0);
AttackListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'attack-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attack-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attack-list.component.css */ "./src/app/components/attack/attack-list.component.css")).default]
    })
    /** Attack component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AttackListComponent);



/***/ }),

/***/ "./src/app/components/attack/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/attack/index.ts ***!
  \********************************************/
/*! exports provided: AttackListComponent, AttackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _attack_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack-list.component */ "./src/app/components/attack/attack-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackListComponent", function() { return _attack_list_component__WEBPACK_IMPORTED_MODULE_1__["AttackListComponent"]; });

/* harmony import */ var _attack_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack-edit.component */ "./src/app/components/attack/attack-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackEditComponent", function() { return _attack_edit_component__WEBPACK_IMPORTED_MODULE_2__["AttackEditComponent"]; });






/***/ }),

/***/ "./src/app/components/character/character-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/character/character-edit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    white-space: nowrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyL2NoYXJhY3Rlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/character/character-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/character/character-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return CharacterEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/modal/modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");







var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].CharacterType;
let CharacterEditComponent = 
/** characterDetail component*/
class CharacterEditComponent {
    constructor(encounterService, charRepo, modalService) {
        this.encounterService = encounterService;
        this.charRepo = charRepo;
        this.modalService = modalService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveCharacter = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.character.gameType = this.encounterService.systemSettings.gameSystem;
            var g = yield this.charRepo.saveCharacterAsync(this.character);
            if (!this.character.id) {
                this.character.id = g.id;
            }
            this.onSave.emit(this.character);
        });
    }
    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}
    get hasCurrentGame() {
        return (this.encounterService.currentGame != null);
    }
    onWeaponDeleted(weapon) {
        const index = this.character.weapons.indexOf(weapon);
        if (index !== -1) {
            this.character.weapons.splice(index, 1);
        }
    }
    onArmorDeleted(armor) {
        const index = this.character.armors.indexOf(armor);
        if (index !== -1) {
            this.character.armors.splice(index, 1);
        }
    }
    addToEncounter() {
        if (this.character.type == CharacterType.PC) {
            this.modalService.open('custom-modal-2');
        }
        else {
            this.encounterService.addCharacterToEncounterAsync(this.character);
        }
    }
    closeEdit() {
        //this.charView.refresh();
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.modalService.close(id);
        this.encounterService.addCharacterToEncounterAsync(this.character, this.rolledInit);
    }
};
CharacterEditComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["CharactersRepository"] },
    { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_5__["Character"])
], CharacterEditComponent.prototype, "character", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharacterEditComponent.prototype, "onDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CharacterEditComponent.prototype, "onSave", void 0);
CharacterEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-edit.component.css */ "./src/app/components/character/character-edit.component.css")).default]
    })
    /** characterDetail component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"],
        _repositories__WEBPACK_IMPORTED_MODULE_3__["CharactersRepository"],
        _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
], CharacterEditComponent);



/***/ }),

/***/ "./src/app/components/character/character-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/character/character-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyp3aWR0aDogMTIwcHg7Ki9cclxufVxyXG5cclxuICAgIC5tYWluTGlzdCBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/character/character-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/character/character-list.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");





let CharacterListComponent = 
/** character component*/
class CharacterListComponent {
    /** character ctor */
    constructor(characterRepo, encounterService) {
        this.characterRepo = characterRepo;
        this.encounterService = encounterService;
        this.characters = new Array();
        this.refresh = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.characters = await this.characterRepo.getCharactersAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectCharacter = (charId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedCharacter = yield this.characterRepo.getCharacterAsync(charId);
        });
        this.onCharacterSave = (character) => {
            this.refresh();
        };
        this.onCharacterDeleted = (character) => {
            this.refresh();
        };
        this.refresh();
    }
    ngOnChanges() {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            }
            else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            }
            else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    }
    newCharacter() {
        this.selectedCharacter = new _entities__WEBPACK_IMPORTED_MODULE_4__["Character"]();
    }
};
CharacterListComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] }
];
CharacterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'character-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-list.component.css */ "./src/app/components/character/character-list.component.css")).default]
    })
    /** character component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"],
        _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]])
], CharacterListComponent);



/***/ }),

/***/ "./src/app/components/character/index.ts":
/*!***********************************************!*\
  !*** ./src/app/components/character/index.ts ***!
  \***********************************************/
/*! exports provided: CharacterListComponent, CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _character_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-list.component */ "./src/app/components/character/character-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return _character_list_component__WEBPACK_IMPORTED_MODULE_1__["CharacterListComponent"]; });

/* harmony import */ var _character_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character-edit.component */ "./src/app/components/character/character-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return _character_edit_component__WEBPACK_IMPORTED_MODULE_2__["CharacterEditComponent"]; });






/***/ }),

/***/ "./src/app/components/creature/creature-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/creature/creature-edit.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    white-space: nowrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdHVyZS9jcmVhdHVyZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0dXJlL2NyZWF0dXJlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/creature/creature-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/creature/creature-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureEditComponent", function() { return CreatureEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/modal/modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");







let CreatureEditComponent = 
/** CreatureEdit component*/
class CreatureEditComponent {
    constructor(encounterService, creatureRepo, modalService, referencesService) {
        this.encounterService = encounterService;
        this.creatureRepo = creatureRepo;
        this.modalService = modalService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveCreature = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.creature.gameType = this.encounterService.systemSettings.gameSystem;
            var g = yield this.creatureRepo.saveCreatureAsync(this.creature);
            if (!this.creature.id) {
                this.creature.id = g.id;
            }
            this.onSave.emit(this.creature);
        });
    }
    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}
    get hasCurrentGame() {
        return (this.encounterService.currentGame != null);
    }
    onAttackDeleted(attack) {
        const index = this.creature.attacks.indexOf(attack);
        if (index !== -1) {
            this.creature.attacks.splice(index, 1);
        }
    }
    addToEncounter() {
        this.encounterService.addCreatureToEncounterAsync(this.creature);
    }
    closeEdit() {
        //this.charView.refresh();
    }
};
CreatureEditComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["CreaturesRepository"] },
    { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_5__["Creature"])
], CreatureEditComponent.prototype, "creature", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreatureEditComponent.prototype, "onDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CreatureEditComponent.prototype, "onSave", void 0);
CreatureEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creature-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creature-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creature-edit.component.css */ "./src/app/components/creature/creature-edit.component.css")).default]
    })
    /** CreatureEdit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"],
        _repositories__WEBPACK_IMPORTED_MODULE_3__["CreaturesRepository"],
        _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"],
        _services__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"]])
], CreatureEditComponent);



/***/ }),

/***/ "./src/app/components/creature/creature-list.component.less":
/*!******************************************************************!*\
  !*** ./src/app/components/creature/creature-list.component.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  display: table-cell;\n  width: 20%;\n}\n.edit {\n  display: table-cell;\n  width: 80%;\n}\n.mainList {\n  font-size: 12px;\n  max-height: 100%;\n  /*width: 120px;*/\n}\n.mainList a {\n  cursor: pointer;\n}\n.mainList button {\n  padding: 0 5px;\n}\n.mainList td {\n  padding: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdHVyZS9YOi9QZXJzb25hbCBQcm9qZWN0cy9DRUFUU2lpLUNvbWJhdC1UcmFja2VyL0NvbWJhdFRyYWNrZXIvQ29tYmF0VHJhY2tlci5XZWIvQ0VBVFNpaUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY3JlYXR1cmUvY3JlYXR1cmUtbGlzdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdHVyZS9jcmVhdHVyZS1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDTEY7QURRQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQ05GO0FEU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUNQQSxnQkFBZ0I7QUFDbEI7QURVQTtFQUNFLGVBQUE7QUNSRjtBRFdBO0VBQ0UsY0FBQTtBQ1RGO0FEWUE7RUFDRSxZQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0dXJlL2NyZWF0dXJlLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG59XG5cbi5hcmVhIHtcbn1cblxuLmxpc3Qge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMjAlO1xufVxuXG4uZWRpdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tYWluTGlzdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgLyp3aWR0aDogMTIwcHg7Ki9cbn1cblxuLm1haW5MaXN0IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluTGlzdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLm1haW5MaXN0IHRkIHtcbiAgcGFkZGluZzogMnB4O1xufVxuIiwiLmxpc3Qge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogMjAlO1xufVxuLmVkaXQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogODAlO1xufVxuLm1haW5MaXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAvKndpZHRoOiAxMjBweDsqL1xufVxuLm1haW5MaXN0IGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbkxpc3QgYnV0dG9uIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG4ubWFpbkxpc3QgdGQge1xuICBwYWRkaW5nOiAycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/creature/creature-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/creature/creature-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureListComponent", function() { return CreatureListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");




let CreatureListComponent = 
/** creature component*/
class CreatureListComponent {
    /** character ctor */
    constructor(creatureRepo) {
        this.creatureRepo = creatureRepo;
        this.creatures = new Array();
        this.refresh = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.creatures = yield this.creatureRepo.getCreaturesAsync();
        });
        this.selectCreature = (charId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedCreature = yield this.creatureRepo.getCreatureAsync(charId);
            //this.selectedCreature.aqRating.name
        });
        this.onCreatureSave = (creature) => {
            this.refresh();
        };
        this.onCreatureDeleted = (creature) => {
            this.refresh();
        };
        this.refresh();
    }
    ngOnChanges() {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            }
            else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            }
            else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    }
    newCreature() {
        this.selectedCreature = new _entities__WEBPACK_IMPORTED_MODULE_3__["Creature"]();
    }
};
CreatureListComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"] }
];
CreatureListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'creature-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creature-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creature-list.component.less */ "./src/app/components/creature/creature-list.component.less")).default]
    })
    /** creature component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"]])
], CreatureListComponent);



/***/ }),

/***/ "./src/app/components/creature/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/creature/index.ts ***!
  \**********************************************/
/*! exports provided: CreatureListComponent, CreatureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _creature_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creature-list.component */ "./src/app/components/creature/creature-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureListComponent", function() { return _creature_list_component__WEBPACK_IMPORTED_MODULE_1__["CreatureListComponent"]; });

/* harmony import */ var _creature_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creature-edit.component */ "./src/app/components/creature/creature-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureEditComponent", function() { return _creature_edit_component__WEBPACK_IMPORTED_MODULE_2__["CreatureEditComponent"]; });






/***/ }),

/***/ "./src/app/components/encounter/action-edit.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/components/encounter/action-edit.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jb3VudGVyL2FjdGlvbi1lZGl0LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/components/encounter/action-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/encounter/action-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: ProposeAction, ActionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposeAction", function() { return ProposeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEditComponent", function() { return ActionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _elements_treeview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/elements/treeview */ "./src/app/elements/treeview/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");







var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].ActionTypeEnum;
class ProposeAction {
    constructor(actor, action, attack = null, modifier = 0) {
        this.actor = actor;
        this.action = action;
        this.attack = attack;
        this.modifier = modifier;
    }
}
let ActionEditComponent = 
/** action-edit component*/
class ActionEditComponent {
    //selectedAction
    /** action-edit ctor */
    constructor() {
        this.onProposeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDoAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mods = [-40, -30, -20, -10, 0, 10, 20, 30];
        this.mutex = new _helpers__WEBPACK_IMPORTED_MODULE_5__["MutexLock"](60000);
        this.currentModifier = 0;
        this._treeTop = null;
        this._treeModel = null;
    }
    //get currentModifier(): number {
    //    if (this.selectedAction != null) {
    //        return this.selectedAction.currentModifier;
    //    }
    //    return 0;
    //}
    get isDoAble() {
        if (this.selectedAction != null) {
            return this.selectedAction.actionType == ActionTypeEnum.Proposed || this.selectedAction.actionType == ActionTypeEnum.Next;
        }
        return false;
    }
    get treeModel() {
        if (this._treeModel == null) {
            this._treeModel = new _elements_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeModel"](this.currentActionTree);
        }
        //tm.items = this.currentActionTree.children;
        //debugger;
        return this._treeModel;
    }
    get currentActionTree() {
        if (this._treeTop == null) {
            this.refreshTree();
        }
        if (this._treeTop == null) {
            return new _elements_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeNode"](new _services__WEBPACK_IMPORTED_MODULE_3__["treeEntry"]("", ""));
        }
        var sel = this._treeTop.getSelected();
        if (sel == null) {
            this.refreshTree();
        }
        return this._treeTop;
    }
    refreshTree() {
        if (this.actionTree == null) {
            this._treeTop = null;
        }
        else {
            if (this._treeTop == null) {
                this._treeTop = new _elements_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeNode"](this.actionTree);
            }
            else {
                this._treeTop.check();
                if (this._treeModel != null) {
                    this._treeModel = new _elements_treeview__WEBPACK_IMPORTED_MODULE_4__["TreeModel"](this._treeTop);
                    this._treeModel.lastChecked = this._treeTop.lastChecked;
                }
            }
            //this._treeTop = new TreeNode(this.actionTree);
            var attack = null;
            if (this.selectedAction != null && this.selectedAction.base != null) {
                if (this.selectedAction.base.isAttack) {
                    attack = this.selectedAction.currentAttack;
                }
                var selectedNode = this.actionTree.findNode(this.selectedAction.base, attack);
                if (selectedNode != null) {
                    var sNode = this._treeTop.findNode(selectedNode.code);
                    if (sNode != null) {
                        sNode.isSelected = true;
                    }
                    else {
                        debugger;
                    }
                }
            }
            else {
                var selNode = this._treeTop.getSelected();
                if (selNode != null) {
                    selNode.isSelected = false;
                }
            }
        }
        //debugger;
    }
    ngOnInit() {
        if (this.selectedAction != null) {
            this.currentModifier = this.selectedAction.currentModifier;
        }
        else {
            this.currentModifier = 0;
        }
        //this.checkAction();
    }
    ngOnChanges(changes) {
        if (this.selectedAction != null) {
            this.currentModifier = this.selectedAction.currentModifier;
        }
        else {
            this.currentModifier = 0;
        }
        this.refreshTree();
        //this.checkAction();
    }
    doAction() {
        this.onDoAction.next(this.selectedAction);
    }
    onTreeSelect(node) {
        var n2 = (node.node);
        var pAction = new ProposeAction(this.selectedAction.whoIsActing, n2.action, n2.attack, this.selectedAction.currentModifier);
        this.onProposeAction.next(pAction);
    }
    onModSelected() {
        var pAction = new ProposeAction(this.selectedAction.whoIsActing, this.selectedAction.base, this.selectedAction.currentAttack, this.currentModifier);
        this.onProposeAction.next(pAction);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["BaseAction"])
], ActionEditComponent.prototype, "selectedAction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _services__WEBPACK_IMPORTED_MODULE_3__["treeEntry"])
], ActionEditComponent.prototype, "actionTree", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionEditComponent.prototype, "onProposeAction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionEditComponent.prototype, "onDoAction", void 0);
ActionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'action-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action-edit.component.less */ "./src/app/components/encounter/action-edit.component.less")).default]
    })
    /** action-edit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActionEditComponent);



/***/ }),

/***/ "./src/app/components/encounter/action.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/encounter/action.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n    279,97\r\n    280,98\r\n*/\r\n\r\n.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    overflow:hidden;\r\n}\r\n\r\n.nameArea {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbmNvdW50ZXIvYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQUdDOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbmNvdW50ZXIvYWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgMjc5LDk3XHJcbiAgICAyODAsOThcclxuKi9cclxuXHJcbi5jb2wsIC5jb2wtMSwgLmNvbC0xMCwgLmNvbC0xMSwgLmNvbC0xMiwgLmNvbC0yLCAuY29sLTMsIC5jb2wtNCwgLmNvbC01LCAuY29sLTYsIC5jb2wtNywgLmNvbC04LCAuY29sLTksIC5jb2wtYXV0bywgLmNvbC1sZywgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSwgLmNvbC1sZy1hdXRvLCAuY29sLW1kLCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLWF1dG8sIC5jb2wtc20sIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wtc20tYXV0bywgLmNvbC14bCwgLmNvbC14bC0xLCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLTIsIC5jb2wteGwtMywgLmNvbC14bC00LCAuY29sLXhsLTUsIC5jb2wteGwtNiwgLmNvbC14bC03LCAuY29sLXhsLTgsIC5jb2wteGwtOSwgLmNvbC14bC1hdXRvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcbi5uYW1lQXJlYSB7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/encounter/action.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/encounter/action.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");




var ParryType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ParryType;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ActionTypeEnum;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ViewTypeEnum;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].CharacterType;
//ParryType
let ActionComponent = 
/** action component*/
class ActionComponent {
    /** action ctor */
    constructor() {
        //this.action.note
        this.isSelectable = false;
        this.viewType = ViewTypeEnum.Overview;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAction = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSelectable) {
                this.onSelect.next(this.action);
            }
        });
        //this.action.actionTypeString
        //this.action.stateString
        //this.action.typeString
        //this.action.reoccuring
        //this.action.whoIsActing.
        //this.action.currentAttack.
        //[style.border-color]="currentBorderColor"
    }
    deleteAction() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSelectable) {
                this.onDeleteClick.next(this.action);
            }
        });
    }
    get isEffect() {
        return this.action.actionType == ActionTypeEnum.Effect;
    }
    get cssClasses() {
        var cStr = "ActorAction " + this.action.actionTypeString + " " + this.action.typeString + " " + this.action.stateString + " ";
        if (this.action.whoIsActing != null) {
            cStr = cStr + this.action.whoIsActing.typeString;
            if (this.action.whoIsActing.isConcentrating) {
                cStr = cStr + " concentrating";
            }
            if (this.action.whoIsActing.isMoving) {
                cStr = cStr + " moving";
            }
            if (this.action.whoIsActing.suprised) {
                cStr = cStr + " suprised";
            }
            if (this.action.whoIsActing.usingAdrenalDB) {
                cStr = cStr + " usingAdrenalDB";
            }
        }
        if (this.action.isHasted) {
            cStr = cStr + " hasted";
        }
        if (this.action.isSlowed) {
            cStr = cStr + " slowed";
        }
        if (this.action.reoccuring) {
            cStr = cStr + " reoccurring";
        }
        if (this.action.characterAction) {
            cStr = cStr + " characterAction";
        }
        return cStr;
    }
    get isGM() {
        return this.viewType == ViewTypeEnum.GM;
    }
    get isPlayer() {
        return this.viewType == ViewTypeEnum.Player;
    }
    get isViewOnly() {
        return this.viewType == ViewTypeEnum.Overview;
    }
    get isPC() {
        if (this.action != null && this.action.whoIsActing != null) {
            return this.action.whoIsActing.type == CharacterType.PC;
        }
        return false;
    }
    get isCurrentUser() {
        return false;
    }
    get isControlledVisible() {
        return this.isGM || (this.isViewOnly && this.isPC) || (this.isPlayer && this.isCurrentUser);
    }
    get isCurrent() {
        //return true;
        return this.action.actionType == ActionTypeEnum.Current || this.action.actionType == ActionTypeEnum.Proposed;
    }
    get whoIsActing() {
        return this.action.whoIsActing;
    }
    get currentTime() {
        return '' + Math.floor(this.action.endTime * 100) / 100;
    }
    get currentCrits() {
        var cc = this.action.whoIsActing.currentCrits;
        if (cc == null) {
            cc = new _entities__WEBPACK_IMPORTED_MODULE_2__["CriticalEffect"]();
        }
        return cc;
    }
    get currentArmor() {
        if (this.action != null && this.action.whoIsActing != null && this.action.whoIsActing.currentArmor != null) {
            return '' + this.action.whoIsActing.currentArmor.type;
        }
        return "";
    }
    get currentWeapon() {
        var ac = this.action;
        //debugger;
        if (this.action.currentAttack != null && this.action.currentAttack.attackType != null) {
            if (this.action.currentAttack.attackType.name == "Weapon") {
                if (this.action.currentAttack.weaponUsed != null) {
                    return this.action.currentAttack.weaponUsed.name;
                }
            }
            else {
                return ac.currentAttack.sizeRating.name + " " + ac.currentAttack.attackType.name;
            }
        }
        return "None";
    }
    get isMustParry() {
        return this.currentCrits.parry == ParryType.Must_Parry;
    }
    get isNoParry() {
        return this.currentCrits.parry == ParryType.No_Parry;
    }
    get currentOB() {
        if (this.action != null && this.action.currentAttack != null) {
            var i = 0;
            if (this.action.whoIsActing.currentCrits != null) {
                i = this.action.whoIsActing.currentCrits.parryNegative;
            }
            return '' + this.action.currentAttack.ob + i;
        }
        return "";
    }
    get currentDB() {
        if (this.action != null && this.action.whoIsActing != null && this.action.whoIsActing.currentArmor != null) {
            return '' + this.action.whoIsActing.currentArmor.db;
        }
        return "";
    }
    get currentBorderColor() {
        return "rgb(" + this.action.whoIsActing.color + ")";
    }
    get currentBackColor() {
        return "rgba(" + this.action.whoIsActing.color + ", 0.25)";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["BaseAction"])
], ActionComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ActionComponent.prototype, "isSelectable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ActionComponent.prototype, "viewType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionComponent.prototype, "onSelect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionComponent.prototype, "onDeleteClick", void 0);
ActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'action-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/action.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action.component.css */ "./src/app/components/encounter/action.component.css")).default]
    })
    /** action component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActionComponent);



/***/ }),

/***/ "./src/app/components/encounter/actions-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/encounter/actions-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/*\r\n    280,98\r\n*/\r\n.mainActionList {\r\n    padding-right: 160px;\r\n    padding-right: 300px;\r\n    padding-right: 0px;\r\n    padding-right: 20%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: 98%;\r\n    margin: 5px;\r\n\r\n}\r\n.list {\r\n    height: 90%;\r\n    /*border: 2px solid grey;*/\r\n    border-radius: 5px;\r\n    border: 1px solid rgb(100,100,100);\r\n    background: whitesmoke;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbmNvdW50ZXIvYWN0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jb3VudGVyL2FjdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAgICAyODAsOThcclxuKi9cclxuLm1haW5BY3Rpb25MaXN0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA5OCU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbn1cclxuLmxpc3Qge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAvKmJvcmRlcjogMnB4IHNvbGlkIGdyZXk7Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDAsMTAwLDEwMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/encounter/actions-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/encounter/actions-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ActionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsListComponent", function() { return ActionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");



var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ViewTypeEnum;
let ActionsListComponent = 
/** actions-list component*/
class ActionsListComponent {
    //public selectedAction: BaseAction = null;
    /** actions-list ctor */
    constructor() {
        this.actions = new Array();
        this.isSelectable = false;
        this.viewType = ViewTypeEnum.Overview;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    ngOnChanges() {
        //this.cdr.detectChanges();
    }
    selectAction(action) {
        if (this.isSelectable) {
            this.onSelect.next(action);
        }
    }
    getLeft(action) {
        //<%=int((Model.LeftPercent * 156)) %> px;
        return Math.round(action.leftPercent * 100) + "%";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ActionsListComponent.prototype, "actions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ActionsListComponent.prototype, "isSelectable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ActionsListComponent.prototype, "viewType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionsListComponent.prototype, "onSelect", void 0);
ActionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'actions-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/actions-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actions-list.component.css */ "./src/app/components/encounter/actions-list.component.css")).default]
    })
    /** actions-list component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActionsListComponent);



/***/ }),

/***/ "./src/app/components/encounter/index.ts":
/*!***********************************************!*\
  !*** ./src/app/components/encounter/index.ts ***!
  \***********************************************/
/*! exports provided: ActionsListComponent, ProposeAction, ActionEditComponent, ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions-list.component */ "./src/app/components/encounter/actions-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsListComponent", function() { return _actions_list_component__WEBPACK_IMPORTED_MODULE_1__["ActionsListComponent"]; });

/* harmony import */ var _action_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-edit.component */ "./src/app/components/encounter/action-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposeAction", function() { return _action_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProposeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionEditComponent", function() { return _action_edit_component__WEBPACK_IMPORTED_MODULE_2__["ActionEditComponent"]; });

/* harmony import */ var _action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.component */ "./src/app/components/encounter/action.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return _action_component__WEBPACK_IMPORTED_MODULE_3__["ActionComponent"]; });







/***/ }),

/***/ "./src/app/components/game/game-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/game/game-edit.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/game/game-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/game/game-edit.component.ts ***!
  \********************************************************/
/*! exports provided: GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return GameEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");






let GameEditComponent = 
/** GameEdit component*/
class GameEditComponent {
    constructor(router, gamesRepo, encounterService) {
        this.router = router;
        this.gamesRepo = gamesRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveGame = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //if (!this.game.id && this.encounterService.systemSettings != null) {
            //    this.game.gameType = this.encounterService.systemSettings.gameSystem;
            //}
            var g = yield this.gamesRepo.saveGameAsync(this.game);
            if (!this.game.id) {
                this.game.id = g.id;
            }
            yield this.encounterService.refreshAsync();
            this.onSave.emit(this.game);
        });
    }
    closeEdit() {
        //this.gameView.refresh();
    }
    selectEncounter() {
        this.encounterService.currentGame = this.game;
        this.router.navigate(['/encounter', this.game.id]);
    }
};
GameEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_4__["GamesRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["EncounterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_3__["Game"])
], GameEditComponent.prototype, "game", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GameEditComponent.prototype, "onDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GameEditComponent.prototype, "onSave", void 0);
GameEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-edit.component.css */ "./src/app/components/game/game-edit.component.css")).default]
    })
    /** GameEdit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _repositories__WEBPACK_IMPORTED_MODULE_4__["GamesRepository"],
        _services__WEBPACK_IMPORTED_MODULE_5__["EncounterService"]])
], GameEditComponent);



/***/ }),

/***/ "./src/app/components/game/game-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/game/game-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIC8qd2lkdGg6IDEyMHB4OyovXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/game/game-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/game/game-list.component.ts ***!
  \********************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");




let GameListComponent = 
/** Game component*/
class GameListComponent {
    /** character ctor */
    constructor(gameRepo, encounterService) {
        this.gameRepo = gameRepo;
        this.encounterService = encounterService;
        this.games = new Array();
        this.refresh = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.games = await this.gameRepo.getGamesAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectGame = (gameId) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selectedGame = yield this.gameRepo.getGameAsync(gameId);
        });
        this.onGameSave = (game) => {
            this.refresh();
        };
        this.onGameDeleted = (game) => {
            this.refresh();
        };
        this.refresh();
    }
    ngOnChanges() {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            }
            else {
                this.selectGame(this.games[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            }
            else {
                this.selectGame(this.games[0].id);
            }
        }
    }
    newGame() {
        //var _game = new Game();
        //_game.gameType = this.encounterService.systemSettings.gameSystem;
        //_game.gameTypeString = this.encounterService.systemSettings.gameSystemString;
        //this.selectedGame = _game;
    }
};
GameListComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
];
GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'game-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-list.component.css */ "./src/app/components/game/game-list.component.css")).default]
    })
    /** Game component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"],
        _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
], GameListComponent);



/***/ }),

/***/ "./src/app/components/game/index.ts":
/*!******************************************!*\
  !*** ./src/app/components/game/index.ts ***!
  \******************************************/
/*! exports provided: GameListComponent, GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _game_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-list.component */ "./src/app/components/game/game-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return _game_list_component__WEBPACK_IMPORTED_MODULE_1__["GameListComponent"]; });

/* harmony import */ var _game_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-edit.component */ "./src/app/components/game/game-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return _game_edit_component__WEBPACK_IMPORTED_MODULE_2__["GameEditComponent"]; });






/***/ }),

/***/ "./src/app/components/weapon/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/weapon/index.ts ***!
  \********************************************/
/*! exports provided: WeaponListComponent, WeaponEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _weapon_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon-list.component */ "./src/app/components/weapon/weapon-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponListComponent", function() { return _weapon_list_component__WEBPACK_IMPORTED_MODULE_1__["WeaponListComponent"]; });

/* harmony import */ var _weapon_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weapon-edit.component */ "./src/app/components/weapon/weapon-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponEditComponent", function() { return _weapon_edit_component__WEBPACK_IMPORTED_MODULE_2__["WeaponEditComponent"]; });






/***/ }),

/***/ "./src/app/components/weapon/weapon-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/weapon/weapon-edit.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-area {\r\n    width: 220px;\r\n}\r\n.full-row {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.half-row {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n.control-label {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n.full-row .control-label {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n.control-area {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n.full-row .control-area {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n.control-area-number {\r\n    width: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhcG9uL3dlYXBvbi1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hcmVhIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG4uZnVsbC1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGFsZi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmZ1bGwtcm93IC5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIHdpZHRoOiAxMDhweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYXJlYS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/weapon/weapon-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/weapon/weapon-edit.component.ts ***!
  \************************************************************/
/*! exports provided: WeaponEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponEditComponent", function() { return WeaponEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");





let WeaponEditComponent = 
/** WeaponEdit component*/
class WeaponEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo, encounterService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}
    delete() {
        this.onDelete.emit(this.weapon);
    }
};
WeaponEditComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["Weapon"])
], WeaponEditComponent.prototype, "weapon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeaponEditComponent.prototype, "onDelete", void 0);
WeaponEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weapon-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weapon-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weapon-edit.component.css */ "./src/app/components/weapon/weapon-edit.component.css")).default]
    })
    /** WeaponEdit component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"],
        _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]])
], WeaponEditComponent);



/***/ }),

/***/ "./src/app/components/weapon/weapon-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/weapon/weapon-list.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYXBvbi93ZWFwb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcblxyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/weapon/weapon-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/weapon/weapon-list.component.ts ***!
  \************************************************************/
/*! exports provided: WeaponListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListComponent", function() { return WeaponListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");



let WeaponListComponent = 
/** Weapon component*/
class WeaponListComponent {
    /** Armor ctor */
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cnt = 1;
    }
    ngOnChanges() {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    }
    ngOnInit() {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    }
    newWeapon() {
        var weapon = new _entities__WEBPACK_IMPORTED_MODULE_2__["Weapon"]();
        //weapon.id = this.cnt;
        weapon.name = "Weapon " + this.cnt;
        weapon.characterId = this.charId;
        this.selectedWeapon = weapon;
        this.weapons.push(weapon);
        this.cnt = this.cnt + 1;
    }
    onWeaponDeleted(weapon) {
        this.onDelete.emit(weapon);
    }
    selectWeapon(weapon) {
        this.selectedWeapon = weapon;
    }
    get selectedWeaponId() {
        if (this.selectedWeapon != null) {
            return this.selectedWeapon.name;
        }
        return "";
    }
    set selectedWeaponId(value) {
        this.selectedWeapon = this.weapons.find((a) => a.name == value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], WeaponListComponent.prototype, "weapons", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], WeaponListComponent.prototype, "charId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], WeaponListComponent.prototype, "onDelete", void 0);
WeaponListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'weapon-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weapon-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weapon-list.component.css */ "./src/app/components/weapon/weapon-list.component.css")).default]
    })
    /** Weapon component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WeaponListComponent);



/***/ }),

/***/ "./src/app/elements/alert/alert.component.ts":
/*!***************************************************!*\
  !*** ./src/app/elements/alert/alert.component.ts ***!
  \***************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/alert/alert.component.html")).default }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/elements/alert/index.ts":
/*!*****************************************!*\
  !*** ./src/app/elements/alert/index.ts ***!
  \*****************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/elements/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });





/***/ }),

/***/ "./src/app/elements/index.ts":
/*!***********************************!*\
  !*** ./src/app/elements/index.ts ***!
  \***********************************/
/*! exports provided: AlertComponent, ModalService, ModalComponent, TreeNode, TreeModel, TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alert_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/index */ "./src/app/elements/alert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });

/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/index */ "./src/app/elements/modal/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_2__["ModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]; });

/* harmony import */ var _treeview_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treeview/index */ "./src/app/elements/treeview/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_3__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_3__["TreeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_3__["TreeviewComponent"]; });







/***/ }),

/***/ "./src/app/elements/modal/index.ts":
/*!*****************************************!*\
  !*** ./src/app/elements/modal/index.ts ***!
  \*****************************************/
/*! exports provided: ModalService, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/elements/modal/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]; });






/***/ }),

/***/ "./src/app/elements/modal/modal.component.css":
/*!****************************************************!*\
  !*** ./src/app/elements/modal/modal.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/elements/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/elements/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ "./src/app/elements/modal/modal.service.ts");




let ModalComponent = class ModalComponent {
    //private dialog: JQuery;
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.element = jquery__WEBPACK_IMPORTED_MODULE_2__(el.nativeElement);
    }
    ngOnInit() {
        let modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        this.element.appendTo('body');
        this.modalService.add(this);
    }
    // remove self from modal service when directive is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        //this.dialog.dialog("open");
        this.element.show();
        this.element.children().show();
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').addClass('modal-open');
        this.openEvent.emit();
    }
    // close modal
    close() {
        //this.dialog.dialog("close");
        this.element.hide();
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').removeClass('modal-open');
        this.closedEvent.emit();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "openEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalComponent.prototype, "closedEvent", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/elements/modal/modal.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/elements/modal/modal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/elements/modal/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id == id);
    }
    open(id) {
        // open modal specified by id
        let modal = this.modals.find(x => x.id == id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        let modal = this.modals.find(x => x.id == id);
        modal.close();
    }
}


/***/ }),

/***/ "./src/app/elements/treeview/index.ts":
/*!********************************************!*\
  !*** ./src/app/elements/treeview/index.ts ***!
  \********************************************/
/*! exports provided: TreeNode, TreeModel, TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _treemodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemodel */ "./src/app/elements/treeview/treemodel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _treemodel__WEBPACK_IMPORTED_MODULE_1__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return _treemodel__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]; });

/* harmony import */ var _treeview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeview.component */ "./src/app/elements/treeview/treeview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return _treeview_component__WEBPACK_IMPORTED_MODULE_2__["TreeviewComponent"]; });






/***/ }),

/***/ "./src/app/elements/treeview/treemodel.ts":
/*!************************************************!*\
  !*** ./src/app/elements/treeview/treemodel.ts ***!
  \************************************************/
/*! exports provided: TreeNode, TreeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TreeNode {
    constructor(node, parent = null) {
        this.node = node;
        this.parent = parent;
        this._isSelected = false;
        this.isOpen = false;
        this.lastChecked = new Date();
        this.children = new Array();
        node.children.forEach((child) => {
            this.children.push(new TreeNode(child, this));
        });
    }
    check() {
        var missing = false;
        this.children.forEach((child) => {
            var it = this.node.children.find((n) => n.code == child.code);
            if (!it) {
                missing = true;
            }
            else {
                child.check();
            }
        });
        if (missing) {
            debugger;
            this.children = new Array();
            this.node.children.forEach((child) => {
                this.children.push(new TreeNode(child, this));
            });
        }
        this.lastChecked = new Date();
    }
    get text() {
        return this.node.text;
    }
    get code() {
        return this.node.code;
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this.treeTop.clearSelected();
        this._isSelected = true;
        this.openNode();
    }
    openNode() {
        this.isOpen = true;
        if (this.parent != null) {
            this.parent.openNode();
        }
    }
    clearSelected() {
        this._isSelected = false;
        this.children.forEach((child) => {
            child.clearSelected();
        });
    }
    get treeTop() {
        if (this.parent == null) {
            return this;
        }
        return this.parent.treeTop;
    }
    getSelected() {
        if (this.isSelected) {
            return this;
        }
        var node = null;
        this.children.forEach((n) => {
            node = node || n.getSelected();
        });
        return node;
    }
    findNode(code) {
        if (this.code == code) {
            return this;
        }
        var node = null;
        this.children.forEach((n) => {
            node = node || n.findNode(code);
        });
        return node;
    }
}
class TreeModel {
    constructor(treeTop) {
        this.treeTop = treeTop;
        this.cid = "code";
        this.lid = "text";
        this.cnid = "children";
        this.className = null;
        this.showTitle = true;
        this.treeTitle = "";
        this.treeNodeId = "";
        this.iconExpand = "keyboard_arrow_right";
        this.iconCollapse = "keyboard_arrow_down";
        this.iconNeutral = "";
        this.lastChecked = new Date();
    }
    findNode(code) {
        return this.treeTop.findNode(code);
    }
    getSelected() {
        return this.treeTop.getSelected();
    }
}


/***/ }),

/***/ "./src/app/elements/treeview/treeview.component.less":
/*!***********************************************************!*\
  !*** ./src/app/elements/treeview/treeview.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/elements/treeview/treeview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/elements/treeview/treeview.component.ts ***!
  \*********************************************************/
/*! exports provided: TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _treemodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treemodel */ "./src/app/elements/treeview/treemodel.ts");




let TreeviewComponent = 
/** treeview component*/
class TreeviewComponent {
    /** treeview ctor */
    constructor(el) {
        this.el = el;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.TREEVIEW_SUFFIX = "_treeView";
        this.ICON_SUFFIX = "_icon";
        this.ARIA_EXPANDED = "aria-expanded";
        this.DATA_CHILDCOUNT = "data-childcount";
        this.DATA_LID = "data-lid";
        this.DATA_CODE = "data-code";
        this.DATA_ISFIRST = "data-first";
        this.DATA_ISLAST = "data-last";
        this.TAB_INDEX = "tabindex";
        this.viewInitted = false;
        //debugger;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.viewInitted = true;
    }
    ngOnChanges(changes) {
        this.OnChanges();
    }
    OnChanges() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["whenTrue"])(() => this.viewInitted);
            var sel = this.treeModel.getSelected();
            if (sel != null) {
                this.options.some((eleRef, index, optionsarray) => {
                    let code = eleRef.nativeElement.getAttribute("data-code");
                    if (sel.code == code) {
                        this.scrollIntoViewSmoothly(eleRef);
                    }
                    return false;
                });
            }
        });
    }
    get model() {
        return this.treeModel;
    }
    get items() {
        return this.treeModel.treeTop.children;
    }
    toggleSelection($event, item) {
        item.isOpen = !item.isOpen;
        if (item.children.length == 0) {
            item.isSelected = true;
            this.onSelect.next(item);
        }
    }
    scrollIntoViewSmoothly(eleRef) {
        eleRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    getExpandCollapseClass(item) {
        if (item == null || item.children == null || item.children.length == 0) {
            return this.model.iconNeutral;
        }
        if (item.isOpen) {
            return this.model.iconCollapse;
        }
        return this.model.iconExpand;
    }
    isChildrenExists(items) {
        return (items != null && items.length > 0) ? true : false;
    }
    getTreeItemId(item, treeId) {
        return item.code + "_" + treeId + this.TREEVIEW_SUFFIX;
    }
    getIconId(item, treeId) {
        let itemId = this.getTreeItemId(item, treeId);
        return itemId + "_" + this.ICON_SUFFIX;
    }
    //determines if the current node has children or not
    getChildCount(item) {
        if (item != null && item.code != null) {
            let items = item.children;
            return (Array.isArray(items) ? items.length : 0);
        }
        return "0";
    }
    collapsedState(item) {
        return item.isOpen;
        //if (item != null && item.children != null && item.children.length > 0) {
        //    //item.ariaExpanded = "false";
        //    return "false"
        //}
        ////item.ariaExpanded = null;
        //return null;
    }
};
TreeviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("options"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], TreeviewComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _treemodel__WEBPACK_IMPORTED_MODULE_3__["TreeModel"])
], TreeviewComponent.prototype, "treeModel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TreeviewComponent.prototype, "onSelect", void 0);
TreeviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treeview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treeview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/treeview/treeview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./treeview.component.less */ "./src/app/elements/treeview/treeview.component.less")).default]
    })
    /** treeview component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], TreeviewComponent);



/***/ }),

/***/ "./src/app/entities/ActionDefinition.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/ActionDefinition.ts ***!
  \**********************************************/
/*! exports provided: ActionDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return ActionDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ActionDefinition {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ActionGroup.ts":
/*!*****************************************!*\
  !*** ./src/app/entities/ActionGroup.ts ***!
  \*****************************************/
/*! exports provided: ActionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return ActionGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ActionGroup {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Actor.ts":
/*!***********************************!*\
  !*** ./src/app/entities/Actor.ts ***!
  \***********************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Actor {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ApplicationUser.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/ApplicationUser.ts ***!
  \*********************************************/
/*! exports provided: ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ApplicationUser {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Armor.ts":
/*!***********************************!*\
  !*** ./src/app/entities/Armor.ts ***!
  \***********************************/
/*! exports provided: Armor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Armor {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Attack.ts":
/*!************************************!*\
  !*** ./src/app/entities/Attack.ts ***!
  \************************************/
/*! exports provided: Attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return Attack; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Attack {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/AttackType.ts":
/*!****************************************!*\
  !*** ./src/app/entities/AttackType.ts ***!
  \****************************************/
/*! exports provided: AttackType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackType", function() { return AttackType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AttackType {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/AuthenticateModel.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/AuthenticateModel.ts ***!
  \***********************************************/
/*! exports provided: AuthenticateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return AuthenticateModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthenticateModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/BaseAction.ts":
/*!****************************************!*\
  !*** ./src/app/entities/BaseAction.ts ***!
  \****************************************/
/*! exports provided: BaseAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAction", function() { return BaseAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaseAction {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Book.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Book.ts ***!
  \**********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Book {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Character.ts":
/*!***************************************!*\
  !*** ./src/app/entities/Character.ts ***!
  \***************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Character {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ConstitutionBonusChart.ts":
/*!****************************************************!*\
  !*** ./src/app/entities/ConstitutionBonusChart.ts ***!
  \****************************************************/
/*! exports provided: ConstitutionBonusChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChart", function() { return ConstitutionBonusChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConstitutionBonusChart {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ConstitutionBonusChartValues.ts":
/*!**********************************************************!*\
  !*** ./src/app/entities/ConstitutionBonusChartValues.ts ***!
  \**********************************************************/
/*! exports provided: ConstitutionBonusChartValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChartValues", function() { return ConstitutionBonusChartValues; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConstitutionBonusChartValues {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Creature.ts":
/*!**************************************!*\
  !*** ./src/app/entities/Creature.ts ***!
  \**************************************/
/*! exports provided: Creature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return Creature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Creature {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/CriticalCode.ts":
/*!******************************************!*\
  !*** ./src/app/entities/CriticalCode.ts ***!
  \******************************************/
/*! exports provided: CriticalCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalCode", function() { return CriticalCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CriticalCode {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/CriticalEffect.ts":
/*!********************************************!*\
  !*** ./src/app/entities/CriticalEffect.ts ***!
  \********************************************/
/*! exports provided: CriticalEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalEffect", function() { return CriticalEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CriticalEffect {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/CriticalIgnore.ts":
/*!********************************************!*\
  !*** ./src/app/entities/CriticalIgnore.ts ***!
  \********************************************/
/*! exports provided: CriticalIgnore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalIgnore", function() { return CriticalIgnore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CriticalIgnore {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/CriticalType.ts":
/*!******************************************!*\
  !*** ./src/app/entities/CriticalType.ts ***!
  \******************************************/
/*! exports provided: CriticalType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalType", function() { return CriticalType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CriticalType {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Dice.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Dice.ts ***!
  \**********************************/
/*! exports provided: Dice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Dice {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/EnumDefinitions.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/EnumDefinitions.ts ***!
  \*********************************************/
/*! exports provided: EnumDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return EnumDefinitions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EnumDefinitions;
(function (EnumDefinitions) {
    let ViewTypeEnum;
    (function (ViewTypeEnum) {
        ViewTypeEnum[ViewTypeEnum["Overview"] = 0] = "Overview";
        ViewTypeEnum[ViewTypeEnum["Player"] = 1] = "Player";
        ViewTypeEnum[ViewTypeEnum["GM"] = 2] = "GM";
    })(ViewTypeEnum = EnumDefinitions.ViewTypeEnum || (EnumDefinitions.ViewTypeEnum = {}));
    let SecurityRoles;
    (function (SecurityRoles) {
        SecurityRoles[SecurityRoles["None"] = 0] = "None";
        SecurityRoles[SecurityRoles["Normal"] = 1] = "Normal";
        SecurityRoles[SecurityRoles["Compendium"] = 2] = "Compendium";
        SecurityRoles[SecurityRoles["Admin"] = 3] = "Admin";
    })(SecurityRoles = EnumDefinitions.SecurityRoles || (EnumDefinitions.SecurityRoles = {}));
    let ResponseEnum;
    (function (ResponseEnum) {
        ResponseEnum[ResponseEnum["ChooseNextAction"] = 0] = "ChooseNextAction";
        ResponseEnum[ResponseEnum["DisplayMessage"] = 1] = "DisplayMessage";
        ResponseEnum[ResponseEnum["AutoAdvance"] = 2] = "AutoAdvance";
    })(ResponseEnum = EnumDefinitions.ResponseEnum || (EnumDefinitions.ResponseEnum = {}));
    let GameType;
    (function (GameType) {
        GameType[GameType["RMSS"] = 0] = "RMSS";
        GameType[GameType["DnD5e"] = 1] = "DnD5e";
    })(GameType = EnumDefinitions.GameType || (EnumDefinitions.GameType = {}));
    let DamageLevel;
    (function (DamageLevel) {
        DamageLevel[DamageLevel["Healthy"] = 0] = "Healthy";
        DamageLevel[DamageLevel["Winded"] = 1] = "Winded";
        DamageLevel[DamageLevel["Bloodied"] = 2] = "Bloodied";
        DamageLevel[DamageLevel["Rough"] = 3] = "Rough";
        DamageLevel[DamageLevel["Dead"] = 4] = "Dead";
    })(DamageLevel = EnumDefinitions.DamageLevel || (EnumDefinitions.DamageLevel = {}));
    let CriticalLevels;
    (function (CriticalLevels) {
        CriticalLevels[CriticalLevels["Same"] = 0] = "Same";
        CriticalLevels[CriticalLevels["A"] = 1] = "A";
        CriticalLevels[CriticalLevels["B"] = 2] = "B";
        CriticalLevels[CriticalLevels["C"] = 3] = "C";
        CriticalLevels[CriticalLevels["D"] = 4] = "D";
        CriticalLevels[CriticalLevels["E"] = 5] = "E";
    })(CriticalLevels = EnumDefinitions.CriticalLevels || (EnumDefinitions.CriticalLevels = {}));
    let CharacterType;
    (function (CharacterType) {
        CharacterType[CharacterType["NPC"] = 0] = "NPC";
        CharacterType[CharacterType["PC"] = 1] = "PC";
    })(CharacterType = EnumDefinitions.CharacterType || (EnumDefinitions.CharacterType = {}));
    let ActorActionType;
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
    let ActionProblem;
    (function (ActionProblem) {
        ActionProblem[ActionProblem["IsOK"] = 0] = "IsOK";
        ActionProblem[ActionProblem["IsWarning"] = 1] = "IsWarning";
        ActionProblem[ActionProblem["IsError"] = 2] = "IsError";
    })(ActionProblem = EnumDefinitions.ActionProblem || (EnumDefinitions.ActionProblem = {}));
    let ActionTypeEnum;
    (function (ActionTypeEnum) {
        ActionTypeEnum[ActionTypeEnum["None"] = 0] = "None";
        ActionTypeEnum[ActionTypeEnum["Current"] = 1] = "Current";
        ActionTypeEnum[ActionTypeEnum["Proposed"] = 2] = "Proposed";
        ActionTypeEnum[ActionTypeEnum["Next"] = 3] = "Next";
        ActionTypeEnum[ActionTypeEnum["Effect"] = 4] = "Effect";
        ActionTypeEnum[ActionTypeEnum["Interrupted"] = 5] = "Interrupted";
        ActionTypeEnum[ActionTypeEnum["Completed"] = 6] = "Completed";
    })(ActionTypeEnum = EnumDefinitions.ActionTypeEnum || (EnumDefinitions.ActionTypeEnum = {}));
    let BaseActionType;
    (function (BaseActionType) {
        BaseActionType[BaseActionType["None"] = 0] = "None";
        BaseActionType[BaseActionType["Normal"] = 1] = "Normal";
        BaseActionType[BaseActionType["Attack"] = 2] = "Attack";
        BaseActionType[BaseActionType["Spell"] = 3] = "Spell";
        BaseActionType[BaseActionType["Prep"] = 4] = "Prep";
        BaseActionType[BaseActionType["Movement"] = 5] = "Movement";
    })(BaseActionType = EnumDefinitions.BaseActionType || (EnumDefinitions.BaseActionType = {}));
    let ParryType;
    (function (ParryType) {
        ParryType[ParryType["Fine"] = 0] = "Fine";
        ParryType[ParryType["Must_Parry"] = 1] = "Must_Parry";
        ParryType[ParryType["No_Parry"] = 2] = "No_Parry";
    })(ParryType = EnumDefinitions.ParryType || (EnumDefinitions.ParryType = {}));
    let CreatureStatus;
    (function (CreatureStatus) {
        CreatureStatus[CreatureStatus["Personal"] = 0] = "Personal";
        CreatureStatus[CreatureStatus["Proposed"] = 1] = "Proposed";
        CreatureStatus[CreatureStatus["InCompendium"] = 2] = "InCompendium";
    })(CreatureStatus = EnumDefinitions.CreatureStatus || (EnumDefinitions.CreatureStatus = {}));
})(EnumDefinitions || (EnumDefinitions = {}));


/***/ }),

/***/ "./src/app/entities/Game.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Game.ts ***!
  \**********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Game {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/IQ.ts":
/*!********************************!*\
  !*** ./src/app/entities/IQ.ts ***!
  \********************************/
/*! exports provided: IQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IQ", function() { return IQ; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class IQ {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/LevelChart.ts":
/*!****************************************!*\
  !*** ./src/app/entities/LevelChart.ts ***!
  \****************************************/
/*! exports provided: LevelChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelChart", function() { return LevelChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LevelChart {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/LevelChartValue.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/LevelChartValue.ts ***!
  \*********************************************/
/*! exports provided: LevelChartValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelChartValue", function() { return LevelChartValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LevelChartValue {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/MoveNextResult.ts":
/*!********************************************!*\
  !*** ./src/app/entities/MoveNextResult.ts ***!
  \********************************************/
/*! exports provided: MoveNextResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveNextResult", function() { return MoveNextResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MoveNextResult {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/MySettings.ts":
/*!****************************************!*\
  !*** ./src/app/entities/MySettings.ts ***!
  \****************************************/
/*! exports provided: MySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return MySettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MySettings {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Outlook.ts":
/*!*************************************!*\
  !*** ./src/app/entities/Outlook.ts ***!
  \*************************************/
/*! exports provided: Outlook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return Outlook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Outlook {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Pace.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Pace.ts ***!
  \**********************************/
/*! exports provided: Pace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return Pace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pace {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/PsychicRefractoryPeriodEntry.ts":
/*!**********************************************************!*\
  !*** ./src/app/entities/PsychicRefractoryPeriodEntry.ts ***!
  \**********************************************************/
/*! exports provided: PsychicRefractoryPeriodEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychicRefractoryPeriodEntry", function() { return PsychicRefractoryPeriodEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PsychicRefractoryPeriodEntry {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ReferenceEntry.ts":
/*!********************************************!*\
  !*** ./src/app/entities/ReferenceEntry.ts ***!
  \********************************************/
/*! exports provided: ReferenceEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceEntry", function() { return ReferenceEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ReferenceEntry {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/RegisterModel.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/RegisterModel.ts ***!
  \*******************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RegisterModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/SizeRating.ts":
/*!****************************************!*\
  !*** ./src/app/entities/SizeRating.ts ***!
  \****************************************/
/*! exports provided: SizeRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeRating", function() { return SizeRating; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SizeRating {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/SpeedChart.ts":
/*!****************************************!*\
  !*** ./src/app/entities/SpeedChart.ts ***!
  \****************************************/
/*! exports provided: SpeedChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedChart", function() { return SpeedChart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SpeedChart {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/UpdateModel.ts":
/*!*****************************************!*\
  !*** ./src/app/entities/UpdateModel.ts ***!
  \*****************************************/
/*! exports provided: UpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return UpdateModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UpdateModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/UserModel.ts":
/*!***************************************!*\
  !*** ./src/app/entities/UserModel.ts ***!
  \***************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/Weapon.ts":
/*!************************************!*\
  !*** ./src/app/entities/Weapon.ts ***!
  \************************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Weapon {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/WeaponType.ts":
/*!****************************************!*\
  !*** ./src/app/entities/WeaponType.ts ***!
  \****************************************/
/*! exports provided: WeaponType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponType", function() { return WeaponType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WeaponType {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/index.ts":
/*!***********************************!*\
  !*** ./src/app/entities/index.ts ***!
  \***********************************/
/*! exports provided: EnumDefinitions, Actor, BaseAction, ActionDefinition, ActionGroup, ApplicationUser, Armor, Attack, AttackType, AuthenticateModel, Book, Character, ConstitutionBonusChart, ConstitutionBonusChartValues, Creature, CriticalCode, CriticalEffect, CriticalIgnore, CriticalType, Dice, Game, IQ, LevelChart, LevelChartValue, MoveNextResult, MySettings, Outlook, Pace, PsychicRefractoryPeriodEntry, ReferenceEntry, RegisterModel, SizeRating, SpeedChart, UpdateModel, UserModel, Weapon, WeaponType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAction", function() { return BaseAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actor */ "./src/app/entities/Actor.ts");
/* harmony import */ var _BaseAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseAction */ "./src/app/entities/BaseAction.ts");
/* harmony import */ var _EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
/* harmony import */ var _ActionDefinition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionDefinition */ "./src/app/entities/ActionDefinition.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return _ActionDefinition__WEBPACK_IMPORTED_MODULE_4__["ActionDefinition"]; });

/* harmony import */ var _ActionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionGroup */ "./src/app/entities/ActionGroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return _ActionGroup__WEBPACK_IMPORTED_MODULE_5__["ActionGroup"]; });

/* harmony import */ var _ApplicationUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationUser */ "./src/app/entities/ApplicationUser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return _ApplicationUser__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"]; });

/* harmony import */ var _Armor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Armor */ "./src/app/entities/Armor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return _Armor__WEBPACK_IMPORTED_MODULE_7__["Armor"]; });

/* harmony import */ var _Attack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Attack */ "./src/app/entities/Attack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return _Attack__WEBPACK_IMPORTED_MODULE_8__["Attack"]; });

/* harmony import */ var _AttackType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttackType */ "./src/app/entities/AttackType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackType", function() { return _AttackType__WEBPACK_IMPORTED_MODULE_9__["AttackType"]; });

/* harmony import */ var _AuthenticateModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AuthenticateModel */ "./src/app/entities/AuthenticateModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return _AuthenticateModel__WEBPACK_IMPORTED_MODULE_10__["AuthenticateModel"]; });

/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Book */ "./src/app/entities/Book.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _Book__WEBPACK_IMPORTED_MODULE_11__["Book"]; });

/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Character */ "./src/app/entities/Character.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return _Character__WEBPACK_IMPORTED_MODULE_12__["Character"]; });

/* harmony import */ var _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ConstitutionBonusChart */ "./src/app/entities/ConstitutionBonusChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChart", function() { return _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_13__["ConstitutionBonusChart"]; });

/* harmony import */ var _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ConstitutionBonusChartValues */ "./src/app/entities/ConstitutionBonusChartValues.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChartValues", function() { return _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_14__["ConstitutionBonusChartValues"]; });

/* harmony import */ var _Creature__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Creature */ "./src/app/entities/Creature.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return _Creature__WEBPACK_IMPORTED_MODULE_15__["Creature"]; });

/* harmony import */ var _CriticalCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CriticalCode */ "./src/app/entities/CriticalCode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalCode", function() { return _CriticalCode__WEBPACK_IMPORTED_MODULE_16__["CriticalCode"]; });

/* harmony import */ var _CriticalEffect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CriticalEffect */ "./src/app/entities/CriticalEffect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffect", function() { return _CriticalEffect__WEBPACK_IMPORTED_MODULE_17__["CriticalEffect"]; });

/* harmony import */ var _CriticalIgnore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CriticalIgnore */ "./src/app/entities/CriticalIgnore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalIgnore", function() { return _CriticalIgnore__WEBPACK_IMPORTED_MODULE_18__["CriticalIgnore"]; });

/* harmony import */ var _CriticalType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CriticalType */ "./src/app/entities/CriticalType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalType", function() { return _CriticalType__WEBPACK_IMPORTED_MODULE_19__["CriticalType"]; });

/* harmony import */ var _Dice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Dice */ "./src/app/entities/Dice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return _Dice__WEBPACK_IMPORTED_MODULE_20__["Dice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return _EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"]; });

/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Game */ "./src/app/entities/Game.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game__WEBPACK_IMPORTED_MODULE_21__["Game"]; });

/* harmony import */ var _IQ__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./IQ */ "./src/app/entities/IQ.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IQ", function() { return _IQ__WEBPACK_IMPORTED_MODULE_22__["IQ"]; });

/* harmony import */ var _LevelChart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LevelChart */ "./src/app/entities/LevelChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChart", function() { return _LevelChart__WEBPACK_IMPORTED_MODULE_23__["LevelChart"]; });

/* harmony import */ var _LevelChartValue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LevelChartValue */ "./src/app/entities/LevelChartValue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChartValue", function() { return _LevelChartValue__WEBPACK_IMPORTED_MODULE_24__["LevelChartValue"]; });

/* harmony import */ var _MoveNextResult__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MoveNextResult */ "./src/app/entities/MoveNextResult.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveNextResult", function() { return _MoveNextResult__WEBPACK_IMPORTED_MODULE_25__["MoveNextResult"]; });

/* harmony import */ var _MySettings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MySettings */ "./src/app/entities/MySettings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return _MySettings__WEBPACK_IMPORTED_MODULE_26__["MySettings"]; });

/* harmony import */ var _Outlook__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Outlook */ "./src/app/entities/Outlook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return _Outlook__WEBPACK_IMPORTED_MODULE_27__["Outlook"]; });

/* harmony import */ var _Pace__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pace */ "./src/app/entities/Pace.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pace__WEBPACK_IMPORTED_MODULE_28__["Pace"]; });

/* harmony import */ var _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PsychicRefractoryPeriodEntry */ "./src/app/entities/PsychicRefractoryPeriodEntry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsychicRefractoryPeriodEntry", function() { return _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_29__["PsychicRefractoryPeriodEntry"]; });

/* harmony import */ var _ReferenceEntry__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ReferenceEntry */ "./src/app/entities/ReferenceEntry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceEntry", function() { return _ReferenceEntry__WEBPACK_IMPORTED_MODULE_30__["ReferenceEntry"]; });

/* harmony import */ var _RegisterModel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./RegisterModel */ "./src/app/entities/RegisterModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return _RegisterModel__WEBPACK_IMPORTED_MODULE_31__["RegisterModel"]; });

/* harmony import */ var _SizeRating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SizeRating */ "./src/app/entities/SizeRating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeRating", function() { return _SizeRating__WEBPACK_IMPORTED_MODULE_32__["SizeRating"]; });

/* harmony import */ var _SpeedChart__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./SpeedChart */ "./src/app/entities/SpeedChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedChart", function() { return _SpeedChart__WEBPACK_IMPORTED_MODULE_33__["SpeedChart"]; });

/* harmony import */ var _UpdateModel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UpdateModel */ "./src/app/entities/UpdateModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return _UpdateModel__WEBPACK_IMPORTED_MODULE_34__["UpdateModel"]; });

/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./UserModel */ "./src/app/entities/UserModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _UserModel__WEBPACK_IMPORTED_MODULE_35__["UserModel"]; });

/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Weapon */ "./src/app/entities/Weapon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return _Weapon__WEBPACK_IMPORTED_MODULE_36__["Weapon"]; });

/* harmony import */ var _WeaponType__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./WeaponType */ "./src/app/entities/WeaponType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponType", function() { return _WeaponType__WEBPACK_IMPORTED_MODULE_37__["WeaponType"]; });





var ActionTypeEnum = _EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ActionTypeEnum;







//export * from './BaseAction';




























class Actor extends _Actor__WEBPACK_IMPORTED_MODULE_1__["Actor"] {
    get currentAction() {
        //debugger;
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Current;
            });
            return ac;
        }
        return null;
    }
    get nextAction() {
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Next;
            });
            return ac;
        }
        return null;
    }
    get proposedAction() {
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Proposed;
            });
            return ac;
        }
        return null;
    }
}
class BaseAction extends _BaseAction__WEBPACK_IMPORTED_MODULE_2__["BaseAction"] {
}


/***/ }),

/***/ "./src/app/navigation/index.ts":
/*!*************************************!*\
  !*** ./src/app/navigation/index.ts ***!
  \*************************************/
/*! exports provided: MainNavMenuComponent, SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav-menu/index */ "./src/app/navigation/main-nav-menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__["MainNavMenuComponent"]; });

/* harmony import */ var _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-nav-menu/index */ "./src/app/navigation/side-nav-menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_2__["SideNavMenuComponent"]; });






/***/ }),

/***/ "./src/app/navigation/main-nav-menu/index.ts":
/*!***************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/index.ts ***!
  \***************************************************/
/*! exports provided: MainNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav-menu.component */ "./src/app/navigation/main-nav-menu/main-nav-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainNavMenuComponent"]; });





/***/ }),

/***/ "./src/app/navigation/main-nav-menu/main-nav-menu.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/main-nav-menu.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbWFpbi1uYXYtbWVudS9tYWluLW5hdi1tZW51LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/navigation/main-nav-menu/main-nav-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/main-nav-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return MainNavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");




let MainNavMenuComponent = 
/** mainNavMenu component*/
class MainNavMenuComponent {
    /** mainNavMenu ctor */
    constructor(authenticationService, gameRepository) {
        this.authenticationService = authenticationService;
        this.gameRepository = gameRepository;
        this.init();
    }
    get currentUser() {
        return this.authenticationService.currentUserValue;
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authenticationService.currentUser.subscribe((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (user == null) {
                    this.games = new Array();
                    return;
                }
                //debugger;
                var gms = yield this.gameRepository.getGamesAsync();
                gms = gms.filter((gm) => {
                    return gm.gM_ID == user.id;
                });
                this.games = gms;
            }));
        });
    }
};
MainNavMenuComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"] }
];
MainNavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav-menu.component.less */ "./src/app/navigation/main-nav-menu/main-nav-menu.component.less")).default]
    })
    /** mainNavMenu component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"]])
], MainNavMenuComponent);



/***/ }),

/***/ "./src/app/navigation/side-nav-menu/index.ts":
/*!***************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/index.ts ***!
  \***************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-menu.component */ "./src/app/navigation/side-nav-menu/side-nav-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideNavMenuComponent"]; });





/***/ }),

/***/ "./src/app/navigation/side-nav-menu/side-nav-menu.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/side-nav-menu.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li .glyphicon {\n  margin-right: 10px;\n}\n/* Highlighting rules for nav menu items */\nli ul {\n  padding-left: 5px;\n}\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n  /*position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;*/\n  z-index: 1;\n}\n.navbar li li {\n  font-size: 12px;\n}\n.navbar-inverse .navbar-nav > li a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li a:hover,\n.navbar-inverse .navbar-nav > li a:focus {\n  color: #fff;\n  background-color: transparent;\n  cursor: pointer;\n}\n.navbar-inverse .navbar-nav li.link-active > a,\n.navbar-inverse .navbar-nav li.link-active > a:hover,\n.navbar-inverse .navbar-nav li.link-active > a:focus {\n  background-color: #4189C7;\n  color: white;\n}\n@media (min-width: 768px) {\n  /* On small screens, convert the nav menu to a vertical sidebar */\n  .main-nav {\n    height: 100%;\n    /*width: calc(25% - 20px);*/\n  }\n  .navbar {\n    border-radius: 0px;\n    border-width: 0px;\n    height: 100%;\n  }\n  .navbar-header {\n    float: none;\n  }\n  .navbar-collapse {\n    border-top: 1px solid #444;\n    padding: 0px;\n  }\n  .navbar ul {\n    float: none;\n  }\n  .navbar li {\n    float: none;\n    font-size: 15px;\n    margin: 6px;\n  }\n  .navbar li li {\n    font-size: 12px;\n  }\n  .navbar li a {\n    padding: 10px 16px;\n    border-radius: 4px;\n  }\n  .navbar a {\n    /* If a menu item's text is too long, truncate it */\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L1g6L1BlcnNvbmFsIFByb2plY3RzL0NFQVRTaWktQ29tYmF0LVRyYWNrZXIvQ29tYmF0VHJhY2tlci9Db21iYXRUcmFja2VyLldlYi9DRUFUU2lpQXBwL3NyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L3NpZGUtbmF2LW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vc2lkZS1uYXYtbWVudS9zaWRlLW5hdi1tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBQUNBLDBDQUEwQztBREcxQztFQUNFLGlCQUFBO0FDREY7QUFDQSx5RUFBeUU7QURJekU7RUNGRTs7O2NBR1k7RURJWixVQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtBQ0pGO0FET0E7O0VBRUUsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7OztFQUdFLHlCQUFBO0VBQ0EsWUFBQTtBQ05GO0FEVUE7RUNSRSxpRUFBaUU7RURVakU7SUFDRSxZQUFBO0lDUkEsMkJBQTJCO0VBQzdCO0VEV0E7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ1RGO0VEWUE7SUFDRSxXQUFBO0VDVkY7RURhQTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtFQ1hGO0VEY0E7SUFDRSxXQUFBO0VDWkY7RURlQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ2JGO0VEZ0JBO0lBQ0UsZUFBQTtFQ2RGO0VEaUJBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ2ZGO0VEa0JBO0lDaEJFLG1EQUFtRDtJRGtCbkQsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ2hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L3NpZGUtbmF2LW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSAuZ2x5cGhpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXG5cbmxpIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXG4ubWFpbi1uYXYge1xuICAvKnBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDsqL1xuICB6LWluZGV4OiAxO1xufVxuXG4ubmF2YmFyIGxpIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpIGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaS5saW5rLWFjdGl2ZSA+IGEsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpLmxpbmstYWN0aXZlID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXG4gIC5tYWluLW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7Ki9cbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubmF2YmFyLWhlYWRlciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAubmF2YmFyIHVsIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXIgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxuXG4gIC5uYXZiYXIgbGkgbGkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5uYXZiYXIgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC5uYXZiYXIgYSB7XG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuIiwibGkgLmdseXBoaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cbmxpIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xuLm1haW4tbmF2IHtcbiAgLypwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7Ki9cbiAgei1pbmRleDogMTtcbn1cbi5uYXZiYXIgbGkgbGkge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpLmxpbmstYWN0aXZlID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaS5saW5rLWFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xuICAubWFpbi1uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKndpZHRoOiBjYWxjKDI1JSAtIDIwcHgpOyovXG4gIH1cbiAgLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubmF2YmFyLWhlYWRlciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5uYXZiYXIgdWwge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5uYXZiYXIgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxuICAubmF2YmFyIGxpIGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLm5hdmJhciBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5uYXZiYXIgYSB7XG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/navigation/side-nav-menu/side-nav-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/side-nav-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return SideNavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");




let SideNavMenuComponent = 
/** side-nav-menu component*/
class SideNavMenuComponent {
    /** side-nav-menu ctor */
    constructor(gameView, authenticationService) {
        this.gameView = gameView;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
};
SideNavMenuComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
SideNavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'side-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/side-nav-menu/side-nav-menu.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav-menu.component.less */ "./src/app/navigation/side-nav-menu/side-nav-menu.component.less")).default]
    })
    /** side-nav-menu component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"],
        _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], SideNavMenuComponent);



/***/ }),

/***/ "./src/app/repositories/Actions.repository.ts":
/*!****************************************************!*\
  !*** ./src/app/repositories/Actions.repository.ts ***!
  \****************************************************/
/*! exports provided: ActionsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return ActionsRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let ActionsRepository = class ActionsRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Actions/getActionsOnActor/${actorId}
        //public getActionsOnActor = (actorId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getActionsOnActorAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getActionsOnActor(actorId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActionsOnActor = (actorId) => {
            actorId = (actorId == null ? "" : actorId);
            var _Url = `api/v${version}/Actions/getActionsOnActor/${actorId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Actions/getActionsInGame/${gameId}
        //public getActionsInGame = (gameId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsInGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActionsInGameAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.getActionsInGame(gameId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActionsInGame = (gameId) => {
            gameId = (gameId == null ? "" : gameId);
            var _Url = `api/v${version}/Actions/getActionsInGame/${gameId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Actions/getAction/${id}
        //public getAction = (id: number, callback: (data: BaseAction)=>void) : void => {
        //	this.getActionObserve(id).subscribe(response => callback(response));
        //}
        this.getActionAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getAction(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAction = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Actions/getAction/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Actions/SaveAction
        //public saveAction = (action: BaseAction, callback: (data: BaseAction)=>void) : void => {
        //	this.saveActionObserve(action).subscribe(response => callback(response));
        //}
        this.saveActionAsync = (action) => {
            return new Promise((resolve, reject) => {
                this.saveAction(action)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveAction = (action) => {
            action = (action == null ? "" : action);
            var _Url = `api/v${version}/Actions/SaveAction`;
            return this._httpClient.post(_Url, action)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Actions/deleteAction/${id}
        //public deleteAction = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActionObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActionAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteAction(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteAction = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Actions/deleteAction/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
ActionsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ActionsRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ActionsRepository);



/***/ }),

/***/ "./src/app/repositories/Actors.repository.ts":
/*!***************************************************!*\
  !*** ./src/app/repositories/Actors.repository.ts ***!
  \***************************************************/
/*! exports provided: ActorsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return ActorsRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let ActorsRepository = class ActorsRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Actors/getActorsInGame/${gameId}
        //public getActorsInGame = (gameId: number, callback: (data: Actor[])=>void) : void => {
        //	this.getActorsInGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActorsInGameAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.getActorsInGame(gameId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActorsInGame = (gameId) => {
            gameId = (gameId == null ? "" : gameId);
            var _Url = `api/v${version}/Actors/getActorsInGame/${gameId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Actor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Actors/getActor/${id}
        //public getActor = (id: number, callback: (data: Actor)=>void) : void => {
        //	this.getActorObserve(id).subscribe(response => callback(response));
        //}
        this.getActorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getActor(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActor = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Actors/getActor/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Actors/SaveActor
        //public saveActor = (actor: Actor, callback: (data: Actor)=>void) : void => {
        //	this.saveActorObserve(actor).subscribe(response => callback(response));
        //}
        this.saveActorAsync = (actor) => {
            return new Promise((resolve, reject) => {
                this.saveActor(actor)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveActor = (actor) => {
            actor = (actor == null ? "" : actor);
            var _Url = `api/v${version}/Actors/SaveActor`;
            return this._httpClient.post(_Url, actor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Actors/deleteActor/${id}
        //public deleteActor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteActor(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteActor = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Actors/deleteActor/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
ActorsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ActorsRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ActorsRepository);



/***/ }),

/***/ "./src/app/repositories/Characters.repository.ts":
/*!*******************************************************!*\
  !*** ./src/app/repositories/Characters.repository.ts ***!
  \*******************************************************/
/*! exports provided: CharactersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return CharactersRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let CharactersRepository = class CharactersRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Characters/getCharacters
        //public getCharacters = (, callback: (data: Character[])=>void) : void => {
        //	this.getCharactersObserve().subscribe(response => callback(response));
        //}
        this.getCharactersAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCharacters()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCharacters = () => {
            var _Url = `api/v${version}/Characters/getCharacters`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Character"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Characters/getCharacter/${id}
        //public getCharacter = (id: number, callback: (data: Character)=>void) : void => {
        //	this.getCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.getCharacterAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCharacter(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCharacter = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Characters/getCharacter/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Character"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Characters/SaveCharacter
        //public saveCharacter = (character: Character, callback: (data: Character)=>void) : void => {
        //	this.saveCharacterObserve(character).subscribe(response => callback(response));
        //}
        this.saveCharacterAsync = (character) => {
            return new Promise((resolve, reject) => {
                this.saveCharacter(character)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveCharacter = (character) => {
            character = (character == null ? "" : character);
            var _Url = `api/v${version}/Characters/SaveCharacter`;
            return this._httpClient.post(_Url, character)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Character"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Characters/deleteCharacter/${id}
        //public deleteCharacter = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCharacterAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCharacter(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteCharacter = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Characters/deleteCharacter/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
CharactersRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
CharactersRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], CharactersRepository);



/***/ }),

/***/ "./src/app/repositories/Combat.repository.ts":
/*!***************************************************!*\
  !*** ./src/app/repositories/Combat.repository.ts ***!
  \***************************************************/
/*! exports provided: CombatRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return CombatRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************








var version = "1";
let CombatRepository = class CombatRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // delete: api/v${version}/Combat/deleteArmor/${id}
        //public deleteArmor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteArmorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteArmorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteArmor(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteArmor = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/deleteArmor/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Combat/deleteAttack/${id}
        //public deleteAttack = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteAttackObserve(id).subscribe(response => callback(response));
        //}
        this.deleteAttackAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteAttack(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteAttack = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/deleteAttack/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Combat/deleteWeapon/${id}
        //public deleteWeapon = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.deleteWeaponAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteWeapon(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteWeapon = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/deleteWeapon/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getArmor/${id}
        //public getArmor = (id: number, callback: (data: Armor)=>void) : void => {
        //	this.getArmorObserve(id).subscribe(response => callback(response));
        //}
        this.getArmorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getArmor(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getArmor = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/getArmor/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Armor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getArmors
        //public getArmors = (, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsObserve().subscribe(response => callback(response));
        //}
        this.getArmorsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getArmors()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getArmors = () => {
            var _Url = `api/v${version}/Combat/getArmors`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Armor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getArmorsOnCharacter/${characterId}
        //public getArmorsOnCharacter = (characterId: number, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getArmorsOnCharacterAsync = (characterId) => {
            return new Promise((resolve, reject) => {
                this.getArmorsOnCharacter(characterId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getArmorsOnCharacter = (characterId) => {
            characterId = (characterId == null ? "" : characterId);
            var _Url = `api/v${version}/Combat/getArmorsOnCharacter/${characterId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Armor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getAttack/${id}
        //public getAttack = (id: number, callback: (data: Attack)=>void) : void => {
        //	this.getAttackObserve(id).subscribe(response => callback(response));
        //}
        this.getAttackAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getAttack(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAttack = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/getAttack/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getAttacks
        //public getAttacks = (, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksObserve().subscribe(response => callback(response));
        //}
        this.getAttacksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAttacks()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAttacks = () => {
            var _Url = `api/v${version}/Combat/getAttacks`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getAttacksOnActor/${actorId}
        //public getAttacksOnActor = (actorId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getAttacksOnActorAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getAttacksOnActor(actorId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAttacksOnActor = (actorId) => {
            actorId = (actorId == null ? "" : actorId);
            var _Url = `api/v${version}/Combat/getAttacksOnActor/${actorId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getAttacksOnCreature/${creatureId}
        //public getAttacksOnCreature = (creatureId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.getAttacksOnCreatureAsync = (creatureId) => {
            return new Promise((resolve, reject) => {
                this.getAttacksOnCreature(creatureId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAttacksOnCreature = (creatureId) => {
            creatureId = (creatureId == null ? "" : creatureId);
            var _Url = `api/v${version}/Combat/getAttacksOnCreature/${creatureId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getWeapon/${id}
        //public getWeapon = (id: number, callback: (data: Weapon)=>void) : void => {
        //	this.getWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.getWeaponAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getWeapon(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getWeapon = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Combat/getWeapon/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Weapon"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getWeapons
        //public getWeapons = (, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsObserve().subscribe(response => callback(response));
        //}
        this.getWeaponsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getWeapons()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getWeapons = () => {
            var _Url = `api/v${version}/Combat/getWeapons`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Weapon"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Combat/getWeaponsOnCharacter/${characterId}
        //public getWeaponsOnCharacter = (characterId: number, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getWeaponsOnCharacterAsync = (characterId) => {
            return new Promise((resolve, reject) => {
                this.getWeaponsOnCharacter(characterId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getWeaponsOnCharacter = (characterId) => {
            characterId = (characterId == null ? "" : characterId);
            var _Url = `api/v${version}/Combat/getWeaponsOnCharacter/${characterId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Weapon"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Combat/SaveArmor
        //public saveArmor = (armor: Armor, callback: (data: Armor)=>void) : void => {
        //	this.saveArmorObserve(armor).subscribe(response => callback(response));
        //}
        this.saveArmorAsync = (armor) => {
            return new Promise((resolve, reject) => {
                this.saveArmor(armor)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveArmor = (armor) => {
            armor = (armor == null ? "" : armor);
            var _Url = `api/v${version}/Combat/SaveArmor`;
            return this._httpClient.post(_Url, armor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Armor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Combat/SaveAttack
        //public saveAttack = (attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackObserve(attack).subscribe(response => callback(response));
        //}
        this.saveAttackAsync = (attack) => {
            return new Promise((resolve, reject) => {
                this.saveAttack(attack)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveAttack = (attack) => {
            attack = (attack == null ? "" : attack);
            var _Url = `api/v${version}/Combat/SaveAttack`;
            return this._httpClient.post(_Url, attack)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Combat/SaveAttackOnActor/${actorId}
        //public saveAttackOnActor = (actorId: number, attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackOnActorObserve(actorId, attack).subscribe(response => callback(response));
        //}
        this.saveAttackOnActorAsync = (actorId, attack) => {
            return new Promise((resolve, reject) => {
                this.saveAttackOnActor(actorId, attack)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveAttackOnActor = (actorId, attack) => {
            actorId = (actorId == null ? "" : actorId);
            attack = (attack == null ? "" : attack);
            var _Url = `api/v${version}/Combat/SaveAttackOnActor/${actorId}`;
            return this._httpClient.post(_Url, actorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Combat/SaveWeapon
        //public saveWeapon = (weapon: Weapon, callback: (data: Weapon)=>void) : void => {
        //	this.saveWeaponObserve(weapon).subscribe(response => callback(response));
        //}
        this.saveWeaponAsync = (weapon) => {
            return new Promise((resolve, reject) => {
                this.saveWeapon(weapon)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveWeapon = (weapon) => {
            weapon = (weapon == null ? "" : weapon);
            var _Url = `api/v${version}/Combat/SaveWeapon`;
            return this._httpClient.post(_Url, weapon)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Weapon"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
CombatRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
CombatRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], CombatRepository);



/***/ }),

/***/ "./src/app/repositories/Creatures.repository.ts":
/*!******************************************************!*\
  !*** ./src/app/repositories/Creatures.repository.ts ***!
  \******************************************************/
/*! exports provided: CreaturesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return CreaturesRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let CreaturesRepository = class CreaturesRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Creatures/getCreatures
        //public getCreatures = (, callback: (data: Creature[])=>void) : void => {
        //	this.getCreaturesObserve().subscribe(response => callback(response));
        //}
        this.getCreaturesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCreatures()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCreatures = () => {
            var _Url = `api/v${version}/Creatures/getCreatures`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Creature"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Creatures/getCreature/${id}
        //public getCreature = (id: number, callback: (data: Creature)=>void) : void => {
        //	this.getCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.getCreatureAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCreature(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCreature = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Creatures/getCreature/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Creature"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Creatures/SaveCreature
        //public saveCreature = (creature: Creature, callback: (data: Creature)=>void) : void => {
        //	this.saveCreatureObserve(creature).subscribe(response => callback(response));
        //}
        this.saveCreatureAsync = (creature) => {
            return new Promise((resolve, reject) => {
                this.saveCreature(creature)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveCreature = (creature) => {
            creature = (creature == null ? "" : creature);
            var _Url = `api/v${version}/Creatures/SaveCreature`;
            return this._httpClient.post(_Url, creature)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Creature"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Creatures/deleteCreature/${id}
        //public deleteCreature = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCreatureAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCreature(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteCreature = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Creatures/deleteCreature/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
CreaturesRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
CreaturesRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], CreaturesRepository);



/***/ }),

/***/ "./src/app/repositories/CriticalEffects.repository.ts":
/*!************************************************************!*\
  !*** ./src/app/repositories/CriticalEffects.repository.ts ***!
  \************************************************************/
/*! exports provided: CriticalEffectsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return CriticalEffectsRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let CriticalEffectsRepository = class CriticalEffectsRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/CriticalEffects/getCriticalEffects/${actorId}
        //public getCriticalEffects = (actorId: number, callback: (data: CriticalEffect[])=>void) : void => {
        //	this.getCriticalEffectsObserve(actorId).subscribe(response => callback(response));
        //}
        this.getCriticalEffectsAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getCriticalEffects(actorId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCriticalEffects = (actorId) => {
            actorId = (actorId == null ? "" : actorId);
            var _Url = `api/v${version}/CriticalEffects/getCriticalEffects/${actorId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalEffect"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/CriticalEffects/getCriticalEffect/${id}
        //public getCriticalEffect = (id: number, callback: (data: CriticalEffect)=>void) : void => {
        //	this.getCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.getCriticalEffectAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCriticalEffect(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCriticalEffect = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/CriticalEffects/getCriticalEffect/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalEffect"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/CriticalEffects/SaveCriticalEffect
        //public saveCriticalEffect = (criticalEffect: CriticalEffect, callback: (data: CriticalEffect)=>void) : void => {
        //	this.saveCriticalEffectObserve(criticalEffect).subscribe(response => callback(response));
        //}
        this.saveCriticalEffectAsync = (criticalEffect) => {
            return new Promise((resolve, reject) => {
                this.saveCriticalEffect(criticalEffect)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveCriticalEffect = (criticalEffect) => {
            criticalEffect = (criticalEffect == null ? "" : criticalEffect);
            var _Url = `api/v${version}/CriticalEffects/SaveCriticalEffect`;
            return this._httpClient.post(_Url, criticalEffect)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalEffect"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/CriticalEffects/deleteCriticalEffect/${id}
        //public deleteCriticalEffect = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCriticalEffectAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCriticalEffect(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteCriticalEffect = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/CriticalEffects/deleteCriticalEffect/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
CriticalEffectsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
CriticalEffectsRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], CriticalEffectsRepository);



/***/ }),

/***/ "./src/app/repositories/Encounter.repository.ts":
/*!******************************************************!*\
  !*** ./src/app/repositories/Encounter.repository.ts ***!
  \******************************************************/
/*! exports provided: EncounterRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return EncounterRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************









var version = "1";
let EncounterRepository = class EncounterRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Encounter/GetCurrentGame
        //public getCurrentGame = (, callback: (data: Game)=>void) : void => {
        //	this.getCurrentGameObserve().subscribe(response => callback(response));
        //}
        this.getCurrentGameAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCurrentGame()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCurrentGame = () => {
            var _Url = `api/v${version}/Encounter/GetCurrentGame`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/SetCurrentGame/${gameId}
        //public setCurrentGame = (gameId: number, callback: (data: Game)=>void) : void => {
        //	this.setCurrentGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.setCurrentGameAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.setCurrentGame(gameId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.setCurrentGame = (gameId) => {
            gameId = (gameId == null ? "" : gameId);
            var _Url = `api/v${version}/Encounter/SetCurrentGame/${gameId}`;
            return this._httpClient.post(_Url, gameId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/CreateActorFromCreature/${creatureId}
        //public createActorFromCreature = (creatureId: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.createActorFromCreatureAsync = (creatureId) => {
            return new Promise((resolve, reject) => {
                this.createActorFromCreature(creatureId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.createActorFromCreature = (creatureId) => {
            creatureId = (creatureId == null ? "" : creatureId);
            var _Url = `api/v${version}/Encounter/CreateActorFromCreature/${creatureId}`;
            return this._httpClient.post(_Url, creatureId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/CreateActorFromCharacter/${characterId}?rolledInit=${rolledInit}
        //public createActorFromCharacter = (characterId: number, rolledInit: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCharacterObserve(characterId, rolledInit).subscribe(response => callback(response));
        //}
        this.createActorFromCharacterAsync = (characterId, rolledInit) => {
            return new Promise((resolve, reject) => {
                this.createActorFromCharacter(characterId, rolledInit)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.createActorFromCharacter = (characterId, rolledInit) => {
            characterId = (characterId == null ? "" : characterId);
            rolledInit = (rolledInit == null ? "" : rolledInit);
            var _Url = `api/v${version}/Encounter/CreateActorFromCharacter/${characterId}?rolledInit=${rolledInit}`;
            return this._httpClient.post(_Url, characterId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/MoveToNext?none=${none}
        //public moveToNext = (none: boolean, callback: (data: MoveNextResult)=>void) : void => {
        //	this.moveToNextObserve(none).subscribe(response => callback(response));
        //}
        this.moveToNextAsync = (none) => {
            return new Promise((resolve, reject) => {
                this.moveToNext(none)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.moveToNext = (none) => {
            none = (none == null ? "" : none);
            var _Url = `api/v${version}/Encounter/MoveToNext?none=${none}`;
            return this._httpClient.post(_Url, none)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["MoveNextResult"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/ProposeActionUnconscious?actorId=${actorId}
        //public proposeActionUnconscious = (actorId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionUnconsciousObserve(actorId).subscribe(response => callback(response));
        //}
        this.proposeActionUnconsciousAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.proposeActionUnconscious(actorId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.proposeActionUnconscious = (actorId) => {
            actorId = (actorId == null ? "" : actorId);
            var _Url = `api/v${version}/Encounter/ProposeActionUnconscious?actorId=${actorId}`;
            return this._httpClient.post(_Url, actorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/ProposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}
        //public proposeAction = (actionDefId: number, whomId: number, modifier: number, attackId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionObserve(actionDefId, whomId, modifier, attackId).subscribe(response => callback(response));
        //}
        this.proposeActionAsync = (actionDefId, whomId, modifier, attackId) => {
            return new Promise((resolve, reject) => {
                this.proposeAction(actionDefId, whomId, modifier, attackId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.proposeAction = (actionDefId, whomId, modifier, attackId) => {
            actionDefId = (actionDefId == null ? "" : actionDefId);
            whomId = (whomId == null ? "" : whomId);
            modifier = (modifier == null ? "" : modifier);
            attackId = (attackId == null ? "" : attackId);
            var _Url = `api/v${version}/Encounter/ProposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionDefId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/ProposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}
        //public proposeActionContinue = (previousActionId: number, whomId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionContinueObserve(previousActionId, whomId).subscribe(response => callback(response));
        //}
        this.proposeActionContinueAsync = (previousActionId, whomId) => {
            return new Promise((resolve, reject) => {
                this.proposeActionContinue(previousActionId, whomId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.proposeActionContinue = (previousActionId, whomId) => {
            previousActionId = (previousActionId == null ? "" : previousActionId);
            whomId = (whomId == null ? "" : whomId);
            var _Url = `api/v${version}/Encounter/ProposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}`;
            return this._httpClient.post(_Url, previousActionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/AddBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}
        //public addBleedEffect = (whomId: number, bleedRate: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addBleedEffectObserve(whomId, bleedRate).subscribe(response => callback(response));
        //}
        this.addBleedEffectAsync = (whomId, bleedRate) => {
            return new Promise((resolve, reject) => {
                this.addBleedEffect(whomId, bleedRate)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.addBleedEffect = (whomId, bleedRate) => {
            whomId = (whomId == null ? "" : whomId);
            bleedRate = (bleedRate == null ? "" : bleedRate);
            var _Url = `api/v${version}/Encounter/AddBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}`;
            return this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/AddCriticalEffect?whomId=${whomId}&rounds=${rounds}
        //public addCriticalEffect = (whomId: number, crit: CriticalEffect, rounds: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addCriticalEffectObserve(whomId, crit, rounds).subscribe(response => callback(response));
        //}
        this.addCriticalEffectAsync = (whomId, crit, rounds) => {
            return new Promise((resolve, reject) => {
                this.addCriticalEffect(whomId, crit, rounds)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.addCriticalEffect = (whomId, crit, rounds) => {
            whomId = (whomId == null ? "" : whomId);
            crit = (crit == null ? "" : crit);
            rounds = (rounds == null ? "" : rounds);
            var _Url = `api/v${version}/Encounter/AddCriticalEffect?whomId=${whomId}&rounds=${rounds}`;
            return this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/AddPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}
        //public addPsychicEffect = (whomId: number, psychicLevel: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addPsychicEffectObserve(whomId, psychicLevel).subscribe(response => callback(response));
        //}
        this.addPsychicEffectAsync = (whomId, psychicLevel) => {
            return new Promise((resolve, reject) => {
                this.addPsychicEffect(whomId, psychicLevel)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.addPsychicEffect = (whomId, psychicLevel) => {
            whomId = (whomId == null ? "" : whomId);
            psychicLevel = (psychicLevel == null ? "" : psychicLevel);
            var _Url = `api/v${version}/Encounter/AddPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}`;
            return this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/AddSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}
        //public addSpellEffect = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addSpellEffectObserve(effectedActorId, casterId, spellName, rounds, hastePercent).subscribe(response => callback(response));
        //}
        this.addSpellEffectAsync = (effectedActorId, casterId, spellName, rounds, hastePercent) => {
            return new Promise((resolve, reject) => {
                this.addSpellEffect(effectedActorId, casterId, spellName, rounds, hastePercent)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.addSpellEffect = (effectedActorId, casterId, spellName, rounds, hastePercent) => {
            effectedActorId = (effectedActorId == null ? "" : effectedActorId);
            casterId = (casterId == null ? "" : casterId);
            spellName = (spellName == null ? "" : spellName);
            rounds = (rounds == null ? "" : rounds);
            hastePercent = (hastePercent == null ? "" : hastePercent);
            var _Url = `api/v${version}/Encounter/AddSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}`;
            return this._httpClient.post(_Url, effectedActorId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Encounter/RemoveEffect/${actionId}
        //public removeEffect = (actionId: number, callback: (data: void)=>void) : void => {
        //	this.removeEffectObserve(actionId).subscribe(response => callback(response));
        //}
        this.removeEffectAsync = (actionId) => {
            return new Promise((resolve, reject) => {
                this.removeEffect(actionId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.removeEffect = (actionId) => {
            actionId = (actionId == null ? "" : actionId);
            var _Url = `api/v${version}/Encounter/RemoveEffect/${actionId}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Encounter/RemoveActor/${actorId}
        //public removeActor = (actorId: number, callback: (data: void)=>void) : void => {
        //	this.removeActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.removeActorAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.removeActor(actorId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.removeActor = (actorId) => {
            actorId = (actorId == null ? "" : actorId);
            var _Url = `api/v${version}/Encounter/RemoveActor/${actorId}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Encounter/RemoveAction/${actionId}
        //public removeAction = (actionId: number, callback: (data: void)=>void) : void => {
        //	this.removeActionObserve(actionId).subscribe(response => callback(response));
        //}
        this.removeActionAsync = (actionId) => {
            return new Promise((resolve, reject) => {
                this.removeAction(actionId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.removeAction = (actionId) => {
            actionId = (actionId == null ? "" : actionId);
            var _Url = `api/v${version}/Encounter/RemoveAction/${actionId}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Encounter/RemoveCriticalsFromActor/${whomId}?count=${count}
        //public removeCriticalsFromActor = (whomId: number, count: number, callback: (data: void)=>void) : void => {
        //	this.removeCriticalsFromActorObserve(whomId, count).subscribe(response => callback(response));
        //}
        this.removeCriticalsFromActorAsync = (whomId, count) => {
            return new Promise((resolve, reject) => {
                this.removeCriticalsFromActor(whomId, count)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.removeCriticalsFromActor = (whomId, count) => {
            whomId = (whomId == null ? "" : whomId);
            count = (count == null ? "" : count);
            var _Url = `api/v${version}/Encounter/RemoveCriticalsFromActor/${whomId}?count=${count}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/DoProposedAction/${whomId}
        //public doProposedAction = (whomId: number, callback: (data: void)=>void) : void => {
        //	this.doProposedActionObserve(whomId).subscribe(response => callback(response));
        //}
        this.doProposedActionAsync = (whomId) => {
            return new Promise((resolve, reject) => {
                this.doProposedAction(whomId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.doProposedAction = (whomId) => {
            whomId = (whomId == null ? "" : whomId);
            var _Url = `api/v${version}/Encounter/DoProposedAction/${whomId}`;
            return this._httpClient.post(_Url, whomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/SetModifierOnAction?actionId=${actionId}&modifier=${modifier}
        //public setModifierOnAction = (actionId: number, modifier: number, callback: (data: void)=>void) : void => {
        //	this.setModifierOnActionObserve(actionId, modifier).subscribe(response => callback(response));
        //}
        this.setModifierOnActionAsync = (actionId, modifier) => {
            return new Promise((resolve, reject) => {
                this.setModifierOnAction(actionId, modifier)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.setModifierOnAction = (actionId, modifier) => {
            actionId = (actionId == null ? "" : actionId);
            modifier = (modifier == null ? "" : modifier);
            var _Url = `api/v${version}/Encounter/SetModifierOnAction?actionId=${actionId}&modifier=${modifier}`;
            return this._httpClient.post(_Url, actionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Encounter/SetAttackOnAction?actionId=${actionId}&attackId=${attackId}
        //public setAttackOnAction = (actionId: number, attackId: number, callback: (data: void)=>void) : void => {
        //	this.setAttackOnActionObserve(actionId, attackId).subscribe(response => callback(response));
        //}
        this.setAttackOnActionAsync = (actionId, attackId) => {
            return new Promise((resolve, reject) => {
                this.setAttackOnAction(actionId, attackId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.setAttackOnAction = (actionId, attackId) => {
            actionId = (actionId == null ? "" : actionId);
            attackId = (attackId == null ? "" : attackId);
            var _Url = `api/v${version}/Encounter/SetAttackOnAction?actionId=${actionId}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
EncounterRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
EncounterRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], EncounterRepository);



/***/ }),

/***/ "./src/app/repositories/Games.repository.ts":
/*!**************************************************!*\
  !*** ./src/app/repositories/Games.repository.ts ***!
  \**************************************************/
/*! exports provided: GamesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return GamesRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let GamesRepository = class GamesRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Games/GetGames
        //public getGames = (, callback: (data: Game[])=>void) : void => {
        //	this.getGamesObserve().subscribe(response => callback(response));
        //}
        this.getGamesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getGames()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getGames = () => {
            var _Url = `api/v${version}/Games/GetGames`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Game"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Games/GetGame/${id}
        //public getGame = (id: number, callback: (data: Game)=>void) : void => {
        //	this.getGameObserve(id).subscribe(response => callback(response));
        //}
        this.getGameAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getGame(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getGame = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Games/GetGame/${id}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Games/SaveGame
        //public saveGame = (game: Game, callback: (data: Game)=>void) : void => {
        //	this.saveGameObserve(game).subscribe(response => callback(response));
        //}
        this.saveGameAsync = (game) => {
            return new Promise((resolve, reject) => {
                this.saveGame(game)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.saveGame = (game) => {
            game = (game == null ? "" : game);
            var _Url = `api/v${version}/Games/SaveGame`;
            return this._httpClient.post(_Url, game)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Games/DeleteGame/${id}
        //public deleteGame = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteGameObserve(id).subscribe(response => callback(response));
        //}
        this.deleteGameAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteGame(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.deleteGame = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Games/DeleteGame/${id}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
GamesRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
GamesRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], GamesRepository);



/***/ }),

/***/ "./src/app/repositories/Reference.repository.ts":
/*!******************************************************!*\
  !*** ./src/app/repositories/Reference.repository.ts ***!
  \******************************************************/
/*! exports provided: ReferenceRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return ReferenceRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************





















var version = "1";
let ReferenceRepository = class ReferenceRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Reference/getActionGroups
        //public getActionGroups = (, callback: (data: ActionGroup[])=>void) : void => {
        //	this.getActionGroupsObserve().subscribe(response => callback(response));
        //}
        this.getActionGroupsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getActionGroups()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActionGroups = () => {
            var _Url = `api/v${version}/Reference/getActionGroups`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getActions?groupId=${groupId}
        //public getActions = (groupId: number, callback: (data: ActionDefinition[])=>void) : void => {
        //	this.getActionsObserve(groupId).subscribe(response => callback(response));
        //}
        this.getActionsAsync = (groupId) => {
            return new Promise((resolve, reject) => {
                this.getActions(groupId)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getActions = (groupId) => {
            groupId = (groupId == null ? "" : groupId);
            var _Url = `api/v${version}/Reference/getActions?groupId=${groupId}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ActionDefinition"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getConstitutionBonusCharts
        //public getConstitutionBonusCharts = (, callback: (data: ConstitutionBonusChart[])=>void) : void => {
        //	this.getConstitutionBonusChartsObserve().subscribe(response => callback(response));
        //}
        this.getConstitutionBonusChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getConstitutionBonusCharts()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getConstitutionBonusCharts = () => {
            var _Url = `api/v${version}/Reference/getConstitutionBonusCharts`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ConstitutionBonusChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getCriticalCodes
        //public getCriticalCodes = (, callback: (data: CriticalCode[])=>void) : void => {
        //	this.getCriticalCodesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalCodesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalCodes()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCriticalCodes = () => {
            var _Url = `api/v${version}/Reference/getCriticalCodes`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalCode"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getCriticalIgnores
        //public getCriticalIgnores = (, callback: (data: CriticalIgnore[])=>void) : void => {
        //	this.getCriticalIgnoresObserve().subscribe(response => callback(response));
        //}
        this.getCriticalIgnoresAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalIgnores()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCriticalIgnores = () => {
            var _Url = `api/v${version}/Reference/getCriticalIgnores`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalIgnore"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getIQs
        //public getIQs = (, callback: (data: IQ[])=>void) : void => {
        //	this.getIQsObserve().subscribe(response => callback(response));
        //}
        this.getIQsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getIQs()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getIQs = () => {
            var _Url = `api/v${version}/Reference/getIQs`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["IQ"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getLevelCharts
        //public getLevelCharts = (, callback: (data: LevelChart[])=>void) : void => {
        //	this.getLevelChartsObserve().subscribe(response => callback(response));
        //}
        this.getLevelChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getLevelCharts()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getLevelCharts = () => {
            var _Url = `api/v${version}/Reference/getLevelCharts`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["LevelChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getOutlooks
        //public getOutlooks = (, callback: (data: Outlook[])=>void) : void => {
        //	this.getOutlooksObserve().subscribe(response => callback(response));
        //}
        this.getOutlooksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getOutlooks()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getOutlooks = () => {
            var _Url = `api/v${version}/Reference/getOutlooks`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Outlook"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getPaces
        //public getPaces = (, callback: (data: Pace[])=>void) : void => {
        //	this.getPacesObserve().subscribe(response => callback(response));
        //}
        this.getPacesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getPaces()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getPaces = () => {
            var _Url = `api/v${version}/Reference/getPaces`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Pace"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getSizeRatings
        //public getSizeRatings = (, callback: (data: SizeRating[])=>void) : void => {
        //	this.getSizeRatingsObserve().subscribe(response => callback(response));
        //}
        this.getSizeRatingsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getSizeRatings()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getSizeRatings = () => {
            var _Url = `api/v${version}/Reference/getSizeRatings`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["SizeRating"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getSpeedCharts
        //public getSpeedCharts = (, callback: (data: SpeedChart[])=>void) : void => {
        //	this.getSpeedChartsObserve().subscribe(response => callback(response));
        //}
        this.getSpeedChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getSpeedCharts()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getSpeedCharts = () => {
            var _Url = `api/v${version}/Reference/getSpeedCharts`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["SpeedChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getAttackTypes
        //public getAttackTypes = (, callback: (data: AttackType[])=>void) : void => {
        //	this.getAttackTypesObserve().subscribe(response => callback(response));
        //}
        this.getAttackTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAttackTypes()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAttackTypes = () => {
            var _Url = `api/v${version}/Reference/getAttackTypes`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["AttackType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getCriticalTypes
        //public getCriticalTypes = (, callback: (data: CriticalType[])=>void) : void => {
        //	this.getCriticalTypesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalTypes()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getCriticalTypes = () => {
            var _Url = `api/v${version}/Reference/getCriticalTypes`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["CriticalType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getWeaponTypes
        //public getWeaponTypes = (, callback: (data: WeaponType[])=>void) : void => {
        //	this.getWeaponTypesObserve().subscribe(response => callback(response));
        //}
        this.getWeaponTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getWeaponTypes()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getWeaponTypes = () => {
            var _Url = `api/v${version}/Reference/getWeaponTypes`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["WeaponType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getBooks
        //public getBooks = (, callback: (data: Book[])=>void) : void => {
        //	this.getBooksObserve().subscribe(response => callback(response));
        //}
        this.getBooksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getBooks()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getBooks = () => {
            var _Url = `api/v${version}/Reference/getBooks`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["Book"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Reference/getPsychicRefractoryPeriodEntries
        //public getPsychicRefractoryPeriodEntries = (, callback: (data: PsychicRefractoryPeriodEntry[])=>void) : void => {
        //	this.getPsychicRefractoryPeriodEntriesObserve().subscribe(response => callback(response));
        //}
        this.getPsychicRefractoryPeriodEntriesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getPsychicRefractoryPeriodEntries()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getPsychicRefractoryPeriodEntries = () => {
            var _Url = `api/v${version}/Reference/getPsychicRefractoryPeriodEntries`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["PsychicRefractoryPeriodEntry"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
ReferenceRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ReferenceRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], ReferenceRepository);



/***/ }),

/***/ "./src/app/repositories/Settings.repository.ts":
/*!*****************************************************!*\
  !*** ./src/app/repositories/Settings.repository.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return SettingsRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************




var version = "1";
let SettingsRepository = class SettingsRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
SettingsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
SettingsRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], SettingsRepository);



/***/ }),

/***/ "./src/app/repositories/Users.repository.ts":
/*!**************************************************!*\
  !*** ./src/app/repositories/Users.repository.ts ***!
  \**************************************************/
/*! exports provided: UsersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return UsersRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************






var version = "1";
let UsersRepository = class UsersRepository {
    constructor(_httpClient, _alertService) {
        this._httpClient = _httpClient;
        this._alertService = _alertService;
        // get: api/v${version}/Users/CurrentUser
        //public currentUser = (, callback: (data: ApplicationUser)=>void) : void => {
        //	this.currentUserObserve().subscribe(response => callback(response));
        //}
        this.currentUserAsync = () => {
            return new Promise((resolve, reject) => {
                this.currentUser()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.currentUser = () => {
            var _Url = `api/v${version}/Users/CurrentUser`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Users/logout
        //public logout = (, callback: (data: boolean)=>void) : void => {
        //	this.logoutObserve().subscribe(response => callback(response));
        //}
        this.logoutAsync = () => {
            return new Promise((resolve, reject) => {
                this.logout()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.logout = () => {
            var _Url = `api/v${version}/Users/logout`;
            return this._httpClient.post(_Url, null)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Users/authenticate
        //public authenticate = (model: AuthenticateModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.authenticateObserve(model).subscribe(response => callback(response));
        //}
        this.authenticateAsync = (model) => {
            return new Promise((resolve, reject) => {
                this.authenticate(model)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.authenticate = (model) => {
            model = (model == null ? "" : model);
            var _Url = `api/v${version}/Users/authenticate`;
            return this._httpClient.post(_Url, model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Users/register
        //public register = (model: RegisterModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.registerObserve(model).subscribe(response => callback(response));
        //}
        this.registerAsync = (model) => {
            return new Promise((resolve, reject) => {
                this.register(model)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.register = (model) => {
            model = (model == null ? "" : model);
            var _Url = `api/v${version}/Users/register`;
            return this._httpClient.post(_Url, model)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Users/GetAll
        //public getAll = (, callback: (data: ApplicationUser[])=>void) : void => {
        //	this.getAllObserve().subscribe(response => callback(response));
        //}
        this.getAllAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAll()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getAll = () => {
            var _Url = `api/v${version}/Users/GetAll`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Users/GetById/${encodeURIComponent(id)}
        //public getById = (id: string, callback: (data: ApplicationUser)=>void) : void => {
        //	this.getByIdObserve(id).subscribe(response => callback(response));
        //}
        this.getByIdAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getById(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getById = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Users/GetById/${encodeURIComponent(id)}`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // put: api/v${version}/Users/Update/${encodeURIComponent(id)}
        //public update = (id: string, model: UpdateModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.updateObserve(id, model).subscribe(response => callback(response));
        //}
        this.updateAsync = (id, model) => {
            return new Promise((resolve, reject) => {
                this.update(id, model)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.update = (id, model) => {
            id = (id == null ? "" : id);
            model = (model == null ? "" : model);
            var _Url = `api/v${version}/Users/Update/${encodeURIComponent(id)}`;
            return this._httpClient.put(_Url, id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_6__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // delete: api/v${version}/Users/Delete/${encodeURIComponent(id)}
        //public delete = (id: string, callback: (data: void)=>void) : void => {
        //	this.deleteObserve(id).subscribe(response => callback(response));
        //}
        this.deleteAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.delete(id)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.delete = (id) => {
            id = (id == null ? "" : id);
            var _Url = `api/v${version}/Users/Delete/${encodeURIComponent(id)}`;
            return this._httpClient.delete(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
        // post: api/v${version}/Users/ForgotPassword?email=${encodeURIComponent(email)}
        //public forgotPassword = (email: string, callback: (data: boolean)=>void) : void => {
        //	this.forgotPasswordObserve(email).subscribe(response => callback(response));
        //}
        this.forgotPasswordAsync = (email) => {
            return new Promise((resolve, reject) => {
                this.forgotPassword(email)
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.forgotPassword = (email) => {
            email = (email == null ? "" : email);
            var _Url = `api/v${version}/Users/ForgotPassword?email=${encodeURIComponent(email)}`;
            return this._httpClient.post(_Url, email)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        };
    }
    // Utility
    handleError(error) {
        //debugger;
        console.debug("handleError:" + error);
        //console.error(error);
        let customError = "";
        if (error.message) {
            customError = error.message; // error.status === 400 ? error.error : error.statusText
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
};
UsersRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
UsersRepository = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_Alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], UsersRepository);



/***/ }),

/***/ "./src/app/repositories/index.ts":
/*!***************************************!*\
  !*** ./src/app/repositories/index.ts ***!
  \***************************************/
/*! exports provided: ActionsRepository, ActorsRepository, CharactersRepository, CombatRepository, CreaturesRepository, CriticalEffectsRepository, EncounterRepository, GamesRepository, ReferenceRepository, SettingsRepository, UsersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Actions_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions.repository */ "./src/app/repositories/Actions.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return _Actions_repository__WEBPACK_IMPORTED_MODULE_1__["ActionsRepository"]; });

/* harmony import */ var _Actors_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actors.repository */ "./src/app/repositories/Actors.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return _Actors_repository__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"]; });

/* harmony import */ var _Characters_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Characters.repository */ "./src/app/repositories/Characters.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return _Characters_repository__WEBPACK_IMPORTED_MODULE_3__["CharactersRepository"]; });

/* harmony import */ var _Combat_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Combat.repository */ "./src/app/repositories/Combat.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return _Combat_repository__WEBPACK_IMPORTED_MODULE_4__["CombatRepository"]; });

/* harmony import */ var _Creatures_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Creatures.repository */ "./src/app/repositories/Creatures.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return _Creatures_repository__WEBPACK_IMPORTED_MODULE_5__["CreaturesRepository"]; });

/* harmony import */ var _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CriticalEffects.repository */ "./src/app/repositories/CriticalEffects.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_6__["CriticalEffectsRepository"]; });

/* harmony import */ var _Encounter_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Encounter.repository */ "./src/app/repositories/Encounter.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return _Encounter_repository__WEBPACK_IMPORTED_MODULE_7__["EncounterRepository"]; });

/* harmony import */ var _Games_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Games.repository */ "./src/app/repositories/Games.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return _Games_repository__WEBPACK_IMPORTED_MODULE_8__["GamesRepository"]; });

/* harmony import */ var _Reference_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Reference.repository */ "./src/app/repositories/Reference.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return _Reference_repository__WEBPACK_IMPORTED_MODULE_9__["ReferenceRepository"]; });

/* harmony import */ var _Settings_repository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Settings.repository */ "./src/app/repositories/Settings.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return _Settings_repository__WEBPACK_IMPORTED_MODULE_10__["SettingsRepository"]; });

/* harmony import */ var _Users_repository__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Users.repository */ "./src/app/repositories/Users.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return _Users_repository__WEBPACK_IMPORTED_MODULE_11__["UsersRepository"]; });















/***/ }),

/***/ "./src/app/services/Alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/Alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_DateEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/_helpers/DateEx */ "./src/app/_helpers/DateEx.ts");





let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        message = (new Date()).formatDate() + " " + (new Date()).formatTime() + " - " + message;
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        message = (new Date()).formatDate() + " " + (new Date()).formatTime() + " - " + message;
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/Authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/Authentication.service.ts ***!
  \****************************************************/
/*! exports provided: ApplicationName, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");





//import { User, UserManager, WebStorageStateStore } from 'oidc-client';



const ApplicationName = 'CEATSiiApp';
let AuthenticationService = class AuthenticationService {
    constructor(http, userRepository) {
        this.http = http;
        this.userRepository = userRepository;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSubject.asObservable();
        ////debugger;
        this.refreshUserAsync();
    }
    isAuthenticated() {
        return this.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => !!u));
    }
    getAccessToken() {
        //var obs = new Observable<string>();
        //obs.
        //obs.next()
        return "";
    }
    currentUserAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var p = new Promise((resolve, reject) => {
                this.currentUser.subscribe((user) => {
                    resolve(user);
                });
            });
            return p;
        });
    }
    refreshUserAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(10);
            var user = yield this.userRepository.currentUserAsync();
            //localStorage.setItem('currentUser', JSON.stringify(user));
            //if (user) {
            //    await this.loginAuthAsync();
            //} else {
            //    //await this.logoutAuthAsync();
            //}
            this.currentUserSubject.next(user);
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    registerAsync(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var user = yield this.userRepository.registerAsync(data);
            this.currentUserSubject.next(user);
            return user;
        });
    }
    loginAsync(username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var auth = new _entities__WEBPACK_IMPORTED_MODULE_6__["AuthenticateModel"]();
            auth.username = username;
            auth.password = password;
            var user = yield this.userRepository.authenticateAsync(auth);
            //localStorage.setItem('currentUser', JSON.stringify(user));
            //if (user) {
            //    await this.loginAuthAsync();
            //} else {
            //    //await this.logoutAuthAsync();
            //}
            this.currentUserSubject.next(user);
            return user;
            //return null;
        });
    }
    //private async loginAuthAsync(): Promise<void> {
    //    const state = {};
    //    //const result = await this.authorizeService.signIn(state);
    //    const url = window.location.href;
    //    const result = await this.authorizeService.completeSignIn(url);
    //    switch (result.status) {
    //        case AuthenticationResultStatus.Redirect:
    //            //debugger;
    //            break;
    //        case AuthenticationResultStatus.Success:
    //            //await this.navigateToReturnUrl(returnUrl);
    //            break;
    //        case AuthenticationResultStatus.Fail:
    //            //await this.router.navigate(ApplicationPaths.LoginFailedPathComponents, {
    //            //  queryParams: { [QueryParameterNames.Message]: result.message }
    //            //});
    //            //debugger;
    //            break;
    //        default:
    //            //debugger;
    //            throw new Error(`Invalid status result ${(result as any).status}.`);
    //    }
    //}
    //private async logoutAuthAsync(): Promise<void> {
    //    const state = {};
    //    const result = await this.authorizeService.signOut(state);
    //    switch (result.status) {
    //        case AuthenticationResultStatus.Redirect:
    //            //debugger;
    //            break;
    //        case AuthenticationResultStatus.Success:
    //            //await this.navigateToReturnUrl(returnUrl);
    //            break;
    //        case AuthenticationResultStatus.Fail:
    //            //debugger;
    //            //this.message.next(result.message);
    //            break;
    //        default:
    //            //debugger;
    //            throw new Error('Invalid authentication result status.');
    //    }
    //}
    logoutAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userRepository.logout();
            // remove user from local storage and set current user to null
            //localStorage.removeItem('currentUser');
            //await this.logoutAuthAsync();
            this.currentUserSubject.next(null);
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_5__["UsersRepository"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _repositories__WEBPACK_IMPORTED_MODULE_5__["UsersRepository"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/Encounter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/Encounter.service.ts ***!
  \***********************************************/
/*! exports provided: EncounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return EncounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Authentication.service */ "./src/app/services/Authentication.service.ts");
/* harmony import */ var _EncounterHub_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EncounterHub.service */ "./src/app/services/EncounterHub.service.ts");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/_helpers/Tasks */ "./src/app/_helpers/Tasks.ts");
/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./References.service */ "./src/app/services/References.service.ts");
/* harmony import */ var _Alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony import */ var _helpers_LinqToJs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/_helpers/LinqToJs */ "./src/app/_helpers/LinqToJs.ts");












var ResponseEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ResponseEnum;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ActionTypeEnum;
var ActorActionType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ActorActionType;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].CharacterType;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ViewTypeEnum;




let EncounterService = class EncounterService {
    constructor(authService, gameRepo, actorRepo, actionRepo, encounterRepo, encounterHubService, referenceService, _alertService) {
        //authService.currentUser.subscribe((user) => {
        //    ////debugger;
        //    if (user != null) {
        //        this.refresh();
        //    } else {
        //        this._currentGame = null;
        //        this.actors = new Array<Actor>();
        //        this.actions = new Array<BaseAction>();
        //        this._selectedActor = null;
        //        this._selectedAction = null;
        //    }
        //});
        this.authService = authService;
        this.gameRepo = gameRepo;
        this.actorRepo = actorRepo;
        this.actionRepo = actionRepo;
        this.encounterRepo = encounterRepo;
        this.encounterHubService = encounterHubService;
        this.referenceService = referenceService;
        this._alertService = _alertService;
        this.allActors = new Array();
        this.allActions = new Array();
        this.refreshLock = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_7__["MutexLock"](30000);
        this._currentActionTree = null;
        //public selectedAction: BaseAction;
        //private _selectedActor: Actor;
        //private _selectedAction: BaseAction;
        this._timedService = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_7__["RecurringTask"](() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._alertService.success("Refreshing List");
            yield this.refreshAsync();
            this._alertService.success("List Refreshed");
        }), 60000, 120000);
        this.init();
    }
    init() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.refreshAsync();
            yield this.setupEventsAsync();
            //await this.refreshAsync();
            //debugger;
            this._timedService.start();
            var cat = yield this.currentActionTreeAsync();
        });
    }
    get isGM() {
        if (this.authService.currentUserValue != null && this.currentGame != null) {
            return this.authService.currentUserValue.id == this.currentGame.gM_ID;
        }
        return false;
    }
    get isPlayer() {
        if (this.authService.currentUserValue != null && this.currentGame != null) {
            return this.authService.currentUserValue.id != this.currentGame.gM_ID;
        }
        return false;
    }
    get isViewOnly() {
        return this.authService.currentUserValue == null;
    }
    get viewType() {
        if (this.isViewOnly) {
            return ViewTypeEnum.Overview;
        }
        if (this.isPlayer) {
            return ViewTypeEnum.Player;
        }
        if (this.isGM) {
            return ViewTypeEnum.GM;
        }
        return ViewTypeEnum.Overview;
    }
    get actors() {
        var acts = this.allActors;
        acts.sortBy((obj) => (obj.currentAction != null ? obj.currentAction.endTime : 0));
        //acts.sort((a, b) => {
        //    var CAa = a.currentAction;
        //    var CAb = b.currentAction;
        //    if (CAa == null || CAb == null) {
        //        return 0;
        //    }
        //    if (CAa.endTime < CAb.endTime) {
        //        return -1;
        //    }
        //    if (CAa.endTime > CAb.endTime) {
        //        return 1;
        //    }
        //    return 0;
        //});
        return acts;
    }
    get actions() {
        var acts = this.allActions;
        //debugger;
        if (this.isViewOnly && acts.length > 0) {
            acts = acts.filter((element, index, array) => {
                //element.actionType == ActionTypeEnum.Next && 
                var isCurrent = element.actionType == ActionTypeEnum.Current || element.actionType == ActionTypeEnum.Next || (element.actionType == ActionTypeEnum.Proposed && element.whoIsActing.type == CharacterType.PC);
                var isForPC = element.whoIsActing.type == CharacterType.PC;
                var isEffect = element.actionType == ActionTypeEnum.Effect && element.type != ActorActionType.SpellEffect;
                var isSpellOnNPC = element.actionType == ActionTypeEnum.Effect && element.type == ActorActionType.SpellEffect && element.whoIsActing.type == CharacterType.NPC;
                return isCurrent || (isForPC && !isEffect) || (isSpellOnNPC);
            });
        }
        acts.sortBy((obj) => obj.endTime);
        if (acts.length > 0) {
            var min = acts[0].endTime;
            var max = acts[acts.length - 1].endTime;
            var range = max - min;
            acts.forEach((act) => {
                act.leftPercent = (act.endTime - min) / range;
            });
        }
        return acts;
    }
    //get systemSettings(): MySettings {
    //    return this.settings.settings;
    //}
    //public setGameType(value: GameType) {
    //    this.settings.setGameType(value);
    //}
    get selectedActions() {
        this._currentActionTree = null;
        var acts = this.actions.filter(item => item.isSelected);
        return acts || new Array();
    }
    set selectedAction(action) {
        if (action != null) {
            action = this.allActions.find(item => item.id == action.id);
        }
        var acts = this.allActions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.allActors.find(item => item.isSelected);
        if (ac != null) {
            ac.isSelected = false;
        }
        if (action != null) {
            action.isSelected = true;
            if (action.whoIsActing != null) {
                action.whoIsActing.isSelected = true;
                if (action.actionType == ActionTypeEnum.Current) {
                    this.checkAction(action.whoIsActing);
                }
            }
        }
        this.currentActionTreeAsync();
        //this._currentActionTree = await this.referenceService.getActionTreeAsync(ac);
        //this.updateActionTreeAsync();
    }
    get selectedActor() {
        var ac = this.actors.find(item => item.isSelected);
        return ac || null;
    }
    set selectedActor(actor) {
        if (actor != null) {
            actor = this.allActors.find(item => item.id == actor.id);
        }
        this._currentActionTree = null;
        var acts = this.allActions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.allActors.find(item => item.isSelected);
        if (ac != null && (actor == null || ac.id != actor.id)) {
            if (ac.proposedAction != null) {
                this.encounterRepo.removeActionAsync(ac.proposedAction.id);
            }
            ac.isSelected = false;
        }
        if (actor != null) {
            actor.isSelected = true;
            actor.actions.forEach((action) => {
                if (action.actionType == ActionTypeEnum.Current || action.actionType == ActionTypeEnum.Next || action.actionType == ActionTypeEnum.Proposed) {
                    action.isSelected = true;
                }
            });
            this.checkAction(actor);
        }
        this.currentActionTreeAsync();
        //this._currentActionTree = await this.referenceService.getActionTreeAsync(actor);
        //this.updateActionTreeAsync();
    }
    checkAction(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (actor != null && actor.proposedAction == null) {
                var action = actor.nextAction || actor.currentAction;
                var act = action;
                if (action.base != null) {
                    act = yield this.encounterRepo.proposeActionAsync(action.base.id, actor.id, action.currentModifier, action.currentAttack_ID);
                    this.refreshAction(act);
                }
                else {
                    act = yield this.encounterRepo.proposeActionAsync(this.referenceService.ActionGroups[0].actions[0].id, actor.id, action.currentModifier, action.currentAttack_ID);
                    this.refreshAction(act);
                }
                act = this.allActions.find((a) => a.id == act.id);
                act.isSelected = true;
            }
        });
    }
    selectActor(actorId) {
        this.selectedActor = this.actors.find((a) => a.id == actorId);
    }
    currentActionTreeAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var actor = this.selectedActor;
            this._currentActionTree = yield this.referenceService.getActionTreeAsync(actor);
            return this._currentActionTree;
        });
    }
    get currentGame() {
        return this._currentGame;
    }
    set currentGame(game) {
        this.selectGameAsync(game.id);
    }
    selectGameAsync(gameId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.setCurrentGameAsync(gameId);
            yield this.refreshAsync();
        });
    }
    setupEventsAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_7__["whenTrue"])(() => {
                return this.currentGame != null;
            });
            yield this.encounterHubService.registerForGame(this.currentGame.id);
            //
            //this.allActors = this.allActors.filter(item => actors.find((a) => a.id == item.id));
            this.encounterHubService.gameUpdated.subscribe((game) => {
                game = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["Game"](), game);
                this._currentGame = Object.assign(this._currentGame || {}, game);
                this.setActive();
            });
            this.encounterHubService.actionRemoved.subscribe((action) => {
                action = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["BaseAction"](), action);
                this.removeAction(action);
                this.setActive();
            });
            this.encounterHubService.actionUpdated.subscribe((action) => {
                action = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["BaseAction"](), action);
                this.refreshAction(action);
                this.setActive();
            });
            this.encounterHubService.actionsUpdated.subscribe((actions) => {
                actions = actions.map((act) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["BaseAction"](), act));
                this.refreshActions(actions);
                this.setActive();
            });
            this.encounterHubService.actorRemoved.subscribe((actor) => {
                actor = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["Actor"](), actor);
                this.removeActor(actor);
                this.setActive();
            });
            this.encounterHubService.actorUpdated.subscribe((actor) => {
                actor = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["Actor"](), actor);
                this.refreshActor(actor);
                this.setActive();
            });
            this.encounterHubService.actorsUpdated.subscribe((actors) => {
                actors = actors.map((act) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_3__["Actor"](), act));
                this.refreshActors(actors);
                this.setActive();
            });
        });
    }
    setActive() {
        this.allActions.forEach((act) => {
            act.isActive = false;
        });
        this.allActors.forEach((act) => {
            act.isActive = false;
        });
        this.actions[0].whoIsActing.isActive = true;
        this.actions[0].isActive = true;
    }
    removeActor(actor) {
        var baseAct = this.allActors.find((act) => act.id == actor.id);
        baseAct.actions.forEach((action) => {
            this.allActions = this.allActions.filter(item => action.id != item.id);
        });
        this.allActors = this.allActors.filter(item => actor.id != item.id);
    }
    refreshActors(actors) {
        actors.forEach((act) => {
            this.refreshActor(act);
        });
    }
    refreshActor(actor) {
        var origAct = this.allActors.find((a) => a.id == actor.id);
        if (origAct == undefined) {
            origAct = actor;
            //origAct.isActive = false;
            origAct.actions = new Array();
            origAct.isActive = false;
            origAct.isSelected = false;
            this.allActors.push(origAct);
        }
        Object.assign(origAct, actor);
        //origAct.actions = this.allActions.filter((a) => a.whoIsActing_ID == actor.id);
    }
    removeAction(action) {
        this.allActions = this.allActions.filter(item => action.id != item.id);
        this.actors.forEach((actor) => {
            actor.actions = actor.actions.filter(item => action.id != item.id);
        });
    }
    refreshActions(actions) {
        actions.forEach((act) => {
            this.refreshAction(act);
        });
    }
    refreshAction(action) {
        var origAct = this.allActions.find((a) => a.id == action.id);
        if (origAct == undefined) {
            origAct = action;
            origAct.isActive = false;
            origAct.isSelected = false;
            origAct.whoIsActing = this.allActors.find((actor) => actor.id == origAct.whoIsActing_ID);
            origAct.whoIsActing.actions.push(origAct);
            this.allActions.push(origAct);
        }
        Object.assign(origAct, action);
        //origAct.whoIsActing = this.allActors.find((actor) => actor.id == origAct.whoIsActing_ID);
        //origAct.whoIsActing.actions = this.allActions.filter((a) => a.whoIsActing_ID == action.whoIsActing_ID);
    }
    refreshAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.refreshLock.BeginLock();
            var game = yield this.encounterRepo.getCurrentGameAsync();
            //debugger;
            if (this._currentGame == null) {
                this._currentGame = game;
            }
            else {
                this._currentGame = Object.assign(this._currentGame, game);
            }
            if (this._currentGame != null && this._currentGame.id == 0) {
                this._currentGame = null;
            }
            if (this.currentGame != null) {
                //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);
                var tempActors = null;
                var tempActions = null;
                this.actorRepo.getActorsInGame(this.currentGame.id).subscribe((acts) => {
                    tempActors = acts;
                });
                this.actionRepo.getActionsInGame(this.currentGame.id).subscribe((acts) => {
                    tempActions = acts;
                });
                yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_7__["whenTrue"])(() => {
                    return tempActors != null && tempActions != null;
                });
                var selectedActor = this.selectedActor;
                this.refreshActors(tempActors);
                this.refreshActions(tempActions);
                var removedActions = this.allActions.filter(item => (this.actions.find((a) => a.id == item.id) == undefined));
                removedActions.forEach((a) => this.removeAction(a));
                var removedActors = this.allActors.filter(item => (this.actors.find((a) => a.id == item.id) == undefined));
                removedActors.forEach((a) => this.removeActor(a));
                this.setActive();
                if (this.isGM) {
                    //debugger;
                    if (selectedActor != null && (this.selectedActor == null || selectedActor.id != this.selectedActor.id)) {
                        this.selectActor(selectedActor.id);
                    }
                    if (this.selectedActions.length == 0) {
                        this.selectedAction = this.actions[0];
                    }
                    if (this.selectedActions.length > 0 && this.selectedActor == null) {
                        this.selectedActor = this.selectedActions[0].whoIsActing;
                    }
                }
            }
            yield this.refreshLock.EndLock();
        });
    }
    addCreatureToEncounterAsync(creature) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.createActorFromCreatureAsync(creature.id);
            yield this.refreshAsync();
            this.selectedActor = this.actors[0];
            //await this.refresh();
        });
    }
    addCharacterToEncounterAsync(character, rolledInit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);
            yield this.refreshAsync();
            this.selectedActor = this.actors[0];
            //await this.refresh();
        });
    }
    moveToNextAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var result = yield this.encounterRepo.moveToNextAsync(false);
            if (result.response == ResponseEnum.DisplayMessage) {
                this._alertService.success(result.message);
            }
            if (result.response == ResponseEnum.AutoAdvance) {
                yield this.moveToNextAsync();
                return;
            }
            yield this.refreshAsync();
            this.selectedAction = this.actions[0];
        });
    }
    deleteActionAsync(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.removeActionAsync(action.id);
            yield this.refreshAsync();
        });
    }
    deleteActorAsync(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.removeActorAsync(actor.id);
            yield this.refreshAsync();
        });
    }
    proposeActionAsync(actor, action, attack = null, modifier = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var act = yield this.encounterRepo.proposeActionAsync(action.id, actor.id, modifier, (attack != null ? attack.id : null));
            yield this.refreshAsync();
            act = this.allActions.find((a) => a.id == act.id);
            act.isSelected = true;
            return act;
        });
    }
    doProposedActionAsync(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.encounterRepo.doProposedActionAsync(actor.id);
            yield this.refreshAsync();
        });
    }
};
EncounterService.ctorParameters = () => [
    { type: _Authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_4__["GamesRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_4__["ActorsRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_4__["ActionsRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_4__["EncounterRepository"] },
    { type: _EncounterHub_service__WEBPACK_IMPORTED_MODULE_6__["EncounterHubService"] },
    { type: _References_service__WEBPACK_IMPORTED_MODULE_8__["ReferencesService"] },
    { type: _Alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
];
EncounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _repositories__WEBPACK_IMPORTED_MODULE_4__["GamesRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_4__["ActorsRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_4__["ActionsRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_4__["EncounterRepository"],
        _EncounterHub_service__WEBPACK_IMPORTED_MODULE_6__["EncounterHubService"],
        _References_service__WEBPACK_IMPORTED_MODULE_8__["ReferencesService"],
        _Alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
], EncounterService);



/***/ }),

/***/ "./src/app/services/EncounterHub.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/EncounterHub.service.ts ***!
  \**************************************************/
/*! exports provided: EncounterHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterHubService", function() { return EncounterHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/_helpers/Tasks */ "./src/app/_helpers/Tasks.ts");





class retryPolicy {
    nextRetryDelayInMilliseconds(retryContext) {
        return 15000;
    }
}
let EncounterHubService = class EncounterHubService {
    constructor() {
        this.actorRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actorUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actorsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gameUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionIsEstablished = false;
        this.gId = 0;
        this.createConnection();
        this.registerOnServerEvents();
        this.startConnection();
    }
    registerForGame(gameId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__["whenTrue"])(() => this.connectionIsEstablished);
            yield this._hubConnection.invoke('registerForGame', gameId);
            this.gId = gameId;
        });
    }
    createConnection() {
        this._hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information)
            .withUrl('/hubs/EncounterHub')
            .withAutomaticReconnect(new retryPolicy())
            .build();
    }
    startConnection() {
        this._hubConnection
            .start()
            .then(() => {
            this.connectionIsEstablished = true;
            console.log('Hub connection started');
            this.connectionEstablished.emit(true);
        })
            .catch(err => {
            console.log('Error while establishing connection, retrying...');
            setTimeout(() => { this.startConnection(); }, 5000);
        });
    }
    registerOnServerEvents() {
        //this._hubConnection.
        this._hubConnection.onreconnected((id) => {
            if (this.gId > 0) {
                this.registerForGame(this.gId);
            }
        });
        this._hubConnection.on('RemovedAction', (data) => {
            this.actionRemoved.emit(data);
        });
        this._hubConnection.on('UpdatedAction', (data) => {
            this.actionUpdated.emit(data);
        });
        this._hubConnection.on('UpdatedActions', (data) => {
            this.actionsUpdated.emit(data);
        });
        this._hubConnection.on('RemovedActor', (data) => {
            this.actorRemoved.emit(data);
        });
        this._hubConnection.on('UpdatedActor', (data) => {
            this.actorUpdated.emit(data);
        });
        this._hubConnection.on('UpdatedActors', (data) => {
            this.actorsUpdated.emit(data);
        });
        //UpdateGame
        this._hubConnection.on('UpdateGame', (data) => {
            this.gameUpdated.emit(data);
        });
    }
};
EncounterHubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EncounterHubService);



/***/ }),

/***/ "./src/app/services/References.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/References.service.ts ***!
  \************************************************/
/*! exports provided: treeEntry, ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeEntry", function() { return treeEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return ReferencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/Tasks */ "./src/app/_helpers/Tasks.ts");




class treeEntry {
    //private _isSelected: boolean = false;
    //public isOpen: boolean = false;
    constructor(code, text) {
        this.code = code;
        this.text = text;
        this.action = null;
        this.attack = null;
        this.children = new Array();
    }
    //public get isSelected():boolean {
    //    return this._isSelected;
    //}
    //public set isSelected(value: boolean) {
    //    this.treeTop.clearSelected();
    //    this._isSelected = true;
    //    this.openNode();
    //}
    //public openNode() {
    //    this.isOpen = true;
    //    if (this.parent != null) {
    //        this.parent.openNode();
    //    }
    //}
    //private clearSelected() {
    //    this._isSelected = false;
    //    this.children.forEach((child) => {
    //        child.clearSelected();
    //    });
    //}
    //public get treeTop(): treeEntry {
    //    if (this.parent == null) {
    //        return this;
    //    }
    //    return this.parent.treeTop;
    //}
    addChild(node) {
        this.children.push(node);
        node.parent = this;
    }
    findNode(action, attack = null) {
        if (this.action != null && this.action.id == action.id &&
            (attack == null ||
                (this.attack != null && attack.id == this.attack.id))) {
            return this;
        }
        var node = null;
        this.children.forEach((n) => {
            node = node || n.findNode(action, attack);
        });
        return node;
    }
}
let ReferencesService = class ReferencesService {
    constructor(referenceRepo) {
        this.referenceRepo = referenceRepo;
        this.ActionGroups = null;
        this.ConstitutionBonusCharts = null;
        this.CriticalCodes = null;
        this.CriticalIgnores = null;
        this.IQs = null;
        this.LevelCharts = null;
        this.Outlooks = null;
        this.Paces = null;
        this.SizeRatings = null;
        this.SpeedCharts = null;
        this.AttackTypes = null;
        this.CriticalTypes = null;
        this.WeaponTypes = null;
        this.Books = null;
        this.PsychicRefractoryPeriodEntrys = null;
        this._actionTree = null;
        this._attackNodes = new Array();
        this.treeLock = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__["MutexLock"]();
        this.refreshAsync();
    }
    buildActionTreeAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__["whenTrue"])(() => this.ActionGroups != null);
            this._actionTree = new treeEntry("Top", "Top");
            this.ActionGroups.forEach((group) => {
                var agNode = new treeEntry("group_" + group.id, group.name);
                this._actionTree.children.push(agNode);
                group.actions.forEach((act) => {
                    var actNode = new treeEntry("action_" + act.id, act.name);
                    actNode.action = act;
                    agNode.addChild(actNode);
                    if (act.isAttack) {
                        this._attackNodes.push(actNode);
                    }
                });
            });
        });
    }
    getActionTreeAsync(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this._actionTree == null) {
                yield this.treeLock.LockAreaAsync(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (this._actionTree == null) {
                        yield this.buildActionTreeAsync();
                    }
                }));
            }
            // debugger;
            //var sel = this._actionTree.getSelected();
            if (actor != null) {
                this._attackNodes.forEach((node) => {
                    node.children = new Array();
                    actor.attacks.forEach((att) => {
                        var n = new treeEntry("attack_" + att.id, att.name);
                        n.action = node.action;
                        n.attack = att;
                        node.addChild(n);
                    });
                });
            }
            //if (sel != null) {
            //    var nd = this._actionTree.findNode(sel.action, sel.attack);
            //    if (nd != null) {
            //        nd.isSelected = true;
            //    }
            //}
            return this._actionTree;
        });
    }
    refreshAsync() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.referenceRepo.getActionGroups()
                .subscribe((items) => {
                this.ActionGroups = items;
            });
            this.referenceRepo.getConstitutionBonusCharts()
                .subscribe((items) => {
                this.ConstitutionBonusCharts = items;
            });
            this.referenceRepo.getCriticalCodes()
                .subscribe((items) => {
                this.CriticalCodes = items;
            });
            this.referenceRepo.getCriticalIgnores()
                .subscribe((items) => {
                this.CriticalIgnores = items;
            });
            this.referenceRepo.getIQs()
                .subscribe((items) => {
                this.IQs = items;
            });
            this.referenceRepo.getLevelCharts()
                .subscribe((items) => {
                this.LevelCharts = items;
            });
            this.referenceRepo.getOutlooks()
                .subscribe((items) => {
                this.Outlooks = items;
            });
            this.referenceRepo.getPaces()
                .subscribe((items) => {
                this.Paces = items;
            });
            this.referenceRepo.getSizeRatings()
                .subscribe((items) => {
                this.SizeRatings = items;
            });
            this.referenceRepo.getSpeedCharts()
                .subscribe((items) => {
                this.SpeedCharts = items;
            });
            this.referenceRepo.getAttackTypes()
                .subscribe((items) => {
                this.AttackTypes = items;
            });
            this.referenceRepo.getCriticalTypes()
                .subscribe((items) => {
                this.CriticalTypes = items;
            });
            this.referenceRepo.getWeaponTypes()
                .subscribe((items) => {
                this.WeaponTypes = items;
            });
            this.referenceRepo.getBooks()
                .subscribe((items) => {
                this.Books = items;
            });
            this.referenceRepo.getPsychicRefractoryPeriodEntries()
                .subscribe((items) => {
                this.PsychicRefractoryPeriodEntrys = items;
            });
        });
    }
};
ReferencesService.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["ReferenceRepository"] }
];
ReferencesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["ReferenceRepository"]])
], ReferencesService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, ApplicationName, AuthenticationService, EncounterService, EncounterHubService, treeEntry, ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _Alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Authentication.service */ "./src/app/services/Authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _Encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Encounter.service */ "./src/app/services/Encounter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return _Encounter_service__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]; });

/* harmony import */ var _EncounterHub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EncounterHub.service */ "./src/app/services/EncounterHub.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterHubService", function() { return _EncounterHub_service__WEBPACK_IMPORTED_MODULE_4__["EncounterHubService"]; });

/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./References.service */ "./src/app/services/References.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeEntry", function() { return _References_service__WEBPACK_IMPORTED_MODULE_5__["treeEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return _References_service__WEBPACK_IMPORTED_MODULE_5__["ReferencesService"]; });









/***/ }),

/***/ "./src/app/top/character/character.component.css":
/*!*******************************************************!*\
  !*** ./src/app/top/character/character.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/top/character/character.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top/character/character.component.ts ***!
  \******************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterComponent = 
/** character component*/
class CharacterComponent {
    /** character ctor */
    constructor() {
    }
};
CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'character',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/character/character.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character.component.css */ "./src/app/top/character/character.component.css")).default]
    })
    /** character component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CharacterComponent);



/***/ }),

/***/ "./src/app/top/character/index.ts":
/*!****************************************!*\
  !*** ./src/app/top/character/index.ts ***!
  \****************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _character_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.component */ "./src/app/top/character/character.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return _character_component__WEBPACK_IMPORTED_MODULE_1__["CharacterComponent"]; });





/***/ }),

/***/ "./src/app/top/creature/creature.component.css":
/*!*****************************************************!*\
  !*** ./src/app/top/creature/creature.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC9jcmVhdHVyZS9jcmVhdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/top/creature/creature.component.ts":
/*!****************************************************!*\
  !*** ./src/app/top/creature/creature.component.ts ***!
  \****************************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return CreatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreatureComponent = 
/** creature component*/
class CreatureComponent {
    /** creature ctor */
    constructor() {
    }
};
CreatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'creature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creature.component.css */ "./src/app/top/creature/creature.component.css")).default]
    })
    /** creature component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreatureComponent);



/***/ }),

/***/ "./src/app/top/creature/index.ts":
/*!***************************************!*\
  !*** ./src/app/top/creature/index.ts ***!
  \***************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _creature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creature.component */ "./src/app/top/creature/creature.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return _creature_component__WEBPACK_IMPORTED_MODULE_1__["CreatureComponent"]; });





/***/ }),

/***/ "./src/app/top/encounter/encounter.component.css":
/*!*******************************************************!*\
  !*** ./src/app/top/encounter/encounter.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL2VuY291bnRlci9lbmNvdW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RvcC9lbmNvdW50ZXIvZW5jb3VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/top/encounter/encounter.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top/encounter/encounter.component.ts ***!
  \******************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");





var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__["EnumDefinitions"].ViewTypeEnum;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__["EnumDefinitions"].ActionTypeEnum;
let EncounterComponent = 
/** encounter component*/
class EncounterComponent {
    /** encounter ctor */
    constructor(gameView, _route, _userService) {
        this.gameView = gameView;
        this._route = _route;
        this._userService = _userService;
        //public actions: Array<BaseAction> = null;
        this._currentActionTree = null;
        this._route.paramMap.subscribe(params => {
            let id = params.get('id');
            //debugger;
            this.gameView.selectGameAsync(parseInt(id));
        });
        this.ngInit();
    }
    ngOnChanges(changes) {
        //throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    get currentActionTree() {
        return this._currentActionTree;
    }
    ngInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._currentActionTree = yield this.gameView.currentActionTreeAsync();
        });
    }
    get currentTime() {
        if (this.gameView != null && this.gameView.currentGame != null) {
            return '' + Math.floor(this.gameView.currentGame.currentTime * 100) / 100;
        }
        return "";
    }
    get viewType() {
        return this.gameView.viewType;
    }
    get actions() {
        var acts = this.gameView.actions;
        return acts;
    }
    get actors() {
        var acts = this.gameView.actors;
        return acts;
    }
    get selectedAction() {
        var actor = this.gameView.selectedActor;
        if (actor != null) {
            var actions = this.gameView.selectedActions;
            var action = null;
            if (actions.length == 1) {
                action = actions[0];
            }
            if (action != null && action.actionType == ActionTypeEnum.Effect) {
                return null;
            }
            if (action == null || action.actionType == ActionTypeEnum.Current) {
                if (actor.currentAction == null || actor.currentAction.isActive) {
                    action = actor.proposedAction || actor.nextAction;
                }
                else {
                    action = actor.proposedAction || actor.currentAction;
                }
            }
            //debugger;
            return action;
        }
        else {
            return null;
        }
    }
    addDamage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    addSpell() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    addStunned() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    rollD100Open() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    rollD100() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    resetEncounter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    onDoAction(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                var cur = action.whoIsActing.isActive;
                yield this.gameView.doProposedActionAsync(action.whoIsActing);
                if (cur) {
                    yield this.gameView.moveToNextAsync();
                }
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    onProposeAction(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                var act = yield this.gameView.proposeActionAsync(action.actor, action.action, action.attack, action.modifier);
                //await delay(100);
                this.gameView.selectedAction = act;
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    deleteAction(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.deleteActionAsync(action);
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    deleteActor(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.deleteActorAsync(actor);
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    selectActor(actor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                this.gameView.selectedActor = actor;
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    selectAction(action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                this.gameView.selectedAction = action;
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    get isGM() {
        return this.viewType == ViewTypeEnum.GM;
    }
    get isPlayer() {
        return this.viewType == ViewTypeEnum.Player;
    }
    get isViewOnly() {
        return this.viewType == ViewTypeEnum.Overview;
    }
    moveToNext() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.moveToNextAsync();
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
};
EncounterComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
EncounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encounter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./encounter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/encounter/encounter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./encounter.component.css */ "./src/app/top/encounter/encounter.component.css")).default]
    })
    /** encounter component*/
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], EncounterComponent);



/***/ }),

/***/ "./src/app/top/encounter/index.ts":
/*!****************************************!*\
  !*** ./src/app/top/encounter/index.ts ***!
  \****************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _encounter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encounter.component */ "./src/app/top/encounter/encounter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return _encounter_component__WEBPACK_IMPORTED_MODULE_1__["EncounterComponent"]; });





/***/ }),

/***/ "./src/app/top/home/home.component.ts":
/*!********************************************!*\
  !*** ./src/app/top/home/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full}`;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/top/home/index.ts":
/*!***********************************!*\
  !*** ./src/app/top/home/index.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/top/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





//export function getBaseUrl() {
//  return document.getElementsByTagName('base')[0].href;
//}
//const providers = [
//  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: <Array<any>>[] }
//];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));
//platformBrowserDynamic(providers).bootstrapModule(AppModule)
//  .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Personal Projects\CEATSii-Combat-Tracker\CombatTracker\CombatTracker.Web\CEATSiiApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{ message | async }}</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<header class=\"\" style=\"height: 10%!important;\">\r\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow h-100 \">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" asp-area=\"\" asp-controller=\"Home\" asp-action=\"Index\">CombatTracker.Web</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbarSupportedContent\"\r\n              aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\">\r\n        <app-login-menu class=\"navbar-nav\"></app-login-menu>\r\n\r\n        <main-nav-menu class=\"navbar-nav flex-grow-1\"></main-nav-menu>\r\n\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<div class=\"mainbody\">\r\n  <main role=\"main\" class=\"clear h-100\" style=\"\">\r\n\r\n    <div class=\"h-100\" style=\"position:relative;\">\r\n      <div class='apparea'>\r\n        <div class='menu-column'>\r\n          <div class=\"displayInfo\"></div>\r\n          <side-nav-menu></side-nav-menu>\r\n        </div>\r\n        <div class='body-content'>\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n\r\n\r\n\r\n\r\n  <footer class=\"border-top footer text-muted\" style=\"height: 10%!important;\">\r\n    <div class=\"container h-100\">\r\n      &copy; 2019 - CombatTracker.Web - <a asp-area=\"\" asp-controller=\"Home\" asp-action=\"Privacy\">Privacy</a>\r\n    </div>\r\n  </footer>\r\n</div>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor.component.html ***!
  \*********************************************************************************************/
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack.component.html ***!
  \***********************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"character\">\r\n    <fieldset>\r\n        <legend>{{character?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.name\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-6\" style=\"vertical-align:bottom;\">\r\n                    <div class=\"btn-group\">\r\n                        <label><input type=\"radio\" value=\"PC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> PC</label>\r\n                        <label><input type=\"radio\" value=\"NPC\" name=\"chartype\" [(ngModel)]=\"character.typeString\"> NPC</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-2\">\r\n                    <label>Level</label>\r\n                    <input #level=\"ngModel\" name=\"level\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.level\" required />\r\n                    <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                        Please enter a level\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Base Inititive</label>\r\n                    <input #baseInititive=\"ngModel\" name=\"baseInititive\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.baseInititive\" required />\r\n                    <div *ngIf=\"baseInititive.invalid\" class=\"text-danger\">\r\n                        Please enter a base inititive\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Walk Speed</label>\r\n                    <input #walkSpeed=\"ngModel\" name=\"walkSpeed\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.walkSpeed\" required />\r\n                    <div *ngIf=\"walkSpeed.invalid\" class=\"text-danger\">\r\n                        Please enter a Walk Speed\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Strength Bonus</label>\r\n                    <input #strengthBonus=\"ngModel\" name=\"strengthBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.strengthBonus\" required />\r\n                    <div *ngIf=\"strengthBonus.invalid\" class=\"text-danger\">\r\n                        Please enter a Strength Bonus\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-2\">\r\n                    <label>Hit<br />Points</label>\r\n                    <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.hitPoints\" required />\r\n                    <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Hit Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n                    <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.powerPoints\" required />\r\n                    <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Power Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n                    <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.exhaustionPoints\" required />\r\n                    <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                        Please enter Exhaustion Points\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n                    <label>Percent Required<br />Adrenal DB</label>\r\n                    <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                           [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-6\">\r\n                    <app-weapon [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n                    <app-armor [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></app-armor>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>\r\n<modal id=\"custom-modal-2\">\r\n    <div class=\"modal\">\r\n        <div class=\"modal-body\">\r\n            <h1>Roll Init - 2d10</h1>\r\n            <input name=\"rolledInit\" class=\"form-control\"\r\n                    [(ngModel)]=\"rolledInit\" required />\r\n            <button (click)=\"closeModal('custom-modal-2');\">Add To Encounter</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-background\"></div>\r\n</modal>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character.component.html ***!
  \*****************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"creature\">\r\n    <fieldset>\r\n        <legend>{{creature?.name}}</legend>\r\n        <form #charForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Name</label>\r\n                    <input #name=\"ngModel\" name=\"typeName\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.typeName\" required />\r\n                    <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                        Please enter a name\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                    <label>Description</label>\r\n                    <textarea name=\"description\" class=\"form-control\"\r\n                              [(ngModel)]=\"creature.description\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Level</label>\r\n                        <input #level=\"ngModel\" name=\"baseLevel\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseLevel\" required />\r\n                        <div *ngIf=\"level.invalid\" class=\"text-danger\">\r\n                            Please enter a level\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedLevel\" [(ngModel)]=\"creature.levelMod_ID\">\r\n                            <option *ngFor=\"let level of referencesService.LevelCharts\" value={{level?.id}}>\r\n                                {{level?.name}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Size</label>\r\n                    <select class=\"form-control\" name=\"selectedSize\" [(ngModel)]=\"creature.size_ID\">\r\n                        <option *ngFor=\"let item of referencesService.SizeRatings\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Movement Speed</label>\r\n                        <select class=\"form-control\" name=\"selectedMS\" [(ngModel)]=\"creature.msRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Attack Quickness</label>\r\n                        <select class=\"form-control\" name=\"selectedAQ\" [(ngModel)]=\"creature.aqRating_ID\">\r\n                            <option *ngFor=\"let item of referencesService.SpeedCharts\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Move</label>\r\n                        <input #move=\"ngModel\" name=\"baseMove\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseMove\" required />\r\n                        <div *ngIf=\"move.invalid\" class=\"text-danger\">\r\n                            Please enter a distance\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Max Pace</label>\r\n                    <select class=\"form-control\" name=\"selectedPace\" [(ngModel)]=\"creature.maxPace_ID\">\r\n                        <option *ngFor=\"let item of referencesService.Paces\" value={{item?.id}}>\r\n                            {{item?.abbreviation}} ({{item?.name}})\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-sm-1\">\r\n                    <label>Moving Maneuver Bonus</label>\r\n                    <input #move=\"ngModel\" name=\"MMBonus\" class=\"form-control\"\r\n                           [(ngModel)]=\"creature.mmBonus\" required />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-4\" style=\"padding:0;\">\r\n                        <label>Base Hits</label>\r\n                        <input #hits=\"ngModel\" name=\"baseHits\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.baseHits\" required />\r\n                        <div *ngIf=\"hits.invalid\" class=\"text-danger\">\r\n                            Please enter hit points\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>&nbsp;</label>\r\n                        <select class=\"form-control\" name=\"selectedHitMod\" [(ngModel)]=\"creature.hitMod_ID\">\r\n                            <option *ngFor=\"let item of referencesService.ConstitutionBonusCharts\" value={{item?.id}}>\r\n                                {{item?.code}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals</label>\r\n                        <select class=\"form-control\" name=\"selectedCritical\" [(ngModel)]=\"creature.criticals_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalCodes\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Criticals Ignored</label>\r\n                        <select class=\"form-control\" name=\"selectedCriticalIgnore\" [(ngModel)]=\"creature.criticalsIgnore_ID\">\r\n                            <option *ngFor=\"let item of referencesService.CriticalIgnores\" value={{item?.id}}>\r\n                                {{item?.abbreviation}} ({{item?.name}})\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-sm-3\">\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>AT</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.at\" required />\r\n                    </div>\r\n                    <div class=\"col-sm-5\" style=\"padding:0;\">\r\n                        <label>DB</label>\r\n                        <input name=\"at\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.db\" required />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"form-group col-sm-3\">\r\n                    <label>Numbers Encountered</label>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Min</label>\r\n                        <input name=\"baseMin\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.minEncountered\" />\r\n                    </div>\r\n                    <div class=\"col-sm-6\" style=\"padding:0;\">\r\n                        <label>Max</label>\r\n                        <input name=\"baseMax\" class=\"form-control\"\r\n                               [(ngModel)]=\"creature.maxEncountered\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-group  col-sm-12\">\r\n                    <app-attack [attacks]=\"creature.attacks\" [creatureId]=\"creature.id\" (onDelete)=\"onAttackDeleted($event)\"></app-attack>\r\n                </div>\r\n            </div>\r\n            <!--\r\n    <div class=\"row\">\r\n        <div class=\"form-group  col-sm-2\">\r\n            <label>Hit<br />Points</label>\r\n            <input #hitPoints=\"ngModel\" name=\"hitPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.hitPoints\" required />\r\n            <div *ngIf=\"hitPoints.invalid\" class=\"text-danger\">\r\n                Please enter Hit Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Power<br />Points</label>\r\n            <input #powerPoints=\"ngModel\" name=\"powerPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.powerPoints\" required />\r\n            <div *ngIf=\"powerPoints.invalid\" class=\"text-danger\">\r\n                Please enter Power Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label style=\"white-space: nowrap;\">Exhaustion<br />Points</label>\r\n            <input #exhaustionPoints=\"ngModel\" name=\"exhaustionPoints\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.exhaustionPoints\" required />\r\n            <div *ngIf=\"exhaustionPoints.invalid\" class=\"text-danger\">\r\n                Please enter Exhaustion Points\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-2\">\r\n            <label>Percent Required<br />Adrenal DB</label>\r\n            <input #percentRequiredAdrenalDB=\"ngModel\" name=\"percentRequiredAdrenalDB\" class=\"form-control\"\r\n                   [(ngModel)]=\"character.percentRequiredAdrenalDB\" />\r\n        </div>\r\n    </div>-->\r\n            <!--<div class=\"row\">\r\n        <div class=\"form-group  col-sm-6\">\r\n            <app-weapon [weapons]=\"character.weapons\" [charId]=\"character.id\" (onDelete)=\"onWeaponDeleted($event)\"></app-weapon>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"isRolemaster\" class=\"form-group  col-sm-6\">\r\n            <app-armor [armors]=\"character.armors\" [charId]=\"character.id\" (onDelete)=\"onArmorDeleted($event)\"></app-armor>\r\n        </div>\r\n    </div>-->\r\n            <div class=\"text-center pt-2\">\r\n                <button class=\"btn btn-outline-primary pull-left\" (click)=\"closeEdit()\">\r\n                    Back\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger\" [disabled]=\"charForm.invalid\"\r\n                        (click)=\"saveCharacter()\">\r\n                    Save\r\n                </button>\r\n\r\n                <button *ngIf=\"hasCurrentGame\" class=\"btn btn-primary pull-right\"\r\n                        (click)=\"addToEncounter()\">\r\n                    Add To Encounter\r\n                </button>\r\n\r\n            </div>\r\n        </form>\r\n    </fieldset>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/encounter.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/encounter.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid red\">encounter Component</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tesy\r\n<div class=\"wrapper\">\r\n    <div class=\"area\">\r\n        <div class=\"list\">\r\n            <p *ngIf=\"!games\"><em>Loading...</em></p>\r\n            <div class=\"mainList\">\r\n                <h3 style=\"display:block; margin-top:0;\">\r\n                    <div style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"newGame()\">\r\n                            <span class=\"glyphicon glyphicon-plus\"></span> New\r\n                        </button>\r\n                    </div>\r\n                    Games\r\n                </h3>\r\n                <table *ngIf=\"games\" class=\"table table-striped\">\r\n                    <tr>\r\n                        <th style=\"vertical-align: middle;\">\r\n                            Name\r\n                        </th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let game of games\">\r\n                        <td style=\"white-space:nowrap;\"><a (click)=\"selectGame(game.id)\">{{game?.name}}</a> ({{game?.currentTime.toFixed(2)}})</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"edit\">\r\n            <!--(onSave)=\"onArmorSaved($event)\"-->\r\n            <app-game-edit [game]=\"selectedGame\" (onDelete)=\"onGameDeleted($event)\" (onSave)=\"onGameSave($event)\"></app-game-edit>\r\n        </div>\r\n    </div>\r\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon.component.html ***!
  \***********************************************************************************************/
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav flex-grow-1\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/home']\">Home</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"currentUser\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/creatures']\">Creature Compendium</a>\r\n  </li>\r\n  <li class=\"nav-item\" *ngIf=\"currentUser\">\r\n    <a class=\"nav-link text-dark\" [routerLink]=\"['/mycreatures']\">My Creatures</a>\r\n  </li>\r\n  <!--<li class=\"nav-item\">\r\n    <a class=\"nav-link text-dark\" asp-area=\"\" asp-controller=\"Home\" asp-action=\"Privacy\">Privacy</a>\r\n  </li>-->\r\n</ul>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"wrapper\">\r\n  <div class=\"area\">\r\n    <div class=\"list\">\r\n      <p *ngIf=\"!creatures\"><em>Loading...</em></p>\r\n      <div class=\"mainList\">\r\n        <h3 style=\"display:block; margin-top:0; white-space: nowrap;\">\r\n          <div style=\"float:right;\">\r\n            <button class=\"btn btn-primary btn-sm\" (click)=\"newCreature()\">\r\n              <span class=\"glyphicon glyphicon-plus\"></span> New\r\n            </button>\r\n          </div>\r\n          Creatures\r\n        </h3>\r\n        <table *ngIf=\"creatures\" class=\"table table-striped\">\r\n          <tr>\r\n            <th style=\"vertical-align: middle;\">\r\n              System\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Book\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Name\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Level\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Size\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Number\r\n            </th>\r\n            <th style=\"vertical-align: middle;\">\r\n              Speed\r\n            </th>\r\n          </tr>\r\n          <tr *ngFor=\"let creature of creatures\">\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.gameTypeString}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.book.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              <a (click)=\"selectCreature(creature.id)\">{{creature?.typeName}}</a>\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.baseLevel}}{{creature?.levelMod.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.size.name}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.minEncountered}} - {{creature?.maxEncountered}}\r\n            </td>\r\n            <td style=\"white-space: nowrap;\">\r\n              {{creature?.msRating.name}} / {{creature?.aqRating.name}}\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"edit\">\r\n      <app-creature-edit [creature]=\"selectedCreature\" (onDelete)=\"onCreatureDeleted($event)\" (onSave)=\"onCreatureSave($event)\"></app-creature-edit>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Combat Environment Activity Tracking System</h1>\r\n<h2>Hello {{name}}</h2>\r\n<p>CEATSii second by second, threaded combat system</p>\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ApiPathInterceptor = class ApiPathInterceptor {
    constructor() {
    }
    intercept(req, next) {
        var bUrl = ''; //this.getBaseUrl();
        var rUrl = req.url;
        //debugger;
        const apiReq = req.clone({ url: bUrl + `/${rUrl}` });
        return next.handle(apiReq);
    }
};
ApiPathInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [])
], ApiPathInterceptor);



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

/***/ "./src/app/_helpers/Lock.ts":
/*!**********************************!*\
  !*** ./src/app/_helpers/Lock.ts ***!
  \**********************************/
/*! exports provided: Lock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lock", function() { return Lock; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Lock;
(function (Lock) {
    class Locker {
        constructor(maxLockTime) {
            this.maxLockTime = maxLockTime;
            this.locked = false;
            this.lastCalled = null;
            this.isLocked = () => {
                var seconds = 0;
                if (this.lastCalled) {
                    seconds = ((new Date()).getTime() - this.lastCalled.getTime()) / 1000;
                }
                return this.locked && seconds < this.maxLockTime;
            };
            this.lock = () => {
                this.locked = true;
                this.lastCalled = new Date();
            };
            this.unLock = () => {
                this.locked = false;
            };
            if (!this.maxLockTime) {
                this.maxLockTime = 30.0;
            }
        }
    }
    Lock.Locker = Locker;
})(Lock || (Lock = {}));


/***/ }),

/***/ "./src/app/_helpers/Tasks.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/Tasks.ts ***!
  \***********************************/
/*! exports provided: RecurringTask, delay, whenTrue, WhenAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecurringTask", function() { return RecurringTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whenTrue", function() { return whenTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhenAll", function() { return WhenAll; });
/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lock */ "./src/app/_helpers/Lock.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class RecurringTask {
    constructor(callback, timeout, maxLockTime) {
        this.callback = callback;
        this.timeout = timeout;
        this.maxLockTime = maxLockTime;
        this._isRunning = false;
        this.locker = new _Lock__WEBPACK_IMPORTED_MODULE_0__["Lock"].Locker();
        this.timedCall = () => {
            if (!this.isLocked() && this.callback) {
                this.callback();
            }
            if (this.isRunning) {
                setTimeout(() => { this.timedCall(); }, this.timeout);
            }
        };
        //private set isRunning(value: boolean) {
        //    this._isRunning = value;
        //}
        this.setTimeOut = (time) => {
            this.timeout = time;
        };
        this.lock = () => {
            this.locker.lock();
        };
        this.unLock = () => {
            this.locker.unLock();
        };
        this.isLocked = () => {
            return this.locker.isLocked();
        };
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
        var obj = new RecurringTask(() => {
            obj.lock();
            if (trueFunc()) {
                resolve();
                obj.stop();
            }
            obj.unLock();
        }, 100);
        obj.start();
    });
}
function WhenAll(list, progressCB) {
    return __awaiter(this, void 0, void 0, function* () {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        //debugger;
        console.error(error);
        let customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ErrorInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ApiPathInterceptor, AuthGuard, ErrorInterceptor, JwtInterceptor, EnumEx, Lock, RecurringTask, delay, whenTrue, WhenAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiPath.interceptor */ "./src/app/_helpers/ApiPath.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_0__["ApiPathInterceptor"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });

/* harmony import */ var _EnumEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnumEx */ "./src/app/_helpers/EnumEx.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return _EnumEx__WEBPACK_IMPORTED_MODULE_4__["EnumEx"]; });

/* harmony import */ var _Lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lock */ "./src/app/_helpers/Lock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lock", function() { return _Lock__WEBPACK_IMPORTED_MODULE_5__["Lock"]; });

/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tasks */ "./src/app/_helpers/Tasks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecurringTask", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["RecurringTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whenTrue", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["whenTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhenAll", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_6__["WhenAll"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        //debugger;
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
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
JwtInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: `/_configuration/${ApplicationName}`,
    Login: `authentication/${LoginActions.Login}`,
    LoginFailed: `authentication/${LoginActions.LoginFailed}`,
    LoginCallback: `authentication/${LoginActions.LoginCallback}`,
    Register: `authentication/${LoginActions.Register}`,
    Profile: `authentication/${LoginActions.Profile}`,
    LogOut: `authentication/${LogoutActions.Logout}`,
    LoggedOut: `authentication/${LogoutActions.LoggedOut}`,
    LogOutCallback: `authentication/${LogoutActions.LogoutCallback}`,
    LoginPathComponents: [],
    LoginFailedPathComponents: [],
    LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
    LoggedOutPathComponents: [],
    LogOutCallbackPathComponents: [],
    IdentityRegisterPath: '/Identity/Account/Register',
    IdentityManagePath: '/Identity/Account/Manage'
};
applicationPaths = Object.assign({}, applicationPaths, { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "./src/app/api-authorization/login-menu/login-menu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/api-authorization/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/api-authorization/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ApiAuthorizationModule = class ApiAuthorizationModule {
};
ApiAuthorizationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Register, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Profile, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginFailed, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoginCallback, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LoggedOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_6__["ApplicationPaths"].LogOutCallback, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] }
            ])
        ],
        declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]],
        exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize.service */ "./src/app/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





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
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].ReturnUrl]: state.url
                }
            });
        }
    }
};
AuthorizeGuard.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthorizeGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize.service */ "./src/app/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthorizeInterceptor = class AuthorizeInterceptor {
    constructor(authorize) {
        this.authorize = authorize;
    }
    intercept(req, next) {
        return this.authorize.getAccessToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(token => this.processRequestWithToken(token, req, next)));
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
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
AuthorizeInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
], AuthorizeInterceptor);



/***/ }),

/***/ "./src/app/api-authorization/authorize.service.ts":
/*!********************************************************!*\
  !*** ./src/app/api-authorization/authorize.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationResultStatus, AuthorizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationResultStatus", function() { return AuthenticationResultStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeService", function() { return AuthorizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var AuthenticationResultStatus;
(function (AuthenticationResultStatus) {
    AuthenticationResultStatus[AuthenticationResultStatus["Success"] = 0] = "Success";
    AuthenticationResultStatus[AuthenticationResultStatus["Redirect"] = 1] = "Redirect";
    AuthenticationResultStatus[AuthenticationResultStatus["Fail"] = 2] = "Fail";
})(AuthenticationResultStatus || (AuthenticationResultStatus = {}));
let AuthorizeService = class AuthorizeService {
    constructor() {
        // By default pop ups are disabled because they don't work properly on Edge.
        // If you want to enable pop up authentication simply set this flag to false.
        this.popUpDisabled = true;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    isAuthenticated() {
        return this.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => !!u));
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(this.userSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u)), this.getUserFromStorage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(u => !!u), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(u => this.userSubject.next(u))), this.userSubject.asObservable());
    }
    getAccessToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.userManager.getUser())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => user && user.access_token));
    }
    // We try to authenticate the user in three different ways:
    // 1) We try to see if we can authenticate the user silently. This happens
    //    when the user is already logged in on the IdP and is done using a hidden iframe
    //    on the client.
    // 2) We try to authenticate the user using a PopUp Window. This might fail if there is a
    //    Pop-Up blocker or the user has disabled PopUps.
    // 3) If the two methods above fail, we redirect the browser to the IdP to perform a traditional
    //    redirect flow.
    signIn(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            let user = null;
            try {
                user = yield this.userManager.signinSilent(this.createArguments());
                this.userSubject.next(user.profile);
                return this.success(state);
            }
            catch (silentError) {
                // User might not be authenticated, fallback to popup authentication
                console.log('Silent authentication error: ', silentError);
                try {
                    if (this.popUpDisabled) {
                        throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                    }
                    user = yield this.userManager.signinPopup(this.createArguments());
                    this.userSubject.next(user.profile);
                    return this.success(state);
                }
                catch (popupError) {
                    if (popupError.message === 'Popup window closed') {
                        // The user explicitly cancelled the login action by closing an opened popup.
                        return this.error('The user closed the window.');
                    }
                    else if (!this.popUpDisabled) {
                        console.log('Popup authentication error: ', popupError);
                    }
                    // PopUps might be blocked by the user, fallback to redirect
                    try {
                        yield this.userManager.signinRedirect(this.createArguments(state));
                        return this.redirect();
                    }
                    catch (redirectError) {
                        console.log('Redirect authentication error: ', redirectError);
                        return this.error(redirectError);
                    }
                }
            }
        });
    }
    completeSignIn(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ensureUserManagerInitialized();
                const user = yield this.userManager.signinCallback(url);
                this.userSubject.next(user && user.profile);
                return this.success(user && user.state);
            }
            catch (error) {
                console.log('There was an error signing in: ', error);
                return this.error('There was an error signing in.');
            }
        });
    }
    signOut(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.popUpDisabled) {
                    throw new Error('Popup disabled. Change \'authorize.service.ts:AuthorizeService.popupDisabled\' to false to enable it.');
                }
                yield this.ensureUserManagerInitialized();
                yield this.userManager.signoutPopup(this.createArguments());
                this.userSubject.next(null);
                return this.success(state);
            }
            catch (popupSignOutError) {
                console.log('Popup signout error: ', popupSignOutError);
                try {
                    yield this.userManager.signoutRedirect(this.createArguments(state));
                    return this.redirect();
                }
                catch (redirectSignOutError) {
                    console.log('Redirect signout error: ', popupSignOutError);
                    return this.error(redirectSignOutError);
                }
            }
        });
    }
    completeSignOut(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ensureUserManagerInitialized();
            try {
                const state = yield this.userManager.signoutCallback(url);
                this.userSubject.next(null);
                return this.success(state && state.data);
            }
            catch (error) {
                console.log(`There was an error trying to log out '${error}'.`);
                return this.error(error);
            }
        });
    }
    createArguments(state) {
        return { useReplaceToNavigate: true, data: state };
    }
    error(message) {
        return { status: AuthenticationResultStatus.Fail, message };
    }
    success(state) {
        return { status: AuthenticationResultStatus.Success, state };
    }
    redirect() {
        return { status: AuthenticationResultStatus.Redirect };
    }
    ensureUserManagerInitialized() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.userManager !== undefined) {
                return;
            }
            const response = yield fetch(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].ApiAuthorizationClientConfigurationUrl);
            if (!response.ok) {
                throw new Error(`Could not load settings for '${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationName"]}'`);
            }
            const settings = yield response.json();
            settings.automaticSilentRenew = true;
            settings.includeIdTokenInSilentRenew = true;
            this.userManager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](settings);
            this.userManager.events.addUserSignedOut(() => __awaiter(this, void 0, void 0, function* () {
                yield this.userManager.removeUser();
                this.userSubject.next(null);
            }));
        });
    }
    getUserFromStorage() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.ensureUserManagerInitialized())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.userManager.getUser()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => u && u.profile));
    }
};
AuthorizeService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizeService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/app/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginMenuComponent = class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(u => u && u.name));
    }
};
LoginMenuComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] }
];
LoginMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login-menu/login-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login-menu.component.css */ "./src/app/api-authorization/login-menu/login-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/app/api-authorization/authorize.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
let LoginComponent = class LoginComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Login:
                    yield this.login(this.getReturnUrl());
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginCallback:
                    yield this.processLoginCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].LoginFailed:
                    const message = this.activatedRoute.snapshot.queryParamMap.get(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message);
                    this.message.next(message);
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Profile:
                    this.redirectToProfile();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["LoginActions"].Register:
                    this.redirectToRegister();
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    login(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const result = yield this.authorizeService.signIn(state);
            this.message.next(undefined);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(returnUrl);
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    yield this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].LoginFailedPathComponents, {
                        queryParams: { [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["QueryParameterNames"].Message]: result.message }
                    });
                    break;
                default:
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    processLoginCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as completeSignIn never redirects.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
            }
        });
    }
    redirectToRegister() {
        this.redirectToApiAuthorizationPath(`${_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityRegisterPath}?returnUrl=${encodeURI('/' + _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].Login)}`);
    }
    redirectToProfile() {
        this.redirectToApiAuthorizationPath(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].IdentityManagePath);
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // It's important that we do a replace here so that we remove the callback uri with the
            // fragment containing the tokens from the browser history.
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_4__["ApplicationPaths"].DefaultLoginRedirectPath;
    }
    redirectToApiAuthorizationPath(apiAuthorizationPath) {
        // It's important that we do a replace here so that when the user hits the back arrow on the
        // browser they get sent back to where it was on the app instead of to an endpoint on this
        // component.
        const redirectUrl = `${window.location.origin}${apiAuthorizationPath}`;
        window.location.replace(redirectUrl);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/api-authorization/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authorize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorize.service */ "./src/app/api-authorization/authorize.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-authorization.constants */ "./src/app/api-authorization/api-authorization.constants.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
let LogoutComponent = class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = this.activatedRoute.snapshot.url[1];
            switch (action.path) {
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].Logout:
                    if (!!window.history.state.local) {
                        yield this.logout(this.getReturnUrl());
                    }
                    else {
                        // This prevents regular links to <app>/authentication/logout from triggering a logout
                        this.message.next('The logout was not initiated from within the page.');
                    }
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LogoutCallback:
                    yield this.processLogoutCallback();
                    break;
                case _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["LogoutActions"].LoggedOut:
                    this.message.next('You successfully logged out!');
                    yield this.navigateToReturnUrl("home");
                    break;
                default:
                    throw new Error(`Invalid action '${action}'`);
            }
        });
    }
    logout(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = { returnUrl };
            const isauthenticated = yield this.authorizeService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
            if (isauthenticated) {
                const result = yield this.authorizeService.signOut(state);
                debugger;
                switch (result.status) {
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                        yield this.navigateToReturnUrl(returnUrl);
                        break;
                    case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                        this.message.next(result.message);
                        break;
                    default:
                        throw new Error('Invalid authentication result status.');
                }
            }
            else {
                debugger;
                this.message.next('You successfully logged out!');
                yield this.navigateToReturnUrl("home");
            }
        });
    }
    processLogoutCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignOut(url);
            debugger;
            switch (result.status) {
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Redirect:
                    // There should not be any redirects as the only time completeAuthentication finishes
                    // is when we are doing a redirect sign in flow.
                    throw new Error('Should not redirect.');
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Success:
                    yield this.navigateToReturnUrl(this.getReturnUrl(result.state));
                    break;
                case _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationResultStatus"].Fail:
                    this.message.next(result.message);
                    break;
                default:
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    navigateToReturnUrl(returnUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            debugger;
            yield this.router.navigateByUrl(returnUrl, {
                replaceUrl: true
            });
        });
    }
    getReturnUrl(state) {
        const fromQuery = this.activatedRoute.snapshot.queryParams.returnUrl;
        // If the url is comming from the query string, check that is either
        // a relative url or an absolute url
        if (fromQuery &&
            !(fromQuery.startsWith(`${window.location.origin}/`) ||
                /\/[^\/].*/.test(fromQuery))) {
            // This is an extra check to prevent open redirects.
            throw new Error('Invalid return url. The return url needs to have the same origin as the current page.');
        }
        return (state && state.returnUrl) ||
            fromQuery ||
            _api_authorization_constants__WEBPACK_IMPORTED_MODULE_5__["ApplicationPaths"].LoggedOut;
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-logout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/api-authorization/logout/logout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./logout.component.css */ "./src/app/api-authorization/logout/logout.component.css")).default]
    }),
    __metadata("design:paramtypes", [_authorize_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogoutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/character/character.component */ "./src/app/components/character/character.component.ts");
/* harmony import */ var _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/actor/actor.component */ "./src/app/components/actor/actor.component.ts");
/* harmony import */ var _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/encounter/encounter.component */ "./src/app/components/encounter/encounter.component.ts");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/top/home */ "./src/app/top/home/index.ts");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/top/creature */ "./src/app/top/creature/index.ts");
/* harmony import */ var _api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-authorization/authorize.guard */ "./src/app/api-authorization/authorize.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









const routes = [
    { path: '', component: _top_home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' },
    { path: 'creatures', component: _top_creature__WEBPACK_IMPORTED_MODULE_7__["CreatureComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: 'mycreatures', component: _top_creature__WEBPACK_IMPORTED_MODULE_7__["CreatureComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: 'games', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: 'character', component: _components_character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: 'encounter/:id', component: _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_5__["EncounterComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: 'actor/:id', component: _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_4__["ActorComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_8__["AuthorizeGuard"]] },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true }) // <-- debugging purposes only)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/navigation */ "./src/app/navigation/index.ts");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/top/home */ "./src/app/top/home/index.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_game_game_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game/game-edit.component */ "./src/app/components/game/game-edit.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/character/character.component */ "./src/app/components/character/character.component.ts");
/* harmony import */ var _components_character_character_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/character/character-edit.component */ "./src/app/components/character/character-edit.component.ts");
/* harmony import */ var _components_creature_creature_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/creature/creature-edit.component */ "./src/app/components/creature/creature-edit.component.ts");
/* harmony import */ var _components_armor_armor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/armor/armor.component */ "./src/app/components/armor/armor.component.ts");
/* harmony import */ var _components_armor_armor_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/armor/armor-edit.component */ "./src/app/components/armor/armor-edit.component.ts");
/* harmony import */ var _components_attack_attack_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/attack/attack.component */ "./src/app/components/attack/attack.component.ts");
/* harmony import */ var _components_attack_attack_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/attack/attack-edit.component */ "./src/app/components/attack/attack-edit.component.ts");
/* harmony import */ var _components_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/weapon/weapon.component */ "./src/app/components/weapon/weapon.component.ts");
/* harmony import */ var _components_weapon_weapon_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/weapon/weapon-edit.component */ "./src/app/components/weapon/weapon-edit.component.ts");
/* harmony import */ var _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/actor/actor.component */ "./src/app/components/actor/actor.component.ts");
/* harmony import */ var _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/encounter/encounter.component */ "./src/app/components/encounter/encounter.component.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/elements */ "./src/app/elements/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _approot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/approot */ "./src/app/approot/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/top/creature */ "./src/app/top/creature/index.ts");
/* harmony import */ var _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./api-authorization/authorize.interceptor */ "./src/app/api-authorization/authorize.interceptor.ts");
/* harmony import */ var _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./api-authorization/api-authorization.module */ "./src/app/api-authorization/api-authorization.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _approot__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
            _components_game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
            _components_game_game_edit_component__WEBPACK_IMPORTED_MODULE_8__["GameEditComponent"],
            _top_home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_character_character_edit_component__WEBPACK_IMPORTED_MODULE_10__["CharacterEditComponent"],
            _components_character_character_component__WEBPACK_IMPORTED_MODULE_9__["CharacterComponent"],
            _top_creature__WEBPACK_IMPORTED_MODULE_25__["CreatureComponent"],
            _components_creature_creature_edit_component__WEBPACK_IMPORTED_MODULE_11__["CreatureEditComponent"],
            _components_actor_actor_component__WEBPACK_IMPORTED_MODULE_18__["ActorComponent"],
            _components_encounter_encounter_component__WEBPACK_IMPORTED_MODULE_19__["EncounterComponent"],
            _components_armor_armor_component__WEBPACK_IMPORTED_MODULE_12__["ArmorComponent"],
            _components_armor_armor_edit_component__WEBPACK_IMPORTED_MODULE_13__["ArmorEditComponent"],
            _components_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_16__["WeaponComponent"],
            _components_weapon_weapon_edit_component__WEBPACK_IMPORTED_MODULE_17__["WeaponEditComponent"],
            _elements__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
            _components_attack_attack_component__WEBPACK_IMPORTED_MODULE_14__["AttackComponent"],
            _components_attack_attack_edit_component__WEBPACK_IMPORTED_MODULE_15__["AttackEditComponent"],
            _elements__WEBPACK_IMPORTED_MODULE_20__["AlertComponent"],
            _navigation__WEBPACK_IMPORTED_MODULE_5__["MainNavMenuComponent"],
            _navigation__WEBPACK_IMPORTED_MODULE_5__["SideNavMenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            //NgbModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_27__["ApiAuthorizationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"]
        ],
        providers: [
            //{
            //  provide: 'BASE_URL',
            //  useFactory: getBaseUrl
            //},
            //{
            //  provide: HTTP_INTERCEPTORS,
            //  useClass: ApiPathInterceptor,
            //  multi: true
            //},
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_26__["AuthorizeInterceptor"], multi: true },
            //{
            //  provide: HTTP_INTERCEPTORS,
            //  useClass: JwtInterceptor,
            //  multi: true,
            //  deps: [AuthenticationService]
            //},
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _helpers__WEBPACK_IMPORTED_MODULE_23__["ErrorInterceptor"],
                multi: true,
                deps: [_services__WEBPACK_IMPORTED_MODULE_24__["AuthenticationService"]]
            }
        ],
        bootstrap: [_approot__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'CEATSiiApp';
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full}`;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/approot/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.less */ "./src/app/approot/app.component.less")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/approot/app.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
];
ActorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-actor',
        template: __importDefault(__webpack_require__(/*! raw-loader!./actor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/actor/actor.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./actor.component.css */ "./src/app/components/actor/actor.component.css")).default]
    })
    /** actor component*/
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
], ActorComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ArmorEditComponent = 
/** ArmorEdit component*/
class ArmorEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo) {
        this.combatRepo = combatRepo;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    delete() {
        this.onDelete.emit(this.armor);
    }
};
ArmorEditComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_1__["Armor"])
], ArmorEditComponent.prototype, "armor", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], ArmorEditComponent.prototype, "onDelete", void 0);
ArmorEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-armor-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./armor-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./armor-edit.component.css */ "./src/app/components/armor/armor-edit.component.css")).default]
    })
    /** ArmorEdit component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"]])
], ArmorEditComponent);



/***/ }),

/***/ "./src/app/components/armor/armor.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/armor/armor.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcm1vci9hcm1vci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/armor/armor.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/armor/armor.component.ts ***!
  \*****************************************************/
/*! exports provided: ArmorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorComponent", function() { return ArmorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ArmorComponent = 
/** Armor component*/
class ArmorComponent {
    /** Armor ctor */
    constructor() {
        this.armors = new Array();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        var arm = new _entities__WEBPACK_IMPORTED_MODULE_1__["Armor"]();
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./armor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/armor/armor.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./armor.component.css */ "./src/app/components/armor/armor.component.css")).default]
    })
    /** Armor component*/
    ,
    __metadata("design:paramtypes", [])
], ArmorComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AttackEditComponent = 
/** AttackEdit component*/
class AttackEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo, encounterService, referencesService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            this.attack.weaponUsed = new _entities__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
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
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_1__["Attack"])
], AttackEditComponent.prototype, "attack", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AttackEditComponent.prototype, "onDelete", void 0);
AttackEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-attack-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./attack-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./attack-edit.component.css */ "./src/app/components/attack/attack-edit.component.css")).default]
    })
    /** AttackEdit component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"],
        _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"]])
], AttackEditComponent);



/***/ }),

/***/ "./src/app/components/attack/attack.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/attack/attack.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdHRhY2svYXR0YWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F0dGFjay9hdHRhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/attack/attack.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/attack/attack.component.ts ***!
  \*******************************************************/
/*! exports provided: AttackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackComponent", function() { return AttackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AttackComponent = 
/** Attack component*/
class AttackComponent {
    /** Armor ctor */
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        var attack = new _entities__WEBPACK_IMPORTED_MODULE_1__["Attack"]();
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./attack.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/attack/attack.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./attack.component.css */ "./src/app/components/attack/attack.component.css")).default]
    })
    /** Attack component*/
    ,
    __metadata("design:paramtypes", [])
], AttackComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/elements/modal/modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].CharacterType;
let CharacterEditComponent = 
/** characterDetail component*/
class CharacterEditComponent {
    constructor(encounterService, charRepo, modalService) {
        this.encounterService = encounterService;
        this.charRepo = charRepo;
        this.modalService = modalService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveCharacter = () => __awaiter(this, void 0, void 0, function* () {
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
            this.encounterService.addCharacterToEncounter(this.character);
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
        this.encounterService.addCharacterToEncounter(this.character, this.rolledInit);
    }
};
CharacterEditComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"] },
    { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_4__["Character"])
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./character-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./character-edit.component.css */ "./src/app/components/character/character-edit.component.css")).default]
    })
    /** characterDetail component*/
    ,
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"],
        _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
], CharacterEditComponent);



/***/ }),

/***/ "./src/app/components/character/character.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/character/character.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksWUFBWTtJQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAvKndpZHRoOiAxMjBweDsqL1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/character/character.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/character/character.component.ts ***!
  \*************************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CharacterComponent = 
/** character component*/
class CharacterComponent {
    /** character ctor */
    constructor(characterRepo, encounterService) {
        this.characterRepo = characterRepo;
        this.encounterService = encounterService;
        this.characters = new Array();
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            //this.characters = await this.characterRepo.getCharactersAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectCharacter = (charId) => __awaiter(this, void 0, void 0, function* () {
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
        this.selectedCharacter = new _entities__WEBPACK_IMPORTED_MODULE_3__["Character"]();
    }
};
CharacterComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_1__["CharactersRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"] }
];
CharacterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-character',
        template: __importDefault(__webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/character/character.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./character.component.css */ "./src/app/components/character/character.component.css")).default]
    })
    /** character component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_1__["CharactersRepository"],
        _services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]])
], CharacterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/elements/modal/modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let CreatureEditComponent = 
/** CreatureEdit component*/
class CreatureEditComponent {
    constructor(encounterService, creatureRepo, modalService, referencesService) {
        this.encounterService = encounterService;
        this.creatureRepo = creatureRepo;
        this.modalService = modalService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveCreature = () => __awaiter(this, void 0, void 0, function* () {
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
        this.encounterService.addCreatureToEncounter(this.creature);
    }
    closeEdit() {
        //this.charView.refresh();
    }
};
CreatureEditComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"] },
    { type: _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_4__["Creature"])
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./creature-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/creature/creature-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./creature-edit.component.css */ "./src/app/components/creature/creature-edit.component.css")).default]
    })
    /** CreatureEdit component*/
    ,
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["CreaturesRepository"],
        _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"],
        _services__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"]])
], CreatureEditComponent);



/***/ }),

/***/ "./src/app/components/encounter/encounter.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/encounter/encounter.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5jb3VudGVyL2VuY291bnRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/encounter/encounter.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/encounter/encounter.component.ts ***!
  \*************************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let EncounterComponent = 
/** encounter component*/
class EncounterComponent {
    /** encounter ctor */
    constructor() {
    }
};
EncounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-encounter',
        template: __importDefault(__webpack_require__(/*! raw-loader!./encounter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/encounter/encounter.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./encounter.component.css */ "./src/app/components/encounter/encounter.component.css")).default]
    })
    /** encounter component*/
    ,
    __metadata("design:paramtypes", [])
], EncounterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let GameEditComponent = 
/** GameEdit component*/
class GameEditComponent {
    constructor(router, gamesRepo, encounterService) {
        this.router = router;
        this.gamesRepo = gamesRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveGame = () => __awaiter(this, void 0, void 0, function* () {
            //if (!this.game.id && this.encounterService.systemSettings != null) {
            //    this.game.gameType = this.encounterService.systemSettings.gameSystem;
            //}
            var g = yield this.gamesRepo.saveGameAsync(this.game);
            if (!this.game.id) {
                this.game.id = g.id;
            }
            yield this.encounterService.refresh();
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_2__["Game"])
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./game-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./game-edit.component.css */ "./src/app/components/game/game-edit.component.css")).default]
    })
    /** GameEdit component*/
    ,
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"],
        _services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]])
], GameEditComponent);



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    /*width: 120px;*/\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyp3aWR0aDogMTIwcHg7Ki9cclxufVxyXG5cclxuICAgIC5tYWluTGlzdCBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let GameComponent = 
/** Game component*/
class GameComponent {
    /** character ctor */
    constructor(gameRepo, encounterService) {
        this.gameRepo = gameRepo;
        this.encounterService = encounterService;
        this.games = new Array();
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            //this.games = await this.gameRepo.getGamesAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectGame = (gameId) => __awaiter(this, void 0, void 0, function* () {
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
GameComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"] }
];
GameComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-game',
        template: __importDefault(__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game/game.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")).default]
    })
    /** Game component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"],
        _services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"]])
], GameComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let WeaponEditComponent = 
/** WeaponEdit component*/
class WeaponEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo, encounterService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}
    delete() {
        this.onDelete.emit(this.weapon);
    }
};
WeaponEditComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _entities__WEBPACK_IMPORTED_MODULE_1__["Weapon"])
], WeaponEditComponent.prototype, "weapon", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], WeaponEditComponent.prototype, "onDelete", void 0);
WeaponEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-weapon-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./weapon-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./weapon-edit.component.css */ "./src/app/components/weapon/weapon-edit.component.css")).default]
    })
    /** WeaponEdit component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"],
        _services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]])
], WeaponEditComponent);



/***/ }),

/***/ "./src/app/components/weapon/weapon.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/weapon/weapon.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n}\r\n\r\n.area {\r\n}\r\n\r\n.list {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n\r\n}\r\n\r\n.mainList a {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList button {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList td {\r\n        padding: 2px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWFwb24vd2VhcG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/weapon/weapon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/weapon/weapon.component.ts ***!
  \*******************************************************/
/*! exports provided: WeaponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponComponent", function() { return WeaponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let WeaponComponent = 
/** Weapon component*/
class WeaponComponent {
    /** Armor ctor */
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        var weapon = new _entities__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./weapon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weapon/weapon.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./weapon.component.css */ "./src/app/components/weapon/weapon.component.css")).default]
    })
    /** Weapon component*/
    ,
    __metadata("design:paramtypes", [])
], WeaponComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


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
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
AlertComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'alert', template: __importDefault(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/alert/alert.component.html")).default }),
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
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
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/elements/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/elements/index.ts":
/*!***********************************!*\
  !*** ./src/app/elements/index.ts ***!
  \***********************************/
/*! exports provided: ModalService, AlertComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/index */ "./src/app/elements/alert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/index */ "./src/app/elements/modal/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/elements/modal/index.ts":
/*!*****************************************!*\
  !*** ./src/app/elements/modal/index.ts ***!
  \*****************************************/
/*! exports provided: ModalService, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/elements/modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });

/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./src/app/elements/modal/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/elements/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ModalComponent = class ModalComponent {
    //private dialog: JQuery;
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = jquery__WEBPACK_IMPORTED_MODULE_1__(el.nativeElement);
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
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').addClass('modal-open');
        this.openEvent.emit();
    }
    // close modal
    close() {
        //this.dialog.dialog("close");
        this.element.hide();
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').removeClass('modal-open');
        this.closedEvent.emit();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/elements/modal/modal.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./modal.component.css */ "./src/app/elements/modal/modal.component.css")).default]
    }),
    __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

/***/ "./src/app/entities/ActionDefinition.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/ActionDefinition.ts ***!
  \**********************************************/
/*! exports provided: ActionDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return ActionDefinition; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Actor {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/ApplicationUSer.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/ApplicationUSer.ts ***!
  \*********************************************/
/*! exports provided: ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EnumDefinitions;
(function (EnumDefinitions) {
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class WeaponType {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/entities/index.ts":
/*!***********************************!*\
  !*** ./src/app/entities/index.ts ***!
  \***********************************/
/*! exports provided: EnumDefinitions, ActionDefinition, ActionGroup, Actor, ApplicationUser, Armor, Attack, AttackType, AuthenticateModel, BaseAction, Book, Character, ConstitutionBonusChart, ConstitutionBonusChartValues, Creature, CriticalCode, CriticalEffect, CriticalIgnore, CriticalType, Dice, Game, IQ, LevelChart, LevelChartValue, MoveNextResult, MySettings, Outlook, Pace, PsychicRefractoryPeriodEntry, ReferenceEntry, RegisterModel, SizeRating, SpeedChart, UpdateModel, UserModel, Weapon, WeaponType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionDefinition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionDefinition */ "./src/app/entities/ActionDefinition.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return _ActionDefinition__WEBPACK_IMPORTED_MODULE_0__["ActionDefinition"]; });

/* harmony import */ var _ActionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionGroup */ "./src/app/entities/ActionGroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return _ActionGroup__WEBPACK_IMPORTED_MODULE_1__["ActionGroup"]; });

/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actor */ "./src/app/entities/Actor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return _Actor__WEBPACK_IMPORTED_MODULE_2__["Actor"]; });

/* harmony import */ var _ApplicationUSer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationUSer */ "./src/app/entities/ApplicationUSer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return _ApplicationUSer__WEBPACK_IMPORTED_MODULE_3__["ApplicationUser"]; });

/* harmony import */ var _Armor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Armor */ "./src/app/entities/Armor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return _Armor__WEBPACK_IMPORTED_MODULE_4__["Armor"]; });

/* harmony import */ var _Attack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Attack */ "./src/app/entities/Attack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return _Attack__WEBPACK_IMPORTED_MODULE_5__["Attack"]; });

/* harmony import */ var _AttackType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttackType */ "./src/app/entities/AttackType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackType", function() { return _AttackType__WEBPACK_IMPORTED_MODULE_6__["AttackType"]; });

/* harmony import */ var _AuthenticateModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthenticateModel */ "./src/app/entities/AuthenticateModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return _AuthenticateModel__WEBPACK_IMPORTED_MODULE_7__["AuthenticateModel"]; });

/* harmony import */ var _BaseAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseAction */ "./src/app/entities/BaseAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAction", function() { return _BaseAction__WEBPACK_IMPORTED_MODULE_8__["BaseAction"]; });

/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Book */ "./src/app/entities/Book.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _Book__WEBPACK_IMPORTED_MODULE_9__["Book"]; });

/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Character */ "./src/app/entities/Character.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return _Character__WEBPACK_IMPORTED_MODULE_10__["Character"]; });

/* harmony import */ var _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ConstitutionBonusChart */ "./src/app/entities/ConstitutionBonusChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChart", function() { return _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_11__["ConstitutionBonusChart"]; });

/* harmony import */ var _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConstitutionBonusChartValues */ "./src/app/entities/ConstitutionBonusChartValues.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChartValues", function() { return _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_12__["ConstitutionBonusChartValues"]; });

/* harmony import */ var _Creature__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Creature */ "./src/app/entities/Creature.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return _Creature__WEBPACK_IMPORTED_MODULE_13__["Creature"]; });

/* harmony import */ var _CriticalCode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CriticalCode */ "./src/app/entities/CriticalCode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalCode", function() { return _CriticalCode__WEBPACK_IMPORTED_MODULE_14__["CriticalCode"]; });

/* harmony import */ var _CriticalEffect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CriticalEffect */ "./src/app/entities/CriticalEffect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffect", function() { return _CriticalEffect__WEBPACK_IMPORTED_MODULE_15__["CriticalEffect"]; });

/* harmony import */ var _CriticalIgnore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CriticalIgnore */ "./src/app/entities/CriticalIgnore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalIgnore", function() { return _CriticalIgnore__WEBPACK_IMPORTED_MODULE_16__["CriticalIgnore"]; });

/* harmony import */ var _CriticalType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CriticalType */ "./src/app/entities/CriticalType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalType", function() { return _CriticalType__WEBPACK_IMPORTED_MODULE_17__["CriticalType"]; });

/* harmony import */ var _Dice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Dice */ "./src/app/entities/Dice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return _Dice__WEBPACK_IMPORTED_MODULE_18__["Dice"]; });

/* harmony import */ var _EnumDefinitions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return _EnumDefinitions__WEBPACK_IMPORTED_MODULE_19__["EnumDefinitions"]; });

/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Game */ "./src/app/entities/Game.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game__WEBPACK_IMPORTED_MODULE_20__["Game"]; });

/* harmony import */ var _IQ__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IQ */ "./src/app/entities/IQ.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IQ", function() { return _IQ__WEBPACK_IMPORTED_MODULE_21__["IQ"]; });

/* harmony import */ var _LevelChart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LevelChart */ "./src/app/entities/LevelChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChart", function() { return _LevelChart__WEBPACK_IMPORTED_MODULE_22__["LevelChart"]; });

/* harmony import */ var _LevelChartValue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LevelChartValue */ "./src/app/entities/LevelChartValue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChartValue", function() { return _LevelChartValue__WEBPACK_IMPORTED_MODULE_23__["LevelChartValue"]; });

/* harmony import */ var _MoveNextResult__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MoveNextResult */ "./src/app/entities/MoveNextResult.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveNextResult", function() { return _MoveNextResult__WEBPACK_IMPORTED_MODULE_24__["MoveNextResult"]; });

/* harmony import */ var _MySettings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MySettings */ "./src/app/entities/MySettings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return _MySettings__WEBPACK_IMPORTED_MODULE_25__["MySettings"]; });

/* harmony import */ var _Outlook__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Outlook */ "./src/app/entities/Outlook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return _Outlook__WEBPACK_IMPORTED_MODULE_26__["Outlook"]; });

/* harmony import */ var _Pace__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Pace */ "./src/app/entities/Pace.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pace__WEBPACK_IMPORTED_MODULE_27__["Pace"]; });

/* harmony import */ var _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PsychicRefractoryPeriodEntry */ "./src/app/entities/PsychicRefractoryPeriodEntry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsychicRefractoryPeriodEntry", function() { return _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_28__["PsychicRefractoryPeriodEntry"]; });

/* harmony import */ var _ReferenceEntry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ReferenceEntry */ "./src/app/entities/ReferenceEntry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceEntry", function() { return _ReferenceEntry__WEBPACK_IMPORTED_MODULE_29__["ReferenceEntry"]; });

/* harmony import */ var _RegisterModel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./RegisterModel */ "./src/app/entities/RegisterModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return _RegisterModel__WEBPACK_IMPORTED_MODULE_30__["RegisterModel"]; });

/* harmony import */ var _SizeRating__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SizeRating */ "./src/app/entities/SizeRating.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeRating", function() { return _SizeRating__WEBPACK_IMPORTED_MODULE_31__["SizeRating"]; });

/* harmony import */ var _SpeedChart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SpeedChart */ "./src/app/entities/SpeedChart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedChart", function() { return _SpeedChart__WEBPACK_IMPORTED_MODULE_32__["SpeedChart"]; });

/* harmony import */ var _UpdateModel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./UpdateModel */ "./src/app/entities/UpdateModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return _UpdateModel__WEBPACK_IMPORTED_MODULE_33__["UpdateModel"]; });

/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UserModel */ "./src/app/entities/UserModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _UserModel__WEBPACK_IMPORTED_MODULE_34__["UserModel"]; });

/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Weapon */ "./src/app/entities/Weapon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return _Weapon__WEBPACK_IMPORTED_MODULE_35__["Weapon"]; });

/* harmony import */ var _WeaponType__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./WeaponType */ "./src/app/entities/WeaponType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponType", function() { return _WeaponType__WEBPACK_IMPORTED_MODULE_36__["WeaponType"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







































/***/ }),

/***/ "./src/app/navigation/index.ts":
/*!*************************************!*\
  !*** ./src/app/navigation/index.ts ***!
  \*************************************/
/*! exports provided: MainNavMenuComponent, SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-menu/index */ "./src/app/navigation/main-nav-menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_0__["MainNavMenuComponent"]; });

/* harmony import */ var _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-menu/index */ "./src/app/navigation/side-nav-menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__["SideNavMenuComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/navigation/main-nav-menu/index.ts":
/*!***************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/index.ts ***!
  \***************************************************/
/*! exports provided: MainNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-menu.component */ "./src/app/navigation/main-nav-menu/main-nav-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__["MainNavMenuComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MainNavMenuComponent = 
/** mainNavMenu component*/
class MainNavMenuComponent {
    /** mainNavMenu ctor */
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
};
MainNavMenuComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
MainNavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'main-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./main-nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/main-nav-menu/main-nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./main-nav-menu.component.less */ "./src/app/navigation/main-nav-menu/main-nav-menu.component.less")).default]
    })
    /** mainNavMenu component*/
    ,
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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
/* harmony import */ var _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-menu.component */ "./src/app/navigation/side-nav-menu/side-nav-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__["SideNavMenuComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/navigation/side-nav-menu/side-nav-menu.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/side-nav-menu.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li .glyphicon {\n  margin-right: 10px;\n}\n/* Highlighting rules for nav menu items */\nli ul {\n  padding-left: 5px;\n}\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n  /*position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;*/\n  z-index: 1;\n}\n.navbar li li {\n  font-size: 12px;\n}\n.navbar-inverse .navbar-nav > li a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li a:hover,\n.navbar-inverse .navbar-nav > li a:focus {\n  color: #fff;\n  background-color: transparent;\n  cursor: pointer;\n}\n.navbar-inverse .navbar-nav li.link-active > a,\n.navbar-inverse .navbar-nav li.link-active > a:hover,\n.navbar-inverse .navbar-nav li.link-active > a:focus {\n  background-color: #4189C7;\n  color: white;\n}\n@media (min-width: 768px) {\n  /* On small screens, convert the nav menu to a vertical sidebar */\n  .main-nav {\n    height: 100%;\n    /*width: calc(25% - 20px);*/\n  }\n  .navbar {\n    border-radius: 0px;\n    border-width: 0px;\n    height: 100%;\n  }\n  .navbar-header {\n    float: none;\n  }\n  .navbar-collapse {\n    border-top: 1px solid #444;\n    padding: 0px;\n  }\n  .navbar ul {\n    float: none;\n  }\n  .navbar li {\n    float: none;\n    font-size: 15px;\n    margin: 6px;\n  }\n  .navbar li li {\n    font-size: 12px;\n  }\n  .navbar li a {\n    padding: 10px 16px;\n    border-radius: 4px;\n  }\n  .navbar a {\n    /* If a menu item's text is too long, truncate it */\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L1A6L1BlcnNvbmFsIFByb2plY3RzL0NFQVRTaWktQ29tYmF0LVRyYWNrZXIvQ29tYmF0VHJhY2tlci9Db21iYXRUcmFja2VyLldlYi9DRUFUU2lpQXBwL3NyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L3NpZGUtbmF2LW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vc2lkZS1uYXYtbWVudS9zaWRlLW5hdi1tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBQUNBLDBDQUEwQztBREcxQztFQUNFLGlCQUFBO0FDREY7QUFDQSx5RUFBeUU7QURJekU7RUNGRTs7O2NBR1k7RURJWixVQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7QUNIRjtBRE1BO0VBQ0UsY0FBQTtBQ0pGO0FET0E7O0VBRUUsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7OztFQUdFLHlCQUFBO0VBQ0EsWUFBQTtBQ05GO0FEVUE7RUNSRSxpRUFBaUU7RURVakU7SUFDRSxZQUFBO0lDUkEsMkJBQTJCO0VBQzdCO0VEV0E7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ1RGO0VEWUE7SUFDRSxXQUFBO0VDVkY7RURhQTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtFQ1hGO0VEY0E7SUFDRSxXQUFBO0VDWkY7RURlQTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ2JGO0VEZ0JBO0lBQ0UsZUFBQTtFQ2RGO0VEaUJBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ2ZGO0VEa0JBO0lDaEJFLG1EQUFtRDtJRGtCbkQsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ2hCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlLW5hdi1tZW51L3NpZGUtbmF2LW1lbnUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSAuZ2x5cGhpY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXG5cbmxpIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8qIEtlZXAgdGhlIG5hdiBtZW51IGluZGVwZW5kZW50IG9mIHNjcm9sbGluZyBhbmQgb24gdG9wIG9mIG90aGVyIGl0ZW1zICovXG4ubWFpbi1uYXYge1xuICAvKnBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDsqL1xuICB6LWluZGV4OiAxO1xufVxuXG4ubmF2YmFyIGxpIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpIGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaS5saW5rLWFjdGl2ZSA+IGEsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpLmxpbmstYWN0aXZlID4gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXG4gIC5tYWluLW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7Ki9cbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubmF2YmFyLWhlYWRlciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAubmF2YmFyIHVsIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXIgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxuXG4gIC5uYXZiYXIgbGkgbGkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5uYXZiYXIgbGkgYSB7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC5uYXZiYXIgYSB7XG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuIiwibGkgLmdseXBoaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cbmxpIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xuLm1haW4tbmF2IHtcbiAgLypwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7Ki9cbiAgei1pbmRleDogMTtcbn1cbi5uYXZiYXIgbGkgbGkge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhIHtcbiAgY29sb3I6ICM5ZDlkOWQ7XG59XG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgPiBsaSBhOmhvdmVyLFxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpLmxpbmstYWN0aXZlID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaS5saW5rLWFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xuICAubWFpbi1uYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKndpZHRoOiBjYWxjKDI1JSAtIDIwcHgpOyovXG4gIH1cbiAgLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubmF2YmFyLWhlYWRlciB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NDQ7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5uYXZiYXIgdWwge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5uYXZiYXIgbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxuICAubmF2YmFyIGxpIGxpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLm5hdmJhciBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5uYXZiYXIgYSB7XG4gICAgLyogSWYgYSBtZW51IGl0ZW0ncyB0ZXh0IGlzIHRvbyBsb25nLCB0cnVuY2F0ZSBpdCAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
SideNavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'side-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./side-nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/side-nav-menu/side-nav-menu.component.html")).default,
        providers: [_services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"]],
        styles: [__importDefault(__webpack_require__(/*! ./side-nav-menu.component.less */ "./src/app/navigation/side-nav-menu/side-nav-menu.component.less")).default]
    })
    /** side-nav-menu component*/
    ,
    __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"],
        _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let ActionsRepository = class ActionsRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Actions/getActionsOnActor?actorId=${actorId}
        //public getActionsOnActor = (actorId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getActionsOnActorAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getActionsOnActor(actorId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActionsOnActor = (actorId) => {
            var _Url = `api/Actions/getActionsOnActor?actorId=${actorId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Actions/getActionsInGame?gameId=${gameId}
        //public getActionsInGame = (gameId: number, callback: (data: BaseAction[])=>void) : void => {
        //	this.getActionsInGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActionsInGameAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.getActionsInGame(gameId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActionsInGame = (gameId) => {
            var _Url = `api/Actions/getActionsInGame?gameId=${gameId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Actions/getAction?id=${id}
        //public getAction = (id: number, callback: (data: BaseAction)=>void) : void => {
        //	this.getActionObserve(id).subscribe(response => callback(response));
        //}
        this.getActionAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getAction(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAction = (id) => {
            var _Url = `api/Actions/getAction?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Actions/[action]
        //public saveAction = (action: BaseAction, callback: (data: BaseAction)=>void) : void => {
        //	this.saveActionObserve(action).subscribe(response => callback(response));
        //}
        this.saveActionAsync = (action) => {
            return new Promise((resolve, reject) => {
                this.saveAction(action)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveAction = (action) => {
            var _Url = `api/Actions/[action]`;
            return this._httpClient.post(_Url, action);
        };
        // delete: api/Actions/deleteAction?id=${id}
        //public deleteAction = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActionObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActionAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteAction(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteAction = (id) => {
            var _Url = `api/Actions/deleteAction?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
ActionsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActionsRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let ActorsRepository = class ActorsRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Actors/getActors?gameId=${gameId}
        //public getActors = (gameId: number, callback: (data: Actor[])=>void) : void => {
        //	this.getActorsObserve(gameId).subscribe(response => callback(response));
        //}
        this.getActorsAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.getActors(gameId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActors = (gameId) => {
            var _Url = `api/Actors/getActors?gameId=${gameId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Actors/getActor?id=${id}
        //public getActor = (id: number, callback: (data: Actor)=>void) : void => {
        //	this.getActorObserve(id).subscribe(response => callback(response));
        //}
        this.getActorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getActor(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActor = (id) => {
            var _Url = `api/Actors/getActor?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Actors/saveActor
        //public saveActor = (actor: Actor, callback: (data: Actor)=>void) : void => {
        //	this.saveActorObserve(actor).subscribe(response => callback(response));
        //}
        this.saveActorAsync = (actor) => {
            return new Promise((resolve, reject) => {
                this.saveActor(actor)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveActor = (actor) => {
            var _Url = `api/Actors/saveActor`;
            return this._httpClient.post(_Url, actor);
        };
        // delete: api/Actors/deleteActor?id=${id}
        //public deleteActor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteActorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteActorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteActor(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteActor = (id) => {
            var _Url = `api/Actors/deleteActor?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
ActorsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActorsRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let CharactersRepository = class CharactersRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Characters/getCharacters
        //public getCharacters = (, callback: (data: Character[])=>void) : void => {
        //	this.getCharactersObserve().subscribe(response => callback(response));
        //}
        this.getCharactersAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCharacters()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCharacters = () => {
            var _Url = `api/Characters/getCharacters`;
            return this._httpClient.get(_Url);
        };
        // get: api/Characters/getCharacter?id=${id}
        //public getCharacter = (id: number, callback: (data: Character)=>void) : void => {
        //	this.getCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.getCharacterAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCharacter(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCharacter = (id) => {
            var _Url = `api/Characters/getCharacter?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Characters/saveCharacter
        //public saveCharacter = (character: Character, callback: (data: Character)=>void) : void => {
        //	this.saveCharacterObserve(character).subscribe(response => callback(response));
        //}
        this.saveCharacterAsync = (character) => {
            return new Promise((resolve, reject) => {
                this.saveCharacter(character)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveCharacter = (character) => {
            var _Url = `api/Characters/saveCharacter`;
            return this._httpClient.post(_Url, character);
        };
        // delete: api/Characters/deleteCharacter?id=${id}
        //public deleteCharacter = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCharacterObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCharacterAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCharacter(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteCharacter = (id) => {
            var _Url = `api/Characters/deleteCharacter?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
CharactersRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CharactersRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let CombatRepository = class CombatRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // delete: api/Combat/deleteArmor?id=${id}
        //public deleteArmor = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteArmorObserve(id).subscribe(response => callback(response));
        //}
        this.deleteArmorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteArmor(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteArmor = (id) => {
            var _Url = `api/Combat/deleteArmor?id=${id}`;
            return this._httpClient.delete(_Url);
        };
        // delete: api/Combat/deleteAttack?id=${id}
        //public deleteAttack = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteAttackObserve(id).subscribe(response => callback(response));
        //}
        this.deleteAttackAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteAttack(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteAttack = (id) => {
            var _Url = `api/Combat/deleteAttack?id=${id}`;
            return this._httpClient.delete(_Url);
        };
        // delete: api/Combat/deleteWeapon?id=${id}
        //public deleteWeapon = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.deleteWeaponAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteWeapon(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteWeapon = (id) => {
            var _Url = `api/Combat/deleteWeapon?id=${id}`;
            return this._httpClient.delete(_Url);
        };
        // get: api/Combat/getArmor?id=${id}
        //public getArmor = (id: number, callback: (data: Armor)=>void) : void => {
        //	this.getArmorObserve(id).subscribe(response => callback(response));
        //}
        this.getArmorAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getArmor(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getArmor = (id) => {
            var _Url = `api/Combat/getArmor?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getArmors
        //public getArmors = (, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsObserve().subscribe(response => callback(response));
        //}
        this.getArmorsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getArmors()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getArmors = () => {
            var _Url = `api/Combat/getArmors`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getArmorsOnCharacter?characterId=${characterId}
        //public getArmorsOnCharacter = (characterId: number, callback: (data: Armor[])=>void) : void => {
        //	this.getArmorsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getArmorsOnCharacterAsync = (characterId) => {
            return new Promise((resolve, reject) => {
                this.getArmorsOnCharacter(characterId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getArmorsOnCharacter = (characterId) => {
            var _Url = `api/Combat/getArmorsOnCharacter?characterId=${characterId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getAttack?id=${id}
        //public getAttack = (id: number, callback: (data: Attack)=>void) : void => {
        //	this.getAttackObserve(id).subscribe(response => callback(response));
        //}
        this.getAttackAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getAttack(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAttack = (id) => {
            var _Url = `api/Combat/getAttack?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getAttacks
        //public getAttacks = (, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksObserve().subscribe(response => callback(response));
        //}
        this.getAttacksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAttacks()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAttacks = () => {
            var _Url = `api/Combat/getAttacks`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getAttacksOnActor?actorId=${actorId}
        //public getAttacksOnActor = (actorId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnActorObserve(actorId).subscribe(response => callback(response));
        //}
        this.getAttacksOnActorAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getAttacksOnActor(actorId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAttacksOnActor = (actorId) => {
            var _Url = `api/Combat/getAttacksOnActor?actorId=${actorId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getAttacksOnCreature?creatureId=${creatureId}
        //public getAttacksOnCreature = (creatureId: number, callback: (data: Attack[])=>void) : void => {
        //	this.getAttacksOnCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.getAttacksOnCreatureAsync = (creatureId) => {
            return new Promise((resolve, reject) => {
                this.getAttacksOnCreature(creatureId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAttacksOnCreature = (creatureId) => {
            var _Url = `api/Combat/getAttacksOnCreature?creatureId=${creatureId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getWeapon?id=${id}
        //public getWeapon = (id: number, callback: (data: Weapon)=>void) : void => {
        //	this.getWeaponObserve(id).subscribe(response => callback(response));
        //}
        this.getWeaponAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getWeapon(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getWeapon = (id) => {
            var _Url = `api/Combat/getWeapon?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getWeapons
        //public getWeapons = (, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsObserve().subscribe(response => callback(response));
        //}
        this.getWeaponsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getWeapons()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getWeapons = () => {
            var _Url = `api/Combat/getWeapons`;
            return this._httpClient.get(_Url);
        };
        // get: api/Combat/getWeaponsOnCharacter?characterId=${characterId}
        //public getWeaponsOnCharacter = (characterId: number, callback: (data: Weapon[])=>void) : void => {
        //	this.getWeaponsOnCharacterObserve(characterId).subscribe(response => callback(response));
        //}
        this.getWeaponsOnCharacterAsync = (characterId) => {
            return new Promise((resolve, reject) => {
                this.getWeaponsOnCharacter(characterId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getWeaponsOnCharacter = (characterId) => {
            var _Url = `api/Combat/getWeaponsOnCharacter?characterId=${characterId}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Combat/saveArmor
        //public saveArmor = (armor: Armor, callback: (data: Armor)=>void) : void => {
        //	this.saveArmorObserve(armor).subscribe(response => callback(response));
        //}
        this.saveArmorAsync = (armor) => {
            return new Promise((resolve, reject) => {
                this.saveArmor(armor)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveArmor = (armor) => {
            var _Url = `api/Combat/saveArmor`;
            return this._httpClient.post(_Url, armor);
        };
        // post: api/Combat/saveAttack
        //public saveAttack = (attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackObserve(attack).subscribe(response => callback(response));
        //}
        this.saveAttackAsync = (attack) => {
            return new Promise((resolve, reject) => {
                this.saveAttack(attack)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveAttack = (attack) => {
            var _Url = `api/Combat/saveAttack`;
            return this._httpClient.post(_Url, attack);
        };
        // post: api/Combat/saveAttackOnActor?actorId=${actorId}
        //public saveAttackOnActor = (actorId: number, attack: Attack, callback: (data: Attack)=>void) : void => {
        //	this.saveAttackOnActorObserve(actorId, attack).subscribe(response => callback(response));
        //}
        this.saveAttackOnActorAsync = (actorId, attack) => {
            return new Promise((resolve, reject) => {
                this.saveAttackOnActor(actorId, attack)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveAttackOnActor = (actorId, attack) => {
            var _Url = `api/Combat/saveAttackOnActor?actorId=${actorId}`;
            return this._httpClient.post(_Url, actorId);
        };
        // post: api/Combat/saveWeapon
        //public saveWeapon = (weapon: Weapon, callback: (data: Weapon)=>void) : void => {
        //	this.saveWeaponObserve(weapon).subscribe(response => callback(response));
        //}
        this.saveWeaponAsync = (weapon) => {
            return new Promise((resolve, reject) => {
                this.saveWeapon(weapon)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveWeapon = (weapon) => {
            var _Url = `api/Combat/saveWeapon`;
            return this._httpClient.post(_Url, weapon);
        };
    }
};
CombatRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CombatRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let CreaturesRepository = class CreaturesRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Creature/getCreatures
        //public getCreatures = (, callback: (data: Creature[])=>void) : void => {
        //	this.getCreaturesObserve().subscribe(response => callback(response));
        //}
        this.getCreaturesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCreatures()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCreatures = () => {
            var _Url = `api/Creature/getCreatures`;
            return this._httpClient.get(_Url);
        };
        // get: api/Creature/getCreature?id=${id}
        //public getCreature = (id: number, callback: (data: Creature)=>void) : void => {
        //	this.getCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.getCreatureAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCreature(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCreature = (id) => {
            var _Url = `api/Creature/getCreature?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Creature/saveCreature
        //public saveCreature = (creature: Creature, callback: (data: Creature)=>void) : void => {
        //	this.saveCreatureObserve(creature).subscribe(response => callback(response));
        //}
        this.saveCreatureAsync = (creature) => {
            return new Promise((resolve, reject) => {
                this.saveCreature(creature)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveCreature = (creature) => {
            var _Url = `api/Creature/saveCreature`;
            return this._httpClient.post(_Url, creature);
        };
        // delete: api/Creature/deleteCreature?id=${id}
        //public deleteCreature = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCreatureObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCreatureAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCreature(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteCreature = (id) => {
            var _Url = `api/Creature/deleteCreature?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
CreaturesRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CreaturesRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let CriticalEffectsRepository = class CriticalEffectsRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/CriticalEffects/getCriticalEffects?actorId=${actorId}
        //public getCriticalEffects = (actorId: number, callback: (data: CriticalEffect[])=>void) : void => {
        //	this.getCriticalEffectsObserve(actorId).subscribe(response => callback(response));
        //}
        this.getCriticalEffectsAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.getCriticalEffects(actorId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCriticalEffects = (actorId) => {
            var _Url = `api/CriticalEffects/getCriticalEffects?actorId=${actorId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/CriticalEffects/getCriticalEffect?id=${id}
        //public getCriticalEffect = (id: number, callback: (data: CriticalEffect)=>void) : void => {
        //	this.getCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.getCriticalEffectAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getCriticalEffect(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCriticalEffect = (id) => {
            var _Url = `api/CriticalEffects/getCriticalEffect?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/CriticalEffects/saveCriticalEffect
        //public saveCriticalEffect = (criticalEffect: CriticalEffect, callback: (data: CriticalEffect)=>void) : void => {
        //	this.saveCriticalEffectObserve(criticalEffect).subscribe(response => callback(response));
        //}
        this.saveCriticalEffectAsync = (criticalEffect) => {
            return new Promise((resolve, reject) => {
                this.saveCriticalEffect(criticalEffect)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveCriticalEffect = (criticalEffect) => {
            var _Url = `api/CriticalEffects/saveCriticalEffect`;
            return this._httpClient.post(_Url, criticalEffect);
        };
        // delete: api/CriticalEffects/deleteCriticalEffect?id=${id}
        //public deleteCriticalEffect = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteCriticalEffectObserve(id).subscribe(response => callback(response));
        //}
        this.deleteCriticalEffectAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteCriticalEffect(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteCriticalEffect = (id) => {
            var _Url = `api/CriticalEffects/deleteCriticalEffect?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
CriticalEffectsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CriticalEffectsRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let EncounterRepository = class EncounterRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Encounter/getCurrentGame
        //public getCurrentGame = (, callback: (data: Game)=>void) : void => {
        //	this.getCurrentGameObserve().subscribe(response => callback(response));
        //}
        this.getCurrentGameAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCurrentGame()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCurrentGame = () => {
            var _Url = `api/Encounter/getCurrentGame`;
            return this._httpClient.get(_Url);
        };
        // post: api/Encounter/setCurrentGame?gameId=${gameId}
        //public setCurrentGame = (gameId: number, callback: (data: Game)=>void) : void => {
        //	this.setCurrentGameObserve(gameId).subscribe(response => callback(response));
        //}
        this.setCurrentGameAsync = (gameId) => {
            return new Promise((resolve, reject) => {
                this.setCurrentGame(gameId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.setCurrentGame = (gameId) => {
            var _Url = `api/Encounter/setCurrentGame?gameId=${gameId}`;
            return this._httpClient.post(_Url, gameId);
        };
        // post: api/Encounter/createActorFromCreature?creatureId=${creatureId}
        //public createActorFromCreature = (creatureId: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCreatureObserve(creatureId).subscribe(response => callback(response));
        //}
        this.createActorFromCreatureAsync = (creatureId) => {
            return new Promise((resolve, reject) => {
                this.createActorFromCreature(creatureId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.createActorFromCreature = (creatureId) => {
            var _Url = `api/Encounter/createActorFromCreature?creatureId=${creatureId}`;
            return this._httpClient.post(_Url, creatureId);
        };
        // post: api/Encounter/createActorFromCharacter?characterId=${characterId}&rolledInit=${rolledInit}
        //public createActorFromCharacter = (characterId: number, rolledInit: number, callback: (data: Actor)=>void) : void => {
        //	this.createActorFromCharacterObserve(characterId, rolledInit).subscribe(response => callback(response));
        //}
        this.createActorFromCharacterAsync = (characterId, rolledInit) => {
            return new Promise((resolve, reject) => {
                this.createActorFromCharacter(characterId, rolledInit)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.createActorFromCharacter = (characterId, rolledInit) => {
            var _Url = `api/Encounter/createActorFromCharacter?characterId=${characterId}&rolledInit=${rolledInit}`;
            return this._httpClient.post(_Url, characterId);
        };
        // post: api/Encounter/moveToNext?none=${none}
        //public moveToNext = (none: boolean, callback: (data: MoveNextResult)=>void) : void => {
        //	this.moveToNextObserve(none).subscribe(response => callback(response));
        //}
        this.moveToNextAsync = (none) => {
            return new Promise((resolve, reject) => {
                this.moveToNext(none)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.moveToNext = (none) => {
            var _Url = `api/Encounter/moveToNext?none=${none}`;
            return this._httpClient.post(_Url, none);
        };
        // post: api/Encounter/proposeActionUnconscious?actorId=${actorId}
        //public proposeActionUnconscious = (actorId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionUnconsciousObserve(actorId).subscribe(response => callback(response));
        //}
        this.proposeActionUnconsciousAsync = (actorId) => {
            return new Promise((resolve, reject) => {
                this.proposeActionUnconscious(actorId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.proposeActionUnconscious = (actorId) => {
            var _Url = `api/Encounter/proposeActionUnconscious?actorId=${actorId}`;
            return this._httpClient.post(_Url, actorId);
        };
        // post: api/Encounter/proposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}
        //public proposeAction = (actionDefId: number, whomId: number, modifier: number, attackId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionObserve(actionDefId, whomId, modifier, attackId).subscribe(response => callback(response));
        //}
        this.proposeActionAsync = (actionDefId, whomId, modifier, attackId) => {
            return new Promise((resolve, reject) => {
                this.proposeAction(actionDefId, whomId, modifier, attackId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.proposeAction = (actionDefId, whomId, modifier, attackId) => {
            var _Url = `api/Encounter/proposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionDefId);
        };
        // post: api/Encounter/proposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}
        //public proposeActionContinue = (previousActionId: number, whomId: number, callback: (data: BaseAction)=>void) : void => {
        //	this.proposeActionContinueObserve(previousActionId, whomId).subscribe(response => callback(response));
        //}
        this.proposeActionContinueAsync = (previousActionId, whomId) => {
            return new Promise((resolve, reject) => {
                this.proposeActionContinue(previousActionId, whomId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.proposeActionContinue = (previousActionId, whomId) => {
            var _Url = `api/Encounter/proposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}`;
            return this._httpClient.post(_Url, previousActionId);
        };
        // post: api/Encounter/addBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}
        //public addBleedEffect = (whomId: number, bleedRate: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addBleedEffectObserve(whomId, bleedRate).subscribe(response => callback(response));
        //}
        this.addBleedEffectAsync = (whomId, bleedRate) => {
            return new Promise((resolve, reject) => {
                this.addBleedEffect(whomId, bleedRate)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.addBleedEffect = (whomId, bleedRate) => {
            var _Url = `api/Encounter/addBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}`;
            return this._httpClient.post(_Url, whomId);
        };
        // post: api/Encounter/addCriticalEffect?whomId=${whomId}&rounds=${rounds}
        //public addCriticalEffect = (whomId: number, crit: CriticalEffect, rounds: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addCriticalEffectObserve(whomId, crit, rounds).subscribe(response => callback(response));
        //}
        this.addCriticalEffectAsync = (whomId, crit, rounds) => {
            return new Promise((resolve, reject) => {
                this.addCriticalEffect(whomId, crit, rounds)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.addCriticalEffect = (whomId, crit, rounds) => {
            var _Url = `api/Encounter/addCriticalEffect?whomId=${whomId}&rounds=${rounds}`;
            return this._httpClient.post(_Url, whomId);
        };
        // post: api/Encounter/addPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}
        //public addPsychicEffect = (whomId: number, psychicLevel: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addPsychicEffectObserve(whomId, psychicLevel).subscribe(response => callback(response));
        //}
        this.addPsychicEffectAsync = (whomId, psychicLevel) => {
            return new Promise((resolve, reject) => {
                this.addPsychicEffect(whomId, psychicLevel)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.addPsychicEffect = (whomId, psychicLevel) => {
            var _Url = `api/Encounter/addPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}`;
            return this._httpClient.post(_Url, whomId);
        };
        // post: api/Encounter/addSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}
        //public addSpellEffect = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number, callback: (data: BaseAction)=>void) : void => {
        //	this.addSpellEffectObserve(effectedActorId, casterId, spellName, rounds, hastePercent).subscribe(response => callback(response));
        //}
        this.addSpellEffectAsync = (effectedActorId, casterId, spellName, rounds, hastePercent) => {
            return new Promise((resolve, reject) => {
                this.addSpellEffect(effectedActorId, casterId, spellName, rounds, hastePercent)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.addSpellEffect = (effectedActorId, casterId, spellName, rounds, hastePercent) => {
            var _Url = `api/Encounter/addSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}`;
            return this._httpClient.post(_Url, effectedActorId);
        };
        // post: api/Encounter/removeEffect?actionId=${actionId}
        //public removeEffect = (actionId: number, callback: (data: void)=>void) : void => {
        //	this.removeEffectObserve(actionId).subscribe(response => callback(response));
        //}
        this.removeEffectAsync = (actionId) => {
            return new Promise((resolve, reject) => {
                this.removeEffect(actionId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.removeEffect = (actionId) => {
            var _Url = `api/Encounter/removeEffect?actionId=${actionId}`;
            return this._httpClient.post(_Url, actionId);
        };
        // post: api/Encounter/removeCriticalsFromActor?whomId=${whomId}&count=${count}
        //public removeCriticalsFromActor = (whomId: number, count: number, callback: (data: void)=>void) : void => {
        //	this.removeCriticalsFromActorObserve(whomId, count).subscribe(response => callback(response));
        //}
        this.removeCriticalsFromActorAsync = (whomId, count) => {
            return new Promise((resolve, reject) => {
                this.removeCriticalsFromActor(whomId, count)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.removeCriticalsFromActor = (whomId, count) => {
            var _Url = `api/Encounter/removeCriticalsFromActor?whomId=${whomId}&count=${count}`;
            return this._httpClient.post(_Url, whomId);
        };
        // post: api/Encounter/doProposedAction?whomId=${whomId}
        //public doProposedAction = (whomId: number, callback: (data: void)=>void) : void => {
        //	this.doProposedActionObserve(whomId).subscribe(response => callback(response));
        //}
        this.doProposedActionAsync = (whomId) => {
            return new Promise((resolve, reject) => {
                this.doProposedAction(whomId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.doProposedAction = (whomId) => {
            var _Url = `api/Encounter/doProposedAction?whomId=${whomId}`;
            return this._httpClient.post(_Url, whomId);
        };
        // post: api/Encounter/setModifierOnAction?actionId=${actionId}&modifier=${modifier}
        //public setModifierOnAction = (actionId: number, modifier: number, callback: (data: void)=>void) : void => {
        //	this.setModifierOnActionObserve(actionId, modifier).subscribe(response => callback(response));
        //}
        this.setModifierOnActionAsync = (actionId, modifier) => {
            return new Promise((resolve, reject) => {
                this.setModifierOnAction(actionId, modifier)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.setModifierOnAction = (actionId, modifier) => {
            var _Url = `api/Encounter/setModifierOnAction?actionId=${actionId}&modifier=${modifier}`;
            return this._httpClient.post(_Url, actionId);
        };
        // post: api/Encounter/setAttackOnAction?actionId=${actionId}&attackId=${attackId}
        //public setAttackOnAction = (actionId: number, attackId: number, callback: (data: void)=>void) : void => {
        //	this.setAttackOnActionObserve(actionId, attackId).subscribe(response => callback(response));
        //}
        this.setAttackOnActionAsync = (actionId, attackId) => {
            return new Promise((resolve, reject) => {
                this.setAttackOnAction(actionId, attackId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.setAttackOnAction = (actionId, attackId) => {
            var _Url = `api/Encounter/setAttackOnAction?actionId=${actionId}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionId);
        };
    }
};
EncounterRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EncounterRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let GamesRepository = class GamesRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Games/getGames
        //public getGames = (, callback: (data: Game[])=>void) : void => {
        //	this.getGamesObserve().subscribe(response => callback(response));
        //}
        this.getGamesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getGames()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getGames = () => {
            var _Url = `api/Games/getGames`;
            return this._httpClient.get(_Url);
        };
        // get: api/Games/getGame?id=${id}
        //public getGame = (id: number, callback: (data: Game)=>void) : void => {
        //	this.getGameObserve(id).subscribe(response => callback(response));
        //}
        this.getGameAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getGame(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getGame = (id) => {
            var _Url = `api/Games/getGame?id=${id}`;
            return this._httpClient.get(_Url);
        };
        // post: api/Games/saveGame
        //public saveGame = (game: Game, callback: (data: Game)=>void) : void => {
        //	this.saveGameObserve(game).subscribe(response => callback(response));
        //}
        this.saveGameAsync = (game) => {
            return new Promise((resolve, reject) => {
                this.saveGame(game)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.saveGame = (game) => {
            var _Url = `api/Games/saveGame`;
            return this._httpClient.post(_Url, game);
        };
        // delete: api/Games/deleteGame?id=${id}
        //public deleteGame = (id: number, callback: (data: void)=>void) : void => {
        //	this.deleteGameObserve(id).subscribe(response => callback(response));
        //}
        this.deleteGameAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.deleteGame(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.deleteGame = (id) => {
            var _Url = `api/Games/deleteGame?id=${id}`;
            return this._httpClient.delete(_Url);
        };
    }
};
GamesRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GamesRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let ReferenceRepository = class ReferenceRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Reference/getActionGroups
        //public getActionGroups = (, callback: (data: ActionGroup[])=>void) : void => {
        //	this.getActionGroupsObserve().subscribe(response => callback(response));
        //}
        this.getActionGroupsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getActionGroups()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActionGroups = () => {
            var _Url = `api/Reference/getActionGroups`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getActions?groupId=${groupId}
        //public getActions = (groupId: number, callback: (data: ActionDefinition[])=>void) : void => {
        //	this.getActionsObserve(groupId).subscribe(response => callback(response));
        //}
        this.getActionsAsync = (groupId) => {
            return new Promise((resolve, reject) => {
                this.getActions(groupId)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getActions = (groupId) => {
            var _Url = `api/Reference/getActions?groupId=${groupId}`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getConstitutionBonusCharts
        //public getConstitutionBonusCharts = (, callback: (data: ConstitutionBonusChart[])=>void) : void => {
        //	this.getConstitutionBonusChartsObserve().subscribe(response => callback(response));
        //}
        this.getConstitutionBonusChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getConstitutionBonusCharts()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getConstitutionBonusCharts = () => {
            var _Url = `api/Reference/getConstitutionBonusCharts`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getCriticalCodes
        //public getCriticalCodes = (, callback: (data: CriticalCode[])=>void) : void => {
        //	this.getCriticalCodesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalCodesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalCodes()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCriticalCodes = () => {
            var _Url = `api/Reference/getCriticalCodes`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getCriticalIgnores
        //public getCriticalIgnores = (, callback: (data: CriticalIgnore[])=>void) : void => {
        //	this.getCriticalIgnoresObserve().subscribe(response => callback(response));
        //}
        this.getCriticalIgnoresAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalIgnores()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCriticalIgnores = () => {
            var _Url = `api/Reference/getCriticalIgnores`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getIQs
        //public getIQs = (, callback: (data: IQ[])=>void) : void => {
        //	this.getIQsObserve().subscribe(response => callback(response));
        //}
        this.getIQsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getIQs()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getIQs = () => {
            var _Url = `api/Reference/getIQs`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getLevelCharts
        //public getLevelCharts = (, callback: (data: LevelChart[])=>void) : void => {
        //	this.getLevelChartsObserve().subscribe(response => callback(response));
        //}
        this.getLevelChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getLevelCharts()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getLevelCharts = () => {
            var _Url = `api/Reference/getLevelCharts`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getOutlooks
        //public getOutlooks = (, callback: (data: Outlook[])=>void) : void => {
        //	this.getOutlooksObserve().subscribe(response => callback(response));
        //}
        this.getOutlooksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getOutlooks()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getOutlooks = () => {
            var _Url = `api/Reference/getOutlooks`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getPaces
        //public getPaces = (, callback: (data: Pace[])=>void) : void => {
        //	this.getPacesObserve().subscribe(response => callback(response));
        //}
        this.getPacesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getPaces()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getPaces = () => {
            var _Url = `api/Reference/getPaces`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getSizeRatings
        //public getSizeRatings = (, callback: (data: SizeRating[])=>void) : void => {
        //	this.getSizeRatingsObserve().subscribe(response => callback(response));
        //}
        this.getSizeRatingsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getSizeRatings()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getSizeRatings = () => {
            var _Url = `api/Reference/getSizeRatings`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getSpeedCharts
        //public getSpeedCharts = (, callback: (data: SpeedChart[])=>void) : void => {
        //	this.getSpeedChartsObserve().subscribe(response => callback(response));
        //}
        this.getSpeedChartsAsync = () => {
            return new Promise((resolve, reject) => {
                this.getSpeedCharts()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getSpeedCharts = () => {
            var _Url = `api/Reference/getSpeedCharts`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getAttackTypes
        //public getAttackTypes = (, callback: (data: AttackType[])=>void) : void => {
        //	this.getAttackTypesObserve().subscribe(response => callback(response));
        //}
        this.getAttackTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAttackTypes()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAttackTypes = () => {
            var _Url = `api/Reference/getAttackTypes`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getCriticalTypes
        //public getCriticalTypes = (, callback: (data: CriticalType[])=>void) : void => {
        //	this.getCriticalTypesObserve().subscribe(response => callback(response));
        //}
        this.getCriticalTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getCriticalTypes()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getCriticalTypes = () => {
            var _Url = `api/Reference/getCriticalTypes`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getWeaponTypes
        //public getWeaponTypes = (, callback: (data: WeaponType[])=>void) : void => {
        //	this.getWeaponTypesObserve().subscribe(response => callback(response));
        //}
        this.getWeaponTypesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getWeaponTypes()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getWeaponTypes = () => {
            var _Url = `api/Reference/getWeaponTypes`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getBooks
        //public getBooks = (, callback: (data: Book[])=>void) : void => {
        //	this.getBooksObserve().subscribe(response => callback(response));
        //}
        this.getBooksAsync = () => {
            return new Promise((resolve, reject) => {
                this.getBooks()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getBooks = () => {
            var _Url = `api/Reference/getBooks`;
            return this._httpClient.get(_Url);
        };
        // get: api/Reference/getPsychicRefractoryPeriodEntries
        //public getPsychicRefractoryPeriodEntries = (, callback: (data: PsychicRefractoryPeriodEntry[])=>void) : void => {
        //	this.getPsychicRefractoryPeriodEntriesObserve().subscribe(response => callback(response));
        //}
        this.getPsychicRefractoryPeriodEntriesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getPsychicRefractoryPeriodEntries()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getPsychicRefractoryPeriodEntries = () => {
            var _Url = `api/Reference/getPsychicRefractoryPeriodEntries`;
            return this._httpClient.get(_Url);
        };
    }
};
ReferenceRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ReferenceRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let SettingsRepository = class SettingsRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
};
SettingsRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SettingsRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************


let UsersRepository = class UsersRepository {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // get: api/Users/CurrentUser
        //public currentUser = (, callback: (data: ApplicationUser)=>void) : void => {
        //	this.currentUserObserve().subscribe(response => callback(response));
        //}
        this.currentUserAsync = () => {
            return new Promise((resolve, reject) => {
                this.currentUser()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.currentUser = () => {
            var _Url = `api/Users/CurrentUser`;
            return this._httpClient.get(_Url);
        };
        // post: api/Users/logout
        //public logout = (, callback: (data: boolean)=>void) : void => {
        //	this.logoutObserve().subscribe(response => callback(response));
        //}
        this.logoutAsync = () => {
            return new Promise((resolve, reject) => {
                this.logout()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.logout = () => {
            var _Url = `api/Users/logout`;
            return this._httpClient.post(_Url, null);
        };
        // post: api/Users/authenticate
        //public authenticate = (model: AuthenticateModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.authenticateObserve(model).subscribe(response => callback(response));
        //}
        this.authenticateAsync = (model) => {
            return new Promise((resolve, reject) => {
                this.authenticate(model)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.authenticate = (model) => {
            var _Url = `api/Users/authenticate`;
            return this._httpClient.post(_Url, model);
        };
        // post: api/Users/register
        //public register = (model: RegisterModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.registerObserve(model).subscribe(response => callback(response));
        //}
        this.registerAsync = (model) => {
            return new Promise((resolve, reject) => {
                this.register(model)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.register = (model) => {
            var _Url = `api/Users/register`;
            return this._httpClient.post(_Url, model);
        };
        // get: api/Users/GetAll
        //public getAll = (, callback: (data: ApplicationUser[])=>void) : void => {
        //	this.getAllObserve().subscribe(response => callback(response));
        //}
        this.getAllAsync = () => {
            return new Promise((resolve, reject) => {
                this.getAll()
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getAll = () => {
            var _Url = `api/Users/GetAll`;
            return this._httpClient.get(_Url);
        };
        // get: api/Users/GetById/${encodeURIComponent(id)}
        //public getById = (id: string, callback: (data: ApplicationUser)=>void) : void => {
        //	this.getByIdObserve(id).subscribe(response => callback(response));
        //}
        this.getByIdAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.getById(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.getById = (id) => {
            var _Url = `api/Users/GetById/${encodeURIComponent(id)}`;
            return this._httpClient.get(_Url);
        };
        // put: api/Users/Update/${encodeURIComponent(id)}
        //public update = (id: string, model: UpdateModel, callback: (data: ApplicationUser)=>void) : void => {
        //	this.updateObserve(id, model).subscribe(response => callback(response));
        //}
        this.updateAsync = (id, model) => {
            return new Promise((resolve, reject) => {
                this.update(id, model)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.update = (id, model) => {
            var _Url = `api/Users/Update/${encodeURIComponent(id)}`;
            return this._httpClient.put(_Url, id);
        };
        // delete: api/Users/Delete/${encodeURIComponent(id)}
        //public delete = (id: string, callback: (data: void)=>void) : void => {
        //	this.deleteObserve(id).subscribe(response => callback(response));
        //}
        this.deleteAsync = (id) => {
            return new Promise((resolve, reject) => {
                this.delete(id)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.delete = (id) => {
            var _Url = `api/Users/Delete/${encodeURIComponent(id)}`;
            return this._httpClient.delete(_Url);
        };
        // post: api/Users/ForgotPassword?email=${encodeURIComponent(email)}
        //public forgotPassword = (email: string, callback: (data: boolean)=>void) : void => {
        //	this.forgotPasswordObserve(email).subscribe(response => callback(response));
        //}
        this.forgotPasswordAsync = (email) => {
            return new Promise((resolve, reject) => {
                this.forgotPassword(email)
                    .subscribe((res) => {
                    resolve(res);
                });
            });
        };
        this.forgotPassword = (email) => {
            var _Url = `api/Users/ForgotPassword?email=${encodeURIComponent(email)}`;
            return this._httpClient.post(_Url, email);
        };
    }
};
UsersRepository.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsersRepository = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _Actions_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions.repository */ "./src/app/repositories/Actions.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return _Actions_repository__WEBPACK_IMPORTED_MODULE_0__["ActionsRepository"]; });

/* harmony import */ var _Actors_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actors.repository */ "./src/app/repositories/Actors.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return _Actors_repository__WEBPACK_IMPORTED_MODULE_1__["ActorsRepository"]; });

/* harmony import */ var _Characters_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Characters.repository */ "./src/app/repositories/Characters.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return _Characters_repository__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"]; });

/* harmony import */ var _Combat_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Combat.repository */ "./src/app/repositories/Combat.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return _Combat_repository__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"]; });

/* harmony import */ var _Creatures_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Creatures.repository */ "./src/app/repositories/Creatures.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return _Creatures_repository__WEBPACK_IMPORTED_MODULE_4__["CreaturesRepository"]; });

/* harmony import */ var _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CriticalEffects.repository */ "./src/app/repositories/CriticalEffects.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_5__["CriticalEffectsRepository"]; });

/* harmony import */ var _Encounter_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Encounter.repository */ "./src/app/repositories/Encounter.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return _Encounter_repository__WEBPACK_IMPORTED_MODULE_6__["EncounterRepository"]; });

/* harmony import */ var _Games_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Games.repository */ "./src/app/repositories/Games.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return _Games_repository__WEBPACK_IMPORTED_MODULE_7__["GamesRepository"]; });

/* harmony import */ var _Reference_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reference.repository */ "./src/app/repositories/Reference.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return _Reference_repository__WEBPACK_IMPORTED_MODULE_8__["ReferenceRepository"]; });

/* harmony import */ var _Settings_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Settings.repository */ "./src/app/repositories/Settings.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return _Settings_repository__WEBPACK_IMPORTED_MODULE_9__["SettingsRepository"]; });

/* harmony import */ var _Users_repository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users.repository */ "./src/app/repositories/Users.repository.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return _Users_repository__WEBPACK_IMPORTED_MODULE_10__["UsersRepository"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
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
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AlertService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-authorization/authorize.service */ "./src/app/api-authorization/authorize.service.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const ApplicationName = 'CEATSiiApp';
let AuthenticationService = class AuthenticationService {
    constructor(http, userRepository, authorizeService) {
        this.http = http;
        this.userRepository = userRepository;
        this.authorizeService = authorizeService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        //debugger;
        this.refreshUserAsync();
    }
    refreshUserAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(10);
            var user = yield this.userRepository.currentUserAsync();
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user) {
                yield this.loginAuthAsync();
            }
            else {
                //await this.logoutAuthAsync();
            }
            this.currentUserSubject.next(user);
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    loginAsync(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            var auth = new _entities__WEBPACK_IMPORTED_MODULE_4__["AuthenticateModel"]();
            auth.username = username;
            auth.password = password;
            var user = yield this.userRepository.authenticateAsync(auth);
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (user) {
                yield this.loginAuthAsync();
            }
            else {
                //await this.logoutAuthAsync();
            }
            this.currentUserSubject.next(user);
            return user;
            //return null;
        });
    }
    loginAuthAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const state = {};
            //const result = await this.authorizeService.signIn(state);
            const url = window.location.href;
            const result = yield this.authorizeService.completeSignIn(url);
            switch (result.status) {
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Redirect:
                    debugger;
                    break;
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Success:
                    //await this.navigateToReturnUrl(returnUrl);
                    break;
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Fail:
                    //await this.router.navigate(ApplicationPaths.LoginFailedPathComponents, {
                    //  queryParams: { [QueryParameterNames.Message]: result.message }
                    //});
                    debugger;
                    break;
                default:
                    debugger;
                    throw new Error(`Invalid status result ${result.status}.`);
            }
        });
    }
    logoutAuthAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const state = {};
            const result = yield this.authorizeService.signOut(state);
            switch (result.status) {
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Redirect:
                    debugger;
                    break;
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Success:
                    //await this.navigateToReturnUrl(returnUrl);
                    break;
                case _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationResultStatus"].Fail:
                    debugger;
                    //this.message.next(result.message);
                    break;
                default:
                    debugger;
                    throw new Error('Invalid authentication result status.');
            }
        });
    }
    logoutAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.userRepository.logout();
            // remove user from local storage and set current user to null
            localStorage.removeItem('currentUser');
            yield this.logoutAuthAsync();
            this.currentUserSubject.next(null);
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_3__["UsersRepository"] },
    { type: _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"] }
];
AuthenticationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _repositories__WEBPACK_IMPORTED_MODULE_3__["UsersRepository"],
        _api_authorization_authorize_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizeService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "./src/app/entities/EnumDefinitions.ts");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Authentication.service */ "./src/app/services/Authentication.service.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let EncounterService = class EncounterService {
    constructor(authService, gameRepo, actorRepo, actionRepo, encounterRepo) {
        this.authService = authService;
        this.gameRepo = gameRepo;
        this.actorRepo = actorRepo;
        this.actionRepo = actionRepo;
        this.encounterRepo = encounterRepo;
        this.actors = new Array();
        this.actions = new Array();
        this.selectGame = (gameId) => __awaiter(this, void 0, void 0, function* () {
            yield this.encounterRepo.setCurrentGameAsync(gameId);
            yield this.refresh();
        });
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            this._currentGame = yield this.encounterRepo.getCurrentGameAsync();
            if (this._currentGame.id == 0) {
                this._currentGame = null;
            }
            if (this.currentGame != null) {
                //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);
                this.actors = yield this.actorRepo.getActorsAsync(this.currentGame.id);
                this.actions = yield this.actionRepo.getActionsInGameAsync(this.currentGame.id);
                if (this.selectedActor == null) {
                    this.selectedAction = this.actions[0];
                }
            }
        });
        this.addCreatureToEncounter = (creature) => __awaiter(this, void 0, void 0, function* () {
            yield this.encounterRepo.createActorFromCreatureAsync(creature.id);
            yield this.refresh();
        });
        this.addCharacterToEncounter = (character, rolledInit) => __awaiter(this, void 0, void 0, function* () {
            yield this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);
            yield this.refresh();
        });
        authService.currentUser.subscribe((user) => {
            if (user != null) {
                this.refresh();
            }
            else {
                this._currentGame = null;
                this.actors = new Array();
                this.actions = new Array();
                this._selectedActor = null;
                this._selectedAction = null;
            }
        });
    }
    //get systemSettings(): MySettings {
    //    return this.settings.settings;
    //}
    //public setGameType(value: GameType) {
    //    this.settings.setGameType(value);
    //}
    get selectedAction() {
        return this._selectedAction;
    }
    set selectedAction(action) {
        this._selectedAction = action;
        var who = this.actors.find(item => item.id === action.whoIsActing_ID);
        this._selectedActor = who;
    }
    get selectedActor() {
        return this._selectedActor;
    }
    set selectedActor(actor) {
        var act = this.actions.find(item => item.whoIsActing_ID === actor.id && item.actionType == _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ActionTypeEnum.Current);
        this._selectedAction = act;
        this._selectedActor = actor;
    }
    selectActor(actorId) {
        this.selectedActor = this.actors.find((a) => a.id == actorId);
    }
    get currentGame() {
        return this._currentGame;
    }
    set currentGame(game) {
        this.selectGame(game.id);
    }
};
EncounterService.ctorParameters = () => [
    { type: _Authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["ActionsRepository"] },
    { type: _repositories__WEBPACK_IMPORTED_MODULE_2__["EncounterRepository"] }
];
EncounterService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_Authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["ActorsRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["ActionsRepository"],
        _repositories__WEBPACK_IMPORTED_MODULE_2__["EncounterRepository"]])
], EncounterService);



/***/ }),

/***/ "./src/app/services/References.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/References.service.ts ***!
  \************************************************/
/*! exports provided: ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return ReferencesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ReferencesService = class ReferencesService {
    constructor(referenceRepo) {
        this.referenceRepo = referenceRepo;
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
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
        this.refresh();
    }
};
ReferencesService.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_1__["ReferenceRepository"] }
];
ReferencesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_1__["ReferenceRepository"]])
], ReferencesService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, ApplicationName, AuthenticationService, EncounterService, ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.service */ "./src/app/services/Alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _Alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.service */ "./src/app/services/Authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _Encounter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Encounter.service */ "./src/app/services/Encounter.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return _Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]; });

/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./References.service */ "./src/app/services/References.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return _References_service__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






/***/ }),

/***/ "./src/app/top/creature/creature.component.less":
/*!******************************************************!*\
  !*** ./src/app/top/creature/creature.component.less ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  display: table-cell;\n  width: 20%;\n}\n.edit {\n  display: table-cell;\n  width: 80%;\n}\n.mainList {\n  font-size: 12px;\n  max-height: 100%;\n  /*width: 120px;*/\n}\n.mainList a {\n  cursor: pointer;\n}\n.mainList button {\n  padding: 0 5px;\n}\n.mainList td {\n  padding: 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL2NyZWF0dXJlL1A6L1BlcnNvbmFsIFByb2plY3RzL0NFQVRTaWktQ29tYmF0LVRyYWNrZXIvQ29tYmF0VHJhY2tlci9Db21iYXRUcmFja2VyLldlYi9DRUFUU2lpQXBwL3NyYy9hcHAvdG9wL2NyZWF0dXJlL2NyZWF0dXJlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90b3AvY3JlYXR1cmUvY3JlYXR1cmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQ1BBLGdCQUFnQjtBQUNsQjtBRFVBO0VBQ0UsZUFBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0FDVEY7QURZQTtFQUNFLFlBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL3RvcC9jcmVhdHVyZS9jcmVhdHVyZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbn1cblxuLmFyZWEge1xufVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5lZGl0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1haW5MaXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAvKndpZHRoOiAxMjBweDsqL1xufVxuXG4ubWFpbkxpc3QgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW5MaXN0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4ubWFpbkxpc3QgdGQge1xuICBwYWRkaW5nOiAycHg7XG59XG4iLCIubGlzdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAyMCU7XG59XG4uZWRpdCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbkxpc3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIC8qd2lkdGg6IDEyMHB4OyovXG59XG4ubWFpbkxpc3QgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluTGlzdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5tYWluTGlzdCB0ZCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "./src/app/repositories/index.ts");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "./src/app/entities/index.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CreatureComponent = 
/** creature component*/
class CreatureComponent {
    /** character ctor */
    constructor(creatureRepo) {
        this.creatureRepo = creatureRepo;
        this.creatures = new Array();
        this.refresh = () => __awaiter(this, void 0, void 0, function* () {
            this.creatures = yield this.creatureRepo.getCreaturesAsync();
        });
        this.selectCreature = (charId) => __awaiter(this, void 0, void 0, function* () {
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
        this.selectedCreature = new _entities__WEBPACK_IMPORTED_MODULE_2__["Creature"]();
    }
};
CreatureComponent.ctorParameters = () => [
    { type: _repositories__WEBPACK_IMPORTED_MODULE_1__["CreaturesRepository"] }
];
CreatureComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'creature',
        template: __importDefault(__webpack_require__(/*! raw-loader!./creature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/creature/creature.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./creature.component.less */ "./src/app/top/creature/creature.component.less")).default]
    })
    /** creature component*/
    ,
    __metadata("design:paramtypes", [_repositories__WEBPACK_IMPORTED_MODULE_1__["CreaturesRepository"]])
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
/* harmony import */ var _creature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature.component */ "./src/app/top/creature/creature.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return _creature_component__WEBPACK_IMPORTED_MODULE_0__["CreatureComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
    constructor() {
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full}`;
    }
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/home/home.component.html")).default
    }),
    __metadata("design:paramtypes", [])
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
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/top/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Personal Projects\CEATSii-Combat-Tracker\CombatTracker\CombatTracker.Web\CEATSiiApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
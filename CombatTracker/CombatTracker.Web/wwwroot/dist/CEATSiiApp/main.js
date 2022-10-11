(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+wwY":
/*!****************************************!*\
  !*** ./src/app/entities/SpeedChart.ts ***!
  \****************************************/
/*! exports provided: SpeedChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedChart", function() { return SpeedChart; });
class SpeedChart {
    constructor() {
    }
}


/***/ }),

/***/ "/7Ii":
/*!**********************************************************!*\
  !*** ./src/app/entities/PsychicRefractoryPeriodEntry.ts ***!
  \**********************************************************/
/*! exports provided: PsychicRefractoryPeriodEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychicRefractoryPeriodEntry", function() { return PsychicRefractoryPeriodEntry; });
class PsychicRefractoryPeriodEntry {
    constructor() {
    }
}


/***/ }),

/***/ "/Gu9":
/*!****************************************************************!*\
  !*** ./src/app/components/encounter/actions-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ActionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsListComponent", function() { return ActionsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");


var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ViewTypeEnum;

function ActionsListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActionsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "action-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function ActionsListComponent_div_3_Template_action_view_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r1.getLeft(action_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", action_r2)("isSelectable", ctx_r1.isSelectable)("viewType", ctx_r1.viewType);
} }
/** actions-list component*/
class ActionsListComponent {
    //public selectedAction: BaseAction = null;
    /** actions-list ctor */
    constructor() {
        this.actions = new Array();
        this.isSelectable = false;
        this.viewType = ViewTypeEnum.Overview;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
}
ActionsListComponent.ɵfac = function ActionsListComponent_Factory(t) { return new (t || ActionsListComponent)(); };
ActionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionsListComponent, selectors: [["actions-list"]], inputs: { actions: "actions", isSelectable: "isSelectable", viewType: "viewType" }, outputs: { onSelect: "onSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "list"], [4, "ngIf"], [1, "mainActionList"], ["class", "ActorActionBack", 3, "margin-left", 4, "ngFor", "ngForOf"], [1, "ActorActionBack"], [3, "action", "isSelectable", "viewType", "onSelect"]], template: function ActionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionsListComponent_p_1_Template, 3, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionsListComponent_div_3_Template, 2, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
    } }, styles: [".mainActionList[_ngcontent-%COMP%] {\r\n    padding-right: 160px;\r\n    padding-right: 300px;\r\n    padding-right: 0px;\r\n    padding-right: 20%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    height: 98%;\r\n    margin: 5px;\r\n\r\n}\r\n.list[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n    \r\n    border-radius: 5px;\r\n    border: 1px solid rgb(100,100,100);\r\n    background: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQztBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYWN0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuICAgIDI4MCw5OFxyXG4qL1xyXG4ubWFpbkFjdGlvbkxpc3Qge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG4ubGlzdCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIC8qYm9yZGVyOiAycHggc29saWQgZ3JleTsqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEwMCwxMDAsMTAwKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "/ZrB":
/*!******************************************************************!*\
  !*** ./src/app/components/character/character-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return CharacterEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/modal/modal.service */ "N7ID");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/elements */ "ZpKY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_weapon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/weapon */ "KNU+");
/* harmony import */ var _components_armor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/armor */ "yJeN");







var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].GameType;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].CharacterType;









function CharacterEditComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a base inititive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a Walk Speed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a Strength Bonus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter Hit Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_55_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter Power Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_div_55_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.character.powerPoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CharacterEditComponent_div_0_div_55_div_7_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.character.powerPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r19.invalid);
} }
function CharacterEditComponent_div_0_div_56_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter Exhaustion Points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Exhaustion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_div_56_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.character.exhaustionPoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CharacterEditComponent_div_0_div_56_div_7_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r15.character.exhaustionPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r23.invalid);
} }
function CharacterEditComponent_div_0_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Percent Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Adrenal DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_div_57_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.character.percentRequiredAdrenalDB = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r16.character.percentRequiredAdrenalDB);
} }
function CharacterEditComponent_div_0_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "armor-list", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDelete", function CharacterEditComponent_div_0_div_62_Template_armor_list_onDelete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r30.onArmorDeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("armors", ctx_r17.character.armors)("charId", ctx_r17.character.id);
} }
function CharacterEditComponent_div_0_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CharacterEditComponent_div_0_button_68_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.addToEncounter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add To Encounter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CharacterEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.character.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CharacterEditComponent_div_0_div_12_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.character.typeString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " PC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.character.typeString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " NPC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.character.level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CharacterEditComponent_div_0_div_27_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Base Inititive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.character.baseInititive = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CharacterEditComponent_div_0_div_33_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Walk Speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.character.walkSpeed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CharacterEditComponent_div_0_div_39_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Strength Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.character.strengthBonus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CharacterEditComponent_div_0_div_45_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Hit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_div_0_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.character.hitPoints = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CharacterEditComponent_div_0_div_54_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, CharacterEditComponent_div_0_div_55_Template, 8, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CharacterEditComponent_div_0_div_56_Template, 8, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, CharacterEditComponent_div_0_div_57_Template, 7, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "weapon-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDelete", function CharacterEditComponent_div_0_Template_weapon_list_onDelete_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.onWeaponDeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, CharacterEditComponent_div_0_div_62_Template, 2, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CharacterEditComponent_div_0_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.closeEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CharacterEditComponent_div_0_Template_button_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.saveCharacter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, CharacterEditComponent_div_0_button_68_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.character == null ? null : ctx_r0.character.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.typeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.typeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.baseInititive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.walkSpeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.strengthBonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.character.hitPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("weapons", ctx_r0.character.weapons)("charId", ctx_r0.character.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasCurrentGame);
} }
/** characterDetail component*/
class CharacterEditComponent {
    constructor(encounterService, charRepo, modalService) {
        this.encounterService = encounterService;
        this.charRepo = charRepo;
        this.modalService = modalService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveCharacter = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.character.gameType = this.encounterService.systemSettings.gameSystem;
            var g = yield this.charRepo.saveCharacterAsync(this.character);
            if (!this.character.id) {
                this.character.id = g.id;
            }
            this.onSave.emit(this.character);
        });
    }
    get isRolemaster() {
        var _a;
        return ((_a = this.encounterService.currentGame) === null || _a === void 0 ? void 0 : _a.gameType) == GameType.RMSS;
    }
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
}
CharacterEditComponent.ɵfac = function CharacterEditComponent_Factory(t) { return new (t || CharacterEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["CharactersRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
CharacterEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CharacterEditComponent, selectors: [["app-character-edit"]], inputs: { character: "character" }, outputs: { onDelete: "onDelete", onSave: "onSave" }, decls: 10, vars: 2, consts: [[4, "ngIf"], ["id", "custom-modal-2"], [1, "modal"], [1, "modal-body"], ["name", "rolledInit", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "modal-background"], ["charForm", "ngForm"], [1, "row"], [1, "form-group", "col-sm-6"], ["name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "col-sm-6", 2, "vertical-align", "bottom"], [1, "btn-group"], ["type", "radio", "value", "PC", "name", "chartype", 3, "ngModel", "ngModelChange"], ["type", "radio", "value", "NPC", "name", "chartype", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-sm-2"], ["name", "level", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["level", "ngModel"], ["name", "baseInititive", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["baseInititive", "ngModel"], ["name", "walkSpeed", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["walkSpeed", "ngModel"], ["name", "strengthBonus", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["strengthBonus", "ngModel"], ["name", "hitPoints", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["hitPoints", "ngModel"], ["class", "form-group  col-sm-2", 4, "ngIf"], [3, "weapons", "charId", "onDelete"], ["class", "form-group  col-sm-6", 4, "ngIf"], [1, "text-center", "pt-2"], [1, "btn", "btn-outline-primary", "pull-left", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "btn btn-primary pull-right", 3, "click", 4, "ngIf"], [1, "text-danger"], [2, "white-space", "nowrap"], ["name", "powerPoints", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["powerPoints", "ngModel"], ["name", "exhaustionPoints", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["exhaustionPoints", "ngModel"], ["name", "percentRequiredAdrenalDB", 1, "form-control", 3, "ngModel", "ngModelChange"], ["percentRequiredAdrenalDB", "ngModel"], [3, "armors", "charId", "onDelete"], [1, "btn", "btn-primary", "pull-right", 3, "click"]], template: function CharacterEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CharacterEditComponent_div_0_Template, 69, 23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Roll Init - 2d10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CharacterEditComponent_Template_input_ngModelChange_6_listener($event) { return ctx.rolledInit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CharacterEditComponent_Template_button_click_7_listener() { return ctx.closeModal("custom-modal-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add To Encounter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.character);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rolledInit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _elements__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _components_weapon__WEBPACK_IMPORTED_MODULE_10__["WeaponListComponent"], _components_armor__WEBPACK_IMPORTED_MODULE_11__["ArmorListComponent"]], styles: ["label[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY2hhcmFjdGVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "/kBA":
/*!****************************************!*\
  !*** ./src/app/top/encounter/index.ts ***!
  \****************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _encounter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encounter.component */ "k1WJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return _encounter_component__WEBPACK_IMPORTED_MODULE_0__["EncounterComponent"]; });




/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Personal Projects\CEATSii-Combat-Tracker\CombatTracker\CombatTracker.Web\CEATSiiApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0Qn9":
/*!****************************************!*\
  !*** ./src/app/entities/SizeRating.ts ***!
  \****************************************/
/*! exports provided: SizeRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeRating", function() { return SizeRating; });
class SizeRating {
    constructor() {
    }
}


/***/ }),

/***/ "0jpJ":
/*!*********************************************!*\
  !*** ./src/app/entities/ApplicationUser.ts ***!
  \*********************************************/
/*! exports provided: ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
class ApplicationUser {
    constructor() {
    }
}


/***/ }),

/***/ "1LXU":
/*!****************************************!*\
  !*** ./src/app/entities/AttackType.ts ***!
  \****************************************/
/*! exports provided: AttackType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackType", function() { return AttackType; });
class AttackType {
    constructor() {
    }
}


/***/ }),

/***/ "1W6u":
/*!**********************************************************!*\
  !*** ./src/app/components/armor/armor-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ArmorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorEditComponent", function() { return ArmorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ArmorEditComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArmorEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Armor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Armor Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArmorEditComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.armor.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ArmorEditComponent_div_0_div_10_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArmorEditComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.armor.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArmorEditComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.armor.db = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Moving Maneuver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArmorEditComponent_div_0_Template_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.armor.movingManeuverMod = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArmorEditComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.armor.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.armor.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.armor.db);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.armor.movingManeuverMod);
} }
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
}
ArmorEditComponent.ɵfac = function ArmorEditComponent_Factory(t) { return new (t || ArmorEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"])); };
ArmorEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArmorEditComponent, selectors: [["app-armor-edit"]], inputs: { armor: "armor" }, outputs: { onDelete: "onDelete" }, decls: 1, vars: 1, consts: [["class", "edit-area", 4, "ngIf"], [1, "edit-area"], [1, "form-group", "full-row"], ["for", "type", 1, "control-label"], [1, "control-area", "control-area-number"], ["name", "type", "type", "text", "required", "", 1, "form-control", 2, "width", "40px", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "control-label"], [1, "control-area"], ["name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "half-row"], ["for", "db", 1, "control-label"], ["name", "db", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "movingManeuverMod", 1, "control-label"], ["name", "movingManeuverMod", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "pt-2"], [1, "btn", "btn-danger", "btn-sm", "pull-right", 3, "click"], [1, "text-danger"]], template: function ArmorEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArmorEditComponent_div_0_Template, 29, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.armor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".edit-area[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybW9yLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXJtb3ItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYXJlYSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGFsZi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1sYWJlbCB7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIHdpZHRoOiA3NnB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtYXJlYSB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIHdpZHRoOiAxMDhweDtcclxufVxyXG5cclxuLmNvbnRyb2wtYXJlYS1udW1iZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "1dmr":
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

/***/ "29mx":
/*!********************************!*\
  !*** ./src/app/entities/IQ.ts ***!
  \********************************/
/*! exports provided: IQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IQ", function() { return IQ; });
class IQ {
    constructor() {
    }
}


/***/ }),

/***/ "3BZS":
/*!**********************************************!*\
  !*** ./src/app/components/creature/index.ts ***!
  \**********************************************/
/*! exports provided: CreatureListComponent, CreatureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creature_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature-list.component */ "m69I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureListComponent", function() { return _creature_list_component__WEBPACK_IMPORTED_MODULE_0__["CreatureListComponent"]; });

/* harmony import */ var _creature_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creature-edit.component */ "Hk92");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureEditComponent", function() { return _creature_edit_component__WEBPACK_IMPORTED_MODULE_1__["CreatureEditComponent"]; });





/***/ }),

/***/ "3tIp":
/*!******************************************************!*\
  !*** ./src/app/top/character/character.component.ts ***!
  \******************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/** character component*/
class CharacterComponent {
    /** character ctor */
    constructor() {
    }
}
CharacterComponent.ɵfac = function CharacterComponent_Factory(t) { return new (t || CharacterComponent)(); };
CharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterComponent, selectors: [["character"]], decls: 2, vars: 0, consts: [[2, "border", "1px solid red"]], template: function CharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "character Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "4BjW":
/*!****************************************!*\
  !*** ./src/app/top/character/index.ts ***!
  \****************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.component */ "3tIp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return _character_component__WEBPACK_IMPORTED_MODULE_0__["CharacterComponent"]; });




/***/ }),

/***/ "4sM6":
/*!************************************************!*\
  !*** ./src/app/elements/treeview/treemodel.ts ***!
  \************************************************/
/*! exports provided: TreeNode, TreeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
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
            //debugger;
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

/***/ "5hK6":
/*!******************************************!*\
  !*** ./src/app/entities/CriticalType.ts ***!
  \******************************************/
/*! exports provided: CriticalType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalType", function() { return CriticalType; });
class CriticalType {
    constructor() {
    }
}


/***/ }),

/***/ "6F1D":
/*!***************************************************************!*\
  !*** ./src/app/api-authorization/api-authorization.module.ts ***!
  \***************************************************************/
/*! exports provided: ApiAuthorizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAuthorizationModule", function() { return ApiAuthorizationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-menu/login-menu.component */ "J0JI");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "YeGA");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "LXoR");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "X6Q1");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "im5G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-authorization.constants */ "gGyZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class ApiAuthorizationModule {
}
ApiAuthorizationModule.ɵfac = function ApiAuthorizationModule_Factory(t) { return new (t || ApiAuthorizationModule)(); };
ApiAuthorizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ApiAuthorizationModule });
ApiAuthorizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_8__["ApplicationPaths"].Register, component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_8__["ApplicationPaths"].Profile, component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_8__["ApplicationPaths"].Login, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                //{ path: ApplicationPaths.LoginFailed, component: LoginComponent },
                //{ path: ApplicationPaths.LoginCallback, component: LoginComponent },
                { path: _api_authorization_constants__WEBPACK_IMPORTED_MODULE_8__["ApplicationPaths"].LogOut, component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ApiAuthorizationModule, { declarations: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_2__["LoginMenuComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]] }); })();


/***/ }),

/***/ "6Fs8":
/*!********************************************!*\
  !*** ./src/app/entities/MoveNextResult.ts ***!
  \********************************************/
/*! exports provided: MoveNextResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveNextResult", function() { return MoveNextResult; });
class MoveNextResult {
    constructor() {
    }
}


/***/ }),

/***/ "6NGT":
/*!************************************************************!*\
  !*** ./src/app/components/attack/attack-edit.component.ts ***!
  \************************************************************/
/*! exports provided: AttackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackEditComponent", function() { return AttackEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function AttackEditComponent_div_0_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r4 == null ? null : item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4 == null ? null : item_r4.name, " ");
} }
function AttackEditComponent_div_0_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r6 == null ? null : item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.name, " ");
} }
function AttackEditComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackEditComponent_div_0_div_19_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.attack.sizeRating_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttackEditComponent_div_0_div_19_option_4_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.attack.sizeRating_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.referencesService.SizeRatings);
} }
function AttackEditComponent_div_0_div_20_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r10 == null ? null : item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.name, " ");
} }
function AttackEditComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Weapon Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackEditComponent_div_0_div_20_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.weaponTypeId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttackEditComponent_div_0_div_20_option_4_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.weaponTypeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.referencesService.WeaponTypes);
} }
function AttackEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackEditComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.attack.ob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackEditComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.attack.percentChance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Attack Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackEditComponent_div_0_Template_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.attack.attackType_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AttackEditComponent_div_0_option_18_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AttackEditComponent_div_0_div_19_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AttackEditComponent_div_0_div_20_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttackEditComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.attack.ob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.attack.percentChance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.attack.attackType_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.AttackTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.attack.attackType_ID != 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.attack.attackType_ID == 12);
} }
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
}
AttackEditComponent.ɵfac = function AttackEditComponent_Factory(t) { return new (t || AttackEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ReferencesService"])); };
AttackEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttackEditComponent, selectors: [["app-attack-edit"]], inputs: { attack: "attack" }, outputs: { onDelete: "onDelete" }, decls: 1, vars: 1, consts: [["class", "edit-area", 4, "ngIf"], [1, "edit-area"], [1, "row"], [1, "form-group", "col-sm-3", 2, "padding-right", "0"], [1, "col-sm-12", 2, "padding", "0"], ["name", "attackOB", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "attackpercentChance", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-sm-4", 2, "padding", "0"], ["name", "selectedAttackType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group col-sm-4", "style", "padding:0;", 4, "ngIf"], [1, "text-center", "pt-2"], [1, "btn", "btn-danger", "btn-sm", "pull-right", 3, "click"], [3, "value"], ["name", "selectedSize", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectedWeaponType", 1, "form-control", 3, "ngModel", "ngModelChange"]], template: function AttackEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AttackEditComponent_div_0_Template, 24, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: [".edit-area[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.half-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n\r\n.control-label[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n\r\n.control-area[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n\r\n.full-row[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n\r\n.control-area-number[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFjay1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImF0dGFjay1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1hcmVhIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oYWxmLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmZ1bGwtcm93IC5jb250cm9sLWxhYmVsIHtcclxuICAgIHdpZHRoOiA4OXB4O1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuXHJcbi5jb250cm9sLWFyZWEge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5mdWxsLXJvdyAuY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhLW51bWJlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "6ZFG":
/*!*************************************************!*\
  !*** ./src/app/_helpers/ApiPath.interceptor.ts ***!
  \*************************************************/
/*! exports provided: ApiPathInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return ApiPathInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ApiPathInterceptor {
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
}
ApiPathInterceptor.ɵfac = function ApiPathInterceptor_Factory(t) { return new (t || ApiPathInterceptor)(); };
ApiPathInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiPathInterceptor, factory: ApiPathInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8YJP":
/*!***************************************************!*\
  !*** ./src/app/elements/alert/alert.component.ts ***!
  \***************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.message.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message.text);
} }
class AlertComponent {
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
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "988e":
/*!******************************************************!*\
  !*** ./src/app/repositories/Encounter.repository.ts ***!
  \******************************************************/
/*! exports provided: EncounterRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return EncounterRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");












var version = "1";
class EncounterRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        };
        // get: api/v${version}/Encounter/GetMessages
        //public getMessages = (, callback: (data: Message[])=>void) : void => {
        //	this.getMessagesObserve().subscribe(response => callback(response));
        //}
        this.getMessagesAsync = () => {
            return new Promise((resolve, reject) => {
                this.getMessages()
                    .subscribe((res) => {
                    resolve(res);
                }, (error) => {
                    this._alertService.error(error);
                    resolve(null);
                });
            });
        };
        this.getMessages = () => {
            var _Url = `api/v${version}/Encounter/GetMessages`;
            return this._httpClient.get(_Url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Message"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["MoveNextResult"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
EncounterRepository.ɵfac = function EncounterRepository_Factory(t) { return new (t || EncounterRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
EncounterRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EncounterRepository, factory: EncounterRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9GM2":
/*!************************************************************!*\
  !*** ./src/app/components/attack/attack-list.component.ts ***!
  \************************************************************/
/*! exports provided: AttackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackListComponent", function() { return AttackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");



function AttackListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttackListComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attack_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", attack_r2 == null ? null : attack_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attack_r2 == null ? null : attack_r2.name, " ");
} }
/** Attack component*/
class AttackListComponent {
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
}
AttackListComponent.ɵfac = function AttackListComponent_Factory(t) { return new (t || AttackListComponent)(); };
AttackListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttackListComponent, selectors: [["attack-list"]], inputs: { attacks: "attacks", creatureId: "creatureId" }, outputs: { onDelete: "onDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 4, consts: [[1, "wrapper"], [1, "area"], [1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["name", "selectedAttack", "size", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "edit"], [3, "attack", "onDelete"], [3, "value"]], template: function AttackListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttackListComponent_p_3_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttackListComponent_Template_button_click_7_listener() { return ctx.newAttack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Attacks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AttackListComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedAttackId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AttackListComponent_option_12_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-attack-edit", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function AttackListComponent_Template_app_attack_edit_onDelete_14_listener($event) { return ctx.onAttackDeleted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.attacks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedAttackId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attacks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attack", ctx.selectedAttack);
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.area[_ngcontent-%COMP%] {\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGFjay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoiYXR0YWNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxufVxyXG5cclxuLmFyZWEge1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYWluTGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ "9LiN":
/*!**********************************************************!*\
  !*** ./src/app/components/actor/actor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ActorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return ActorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");




var ParryType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ParryType;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ViewTypeEnum;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].CharacterType;




function ActorListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](actor_r3.damageString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r3.hitsRemaining);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("/", actor_r3.hitsTotal, "");
} }
function ActorListComponent_table_5_tr_35_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](actor_r3.damageString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r3.damageString);
} }
function ActorListComponent_table_5_tr_35_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", actor_r3.powerPointsRemaining, "/", actor_r3.powerPointsTotal, "");
} }
function ActorListComponent_table_5_tr_35_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", actor_r3.exhaustionRemaining, "/", actor_r3.exhaustionTotal, "");
} }
function ActorListComponent_table_5_tr_35_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r8.currentOB(actor_r3), "/", ctx_r8.baseOB(actor_r3), "");
} }
function ActorListComponent_table_5_tr_35_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.currentDB(actor_r3));
} }
function ActorListComponent_table_5_tr_35_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r3.negatives + ctx_r10.currentModifier(actor_r3));
} }
function ActorListComponent_table_5_tr_35_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r3.spellNegatives + ctx_r11.currentModifier(actor_r3));
} }
function ActorListComponent_table_5_tr_35_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](actor_r3.negatives + ctx_r12.currentModifier(actor_r3) + ctx_r12.currentCrits(actor_r3).parryNegative);
} }
function ActorListComponent_table_5_tr_35_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", actor_r3.criticalModified, " ");
} }
function ActorListComponent_table_5_tr_35_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", actor_r3.criticalIgnores, " ");
} }
function ActorListComponent_table_5_tr_35_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "directions_run");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "slow_motion_video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "emergency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", actor_r3.stunRounds, "");
} }
function ActorListComponent_table_5_tr_35_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "run_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActorListComponent_table_5_tr_35_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", actor_r3.parryRounds, "");
} }
function ActorListComponent_table_5_tr_35_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", actor_r3.parryRounds, "");
} }
const _c0 = function (a0, a1) { return { "selected": a0, "active": a1 }; };
function ActorListComponent_table_5_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActorListComponent_table_5_tr_35_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const actor_r3 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.selectActor(actor_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ActorListComponent_table_5_tr_35_span_8_Template, 4, 4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ActorListComponent_table_5_tr_35_span_9_Template, 3, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ActorListComponent_table_5_tr_35_span_11_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ActorListComponent_table_5_tr_35_span_13_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ActorListComponent_table_5_tr_35_span_19_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ActorListComponent_table_5_tr_35_span_21_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ActorListComponent_table_5_tr_35_span_23_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ActorListComponent_table_5_tr_35_span_25_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ActorListComponent_table_5_tr_35_span_27_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ActorListComponent_table_5_tr_35_div_29_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ActorListComponent_table_5_tr_35_div_30_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ActorListComponent_table_5_tr_35_span_33_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ActorListComponent_table_5_tr_35_span_34_Template, 3, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ActorListComponent_table_5_tr_35_span_36_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ActorListComponent_table_5_tr_35_span_38_Template, 5, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ActorListComponent_table_5_tr_35_span_40_Template, 3, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, ActorListComponent_table_5_tr_35_span_42_Template, 3, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ActorListComponent_table_5_tr_35_span_44_Template, 5, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ActorListComponent_table_5_tr_35_span_45_Template, 5, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](25, _c0, actor_r3.isSelected, actor_r3.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", actor_r3.rolledInititive, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.currentTime(actor_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", actor_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isControlledVisible(actor_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3) && actor_r3.powerPointsTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.currentWeapon(actor_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.currentArmor(actor_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3) && (ctx_r2.currentOB(actor_r3) != "" || ctx_r2.baseOB(actor_r3)) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3) && actor_r3.negatives + ctx_r2.currentModifier(actor_r3) != 0 && !ctx_r2.isNaN(actor_r3.negatives + ctx_r2.currentModifier(actor_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3) && actor_r3.spellNegatives + ctx_r2.currentModifier(actor_r3) != 0 && !ctx_r2.isNaN(actor_r3.spellNegatives + ctx_r2.currentModifier(actor_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isControlledVisible(actor_r3) && actor_r3.negatives + ctx_r2.currentModifier(actor_r3) + ctx_r2.currentCrits(actor_r3).parryNegative != 0 && !ctx_r2.isNaN(actor_r3.negatives + ctx_r2.currentModifier(actor_r3) + ctx_r2.currentCrits(actor_r3).parryNegative));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.criticalModified != null && actor_r3.criticalModified != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.criticalIgnores != null && actor_r3.criticalIgnores != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.percentAction > 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.percentAction < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.suprised);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.currentCrits(actor_r3).isStunned);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.isConcentrating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", actor_r3.usingAdrenalDB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isMustParry(actor_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isNoParry(actor_r3));
} }
function ActorListComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Init ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " PPs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Exhs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Attack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Armor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " OB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " DB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Mods ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Spell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " OB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ActorListComponent_table_5_tr_35_Template, 46, 28, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.actors);
} }
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
        this.selectActor = (actor) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
ActorListComponent.ɵfac = function ActorListComponent_Factory(t) { return new (t || ActorListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"])); };
ActorListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActorListComponent, selectors: [["actor-list"]], inputs: { actors: "actors", isSelectable: "isSelectable", viewType: "viewType" }, outputs: { onSelect: "onSelect" }, decls: 6, vars: 2, consts: [[1, "list", "h-100"], [4, "ngIf"], [1, "initiative-list", "h-100"], [1, "combatantsTableOuter", "h-100"], [1, "combatantsTable", "h-100"], ["class", "combatants", 4, "ngIf"], [1, "combatants"], [1, "combatants--header"], ["rowspan", "2", 2, "vertical-align", "middle"], ["rowspan", "2"], ["colspan", "3", 2, "vertical-align", "middle"], ["class", "combatant", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "combatant", 3, "ngClass", "click"], [1, "nameColumn", 2, "text-align", "left"], [1, "actorColumn"], [2, "padding", "0"], [1, "hasteArea", 2, "display", "inline-block"], ["class", "hasted iconArea", 4, "ngIf"], ["class", "slowed iconArea", 4, "ngIf"], [1, "suprisedArea", 2, "display", "inline-block"], ["class", "suprised iconArea", 4, "ngIf"], [1, "stunArea", 2, "display", "inline-block"], ["class", "stun iconAreaText", 4, "ngIf"], [1, "", 2, "display", "inline-block"], ["class", "concentrating iconArea", 4, "ngIf"], ["class", "adrenal iconArea", 4, "ngIf"], ["class", "mustParry iconAreaText", 4, "ngIf"], ["class", "noParry iconAreaText", 4, "ngIf"], [1, "hasted", "iconArea"], [1, "material-icons"], [1, "slowed", "iconArea"], [1, "suprised", "iconArea"], [1, "stun", "iconAreaText"], [1, "textMod"], [1, "concentrating", "iconArea"], [1, "adrenal", "iconArea"], [1, "mustParry", "iconAreaText"], [1, "noParry", "iconAreaText"]], template: function ActorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ActorListComponent_p_1_Template, 3, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ActorListComponent_table_5_Template, 36, 1, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.actors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rvci1saXN0LmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "9P4t":
/*!************************************************!*\
  !*** ./src/app/elements/treeview/itreenode.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "9UD6":
/*!************************************!*\
  !*** ./src/app/entities/Weapon.ts ***!
  \************************************/
/*! exports provided: Weapon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
class Weapon {
    constructor() {
    }
}


/***/ }),

/***/ "9Yg8":
/*!*****************************************!*\
  !*** ./src/app/entities/UpdateModel.ts ***!
  \*****************************************/
/*! exports provided: UpdateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return UpdateModel; });
class UpdateModel {
    constructor() {
    }
}


/***/ }),

/***/ "9keA":
/*!********************************************!*\
  !*** ./src/app/components/attack/index.ts ***!
  \********************************************/
/*! exports provided: AttackListComponent, AttackEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attack_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attack-list.component */ "9GM2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackListComponent", function() { return _attack_list_component__WEBPACK_IMPORTED_MODULE_0__["AttackListComponent"]; });

/* harmony import */ var _attack_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack-edit.component */ "6NGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackEditComponent", function() { return _attack_edit_component__WEBPACK_IMPORTED_MODULE_1__["AttackEditComponent"]; });





/***/ }),

/***/ "AU9i":
/*!********************************************!*\
  !*** ./src/app/entities/ReferenceEntry.ts ***!
  \********************************************/
/*! exports provided: ReferenceEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceEntry", function() { return ReferenceEntry; });
class ReferenceEntry {
    constructor() {
    }
}


/***/ }),

/***/ "AuKT":
/*!************************************************************!*\
  !*** ./src/app/components/weapon/weapon-list.component.ts ***!
  \************************************************************/
/*! exports provided: WeaponListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListComponent", function() { return WeaponListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");



function WeaponListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeaponListComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", weapon_r2 == null ? null : weapon_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", weapon_r2 == null ? null : weapon_r2.name, " ");
} }
/** Weapon component*/
class WeaponListComponent {
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
}
WeaponListComponent.ɵfac = function WeaponListComponent_Factory(t) { return new (t || WeaponListComponent)(); };
WeaponListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeaponListComponent, selectors: [["weapon-list"]], inputs: { weapons: "weapons", charId: "charId" }, outputs: { onDelete: "onDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 4, consts: [[1, "wrapper"], [1, "area"], [1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["name", "selectedWeapon", "size", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "edit"], [3, "weapon", "onDelete"], [3, "value"]], template: function WeaponListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeaponListComponent_p_3_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeaponListComponent_Template_button_click_7_listener() { return ctx.newWeapon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Weapons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponListComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedWeaponId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WeaponListComponent_option_12_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-weapon-edit", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function WeaponListComponent_Template_app_weapon_edit_onDelete_14_listener($event) { return ctx.onWeaponDeleted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.weapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedWeaponId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weapon", ctx.selectedWeapon);
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.area[_ngcontent-%COMP%] {\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXBvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7O0FBRWhCOztBQUVJO1FBQ0ksZUFBZTtJQUNuQjs7QUFFQTtRQUNJLGNBQWM7SUFDbEI7O0FBRUE7UUFDSSxZQUFZO0lBQ2hCIiwiZmlsZSI6IndlYXBvbi1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "BDYc":
/*!************************************************!*\
  !*** ./src/app/services/References.service.ts ***!
  \************************************************/
/*! exports provided: treeEntry, ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeEntry", function() { return treeEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return ReferencesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/Tasks */ "OhDg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





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
class ReferencesService {
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
        this.treeLock = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_2__["MutexLock"]();
        this.refreshAsync();
    }
    buildActionTreeAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_2__["whenTrue"])(() => this.ActionGroups != null);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._actionTree == null) {
                yield this.treeLock.LockAreaAsync(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
ReferencesService.ɵfac = function ReferencesService_Factory(t) { return new (t || ReferencesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_1__["ReferenceRepository"])); };
ReferencesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ReferencesService, factory: ReferencesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BOMn":
/*!********************************************************!*\
  !*** ./src/app/components/game/game-list.component.ts ***!
  \********************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function GameListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GameListComponent_table_9_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameListComponent_table_9_tr_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const game_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.selectGame(game_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](game_r3 == null ? null : game_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", game_r3 == null ? null : game_r3.currentTime.toFixed(2), ")");
} }
function GameListComponent_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GameListComponent_table_9_tr_4_Template, 5, 2, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.games);
} }
/** Game component*/
class GameListComponent {
    /** character ctor */
    constructor(gameRepo, encounterService) {
        this.gameRepo = gameRepo;
        this.encounterService = encounterService;
        this.games = new Array();
        this.refresh = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.games = await this.gameRepo.getGamesAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectGame = (gameId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
GameListComponent.ɵfac = function GameListComponent_Factory(t) { return new (t || GameListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"])); };
GameListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GameListComponent, selectors: [["game-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 2, consts: [[1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["class", "table table-striped", 4, "ngIf"], [1, "table", "table-striped"], [2, "vertical-align", "middle"], [4, "ngFor", "ngForOf"], [2, "white-space", "nowrap"], [3, "click"]], template: function GameListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GameListComponent_p_1_Template, 3, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameListComponent_Template_button_click_5_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Games ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameListComponent_table_9_Template, 5, 1, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.area[_ngcontent-%COMP%] {\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    \r\n}\r\n\r\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxlQUFlO0lBQ25COztBQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFQTtRQUNJLFlBQVk7SUFDaEIiLCJmaWxlIjoiZ2FtZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIC8qd2lkdGg6IDEyMHB4OyovXHJcbn1cclxuXHJcbiAgICAubWFpbkxpc3QgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluTGlzdCB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "BxP+":
/*!********************************************!*\
  !*** ./src/app/elements/treeview/index.ts ***!
  \********************************************/
/*! exports provided: TreeNode, TreeModel, TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itreenode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itreenode */ "9P4t");
/* empty/unused harmony star reexport *//* harmony import */ var _treemodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemodel */ "4sM6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _treemodel__WEBPACK_IMPORTED_MODULE_1__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return _treemodel__WEBPACK_IMPORTED_MODULE_1__["TreeModel"]; });

/* harmony import */ var _treeview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeview.component */ "H+gZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return _treeview_component__WEBPACK_IMPORTED_MODULE_2__["TreeviewComponent"]; });






/***/ }),

/***/ "D3CN":
/*!****************************************************!*\
  !*** ./src/app/repositories/Actions.repository.ts ***!
  \****************************************************/
/*! exports provided: ActionsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return ActionsRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class ActionsRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["BaseAction"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
ActionsRepository.ɵfac = function ActionsRepository_Factory(t) { return new (t || ActionsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ActionsRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ActionsRepository, factory: ActionsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "E5GF":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/main-nav-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return MainNavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a1) { return ["/encounter", a1]; };
function MainNavMenuComponent_li_4_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, game_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", game_r4.gameTypeString, " - ", game_r4.name, "");
} }
const _c1 = function () { return ["/creatures"]; };
function MainNavMenuComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Encounters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Create New Encounter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MainNavMenuComponent_li_4_li_7_Template, 3, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.games);
} }
function MainNavMenuComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Creature Compendium");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return ["/mycreatures"]; };
function MainNavMenuComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "My Creatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/home"]; };
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticationService.currentUser.subscribe((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
MainNavMenuComponent.ɵfac = function MainNavMenuComponent_Factory(t) { return new (t || MainNavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_2__["GamesRepository"])); };
MainNavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainNavMenuComponent, selectors: [["main-nav-menu"]], decls: 7, vars: 5, consts: [[1, "navbar-nav", "flex-grow-1"], [1, "nav-item"], [1, "nav-link", "text-dark", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], ["data-toggle", "dropdown", "href", "#", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"]], template: function MainNavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainNavMenuComponent_li_4_Template, 8, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainNavMenuComponent_li_5_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MainNavMenuComponent_li_6_Template, 3, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW5hdi1tZW51LmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "ENlw":
/*!*****************************************!*\
  !*** ./src/app/elements/modal/index.ts ***!
  \*****************************************/
/*! exports provided: ModalService, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "N7ID");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });

/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "dTjC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });





/***/ }),

/***/ "EvQ2":
/*!*******************************************!*\
  !*** ./src/app/services/Alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helpers_DateEx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/_helpers/DateEx */ "1dmr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
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
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FgmV":
/*!*************************************!*\
  !*** ./src/app/navigation/index.ts ***!
  \*************************************/
/*! exports provided: MainNavMenuComponent, SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-menu/index */ "WowU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_index__WEBPACK_IMPORTED_MODULE_0__["MainNavMenuComponent"]; });

/* harmony import */ var _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-menu/index */ "R3o7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_index__WEBPACK_IMPORTED_MODULE_1__["SideNavMenuComponent"]; });





/***/ }),

/***/ "GDwD":
/*!********************************************!*\
  !*** ./src/app/entities/CriticalIgnore.ts ***!
  \********************************************/
/*! exports provided: CriticalIgnore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalIgnore", function() { return CriticalIgnore; });
class CriticalIgnore {
    constructor() {
    }
}


/***/ }),

/***/ "GE8w":
/*!***************************************!*\
  !*** ./src/app/entities/UserModel.ts ***!
  \***************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
    constructor() {
    }
}


/***/ }),

/***/ "GEJ1":
/*!*****************************************************!*\
  !*** ./src/app/components/actor/actor.component.ts ***!
  \*****************************************************/
/*! exports provided: ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return ActorComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





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
}
ActorComponent.ɵfac = function ActorComponent_Factory(t) { return new (t || ActorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["EncounterService"])); };
ActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ActorComponent, selectors: [["app-actor"]], decls: 2, vars: 0, consts: [[2, "border", "1px solid red"]], template: function ActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "actor Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "H+gZ":
/*!*********************************************************!*\
  !*** ./src/app/elements/treeview/treeview.component.ts ***!
  \*********************************************************/
/*! exports provided: TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers */ "XgRA");
/* harmony import */ var _treemodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treemodel */ "4sM6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["options"];
function TreeviewComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function TreeviewComponent_ng_template_3_ul_0_li_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0, a2, a3) { return { $implicit: a0, role: "group", treeid: a2, parentid: a3 }; };
function TreeviewComponent_ng_template_3_ul_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeviewComponent_ng_template_3_ul_0_li_2_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const item_r11 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.toggleSelection($event, item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TreeviewComponent_ng_template_3_ul_0_li_2_ng_container_7_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const treeid_r5 = ctx_r17.treeid;
    const list_r3 = ctx_r17.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r10.getTreeItemId(item_r11, treeid_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-code", item_r11[ctx_r10.model.cid])("data-childcount", ctx_r10.getChildCount(item_r11))("data-isSelected", item_r11.isSelected)("data-isOpen", item_r11.isOpen)("data-index", i_r12)("data-first", i_r12 == 0 ? 1 : 0)("data-last", i_r12 == list_r3.length - 1 ? 1 : 0)("aria-expanded", ctx_r10.collapsedState(item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r10.getIconId(item_r11, treeid_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.getExpandCollapseClass(item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11[ctx_r10.model.lid]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](14, _c1, item_r11.children, ctx_r10.model.treeNodeId, item_r11.code));
} }
function TreeviewComponent_ng_template_3_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TreeviewComponent_ng_template_3_ul_0_li_2_Template, 8, 18, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const treeid_r5 = ctx_r18.treeid;
    const parentid_r6 = ctx_r18.parentid;
    const role_r4 = ctx_r18.role;
    const list_r3 = ctx_r18.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "treeView_ul_", treeid_r5, "_", parentid_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", role_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r3);
} }
function TreeviewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TreeviewComponent_ng_template_3_ul_0_Template, 3, 4, "ul", 4);
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isChildrenExists(list_r3));
} }
const _c2 = function (a0, a2) { return { $implicit: a0, role: "tree", treeid: a2, parentid: "root", lid: "0" }; };
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
TreeviewComponent.ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
TreeviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TreeviewComponent, selectors: [["app-treeview"]], viewQuery: function TreeviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, inputs: { treeModel: "treeModel" }, outputs: { onSelect: "onSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "tree-view"], [1, "tree-view-inner"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["treeViewList", ""], [3, "id", 4, "ngIf"], [3, "id"], ["ultags", ""], ["role", "treeitem", 3, "id", 4, "ngFor", "ngForOf"], ["role", "treeitem", 3, "id"], ["options", ""], [1, "treeNodeText", 3, "click"], [1, "material-icons", 3, "id"], [1, "tree-item-label"]], template: function TreeviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TreeviewComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TreeviewComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, ctx.items, ctx.model.treeNodeId));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVldmlldy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "H0oy":
/*!************************************************************!*\
  !*** ./src/app/api-authorization/authorize.interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthorizeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeInterceptor", function() { return AuthorizeInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthorizeInterceptor {
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
}
AuthorizeInterceptor.ɵfac = function AuthorizeInterceptor_Factory(t) { return new (t || AuthorizeInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AuthorizeInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthorizeInterceptor, factory: AuthorizeInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Hk92":
/*!****************************************************************!*\
  !*** ./src/app/components/creature/creature-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatureEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureEditComponent", function() { return CreatureEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/modal/modal.service */ "N7ID");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_attack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/attack */ "9keA");








var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_6__["EnumDefinitions"].GameType;







function CreatureEditComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreatureEditComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreatureEditComponent_div_0_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", level_r20 == null ? null : level_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r20 == null ? null : level_r20.name, " ");
} }
function CreatureEditComponent_div_0_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r21 == null ? null : item_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r21 == null ? null : item_r21.abbreviation, " (", item_r21 == null ? null : item_r21.name, ") ");
} }
function CreatureEditComponent_div_0_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r22 == null ? null : item_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r22 == null ? null : item_r22.abbreviation, " (", item_r22 == null ? null : item_r22.name, ") ");
} }
function CreatureEditComponent_div_0_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r23 == null ? null : item_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r23 == null ? null : item_r23.abbreviation, " (", item_r23 == null ? null : item_r23.name, ") ");
} }
function CreatureEditComponent_div_0_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a distance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreatureEditComponent_div_0_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r24 == null ? null : item_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r24 == null ? null : item_r24.abbreviation, " (", item_r24 == null ? null : item_r24.name, ") ");
} }
function CreatureEditComponent_div_0_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter hit points ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreatureEditComponent_div_0_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r25 == null ? null : item_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r25 == null ? null : item_r25.code, " ");
} }
function CreatureEditComponent_div_0_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r26 == null ? null : item_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r26 == null ? null : item_r26.abbreviation, " (", item_r26 == null ? null : item_r26.name, ") ");
} }
function CreatureEditComponent_div_0_option_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r27 == null ? null : item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r27 == null ? null : item_r27.abbreviation, " (", item_r27 == null ? null : item_r27.name, ") ");
} }
function CreatureEditComponent_div_0_button_118_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreatureEditComponent_div_0_button_118_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.addToEncounter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add To Encounter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreatureEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.creature.typeName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CreatureEditComponent_div_0_div_12_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_textarea_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.creature.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Base Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.creature.baseLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CreatureEditComponent_div_0_div_25_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.creature.levelMod_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CreatureEditComponent_div_0_option_30_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.creature.size_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, CreatureEditComponent_div_0_option_35_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Movement Speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.creature.msRating_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CreatureEditComponent_div_0_option_41_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Attack Quickness");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.creature.aqRating_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CreatureEditComponent_div_0_option_46_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Base Move");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.creature.baseMove = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CreatureEditComponent_div_0_div_54_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Max Pace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.creature.maxPace_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CreatureEditComponent_div_0_option_59_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Moving Maneuver Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 23, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.creature.mmBonus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Base Hits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.creature.baseHits = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CreatureEditComponent_div_0_div_72_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.creature.hitMod_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, CreatureEditComponent_div_0_option_77_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Criticals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.creature.criticals_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, CreatureEditComponent_div_0_option_83_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Criticals Ignored");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_select_ngModelChange_87_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.creature.criticalsIgnore_ID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, CreatureEditComponent_div_0_option_88_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "AT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_93_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.creature.at = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "DB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_97_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.creature.db = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Numbers Encountered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_105_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.creature.minEncountered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreatureEditComponent_div_0_Template_input_ngModelChange_109_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.creature.maxEncountered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "attack-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDelete", function CreatureEditComponent_div_0_Template_attack_list_onDelete_112_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.onAttackDeleted($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreatureEditComponent_div_0_Template_button_click_114_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.closeEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreatureEditComponent_div_0_Template_button_click_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r51.saveCreature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CreatureEditComponent_div_0_button_118_Template, 2, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](53);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](71);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.creature == null ? null : ctx_r0.creature.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.baseLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.levelMod_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.LevelCharts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.size_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.SizeRatings);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.msRating_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.SpeedCharts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.aqRating_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.SpeedCharts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.baseMove);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r10.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.maxPace_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.Paces);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.mmBonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.baseHits);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r14.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.hitMod_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.ConstitutionBonusCharts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.criticals_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.CriticalCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.criticalsIgnore_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.referencesService.CriticalIgnores);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.at);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.db);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.minEncountered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.creature.maxEncountered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("attacks", ctx_r0.creature.attacks)("creatureId", ctx_r0.creature.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.hasCurrentGame);
} }
/** CreatureEdit component*/
class CreatureEditComponent {
    constructor(encounterService, creatureRepo, modalService, referencesService) {
        this.encounterService = encounterService;
        this.creatureRepo = creatureRepo;
        this.modalService = modalService;
        this.referencesService = referencesService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveCreature = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.creature.gameType = this.encounterService.systemSettings.gameSystem;
            var g = yield this.creatureRepo.saveCreatureAsync(this.creature);
            if (!this.creature.id) {
                this.creature.id = g.id;
            }
            this.onSave.emit(this.creature);
        });
    }
    get isRolemaster() {
        var _a;
        return ((_a = this.encounterService.currentGame) === null || _a === void 0 ? void 0 : _a.gameType) == GameType.RMSS;
    }
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
}
CreatureEditComponent.ɵfac = function CreatureEditComponent_Factory(t) { return new (t || CreatureEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["EncounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["CreaturesRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_elements_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"])); };
CreatureEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreatureEditComponent, selectors: [["app-creature-edit"]], inputs: { creature: "creature" }, outputs: { onDelete: "onDelete", onSave: "onSave" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["charForm", "ngForm"], [1, "row"], [1, "form-group", "col-sm-6"], ["name", "typeName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-sm-3"], [1, "col-sm-4", 2, "padding", "0"], ["name", "baseLevel", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["level", "ngModel"], [1, "col-sm-5", 2, "padding", "0"], ["name", "selectedLevel", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "selectedSize", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-6", 2, "padding", "0"], ["name", "selectedMS", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectedAQ", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "baseMove", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["move", "ngModel"], ["name", "selectedPace", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-sm-1"], ["name", "MMBonus", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "baseHits", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["hits", "ngModel"], ["name", "selectedHitMod", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectedCritical", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectedCriticalIgnore", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "at", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "baseMin", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "baseMax", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-sm-12"], [3, "attacks", "creatureId", "onDelete"], [1, "text-center", "pt-2"], [1, "btn", "btn-outline-primary", "pull-left", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "btn btn-primary pull-right", 3, "click", 4, "ngIf"], [1, "text-danger"], [3, "value"], [1, "btn", "btn-primary", "pull-right", 3, "click"]], template: function CreatureEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CreatureEditComponent_div_0_Template, 119, 35, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.creature);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_attack__WEBPACK_IMPORTED_MODULE_9__["AttackListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"]], styles: ["label[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0dXJlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjcmVhdHVyZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Hu4O":
/*!******************************************!*\
  !*** ./src/app/entities/CriticalCode.ts ***!
  \******************************************/
/*! exports provided: CriticalCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalCode", function() { return CriticalCode; });
class CriticalCode {
    constructor() {
    }
}


/***/ }),

/***/ "IbcZ":
/*!*********************************************!*\
  !*** ./src/app/entities/EnumDefinitions.ts ***!
  \*********************************************/
/*! exports provided: EnumDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return EnumDefinitions; });
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
    let MessageTypeEnum;
    (function (MessageTypeEnum) {
        MessageTypeEnum[MessageTypeEnum["Normal"] = 0] = "Normal";
        MessageTypeEnum[MessageTypeEnum["Warning"] = 1] = "Warning";
        MessageTypeEnum[MessageTypeEnum["Alert"] = 2] = "Alert";
    })(MessageTypeEnum = EnumDefinitions.MessageTypeEnum || (EnumDefinitions.MessageTypeEnum = {}));
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
        DamageLevel[DamageLevel["Unconscious"] = 4] = "Unconscious";
        DamageLevel[DamageLevel["Dead"] = 5] = "Dead";
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

/***/ "IzMf":
/*!********************************************!*\
  !*** ./src/app/top/home/home.component.ts ***!
  \********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full}`;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 7, vars: 1, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Combat Environment Activity Tracking System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CEATSii second by second, threaded combat system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx.name, "");
    } }, encapsulation: 2 });


/***/ }),

/***/ "J+1U":
/*!*****************************************!*\
  !*** ./src/app/entities/ActionGroup.ts ***!
  \*****************************************/
/*! exports provided: ActionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return ActionGroup; });
class ActionGroup {
    constructor() {
    }
}


/***/ }),

/***/ "J0JI":
/*!**********************************************************************!*\
  !*** ./src/app/api-authorization/login-menu/login-menu.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMenuComponent", function() { return LoginMenuComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["/authentication/profile"]; };
const _c1 = function () { return ["/authentication/logout"]; };
const _c2 = function () { return { local: true }; };
function LoginMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hello ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, ctx_r0.userName), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1))("state", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));
} }
const _c3 = function () { return ["/authentication/register"]; };
const _c4 = function () { return ["/authentication/login"]; };
function LoginMenuComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c4));
} }
class LoginMenuComponent {
    constructor(authorizeService) {
        this.authorizeService = authorizeService;
    }
    ngOnInit() {
        this.isAuthenticated = this.authorizeService.isAuthenticated();
        this.userName = this.authorizeService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(u => u && u.userName));
    }
}
LoginMenuComponent.ɵfac = function LoginMenuComponent_Factory(t) { return new (t || LoginMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
LoginMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginMenuComponent, selectors: [["app-login-menu"]], decls: 4, vars: 6, consts: [["class", "navbar-nav", 4, "ngIf"], [1, "navbar-nav"], [1, "nav-item"], ["title", "Manage", 1, "nav-link", "text-dark", 3, "routerLink"], ["title", "Logout", 1, "nav-link", "text-dark", 3, "routerLink", "state"], [1, "nav-link", "text-dark", 3, "routerLink"]], template: function LoginMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginMenuComponent_ul_0_Template, 8, 9, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginMenuComponent_ul_2_Template, 7, 4, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.isAuthenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.isAuthenticated));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1tZW51LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JFVv":
/*!******************************************************!*\
  !*** ./src/app/repositories/Reference.repository.ts ***!
  \******************************************************/
/*! exports provided: ReferenceRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return ReferenceRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");























var version = "1";
class ReferenceRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ActionGroup"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ActionDefinition"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ConstitutionBonusChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalCode"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalIgnore"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["IQ"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["LevelChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Outlook"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Pace"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["SizeRating"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["SpeedChart"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["AttackType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["WeaponType"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Book"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["PsychicRefractoryPeriodEntry"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
ReferenceRepository.ɵfac = function ReferenceRepository_Factory(t) { return new (t || ReferenceRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ReferenceRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ReferenceRepository, factory: ReferenceRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KAYu":
/*!******************************************************!*\
  !*** ./src/app/repositories/Creatures.repository.ts ***!
  \******************************************************/
/*! exports provided: CreaturesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return CreaturesRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class CreaturesRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Creature"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Creature"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Creature"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
CreaturesRepository.ɵfac = function CreaturesRepository_Factory(t) { return new (t || CreaturesRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
CreaturesRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CreaturesRepository, factory: CreaturesRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KNU+":
/*!********************************************!*\
  !*** ./src/app/components/weapon/index.ts ***!
  \********************************************/
/*! exports provided: WeaponListComponent, WeaponEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weapon-list.component */ "AuKT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponListComponent", function() { return _weapon_list_component__WEBPACK_IMPORTED_MODULE_0__["WeaponListComponent"]; });

/* harmony import */ var _weapon_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weapon-edit.component */ "O1Ko");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponEditComponent", function() { return _weapon_edit_component__WEBPACK_IMPORTED_MODULE_1__["WeaponEditComponent"]; });





/***/ }),

/***/ "LXoR":
/*!**************************************************************!*\
  !*** ./src/app/api-authorization/logout/logout.component.ts ***!
  \**************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
class LogoutComponent {
    constructor(authorizeService, activatedRoute, router) {
        this.authorizeService = authorizeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authorizeService.logoutAsync();
            this.router.navigateByUrl("/");
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Linz":
/*!***********************************************!*\
  !*** ./src/app/components/character/index.ts ***!
  \***********************************************/
/*! exports provided: CharacterListComponent, CharacterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-list.component */ "eSPr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return _character_list_component__WEBPACK_IMPORTED_MODULE_0__["CharacterListComponent"]; });

/* harmony import */ var _character_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-edit.component */ "/ZrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterEditComponent", function() { return _character_edit_component__WEBPACK_IMPORTED_MODULE_1__["CharacterEditComponent"]; });





/***/ }),

/***/ "Lknk":
/*!****************************************!*\
  !*** ./src/app/entities/BaseAction.ts ***!
  \****************************************/
/*! exports provided: BaseAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAction", function() { return BaseAction; });
class BaseAction {
    constructor() {
    }
}


/***/ }),

/***/ "LmOb":
/*!**************************************************!*\
  !*** ./src/app/repositories/Games.repository.ts ***!
  \**************************************************/
/*! exports provided: GamesRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return GamesRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class GamesRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Game"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Game"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
GamesRepository.ɵfac = function GamesRepository_Factory(t) { return new (t || GamesRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
GamesRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GamesRepository, factory: GamesRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "M8pr":
/*!**************************************************!*\
  !*** ./src/app/repositories/Users.repository.ts ***!
  \**************************************************/
/*! exports provided: UsersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return UsersRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class UsersRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["ApplicationUser"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
UsersRepository.ɵfac = function UsersRepository_Factory(t) { return new (t || UsersRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
UsersRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UsersRepository, factory: UsersRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MVLF":
/*!************************************************************!*\
  !*** ./src/app/repositories/CriticalEffects.repository.ts ***!
  \************************************************************/
/*! exports provided: CriticalEffectsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return CriticalEffectsRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class CriticalEffectsRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalEffect"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalEffect"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["CriticalEffect"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
CriticalEffectsRepository.ɵfac = function CriticalEffectsRepository_Factory(t) { return new (t || CriticalEffectsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
CriticalEffectsRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CriticalEffectsRepository, factory: CriticalEffectsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "N7ID":
/*!*************************************************!*\
  !*** ./src/app/elements/modal/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
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

/***/ "O1Ko":
/*!************************************************************!*\
  !*** ./src/app/components/weapon/weapon-edit.component.ts ***!
  \************************************************************/
/*! exports provided: WeaponEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponEditComponent", function() { return WeaponEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var GameType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_4__["EnumDefinitions"].GameType;





function WeaponEditComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeaponEditComponent_div_0_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeaponEditComponent_div_0_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ATK Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeaponEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Weapon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Weapon Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponEditComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.weapon.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WeaponEditComponent_div_0_div_10_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponEditComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.weapon.bonus = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WeaponEditComponent_div_0_label_17_Template, 2, 0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WeaponEditComponent_div_0_label_18_Template, 2, 0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponEditComponent_div_0_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.weapon.ob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponEditComponent_div_0_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.weapon.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeaponEditComponent_div_0_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.weapon.is2Handed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Is 2 Handed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeaponEditComponent_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weapon.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weapon.bonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isRolemaster);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weapon.ob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weapon.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weapon.is2Handed);
} }
/** WeaponEdit component*/
class WeaponEditComponent {
    /** ArmorEdit ctor */
    constructor(combatRepo, encounterService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isRolemaster() {
        var _a;
        return ((_a = this.encounterService.currentGame) === null || _a === void 0 ? void 0 : _a.gameType) == GameType.RMSS;
    }
    delete() {
        this.onDelete.emit(this.weapon);
    }
}
WeaponEditComponent.ɵfac = function WeaponEditComponent_Factory(t) { return new (t || WeaponEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_2__["CombatRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"])); };
WeaponEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeaponEditComponent, selectors: [["app-weapon-edit"]], inputs: { weapon: "weapon" }, outputs: { onDelete: "onDelete" }, decls: 1, vars: 1, consts: [["class", "edit-area", 4, "ngIf"], [1, "edit-area"], [1, "form-group", "full-row"], ["for", "type", 1, "control-label"], [1, "control-area"], ["name", "name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "half-row"], ["for", "bonus", 1, "control-label"], [1, "control-area", "control-area-number"], ["name", "db", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "ob", "class", "control-label", 4, "ngIf"], ["name", "ob", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "weight", 1, "control-label"], ["name", "weight", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "is2Handed", 1, "control-label", 2, "width", "100%"], ["type", "checkbox", "name", "is2Handed", 1, "form-control", 2, "width", "auto", "display", "inline-block", 3, "ngModel", "ngModelChange"], [1, "text-center", "pt-2"], [1, "btn", "btn-danger", "btn-sm", "pull-right", 3, "click"], [1, "text-danger"], ["for", "ob", 1, "control-label"]], template: function WeaponEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeaponEditComponent_div_0_Template, 34, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]], styles: [".edit-area[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n}\r\n.full-row[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.half-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 50%;\r\n}\r\n.control-label[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n    text-align: right;\r\n    padding-right: 5px;\r\n}\r\n.full-row[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%] {\r\n    width: 89px;\r\n    width: 76px;\r\n}\r\n.control-area[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    display: inline-block;\r\n}\r\n.full-row[_ngcontent-%COMP%]   .control-area[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n    width: 108px;\r\n}\r\n.control-area-number[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXBvbi1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoid2VhcG9uLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWFyZWEge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG59XHJcbi5mdWxsLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oYWxmLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uZnVsbC1yb3cgLmNvbnRyb2wtbGFiZWwge1xyXG4gICAgd2lkdGg6IDg5cHg7XHJcbiAgICB3aWR0aDogNzZweDtcclxufVxyXG4uY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5mdWxsLXJvdyAuY29udHJvbC1hcmVhIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgd2lkdGg6IDEwOHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1hcmVhLW51bWJlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "OhDg":
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.WhenTrueAsync(() => {
                return !this.isLocked;
            });
            return;
        });
    }
    LockAreaAsync(func) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.BeginLock();
            try {
                yield func();
            }
            catch (_a) {
            }
            yield this.EndLock();
        });
    }
    BeginLock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.callback) {
                yield this.refreshLock.LockAreaAsync(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.callback();
                }));
                //await this.refreshLock.BeginLock();
                //try {
                //this.callback();
                //} catch {}
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
        var obj = new RecurringTask(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        var tot = list.length;
        var fin = 0;
        list.forEach((p) => {
            p.then(() => {
                fin++;
                if (progressCB) {
                    try {
                        progressCB(fin, tot);
                    }
                    catch (_a) {
                    }
                }
            });
        });
        return yield Promise.all(list);
    });
}
//}


/***/ }),

/***/ "P5wN":
/*!****************************************!*\
  !*** ./src/app/entities/WeaponType.ts ***!
  \****************************************/
/*! exports provided: WeaponType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponType", function() { return WeaponType; });
class WeaponType {
    constructor() {
    }
}


/***/ }),

/***/ "Qx8O":
/*!**********************************!*\
  !*** ./src/app/entities/Dice.ts ***!
  \**********************************/
/*! exports provided: Dice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
class Dice {
    constructor() {
    }
}


/***/ }),

/***/ "R3o7":
/*!***************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/index.ts ***!
  \***************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-menu.component */ "VM4C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return _side_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__["SideNavMenuComponent"]; });




/***/ }),

/***/ "RPtA":
/*!****************************************************!*\
  !*** ./src/app/top/creature/creature.component.ts ***!
  \****************************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return CreatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/** creature component*/
class CreatureComponent {
    /** creature ctor */
    constructor() {
    }
}
CreatureComponent.ɵfac = function CreatureComponent_Factory(t) { return new (t || CreatureComponent)(); };
CreatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatureComponent, selectors: [["creature"]], decls: 2, vars: 0, consts: [[2, "border", "1px solid red"]], template: function CreatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "creature Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdHVyZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Re44":
/*!*****************************************!*\
  !*** ./src/app/elements/alert/index.ts ***!
  \*****************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "8YJP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "TOx3":
/*!**************************************!*\
  !*** ./src/app/_helpers/LinqToJs.ts ***!
  \**************************************/
/*! exports provided: Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return Queryable; });
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
//insert: (item: T, index?: number) => void
Array.prototype.insert = function (item, index) {
    var arr2 = this;
    index = index || 0;
    arr2.splice(index, 0, item);
};


/***/ }),

/***/ "TleJ":
/*!**********************************!*\
  !*** ./src/app/entities/Game.ts ***!
  \**********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor() {
    }
}


/***/ }),

/***/ "TzkZ":
/*!****************************************************!*\
  !*** ./src/app/services/Authentication.service.ts ***!
  \****************************************************/
/*! exports provided: ApplicationName, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return ApplicationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");




//import { User, UserManager, WebStorageStateStore } from 'oidc-client';






const ApplicationName = 'CEATSiiApp';
class AuthenticationService {
    constructor(http, userRepository) {
        this.http = http;
        this.userRepository = userRepository;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSubject.asObservable();
        ////debugger;
        this.refreshUserAsync();
    }
    isAuthenticated() {
        return this.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => !!u));
    }
    getAccessToken() {
        //var obs = new Observable<string>();
        //obs.
        //obs.next()
        return "";
    }
    currentUserAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var p = new Promise((resolve, reject) => {
                this.currentUser.subscribe((user) => {
                    resolve(user);
                });
            });
            return p;
        });
    }
    refreshUserAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(10);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var user = yield this.userRepository.registerAsync(data);
            this.currentUserSubject.next(user);
            return user;
        });
    }
    loginAsync(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var auth = new _entities__WEBPACK_IMPORTED_MODULE_5__["AuthenticateModel"]();
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userRepository.logout();
            // remove user from local storage and set current user to null
            //localStorage.removeItem('currentUser');
            //await this.logoutAuthAsync();
            this.currentUserSubject.next(null);
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_4__["UsersRepository"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VM4C":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/side-nav-menu/side-nav-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: SideNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavMenuComponent", function() { return SideNavMenuComponent; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/home"]; };
/** side-nav-menu component*/
class SideNavMenuComponent {
    /** side-nav-menu ctor */
    constructor(gameView, authenticationService) {
        this.gameView = gameView;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
}
SideNavMenuComponent.ɵfac = function SideNavMenuComponent_Factory(t) { return new (t || SideNavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__["EncounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"])); };
SideNavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideNavMenuComponent, selectors: [["side-nav-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services__WEBPACK_IMPORTED_MODULE_0__["EncounterService"]])], decls: 8, vars: 2, consts: [[1, "main-nav"], [1, ""], [1, "navbar-brand", 3, "routerLink"], [1, "clearfix"]], template: function SideNavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CEATSii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["li[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nli[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.main-nav[_ngcontent-%COMP%] {\n  \n  z-index: 1;\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n}\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: transparent;\n  cursor: pointer;\n}\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.link-active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.link-active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.link-active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  background-color: #4189C7;\n  color: white;\n}\n@media (min-width: 768px) {\n  \n  .main-nav[_ngcontent-%COMP%] {\n    height: 100%;\n    \n  }\n  .navbar[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    border-width: 0px;\n    height: 100%;\n  }\n  .navbar-header[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .navbar-collapse[_ngcontent-%COMP%] {\n    border-top: 1px solid #444;\n    padding: 0px;\n  }\n  .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: none;\n    font-size: 15px;\n    margin: 6px;\n  }\n  .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    border-radius: 4px;\n  }\n  .navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    \n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LW1lbnUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQ0EsMENBQTBDO0FBRzFDO0VBQ0UsaUJBQUE7QUFERjtBQUNBLHlFQUF5RTtBQUl6RTtFQUZFOzs7Y0FHWTtFQUlaLFVBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtBQUhGO0FBTUE7RUFDRSxjQUFBO0FBSkY7QUFPQTs7RUFFRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBTEY7QUFRQTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0FBTkY7QUFVQTtFQVJFLGlFQUFpRTtFQVVqRTtJQUNFLFlBQUE7SUFSQSwyQkFBMkI7RUFDN0I7RUFXQTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBVEY7RUFZQTtJQUNFLFdBQUE7RUFWRjtFQWFBO0lBQ0UsMEJBQUE7SUFDQSxZQUFBO0VBWEY7RUFjQTtJQUNFLFdBQUE7RUFaRjtFQWVBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VBYkY7RUFnQkE7SUFDRSxlQUFBO0VBZEY7RUFpQkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBZkY7RUFrQkE7SUFoQkUsbURBQW1EO0lBa0JuRCxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBaEJGO0FBQ0YiLCJmaWxlIjoic2lkZS1uYXYtbWVudS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cblxubGkgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cbi5tYWluLW5hdiB7XG4gIC8qcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwOyovXG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYXZiYXIgbGkgbGkge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpIGEge1xuICBjb2xvcjogIzlkOWQ5ZDtcbn1cblxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2ID4gbGkgYTpob3Zlcixcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiA+IGxpIGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpLmxpbmstYWN0aXZlID4gYSxcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaS5saW5rLWFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgbGkubGluay1hY3RpdmUgPiBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cbiAgLm1haW4tbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyp3aWR0aDogY2FsYygyNSUgLSAyMHB4KTsqL1xuICB9XG5cbiAgLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5uYXZiYXItaGVhZGVyIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5uYXZiYXIgdWwge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG5cbiAgLm5hdmJhciBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNnB4O1xuICB9XG5cbiAgLm5hdmJhciBsaSBsaSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLm5hdmJhciBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgLm5hdmJhciBhIHtcbiAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "WowU":
/*!***************************************************!*\
  !*** ./src/app/navigation/main-nav-menu/index.ts ***!
  \***************************************************/
/*! exports provided: MainNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav-menu.component */ "E5GF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainNavMenuComponent", function() { return _main_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__["MainNavMenuComponent"]; });




/***/ }),

/***/ "X6Q1":
/*!******************************************************************!*\
  !*** ./src/app/api-authorization/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function RegisterComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_div_9_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
} }
function RegisterComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_div_14_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.lastName.errors.required);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
} }
function RegisterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_div_24_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.email.errors.required);
} }
function RegisterComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegisterComponent_div_29_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RegisterComponent_div_29_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.password.errors.minlength);
} }
function RegisterComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 21);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
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
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            // stop here if form is invalid
            if (this.form.invalid) {
                return;
            }
            this.loading = true;
            var model = new _entities__WEBPACK_IMPORTED_MODULE_4__["RegisterModel"]();
            model.email = this.f.email.value;
            model.firstName = this.f.firstName.value;
            model.lastName = this.f.lastName.value;
            model.password = this.f.password.value;
            model.username = this.f.username.value;
            var u = yield this.accountService.registerAsync(model);
            this.router.navigateByUrl("/");
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["register"]], decls: 36, vars: 23, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstName"], ["type", "text", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName"], ["type", "text", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "../login", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RegisterComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, RegisterComponent_div_29_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, RegisterComponent_span_32_Template, 1, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "XMiX":
/*!**************************************!*\
  !*** ./src/app/entities/Creature.ts ***!
  \**************************************/
/*! exports provided: Creature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return Creature; });
class Creature {
    constructor() {
    }
}


/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ApiPathInterceptor, AuthGuard, ErrorInterceptor, JwtInterceptor, EnumEx, MutexLock, RecurringTask, delay, whenTrue, WhenAll, formatTimeSpan, formatDate, formatTime, Queryable, Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiPath.interceptor */ "6ZFG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPathInterceptor", function() { return _ApiPath_interceptor__WEBPACK_IMPORTED_MODULE_0__["ApiPathInterceptor"]; });

/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ "jfvi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"]; });

/* harmony import */ var _EnumEx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EnumEx */ "s0qf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return _EnumEx__WEBPACK_IMPORTED_MODULE_4__["EnumEx"]; });

/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tasks */ "OhDg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutexLock", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_5__["MutexLock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecurringTask", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_5__["RecurringTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_5__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "whenTrue", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_5__["whenTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhenAll", function() { return _Tasks__WEBPACK_IMPORTED_MODULE_5__["WhenAll"]; });

/* harmony import */ var _DateEx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateEx */ "1dmr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimeSpan", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_6__["formatTimeSpan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_6__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return _DateEx__WEBPACK_IMPORTED_MODULE_6__["formatTime"]; });

/* harmony import */ var _LinqToJs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinqToJs */ "TOx3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queryable", function() { return _LinqToJs__WEBPACK_IMPORTED_MODULE_7__["Queryable"]; });

/* harmony import */ var _SafeHtml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SafeHtml */ "qpIQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return _SafeHtml__WEBPACK_IMPORTED_MODULE_8__["Safe"]; });






//export * from './Lock';






/***/ }),

/***/ "YEH2":
/*!*******************************************!*\
  !*** ./src/app/components/actor/index.ts ***!
  \*******************************************/
/*! exports provided: ActorListComponent, ActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actor_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actor-list.component */ "9LiN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return _actor_list_component__WEBPACK_IMPORTED_MODULE_0__["ActorListComponent"]; });

/* harmony import */ var _actor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actor.component */ "GEJ1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorComponent", function() { return _actor_component__WEBPACK_IMPORTED_MODULE_1__["ActorComponent"]; });





/***/ }),

/***/ "YeGA":
/*!************************************************************!*\
  !*** ./src/app/api-authorization/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");

//import { AuthorizeService, AuthenticationResultStatus } from '../authorize.service';








function LoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function LoginComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 16);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
class LoginComponent {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loginForm = this.formBuilder.group({
                username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 11, consts: [[1, "container", 2, "max-width", "600px", "padding", "40px"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["routerLink", "/register", 1, "btn", "btn-link"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Yiwp":
/*!***********************************!*\
  !*** ./src/app/entities/Actor.ts ***!
  \***********************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
class Actor {
    constructor() {
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _approot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/approot */ "gToA");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/top/home */ "cHPc");
/* harmony import */ var _top_encounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/top/encounter */ "/kBA");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/top/creature */ "cm0Z");
/* harmony import */ var _top_character__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/top/character */ "4BjW");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/navigation */ "FgmV");
/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/game */ "iaMf");
/* harmony import */ var _components_character__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/character */ "Linz");
/* harmony import */ var _components_creature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/creature */ "3BZS");
/* harmony import */ var _components_armor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/armor */ "yJeN");
/* harmony import */ var _components_attack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/attack */ "9keA");
/* harmony import */ var _components_weapon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/weapon */ "KNU+");
/* harmony import */ var _components_encounter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/encounter */ "vkE2");
/* harmony import */ var _components_actor___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/actor/ */ "YEH2");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/elements */ "ZpKY");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/_helpers */ "XgRA");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./api-authorization/authorize.interceptor */ "H0oy");
/* harmony import */ var _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./api-authorization/api-authorization.module */ "6F1D");
/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/messages */ "x94+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");










//import { GameComponent } from '@/top/game';





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_approot__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [
        //{
        //    provide: 'BASE_URL',
        //    useFactory: getBaseUrl
        //},
        //{
        //  provide: 'BASE_URL',
        //  useFactory: getBaseUrl
        //},
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_20__["ApiPathInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _api_authorization_authorize_interceptor__WEBPACK_IMPORTED_MODULE_22__["AuthorizeInterceptor"],
            multi: true
        },
        //{
        //  provide: HTTP_INTERCEPTORS,
        //  useClass: JwtInterceptor,
        //  multi: true,
        //  deps: [AuthenticationService]
        //},
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _helpers__WEBPACK_IMPORTED_MODULE_20__["ErrorInterceptor"],
            multi: true,
            deps: [_services__WEBPACK_IMPORTED_MODULE_21__["AuthenticationService"]]
        },
        _services__WEBPACK_IMPORTED_MODULE_21__["EncounterService"],
        _services__WEBPACK_IMPORTED_MODULE_21__["EncounterHubService"],
        _services__WEBPACK_IMPORTED_MODULE_21__["AlertService"],
        _services__WEBPACK_IMPORTED_MODULE_21__["ReferencesService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            //NgbModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_23__["ApiAuthorizationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_top_home__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _top_encounter__WEBPACK_IMPORTED_MODULE_6__["EncounterComponent"],
        _top_creature__WEBPACK_IMPORTED_MODULE_7__["CreatureComponent"],
        _top_character__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"],
        _approot__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_game__WEBPACK_IMPORTED_MODULE_10__["GameListComponent"],
        _components_game__WEBPACK_IMPORTED_MODULE_10__["GameEditComponent"],
        _components_character__WEBPACK_IMPORTED_MODULE_11__["CharacterEditComponent"],
        _components_character__WEBPACK_IMPORTED_MODULE_11__["CharacterListComponent"],
        _components_creature__WEBPACK_IMPORTED_MODULE_12__["CreatureListComponent"],
        _components_creature__WEBPACK_IMPORTED_MODULE_12__["CreatureEditComponent"],
        _components_actor___WEBPACK_IMPORTED_MODULE_17__["ActorComponent"],
        _components_actor___WEBPACK_IMPORTED_MODULE_17__["ActorListComponent"],
        _top_encounter__WEBPACK_IMPORTED_MODULE_6__["EncounterComponent"],
        _components_armor__WEBPACK_IMPORTED_MODULE_13__["ArmorListComponent"],
        _components_armor__WEBPACK_IMPORTED_MODULE_13__["ArmorEditComponent"],
        _components_weapon__WEBPACK_IMPORTED_MODULE_15__["WeaponListComponent"],
        _components_weapon__WEBPACK_IMPORTED_MODULE_15__["WeaponEditComponent"],
        _elements__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
        _elements__WEBPACK_IMPORTED_MODULE_18__["TreeviewComponent"],
        _components_messages__WEBPACK_IMPORTED_MODULE_24__["MessageListComponent"],
        _components_attack__WEBPACK_IMPORTED_MODULE_14__["AttackListComponent"],
        _components_attack__WEBPACK_IMPORTED_MODULE_14__["AttackEditComponent"],
        _components_encounter__WEBPACK_IMPORTED_MODULE_16__["ActionsListComponent"],
        _components_encounter__WEBPACK_IMPORTED_MODULE_16__["ActionEditComponent"],
        _components_encounter__WEBPACK_IMPORTED_MODULE_16__["ActionComponent"],
        _elements__WEBPACK_IMPORTED_MODULE_18__["AlertComponent"],
        _navigation__WEBPACK_IMPORTED_MODULE_9__["MainNavMenuComponent"],
        _navigation__WEBPACK_IMPORTED_MODULE_9__["SideNavMenuComponent"],
        _helpers__WEBPACK_IMPORTED_MODULE_20__["Safe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        //NgbModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _api_authorization_api_authorization_module__WEBPACK_IMPORTED_MODULE_23__["ApiAuthorizationModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_components_character__WEBPACK_IMPORTED_MODULE_11__["CharacterListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_character__WEBPACK_IMPORTED_MODULE_11__["CharacterEditComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_components_armor__WEBPACK_IMPORTED_MODULE_13__["ArmorListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _components_armor__WEBPACK_IMPORTED_MODULE_13__["ArmorEditComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_components_weapon__WEBPACK_IMPORTED_MODULE_15__["WeaponListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _components_weapon__WEBPACK_IMPORTED_MODULE_15__["WeaponEditComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_components_attack__WEBPACK_IMPORTED_MODULE_14__["AttackListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], _components_attack__WEBPACK_IMPORTED_MODULE_14__["AttackEditComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_components_encounter__WEBPACK_IMPORTED_MODULE_16__["ActionsListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_encounter__WEBPACK_IMPORTED_MODULE_16__["ActionComponent"]], []);


/***/ }),

/***/ "ZpKY":
/*!***********************************!*\
  !*** ./src/app/elements/index.ts ***!
  \***********************************/
/*! exports provided: AlertComponent, ModalService, ModalComponent, TreeNode, TreeModel, TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/index */ "Re44");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_index__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/index */ "ENlw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_1__["ModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_index__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]; });

/* harmony import */ var _treeview_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treeview/index */ "BxP+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_2__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_2__["TreeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return _treeview_index__WEBPACK_IMPORTED_MODULE_2__["TreeviewComponent"]; });






/***/ }),

/***/ "aYhK":
/*!****************************************!*\
  !*** ./src/app/entities/MySettings.ts ***!
  \****************************************/
/*! exports provided: MySettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return MySettings; });
class MySettings {
    constructor() {
    }
}


/***/ }),

/***/ "axZv":
/*!*****************************************************!*\
  !*** ./src/app/repositories/Settings.repository.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return SettingsRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






var version = "1";
class SettingsRepository {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
SettingsRepository.ɵfac = function SettingsRepository_Factory(t) { return new (t || SettingsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
SettingsRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SettingsRepository, factory: SettingsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cHPc":
/*!***********************************!*\
  !*** ./src/app/top/home/index.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "IzMf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "cm0Z":
/*!***************************************!*\
  !*** ./src/app/top/creature/index.ts ***!
  \***************************************/
/*! exports provided: CreatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature.component */ "RPtA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatureComponent", function() { return _creature_component__WEBPACK_IMPORTED_MODULE_0__["CreatureComponent"]; });




/***/ }),

/***/ "dTjC":
/*!***************************************************!*\
  !*** ./src/app/elements/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "N7ID");





const _c0 = ["*"];
class ModalComponent {
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
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal"]], inputs: { id: "id", title: "title", width: "width" }, outputs: { openEvent: "openEvent", closedEvent: "closedEvent" }, ngContentSelectors: _c0, decls: 16, vars: 3, consts: [[1, "modal"], [1, "modal-content"], [1, "modal-header"], [2, "display", "inline-block", "margin-right", "60px"], [3, "innerHTML"], [2, "float", "right"], ["data-dismiss", "modal", "aria-hidden", "true", 1, "btn", "btn-default", 3, "click"], [1, "glyphicon", "glyphicon-remove-sign"], [1, "modal-body"], [1, "modal-footer"], [1, "modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dct0":
/*!******************************************************!*\
  !*** ./src/app/api-authorization/authorize.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthorizeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function() { return AuthorizeGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-authorization.constants */ "gGyZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { AuthorizeService } from './authorize.service';






class AuthorizeGuard {
    constructor(authorize, router) {
        this.authorize = authorize;
        this.router = router;
    }
    canActivate(_next, state) {
        return this.authorize.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
    }
    handleAuthorization(isAuthenticated, state) {
        if (!isAuthenticated) {
            this.router.navigate(_api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__["ApplicationPaths"].LoginPathComponents, {
                queryParams: {
                    [_api_authorization_constants__WEBPACK_IMPORTED_MODULE_3__["QueryParameterNames"].ReturnUrl]: state.url
                }
            });
        }
    }
}
AuthorizeGuard.ɵfac = function AuthorizeGuard_Factory(t) { return new (t || AuthorizeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AuthorizeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthorizeGuard, factory: AuthorizeGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ds92":
/*!**********************************!*\
  !*** ./src/app/entities/Book.ts ***!
  \**********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
class Book {
    constructor() {
    }
}


/***/ }),

/***/ "eSPr":
/*!******************************************************************!*\
  !*** ./src/app/components/character/character-list.component.ts ***!
  \******************************************************************/
/*! exports provided: CharacterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterListComponent", function() { return CharacterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







function CharacterListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CharacterListComponent_table_11_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterListComponent_table_11_tr_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const character_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.selectCharacter(character_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(", character_r3 == null ? null : character_r3.typeString, ") ", character_r3 == null ? null : character_r3.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", character_r3 == null ? null : character_r3.level, ") ");
} }
function CharacterListComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CharacterListComponent_table_11_tr_4_Template, 5, 3, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.characters);
} }
/** character component*/
class CharacterListComponent {
    /** character ctor */
    constructor(characterRepo, encounterService) {
        this.characterRepo = characterRepo;
        this.encounterService = encounterService;
        this.characters = new Array();
        this.refresh = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.characters = await this.characterRepo.getCharactersAsync(this.encounterService.systemSettings.gameSystem);
        });
        this.selectCharacter = (charId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
CharacterListComponent.ɵfac = function CharacterListComponent_Factory(t) { return new (t || CharacterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_1__["CharactersRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["EncounterService"])); };
CharacterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CharacterListComponent, selectors: [["character-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 3, consts: [[1, "wrapper"], [1, "area"], [1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0", "white-space", "nowrap"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["class", "table table-striped", 4, "ngIf"], [1, "edit"], [3, "character", "onDelete", "onSave"], [1, "table", "table-striped"], [2, "vertical-align", "middle"], [4, "ngFor", "ngForOf"], [2, "white-space", "nowrap"], [3, "click"]], template: function CharacterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CharacterListComponent_p_3_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterListComponent_Template_button_click_7_listener() { return ctx.newCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CharacterListComponent_table_11_Template, 5, 1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "app-character-edit", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onDelete", function CharacterListComponent_Template_app_character_edit_onDelete_13_listener($event) { return ctx.onCharacterDeleted($event); })("onSave", function CharacterListComponent_Template_app_character_edit_onSave_13_listener($event) { return ctx.onCharacterSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.characters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.characters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("character", ctx.selectedCharacter);
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.area[_ngcontent-%COMP%] {\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    \r\n}\r\n\r\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksWUFBWTtJQUNoQiIsImZpbGUiOiJjaGFyYWN0ZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1haW5MaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAvKndpZHRoOiAxMjBweDsqL1xyXG59XHJcblxyXG4gICAgLm1haW5MaXN0IGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbkxpc3QgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ "emqM":
/*!********************************************************!*\
  !*** ./src/app/components/game/game-edit.component.ts ***!
  \********************************************************/
/*! exports provided: GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return GameEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function GameEditComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GameEditComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.game.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GameEditComponent_div_0_div_11_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Current Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GameEditComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.game.currentTime = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "System Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GameEditComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.game.gameTypeString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameEditComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.closeEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameEditComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.saveGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameEditComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.selectEncounter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Open Encounter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Game: ", ctx_r0.game == null ? null : ctx_r0.game.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.game.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.game.currentTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.game.gameTypeString);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r1.invalid);
} }
/** GameEdit component*/
class GameEditComponent {
    constructor(router, gamesRepo, encounterService) {
        this.router = router;
        this.gamesRepo = gamesRepo;
        this.encounterService = encounterService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveGame = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
GameEditComponent.ɵfac = function GameEditComponent_Factory(t) { return new (t || GameEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_4__["GamesRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["EncounterService"])); };
GameEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameEditComponent, selectors: [["app-game-edit"]], inputs: { game: "game" }, outputs: { onDelete: "onDelete", onSave: "onSave" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["gameForm", "ngForm"], [1, "form-group"], ["name", "name", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", 2, "max-width", "100px"], ["name", "currentTime", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "gameType", "name", "gameType", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-center", "pt-2"], [1, "btn", "btn-outline-primary", "pull-left", 3, "click"], [1, "btn", "btn-danger", 3, "disabled", "click"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "text-danger"]], template: function GameEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GameEditComponent_div_0_Template, 27, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "eoJ3":
/*!************************************!*\
  !*** ./src/app/entities/Attack.ts ***!
  \************************************/
/*! exports provided: Attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return Attack; });
class Attack {
    constructor() {
    }
}


/***/ }),

/***/ "fIIe":
/*!***********************************************!*\
  !*** ./src/app/services/Encounter.service.ts ***!
  \***********************************************/
/*! exports provided: EncounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return EncounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Authentication.service */ "TzkZ");
/* harmony import */ var _EncounterHub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EncounterHub.service */ "otLY");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/_helpers/Tasks */ "OhDg");
/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./References.service */ "BDYc");
/* harmony import */ var _Alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alert.service */ "EvQ2");
/* harmony import */ var _helpers_LinqToJs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/_helpers/LinqToJs */ "TOx3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











var ResponseEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ResponseEnum;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ActionTypeEnum;
var ActorActionType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ActorActionType;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].CharacterType;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_1__["EnumDefinitions"].ViewTypeEnum;










class EncounterService {
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
        this.allMessages = new Array();
        this.refreshLock = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_6__["MutexLock"](30000);
        this._currentActionTree = null;
        //public selectedAction: BaseAction;
        //private _selectedActor: Actor;
        //private _selectedAction: BaseAction;
        this._timedService = new _helpers_Tasks__WEBPACK_IMPORTED_MODULE_6__["RecurringTask"](() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._alertService.success("Refreshing List");
            yield this.refreshAsync();
            this._alertService.success("List Refreshed");
        }), 60000, 120000);
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
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
            }
            catch (_a) {
            }
        });
    }
    selectActor(actorId) {
        this.selectedActor = this.actors.find((a) => a.id == actorId);
    }
    currentActionTreeAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var actor = this.selectedActor;
                this._currentActionTree = yield this.referenceService.getActionTreeAsync(actor);
            }
            catch (_a) {
            }
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.setCurrentGameAsync(gameId);
                yield this.refreshAsync();
            }
            catch (_a) {
            }
        });
    }
    setupEventsAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_6__["whenTrue"])(() => {
                return this.currentGame != null;
            });
            yield this.encounterHubService.registerForGame(this.currentGame.id);
            //
            //this.allActors = this.allActors.filter(item => actors.find((a) => a.id == item.id));
            this.encounterHubService.gameUpdated.subscribe((game) => {
                game = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["Game"](), game);
                this._currentGame = Object.assign(this._currentGame || {}, game);
                this.setActive();
            });
            this.encounterHubService.actionRemoved.subscribe((action) => {
                action = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["BaseAction"](), action);
                this.removeAction(action);
                this.setActive();
            });
            this.encounterHubService.actionUpdated.subscribe((action) => {
                action = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["BaseAction"](), action);
                this.refreshAction(action);
                this.setActive();
            });
            this.encounterHubService.actionsUpdated.subscribe((actions) => {
                actions = actions.map((act) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["BaseAction"](), act));
                this.refreshActions(actions);
                this.setActive();
            });
            this.encounterHubService.actorRemoved.subscribe((actor) => {
                actor = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["Actor"](), actor);
                this.removeActor(actor);
                this.setActive();
            });
            this.encounterHubService.actorUpdated.subscribe((actor) => {
                actor = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["Actor"](), actor);
                this.refreshActor(actor);
                this.setActive();
            });
            this.encounterHubService.actorsUpdated.subscribe((actors) => {
                actors = actors.map((act) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["Actor"](), act));
                this.refreshActors(actors);
                this.setActive();
            });
            this.encounterHubService.messageAdded.subscribe((msg) => {
                msg = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_2__["Message"](), msg);
                //msg.dateTimeStamp = new Date(msg.dateTimeStamp);
                this.allMessages.insert(msg);
                //this.allMessages.push(msg);
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.refreshLock.BeginLock();
            try {
                var game = yield this.encounterRepo.getCurrentGameAsync();
                if (game == null) {
                    this._alertService.error("List Refresh Error: Game returned null");
                    return;
                }
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
                    this.encounterRepo.getMessages().subscribe((msgs) => {
                        //debugger;
                        //msgs.forEach((msg) => {
                        //    msg.dateTimeStamp = new Date(msg.dateTimeStamp);
                        //});
                        this.allMessages = msgs;
                    });
                    //allMessages
                    yield Object(_helpers_Tasks__WEBPACK_IMPORTED_MODULE_6__["whenTrue"])(() => {
                        return tempActors != null && tempActions != null;
                    });
                    var selectedActor = this.selectedActor;
                    this.refreshActors(tempActors);
                    this.refreshActions(tempActions);
                    var removedActions = this.allActions.filter(item => (tempActions.find((a) => a.id == item.id) == undefined));
                    removedActions.forEach((a) => this.removeAction(a));
                    var removedActors = this.allActors.filter(item => (tempActors.find((a) => a.id == item.id) == undefined));
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
            }
            catch (e) {
                setTimeout(() => {
                    this._alertService.error("List Refresh Error");
                }, 1000);
            }
            yield this.refreshLock.EndLock();
        });
    }
    addCreatureToEncounterAsync(creature) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.createActorFromCreatureAsync(creature.id);
                yield this.refreshAsync();
                this.selectedActor = this.actors[0];
            }
            catch (_a) {
            }
            //await this.refresh();
        });
    }
    addCharacterToEncounterAsync(character, rolledInit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);
                yield this.refreshAsync();
                this.selectedActor = this.actors[0];
            }
            catch (_a) {
            }
            //await this.refresh();
        });
    }
    moveToNextAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
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
            }
            catch (_a) {
            }
        });
    }
    deleteActionAsync(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.removeActionAsync(action.id);
                yield this.refreshAsync();
            }
            catch (_a) {
            }
        });
    }
    deleteActorAsync(actor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.removeActorAsync(actor.id);
                yield this.refreshAsync();
            }
            catch (_a) {
            }
        });
    }
    proposeActionAsync(actor, action, attack = null, modifier = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var act = null;
            try {
                act = yield this.encounterRepo.proposeActionAsync(action.id, actor.id, modifier, (attack != null ? attack.id : null));
                yield this.refreshAsync();
                act = this.allActions.find((a) => a.id == act.id);
                act.isSelected = true;
            }
            catch (_a) {
            }
            return act;
        });
    }
    doProposedActionAsync(actor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.encounterRepo.doProposedActionAsync(actor.id);
                yield this.refreshAsync();
            }
            catch (_a) {
            }
        });
    }
}
EncounterService.ɵfac = function EncounterService_Factory(t) { return new (t || EncounterService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_Authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["GamesRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["ActorsRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["ActionsRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_repositories__WEBPACK_IMPORTED_MODULE_3__["EncounterRepository"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_EncounterHub_service__WEBPACK_IMPORTED_MODULE_5__["EncounterHubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_References_service__WEBPACK_IMPORTED_MODULE_7__["ReferencesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_Alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
EncounterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: EncounterService, factory: EncounterService.ɵfac });


/***/ }),

/***/ "gGyZ":
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
applicationPaths = Object.assign(Object.assign({}, applicationPaths), { LoginPathComponents: applicationPaths.Login.split('/'), 
    //LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'),
    RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/') });
const ApplicationPaths = applicationPaths;


/***/ }),

/***/ "gToA":
/*!**********************************!*\
  !*** ./src/app/approot/index.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "oSl8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]; });




/***/ }),

/***/ "hNHN":
/*!***********************************!*\
  !*** ./src/app/entities/Armor.ts ***!
  \***********************************/
/*! exports provided: Armor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
class Armor {
    constructor() {
    }
}


/***/ }),

/***/ "i3m6":
/*!*************************************!*\
  !*** ./src/app/entities/Outlook.ts ***!
  \*************************************/
/*! exports provided: Outlook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return Outlook; });
class Outlook {
    constructor() {
    }
}


/***/ }),

/***/ "iaMf":
/*!******************************************!*\
  !*** ./src/app/components/game/index.ts ***!
  \******************************************/
/*! exports provided: GameListComponent, GameEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-list.component */ "BOMn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return _game_list_component__WEBPACK_IMPORTED_MODULE_0__["GameListComponent"]; });

/* harmony import */ var _game_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-edit.component */ "emqM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameEditComponent", function() { return _game_edit_component__WEBPACK_IMPORTED_MODULE_1__["GameEditComponent"]; });





/***/ }),

/***/ "im5G":
/*!****************************************************************!*\
  !*** ./src/app/api-authorization/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

/** profile component*/
class ProfileComponent {
    /** profile ctor */
    constructor() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["profile"]], decls: 2, vars: 0, consts: [[2, "border", "1px solid red"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ "jfvi":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class JwtInterceptor {
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
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "juk7":
/*!**********************************************************!*\
  !*** ./src/app/components/encounter/action.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");




var ParryType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ParryType;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ActionTypeEnum;
var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].ViewTypeEnum;
var CharacterType = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_3__["EnumDefinitions"].CharacterType;


function ActionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.whoIsActing.level);
} }
function ActionComponent_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Hits: ", ctx_r20.whoIsActing.hitsRemaining, "/", ctx_r20.whoIsActing.hitsTotal, "");
} }
function ActionComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.whoIsActing.damageString);
} }
function ActionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ActionComponent_div_7_span_1_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ActionComponent_div_7_span_2_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isControlledVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isControlledVisible);
} }
function ActionComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Init: ", ctx_r2.whoIsActing.inititive, "");
} }
function ActionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Exhs: ", ctx_r3.whoIsActing.exhaustionRemaining, "/", ctx_r3.whoIsActing.exhaustionTotal, "");
} }
function ActionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Ppts: ", ctx_r4.whoIsActing.powerPointsRemaining, "/", ctx_r4.whoIsActing.powerPointsTotal, "");
} }
function ActionComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.whoIsActing.criticalModified);
} }
function ActionComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.whoIsActing.criticalIgnores);
} }
function ActionComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "directions_run");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActionComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "slow_motion_video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActionComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "alarm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActionComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "emergency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", ctx_r10.whoIsActing.stunRounds, "");
} }
function ActionComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Modifier: ", ctx_r11.whoIsActing.negatives + ctx_r11.action.currentModifier, "/", ctx_r11.whoIsActing.spellNegatives + ctx_r11.action.currentModifier, "");
} }
function ActionComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Armor-> ", ctx_r12.currentArmor, "");
} }
function ActionComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("DB->", ctx_r13.currentDB, "");
} }
function ActionComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "emoji_objects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActionComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "run_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActionComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", ctx_r16.whoIsActing.parryRounds, "");
} }
function ActionComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("->", ctx_r17.whoIsActing.parryRounds, "");
} }
function ActionComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Weapon-> ", ctx_r18.currentWeapon, "");
} }
function ActionComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("OB->", ctx_r19.currentOB, "");
} }
const _c0 = function (a0) { return { "selected": a0 }; };
//ParryType
/** action component*/
class ActionComponent {
    /** action ctor */
    constructor() {
        //this.action.note
        this.isSelectable = false;
        this.viewType = ViewTypeEnum.Overview;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAction = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(); };
ActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActionComponent, selectors: [["action-view"]], inputs: { action: "action", isSelectable: "isSelectable", viewType: "viewType" }, outputs: { onSelect: "onSelect", onDeleteClick: "onDeleteClick" }, decls: 60, vars: 31, consts: [[3, "ngClass", "click"], [1, "row"], [1, "col-2"], [1, "col-6", 2, "font-weight", "bold"], ["class", "col-1", 4, "ngIf"], ["class", "col-3", 4, "ngIf"], [1, "col-3"], [4, "ngIf"], [1, "col-6", "nameArea"], [1, "col-2", 2, "text-align", "right"], [1, "col-7", "noteArea", 2, "font-style", "italic"], ["class", "col-3 powerPointsArea", 4, "ngIf"], [1, "col-5", "criticalModifiersArea"], [1, "col-5", "criticalIgnoresArea"], [1, "col-1", "hasteArea"], ["class", "hasted iconArea", 4, "ngIf"], ["class", "slowed iconArea", 4, "ngIf"], [1, "col-1", "suprisedArea"], ["class", "suprised iconArea", 4, "ngIf"], [1, "col-2", "stunArea"], ["class", "stun iconAreaText", 4, "ngIf"], [1, "col-6"], [1, "col-1"], ["class", "concentrating iconArea", 4, "ngIf"], ["class", "adrenal iconArea", 4, "ngIf"], ["class", "mustParry iconAreaText", 4, "ngIf"], ["class", "noParry iconAreaText", 4, "ngIf"], [1, "col-3", "powerPointsArea"], [1, "hasted", "iconArea"], [1, "material-icons"], [1, "slowed", "iconArea"], [1, "suprised", "iconArea"], [1, "stun", "iconAreaText"], [1, "textMod"], [1, "concentrating", "iconArea"], [1, "adrenal", "iconArea"], [1, "mustParry", "iconAreaText"], [1, "noParry", "iconAreaText"]], template: function ActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionComponent_Template_div_click_0_listener() { return ctx.selectAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ActionComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ActionComponent_div_7_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ActionComponent_span_10_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ActionComponent_div_13_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ActionComponent_div_19_Template, 2, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ActionComponent_span_24_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ActionComponent_span_26_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ActionComponent_span_29_Template, 3, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ActionComponent_span_30_Template, 3, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ActionComponent_span_32_Template, 3, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ActionComponent_span_34_Template, 5, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ActionComponent_span_37_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ActionComponent_span_40_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ActionComponent_span_46_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ActionComponent_span_49_Template, 3, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ActionComponent_span_51_Template, 3, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ActionComponent_span_53_Template, 5, 1, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ActionComponent_span_54_Template, 5, 1, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ActionComponent_div_56_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ActionComponent_span_59_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.currentBackColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx.action.isSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.whoIsActing.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.action.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isControlledVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.action.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.powerPointsTotal > 0 && ctx.isControlledVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.percentAction > 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.percentAction < 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.suprised);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.currentCrits.isStunned);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isControlledVisible && (ctx.whoIsActing.negatives + ctx.action.currentModifier != 0 || ctx.whoIsActing.spellNegatives + ctx.action.currentModifier != 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isControlledVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.isConcentrating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.whoIsActing.usingAdrenalDB);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isMustParry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isNoParry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCurrent && ctx.isControlledVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".col[_ngcontent-%COMP%], .col-1[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    overflow:hidden;\r\n}\r\n\r\n.nameArea[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQzs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTs7QUFFQSIsImZpbGUiOiJhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAyNzksOTdcclxuICAgIDI4MCw5OFxyXG4qL1xyXG5cclxuLmNvbCwgLmNvbC0xLCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLTIsIC5jb2wtMywgLmNvbC00LCAuY29sLTUsIC5jb2wtNiwgLmNvbC03LCAuY29sLTgsIC5jb2wtOSwgLmNvbC1hdXRvLCAuY29sLWxnLCAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLWF1dG8sIC5jb2wtbWQsIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMiwgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtbWQtYXV0bywgLmNvbC1zbSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsIC5jb2wtc20tNiwgLmNvbC1zbS03LCAuY29sLXNtLTgsIC5jb2wtc20tOSwgLmNvbC1zbS1hdXRvLCAuY29sLXhsLCAuY29sLXhsLTEsIC5jb2wteGwtMTAsIC5jb2wteGwtMTEsIC5jb2wteGwtMTIsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLWF1dG8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLm5hbWVBcmVhIHtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "k1WJ":
/*!******************************************************!*\
  !*** ./src/app/top/encounter/encounter.component.ts ***!
  \******************************************************/
/*! exports provided: EncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterComponent", function() { return EncounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_actor___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/actor/ */ "YEH2");
/* harmony import */ var _components_messages_message_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/messages/message-list.component */ "toj8");
/* harmony import */ var _components_encounter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/encounter */ "vkE2");






var ViewTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].ViewTypeEnum;
var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].ActionTypeEnum;







function EncounterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Library");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " encounter Component ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EncounterComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.addDamage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add Damage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.addSpell(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "supervised_user_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Cast Spell/Psychic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.addStunned(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "run_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Add Stunned Maneuvering ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.rollD100Open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "auto_awesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Roll D100 Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.rollD100(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "auto_awesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Roll D100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.resetEncounter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "settings_backup_restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Reset Encounter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EncounterComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "action-edit", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onProposeAction", function EncounterComponent_div_14_div_1_Template_action_edit_onProposeAction_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.onProposeAction($event); })("onDoAction", function EncounterComponent_div_14_div_1_Template_action_edit_onDoAction_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onDoAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedAction", ctx_r11.selectedAction)("actionTree", ctx_r11.currentActionTree);
} }
function EncounterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EncounterComponent_div_14_div_1_Template, 5, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.selectedAction != null);
} }
function EncounterComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EncounterComponent_span_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.moveToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Move Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "fullView": a0 }; };
const _c1 = function (a0, a1) { return { "col-6": a0, "col-7": a1 }; };
const _c2 = function (a0, a1) { return { "col-3": a0, "col-5": a1 }; };
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
    get messages() {
        return this.gameView.allMessages;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    addSpell() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    addStunned() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    rollD100Open() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    rollD100() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    resetEncounter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    onDoAction(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGM) {
                var act = yield this.gameView.proposeActionAsync(action.actor, action.action, action.attack, action.modifier);
                //await delay(100);
                this.gameView.selectedAction = act;
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    deleteAction(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.deleteActionAsync(action);
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    deleteActor(actor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.deleteActorAsync(actor);
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    selectActor(actor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGM) {
                this.gameView.selectedActor = actor;
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
    selectAction(action) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGM) {
                yield this.gameView.moveToNextAsync();
                this._currentActionTree = yield this.gameView.currentActionTreeAsync();
            }
        });
    }
}
EncounterComponent.ɵfac = function EncounterComponent_Factory(t) { return new (t || EncounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["EncounterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
EncounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EncounterComponent, selectors: [["app-encounter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 23, consts: [[1, "h-100", 3, "ngClass"], [1, "row", "h-100"], ["class", "col-3 h-100 columnLeft", 4, "ngIf"], [1, "h-100", "columnCenter", 3, "ngClass"], [1, "actorListArea", "h-50"], [1, "actorListHeader"], ["style", "float:right; display:block;", 4, "ngIf"], [1, "h-90"], [3, "actors", "viewType", "isSelectable", "onSelect", "onDeleteClick"], [1, "h-50", "row"], [1, "col-5", "h-100"], [1, "encounter-box", "messageListArea"], [3, "messages"], ["class", " col-7 h-100", 4, "ngIf"], [1, "h-100", "columnRight", 3, "ngClass"], [1, "encounter-box", "actionsList"], [1, "subText"], [3, "actions", "viewType", "isSelectable", "onSelect", "onDeleteClick"], [1, "col-3", "h-100", "columnLeft"], [1, "encounter-box"], [2, "float", "right", "display", "block"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "material-icons"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "col-7", "h-100"], ["class", "encounter-box actionEditArea", 4, "ngIf"], [1, "encounter-box", "actionEditArea"], [1, "actionEditControl"], [3, "selectedAction", "actionTree", "onProposeAction", "onDoAction"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function EncounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EncounterComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EncounterComponent_span_6_Template, 25, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Actors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "actor-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function EncounterComponent_Template_actor_list_onSelect_9_listener($event) { return ctx.selectActor($event); })("onDeleteClick", function EncounterComponent_Template_actor_list_onDeleteClick_9_listener($event) { return ctx.deleteActor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "message-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EncounterComponent_div_14_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EncounterComponent_span_18_Template, 5, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "actions-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function EncounterComponent_Template_actions_list_onSelect_22_listener($event) { return ctx.selectAction($event); })("onDeleteClick", function EncounterComponent_Template_actions_list_onDeleteClick_22_listener($event) { return ctx.deleteAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.isGM));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c1, ctx.isGM, !ctx.isGM));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actors", ctx.actors)("viewType", ctx.viewType)("isSelectable", ctx.isGM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messages", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c2, ctx.isGM, !ctx.isGM));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current Time: ", ctx.currentTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actions", ctx.actions)("viewType", ctx.viewType)("isSelectable", ctx.isGM);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_actor___WEBPACK_IMPORTED_MODULE_7__["ActorListComponent"], _components_messages_message_list_component__WEBPACK_IMPORTED_MODULE_8__["MessageListComponent"], _components_encounter__WEBPACK_IMPORTED_MODULE_9__["ActionsListComponent"], _components_encounter__WEBPACK_IMPORTED_MODULE_9__["ActionEditComponent"]], styles: [".list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuY291bnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkIiwiZmlsZSI6ImVuY291bnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5saXN0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "kLbg":
/*!*******************************************!*\
  !*** ./src/app/entities/RegisterModel.ts ***!
  \*******************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
class RegisterModel {
    constructor() {
    }
}


/***/ }),

/***/ "kRDF":
/*!***************************************!*\
  !*** ./src/app/repositories/index.ts ***!
  \***************************************/
/*! exports provided: ActionsRepository, ActorsRepository, CharactersRepository, CombatRepository, CreaturesRepository, CriticalEffectsRepository, EncounterRepository, GamesRepository, ReferenceRepository, SettingsRepository, UsersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions.repository */ "D3CN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsRepository", function() { return _Actions_repository__WEBPACK_IMPORTED_MODULE_0__["ActionsRepository"]; });

/* harmony import */ var _Actors_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actors.repository */ "oBgA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return _Actors_repository__WEBPACK_IMPORTED_MODULE_1__["ActorsRepository"]; });

/* harmony import */ var _Characters_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Characters.repository */ "vhUG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return _Characters_repository__WEBPACK_IMPORTED_MODULE_2__["CharactersRepository"]; });

/* harmony import */ var _Combat_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Combat.repository */ "mEzZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return _Combat_repository__WEBPACK_IMPORTED_MODULE_3__["CombatRepository"]; });

/* harmony import */ var _Creatures_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Creatures.repository */ "KAYu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreaturesRepository", function() { return _Creatures_repository__WEBPACK_IMPORTED_MODULE_4__["CreaturesRepository"]; });

/* harmony import */ var _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CriticalEffects.repository */ "MVLF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffectsRepository", function() { return _CriticalEffects_repository__WEBPACK_IMPORTED_MODULE_5__["CriticalEffectsRepository"]; });

/* harmony import */ var _Encounter_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Encounter.repository */ "988e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterRepository", function() { return _Encounter_repository__WEBPACK_IMPORTED_MODULE_6__["EncounterRepository"]; });

/* harmony import */ var _Games_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Games.repository */ "LmOb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GamesRepository", function() { return _Games_repository__WEBPACK_IMPORTED_MODULE_7__["GamesRepository"]; });

/* harmony import */ var _Reference_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Reference.repository */ "JFVv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceRepository", function() { return _Reference_repository__WEBPACK_IMPORTED_MODULE_8__["ReferenceRepository"]; });

/* harmony import */ var _Settings_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Settings.repository */ "axZv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsRepository", function() { return _Settings_repository__WEBPACK_IMPORTED_MODULE_9__["SettingsRepository"]; });

/* harmony import */ var _Users_repository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Users.repository */ "M8pr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersRepository", function() { return _Users_repository__WEBPACK_IMPORTED_MODULE_10__["UsersRepository"]; });














/***/ }),

/***/ "lJf/":
/*!********************************************!*\
  !*** ./src/app/entities/CriticalEffect.ts ***!
  \********************************************/
/*! exports provided: CriticalEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticalEffect", function() { return CriticalEffect; });
class CriticalEffect {
    constructor() {
    }
}


/***/ }),

/***/ "lWyS":
/*!***************************************************************!*\
  !*** ./src/app/components/encounter/action-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: ProposeAction, ActionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposeAction", function() { return ProposeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEditComponent", function() { return ActionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _elements_treeview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/elements/treeview */ "BxP+");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/_helpers */ "XgRA");
/* harmony import */ var _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/entities/EnumDefinitions */ "IbcZ");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/elements */ "ZpKY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");






var ActionTypeEnum = _entities_EnumDefinitions__WEBPACK_IMPORTED_MODULE_5__["EnumDefinitions"].ActionTypeEnum;




function ActionEditComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mod_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mod_r1);
} }
class ProposeAction {
    constructor(actor, action, attack = null, modifier = 0) {
        this.actor = actor;
        this.action = action;
        this.attack = attack;
        this.modifier = modifier;
    }
}
/** action-edit component*/
class ActionEditComponent {
    //selectedAction
    /** action-edit ctor */
    constructor() {
        this.onProposeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDoAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mods = [-40, -30, -20, -10, 0, 10, 20, 30];
        this.mutex = new _helpers__WEBPACK_IMPORTED_MODULE_4__["MutexLock"](60000);
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
            this._treeModel = new _elements_treeview__WEBPACK_IMPORTED_MODULE_3__["TreeModel"](this.currentActionTree);
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
            return new _elements_treeview__WEBPACK_IMPORTED_MODULE_3__["TreeNode"](new _services__WEBPACK_IMPORTED_MODULE_2__["treeEntry"]("", ""));
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
                this._treeTop = new _elements_treeview__WEBPACK_IMPORTED_MODULE_3__["TreeNode"](this.actionTree);
            }
            else {
                this._treeTop.check();
                if (this._treeModel != null) {
                    this._treeModel = new _elements_treeview__WEBPACK_IMPORTED_MODULE_3__["TreeModel"](this._treeTop);
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
}
ActionEditComponent.ɵfac = function ActionEditComponent_Factory(t) { return new (t || ActionEditComponent)(); };
ActionEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionEditComponent, selectors: [["action-edit"]], inputs: { selectedAction: "selectedAction", actionTree: "actionTree" }, outputs: { onProposeAction: "onProposeAction", onDoAction: "onDoAction" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 4, consts: [[1, "row", "h-100"], [1, "col-7", "h-100"], [3, "treeModel", "onSelect"], [1, "col-2", "h-100"], ["id", "modSelect", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-3", "h-100"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "material-icons"], [3, "value"]], template: function ActionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-treeview", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function ActionEditComponent_Template_app_treeview_onSelect_2_listener($event) { return ctx.onTreeSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionEditComponent_Template_select_change_4_listener() { return ctx.onModSelected(); })("ngModelChange", function ActionEditComponent_Template_select_ngModelChange_4_listener($event) { return ctx.currentModifier = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActionEditComponent_option_5_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionEditComponent_Template_button_click_7_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Do Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treeModel", ctx.treeModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentModifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("size", ctx.mods.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mods);
    } }, directives: [_elements__WEBPACK_IMPORTED_MODULE_6__["TreeviewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tZWRpdC5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "lvCH":
/*!*********************************************!*\
  !*** ./src/app/entities/LevelChartValue.ts ***!
  \*********************************************/
/*! exports provided: LevelChartValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelChartValue", function() { return LevelChartValue; });
class LevelChartValue {
    constructor() {
    }
}


/***/ }),

/***/ "m69I":
/*!****************************************************************!*\
  !*** ./src/app/components/creature/creature-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CreatureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureListComponent", function() { return CreatureListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _repositories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/repositories */ "kRDF");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreatureListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreatureListComponent_table_11_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatureListComponent_table_11_tr_16_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const creature_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r4.selectCreature(creature_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", creature_r3 == null ? null : creature_r3.gameTypeString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", creature_r3 == null ? null : creature_r3.book.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](creature_r3 == null ? null : creature_r3.typeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", creature_r3 == null ? null : creature_r3.baseLevel, "", creature_r3 == null ? null : creature_r3.levelMod.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", creature_r3 == null ? null : creature_r3.size.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", creature_r3 == null ? null : creature_r3.minEncountered, " - ", creature_r3 == null ? null : creature_r3.maxEncountered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", creature_r3 == null ? null : creature_r3.msRating.name, " / ", creature_r3 == null ? null : creature_r3.aqRating.name, " ");
} }
function CreatureListComponent_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Size ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Speed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CreatureListComponent_table_11_tr_16_Template, 16, 10, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.creatures);
} }
/** creature component*/
class CreatureListComponent {
    /** character ctor */
    constructor(creatureRepo) {
        this.creatureRepo = creatureRepo;
        this.creatures = new Array();
        this.refresh = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.creatures = yield this.creatureRepo.getCreaturesAsync();
        });
        this.selectCreature = (charId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
}
CreatureListComponent.ɵfac = function CreatureListComponent_Factory(t) { return new (t || CreatureListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_repositories__WEBPACK_IMPORTED_MODULE_1__["CreaturesRepository"])); };
CreatureListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreatureListComponent, selectors: [["creature-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 2, consts: [[1, "wrapper"], [1, "area"], [1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0", "white-space", "nowrap"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["class", "table table-striped", 4, "ngIf"], [1, "table", "table-striped"], [2, "vertical-align", "middle"], [4, "ngFor", "ngForOf"], [2, "white-space", "nowrap"], [3, "click"]], template: function CreatureListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreatureListComponent_p_3_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreatureListComponent_Template_button_click_7_listener() { return ctx.newCreature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Creatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CreatureListComponent_table_11_Template, 17, 1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.creatures);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.creatures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".list[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 20%;\n}\n.edit[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 80%;\n}\n.mainList[_ngcontent-%COMP%] {\n  font-size: 12px;\n  max-height: 100%;\n  \n}\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0dXJlLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFMRjtBQVFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBTkY7QUFTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQVBBLGdCQUFnQjtBQUNsQjtBQVVBO0VBQ0UsZUFBQTtBQVJGO0FBV0E7RUFDRSxjQUFBO0FBVEY7QUFZQTtFQUNFLFlBQUE7QUFWRiIsImZpbGUiOiJjcmVhdHVyZS1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xufVxuXG4uYXJlYSB7XG59XG5cbi5saXN0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmVkaXQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogODAlO1xufVxuXG4ubWFpbkxpc3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIC8qd2lkdGg6IDEyMHB4OyovXG59XG5cbi5tYWluTGlzdCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbkxpc3QgYnV0dG9uIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5tYWluTGlzdCB0ZCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "mEzZ":
/*!***************************************************!*\
  !*** ./src/app/repositories/Combat.repository.ts ***!
  \***************************************************/
/*! exports provided: CombatRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatRepository", function() { return CombatRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");










var version = "1";
class CombatRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Armor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Armor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Armor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Weapon"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Weapon"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Weapon"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Armor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Attack"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Weapon"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
CombatRepository.ɵfac = function CombatRepository_Factory(t) { return new (t || CombatRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
CombatRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CombatRepository, factory: CombatRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mKRb":
/*!**********************************************!*\
  !*** ./src/app/entities/ActionDefinition.ts ***!
  \**********************************************/
/*! exports provided: ActionDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return ActionDefinition; });
class ActionDefinition {
    constructor() {
    }
}


/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        ////debugger;
        console.error(error);
        let customError = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, ApplicationName, AuthenticationService, EncounterService, EncounterHubService, treeEntry, ReferencesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.service */ "EvQ2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _Alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _Authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authentication.service */ "TzkZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationName", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _Authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _Encounter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Encounter.service */ "fIIe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterService", function() { return _Encounter_service__WEBPACK_IMPORTED_MODULE_2__["EncounterService"]; });

/* harmony import */ var _EncounterHub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EncounterHub.service */ "otLY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EncounterHubService", function() { return _EncounterHub_service__WEBPACK_IMPORTED_MODULE_3__["EncounterHubService"]; });

/* harmony import */ var _References_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./References.service */ "BDYc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeEntry", function() { return _References_service__WEBPACK_IMPORTED_MODULE_4__["treeEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferencesService", function() { return _References_service__WEBPACK_IMPORTED_MODULE_4__["ReferencesService"]; });








/***/ }),

/***/ "oBgA":
/*!***************************************************!*\
  !*** ./src/app/repositories/Actors.repository.ts ***!
  \***************************************************/
/*! exports provided: ActorsRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsRepository", function() { return ActorsRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class ActorsRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Actor"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Actor"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
ActorsRepository.ɵfac = function ActorsRepository_Factory(t) { return new (t || ActorsRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ActorsRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ActorsRepository, factory: ActorsRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oSl8":
/*!******************************************!*\
  !*** ./src/app/approot/app.component.ts ***!
  \******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_authorization_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-authorization/login-menu/login-menu.component */ "J0JI");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/navigation */ "FgmV");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/elements */ "ZpKY");









class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'CEATSiiApp';
        this.name = `Angular! v${_angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full}`;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 0, consts: [[1, "", 2, "height", "10%!important"], [1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "h-100", 2, "flex-flow", "column"], [1, "container"], ["asp-area", "", "asp-controller", "Home", "asp-action", "Index", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse"], [1, "navbar-nav"], [1, "navbar-nav", "flex-grow-1"], [1, "container", 2, "text-align", "center", "display", "block"], [1, "mainbody"], ["role", "main", 1, "clear", "h-100"], [1, "h-100", 2, "position", "relative"], [1, "apparea"], [1, "body-content"], [1, "border-top", "footer", "text-muted", 2, "height", "10%!important"], [1, "container", "h-100"], ["asp-area", "", "asp-controller", "Home", "asp-action", "Privacy"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CEATSii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-login-menu", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "main-nav-menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A9 2021 Solmead Productions - CEATSii - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_api_authorization_login_menu_login_menu_component__WEBPACK_IMPORTED_MODULE_3__["LoginMenuComponent"], _navigation__WEBPACK_IMPORTED_MODULE_4__["MainNavMenuComponent"], _elements__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "oecm":
/*!****************************************!*\
  !*** ./src/app/entities/LevelChart.ts ***!
  \****************************************/
/*! exports provided: LevelChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelChart", function() { return LevelChart; });
class LevelChart {
    constructor() {
    }
}


/***/ }),

/***/ "otLY":
/*!**************************************************!*\
  !*** ./src/app/services/EncounterHub.service.ts ***!
  \**************************************************/
/*! exports provided: EncounterHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterHubService", function() { return EncounterHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "6HpG");
/* harmony import */ var _helpers_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/_helpers/Tasks */ "OhDg");






class retryPolicy {
    nextRetryDelayInMilliseconds(retryContext) {
        return 15000;
    }
}
class EncounterHubService {
    constructor() {
        this.actorRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actorUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actorsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gameUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messageAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionIsEstablished = false;
        this.gId = 0;
        this.createConnection();
        this.registerOnServerEvents();
        this.startConnection();
    }
    registerForGame(gameId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        //MessageAdded
        this._hubConnection.on('MessageAdded', (data) => {
            this.messageAdded.emit(data);
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
}
EncounterHubService.ɵfac = function EncounterHubService_Factory(t) { return new (t || EncounterHubService)(); };
EncounterHubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EncounterHubService, factory: EncounterHubService.ɵfac });


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "o0su");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthGuard {
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
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qpIQ":
/*!**************************************!*\
  !*** ./src/app/_helpers/SafeHtml.ts ***!
  \**************************************/
/*! exports provided: Safe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safe", function() { return Safe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class Safe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}
Safe.ɵfac = function Safe_Factory(t) { return new (t || Safe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"])); };
Safe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "safeHtml", type: Safe, pure: true });


/***/ }),

/***/ "rQJ+":
/*!***************************************!*\
  !*** ./src/app/entities/Character.ts ***!
  \***************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
class Character {
    constructor() {
    }
}


/***/ }),

/***/ "s0qf":
/*!************************************!*\
  !*** ./src/app/_helpers/EnumEx.ts ***!
  \************************************/
/*! exports provided: EnumEx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEx", function() { return EnumEx; });
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

/***/ "sLxk":
/*!**********************************************************!*\
  !*** ./src/app/entities/ConstitutionBonusChartValues.ts ***!
  \**********************************************************/
/*! exports provided: ConstitutionBonusChartValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChartValues", function() { return ConstitutionBonusChartValues; });
class ConstitutionBonusChartValues {
    constructor() {
    }
}


/***/ }),

/***/ "toj8":
/*!***************************************************************!*\
  !*** ./src/app/components/messages/message-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _helpers_DateEx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_helpers/DateEx */ "1dmr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MessageListComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MessageListComponent_li_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.beginText);
} }
function MessageListComponent_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r4.msgColor(msg_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.whom);
} }
function MessageListComponent_li_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.action);
} }
function MessageListComponent_li_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.betweenText);
} }
function MessageListComponent_li_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r7.msgColor(msg_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.whom);
} }
function MessageListComponent_li_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.action);
} }
function MessageListComponent_li_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r2.endText);
} }
function MessageListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MessageListComponent_li_3_span_3_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MessageListComponent_li_3_span_4_Template, 2, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessageListComponent_li_3_span_5_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MessageListComponent_li_3_span_6_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MessageListComponent_li_3_span_7_Template, 2, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MessageListComponent_li_3_span_8_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MessageListComponent_li_3_span_9_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.cssClasses(msg_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.currentTime(msg_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.beginText != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !msg_r2.reverseOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.reverseOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.betweenText != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.reverseOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !msg_r2.reverseOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r2.endText != "");
} }
/** MessageList component*/
class MessageListComponent {
    /** MessageList ctor */
    constructor() {
        this.messages = new Array();
    }
    msgColor(msg) {
        return "rgb(" + msg.whomColor + ")";
    }
    currentTime(msg) {
        return '' + Math.floor(msg.gameTime * 100) / 100;
    }
    cssClasses(msg) {
        var cStr = "MessageEntry " + msg.messageTypeString;
        return cStr;
    }
}
MessageListComponent.ɵfac = function MessageListComponent_Factory(t) { return new (t || MessageListComponent)(); };
MessageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageListComponent, selectors: [["message-list"]], inputs: { messages: "messages" }, decls: 4, vars: 2, consts: [[1, "list"], [4, "ngIf"], [1, "mainMessagesList"], [3, "class", 4, "ngFor", "ngForOf"], [1, "currentTimeArea"], ["class", "whomName", 3, "color", 4, "ngIf"], ["class", "actionName", 4, "ngIf"], [1, "whomName"], [1, "actionName"]], template: function MessageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessageListComponent_p_1_Template, 3, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MessageListComponent_li_3_Template, 10, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWxpc3QuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _top_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/top/home */ "cHPc");
/* harmony import */ var _top_creature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/top/creature */ "cm0Z");
/* harmony import */ var _top_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/top/character */ "4BjW");
/* harmony import */ var _top_encounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/top/encounter */ "/kBA");
/* harmony import */ var _api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-authorization/authorize.guard */ "dct0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");

//import { GameComponent } from './components/game/game.component';
//import { CharacterComponent } from './components/character/character.component';
//import { ActorComponent } from './components/actor/actor.component';







const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _top_home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'creatures', component: _top_creature__WEBPACK_IMPORTED_MODULE_2__["CreatureComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_5__["AuthorizeGuard"]] },
    { path: 'characters', component: _top_character__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"], canActivate: [_api_authorization_authorize_guard__WEBPACK_IMPORTED_MODULE_5__["AuthorizeGuard"]] },
    { path: 'encounter/:id', component: _top_encounter__WEBPACK_IMPORTED_MODULE_4__["EncounterComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { enableTracing: true, relativeLinkResolution: 'legacy' }) // <-- debugging purposes only)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vhUG":
/*!*******************************************************!*\
  !*** ./src/app/repositories/Characters.repository.ts ***!
  \*******************************************************/
/*! exports provided: CharactersRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersRepository", function() { return CharactersRepository; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Alert.service */ "EvQ2");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities */ "yS8e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








var version = "1";
class CharactersRepository {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = data.map((dt) => Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Character"](), dt));
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Character"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                if (data != null)
                    data = Object.assign(new _entities__WEBPACK_IMPORTED_MODULE_4__["Character"](), data);
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
                return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(customError || 'Server error');
        //return Observable.throw(customError || 'Server error');
    }
}
CharactersRepository.ɵfac = function CharactersRepository_Factory(t) { return new (t || CharactersRepository)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_Alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
CharactersRepository.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CharactersRepository, factory: CharactersRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vkE2":
/*!***********************************************!*\
  !*** ./src/app/components/encounter/index.ts ***!
  \***********************************************/
/*! exports provided: ActionsListComponent, ProposeAction, ActionEditComponent, ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-list.component */ "/Gu9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsListComponent", function() { return _actions_list_component__WEBPACK_IMPORTED_MODULE_0__["ActionsListComponent"]; });

/* harmony import */ var _action_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-edit.component */ "lWyS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposeAction", function() { return _action_edit_component__WEBPACK_IMPORTED_MODULE_1__["ProposeAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionEditComponent", function() { return _action_edit_component__WEBPACK_IMPORTED_MODULE_1__["ActionEditComponent"]; });

/* harmony import */ var _action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.component */ "juk7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return _action_component__WEBPACK_IMPORTED_MODULE_2__["ActionComponent"]; });






/***/ }),

/***/ "wWdk":
/*!****************************************************!*\
  !*** ./src/app/entities/ConstitutionBonusChart.ts ***!
  \****************************************************/
/*! exports provided: ConstitutionBonusChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChart", function() { return ConstitutionBonusChart; });
class ConstitutionBonusChart {
    constructor() {
    }
}


/***/ }),

/***/ "wkPQ":
/*!*************************************!*\
  !*** ./src/app/entities/Message.ts ***!
  \*************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor() {
    }
}


/***/ }),

/***/ "x94+":
/*!**********************************************!*\
  !*** ./src/app/components/messages/index.ts ***!
  \**********************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-list.component */ "toj8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return _message_list_component__WEBPACK_IMPORTED_MODULE_0__["MessageListComponent"]; });




/***/ }),

/***/ "xuXw":
/*!***********************************************!*\
  !*** ./src/app/entities/AuthenticateModel.ts ***!
  \***********************************************/
/*! exports provided: AuthenticateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return AuthenticateModel; });
class AuthenticateModel {
    constructor() {
    }
}


/***/ }),

/***/ "yJeN":
/*!*******************************************!*\
  !*** ./src/app/components/armor/index.ts ***!
  \*******************************************/
/*! exports provided: ArmorListComponent, ArmorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _armor_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./armor-list.component */ "zTlz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArmorListComponent", function() { return _armor_list_component__WEBPACK_IMPORTED_MODULE_0__["ArmorListComponent"]; });

/* harmony import */ var _armor_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./armor-edit.component */ "1W6u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArmorEditComponent", function() { return _armor_edit_component__WEBPACK_IMPORTED_MODULE_1__["ArmorEditComponent"]; });





/***/ }),

/***/ "yS8e":
/*!***********************************!*\
  !*** ./src/app/entities/index.ts ***!
  \***********************************/
/*! exports provided: ActionDefinition, ActionGroup, ApplicationUser, Armor, Attack, AttackType, AuthenticateModel, Book, Character, ConstitutionBonusChart, ConstitutionBonusChartValues, Creature, CriticalCode, CriticalEffect, CriticalIgnore, CriticalType, Dice, EnumDefinitions, Game, IQ, LevelChart, LevelChartValue, Message, MoveNextResult, MySettings, Outlook, Pace, PsychicRefractoryPeriodEntry, ReferenceEntry, RegisterModel, SizeRating, SpeedChart, UpdateModel, UserModel, Weapon, WeaponType, Actor, BaseAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAction", function() { return BaseAction; });
/* harmony import */ var _Actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actor */ "Yiwp");
/* harmony import */ var _BaseAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseAction */ "Lknk");
/* harmony import */ var _EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnumDefinitions */ "IbcZ");
/* harmony import */ var _ActionDefinition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionDefinition */ "mKRb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDefinition", function() { return _ActionDefinition__WEBPACK_IMPORTED_MODULE_3__["ActionDefinition"]; });

/* harmony import */ var _ActionGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionGroup */ "J+1U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return _ActionGroup__WEBPACK_IMPORTED_MODULE_4__["ActionGroup"]; });

/* harmony import */ var _ApplicationUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationUser */ "0jpJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return _ApplicationUser__WEBPACK_IMPORTED_MODULE_5__["ApplicationUser"]; });

/* harmony import */ var _Armor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Armor */ "hNHN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return _Armor__WEBPACK_IMPORTED_MODULE_6__["Armor"]; });

/* harmony import */ var _Attack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Attack */ "eoJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return _Attack__WEBPACK_IMPORTED_MODULE_7__["Attack"]; });

/* harmony import */ var _AttackType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttackType */ "1LXU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttackType", function() { return _AttackType__WEBPACK_IMPORTED_MODULE_8__["AttackType"]; });

/* harmony import */ var _AuthenticateModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthenticateModel */ "xuXw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return _AuthenticateModel__WEBPACK_IMPORTED_MODULE_9__["AuthenticateModel"]; });

/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Book */ "ds92");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _Book__WEBPACK_IMPORTED_MODULE_10__["Book"]; });

/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Character */ "rQJ+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return _Character__WEBPACK_IMPORTED_MODULE_11__["Character"]; });

/* harmony import */ var _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConstitutionBonusChart */ "wWdk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChart", function() { return _ConstitutionBonusChart__WEBPACK_IMPORTED_MODULE_12__["ConstitutionBonusChart"]; });

/* harmony import */ var _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ConstitutionBonusChartValues */ "sLxk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstitutionBonusChartValues", function() { return _ConstitutionBonusChartValues__WEBPACK_IMPORTED_MODULE_13__["ConstitutionBonusChartValues"]; });

/* harmony import */ var _Creature__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Creature */ "XMiX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return _Creature__WEBPACK_IMPORTED_MODULE_14__["Creature"]; });

/* harmony import */ var _CriticalCode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CriticalCode */ "Hu4O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalCode", function() { return _CriticalCode__WEBPACK_IMPORTED_MODULE_15__["CriticalCode"]; });

/* harmony import */ var _CriticalEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CriticalEffect */ "lJf/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalEffect", function() { return _CriticalEffect__WEBPACK_IMPORTED_MODULE_16__["CriticalEffect"]; });

/* harmony import */ var _CriticalIgnore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CriticalIgnore */ "GDwD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalIgnore", function() { return _CriticalIgnore__WEBPACK_IMPORTED_MODULE_17__["CriticalIgnore"]; });

/* harmony import */ var _CriticalType__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CriticalType */ "5hK6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CriticalType", function() { return _CriticalType__WEBPACK_IMPORTED_MODULE_18__["CriticalType"]; });

/* harmony import */ var _Dice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Dice */ "Qx8O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return _Dice__WEBPACK_IMPORTED_MODULE_19__["Dice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnumDefinitions", function() { return _EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"]; });

/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Game */ "TleJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game__WEBPACK_IMPORTED_MODULE_20__["Game"]; });

/* harmony import */ var _IQ__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IQ */ "29mx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IQ", function() { return _IQ__WEBPACK_IMPORTED_MODULE_21__["IQ"]; });

/* harmony import */ var _LevelChart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LevelChart */ "oecm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChart", function() { return _LevelChart__WEBPACK_IMPORTED_MODULE_22__["LevelChart"]; });

/* harmony import */ var _LevelChartValue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LevelChartValue */ "lvCH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LevelChartValue", function() { return _LevelChartValue__WEBPACK_IMPORTED_MODULE_23__["LevelChartValue"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Message */ "wkPQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_24__["Message"]; });

/* harmony import */ var _MoveNextResult__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MoveNextResult */ "6Fs8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveNextResult", function() { return _MoveNextResult__WEBPACK_IMPORTED_MODULE_25__["MoveNextResult"]; });

/* harmony import */ var _MySettings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MySettings */ "aYhK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MySettings", function() { return _MySettings__WEBPACK_IMPORTED_MODULE_26__["MySettings"]; });

/* harmony import */ var _Outlook__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Outlook */ "i3m6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Outlook", function() { return _Outlook__WEBPACK_IMPORTED_MODULE_27__["Outlook"]; });

/* harmony import */ var _Pace__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Pace */ "zvFi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pace__WEBPACK_IMPORTED_MODULE_28__["Pace"]; });

/* harmony import */ var _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PsychicRefractoryPeriodEntry */ "/7Ii");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PsychicRefractoryPeriodEntry", function() { return _PsychicRefractoryPeriodEntry__WEBPACK_IMPORTED_MODULE_29__["PsychicRefractoryPeriodEntry"]; });

/* harmony import */ var _ReferenceEntry__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ReferenceEntry */ "AU9i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReferenceEntry", function() { return _ReferenceEntry__WEBPACK_IMPORTED_MODULE_30__["ReferenceEntry"]; });

/* harmony import */ var _RegisterModel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./RegisterModel */ "kLbg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return _RegisterModel__WEBPACK_IMPORTED_MODULE_31__["RegisterModel"]; });

/* harmony import */ var _SizeRating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SizeRating */ "0Qn9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeRating", function() { return _SizeRating__WEBPACK_IMPORTED_MODULE_32__["SizeRating"]; });

/* harmony import */ var _SpeedChart__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./SpeedChart */ "+wwY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedChart", function() { return _SpeedChart__WEBPACK_IMPORTED_MODULE_33__["SpeedChart"]; });

/* harmony import */ var _UpdateModel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./UpdateModel */ "9Yg8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateModel", function() { return _UpdateModel__WEBPACK_IMPORTED_MODULE_34__["UpdateModel"]; });

/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./UserModel */ "GE8w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _UserModel__WEBPACK_IMPORTED_MODULE_35__["UserModel"]; });

/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Weapon */ "9UD6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return _Weapon__WEBPACK_IMPORTED_MODULE_36__["Weapon"]; });

/* harmony import */ var _WeaponType__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./WeaponType */ "P5wN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeaponType", function() { return _WeaponType__WEBPACK_IMPORTED_MODULE_37__["WeaponType"]; });




var ActionTypeEnum = _EnumDefinitions__WEBPACK_IMPORTED_MODULE_2__["EnumDefinitions"].ActionTypeEnum;







//export * from './BaseAction';





























class Actor extends _Actor__WEBPACK_IMPORTED_MODULE_0__["Actor"] {
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
class BaseAction extends _BaseAction__WEBPACK_IMPORTED_MODULE_1__["BaseAction"] {
}


/***/ }),

/***/ "zTlz":
/*!**********************************************************!*\
  !*** ./src/app/components/armor/armor-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ArmorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmorListComponent", function() { return ArmorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/entities */ "yS8e");



function ArmorListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArmorListComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const armor_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", armor_r2 == null ? null : armor_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", armor_r2 == null ? null : armor_r2.type, ") ", armor_r2 == null ? null : armor_r2.description, " ");
} }
/** Armor component*/
class ArmorListComponent {
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
}
ArmorListComponent.ɵfac = function ArmorListComponent_Factory(t) { return new (t || ArmorListComponent)(); };
ArmorListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArmorListComponent, selectors: [["armor-list"]], inputs: { armors: "armors", charId: "charId" }, outputs: { onDelete: "onDelete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 15, vars: 4, consts: [[1, "wrapper"], [1, "area"], [1, "list"], [4, "ngIf"], [1, "mainList"], [2, "display", "block", "margin-top", "0"], [2, "float", "right"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "glyphicon", "glyphicon-plus"], ["name", "selectedArmor", "size", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "edit"], [3, "armor", "onDelete"], [3, "value"]], template: function ArmorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArmorListComponent_p_3_Template, 3, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArmorListComponent_Template_button_click_7_listener() { return ctx.newArmor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Armors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArmorListComponent_Template_select_ngModelChange_11_listener($event) { return ctx.selectedArmorId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArmorListComponent_option_12_Template, 2, 3, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-armor-edit", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function ArmorListComponent_Template_app_armor_edit_onDelete_14_listener($event) { return ctx.onArmorDeleted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.armors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedArmorId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.armors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("armor", ctx.selectedArmor);
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n}\r\n\r\n.area[_ngcontent-%COMP%] {\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 20%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 80%;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    max-height: 100%;\r\n    width: 120px;\r\n}\r\n\r\n.mainList[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n\r\n.mainList[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 2px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFybW9yLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFSTtRQUNJLGVBQWU7SUFDbkI7O0FBRUE7UUFDSSxjQUFjO0lBQ2xCOztBQUVBO1FBQ0ksWUFBWTtJQUNoQiIsImZpbGUiOiJhcm1vci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbn1cclxuXHJcbi5hcmVhIHtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubWFpbkxpc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuICAgIC5tYWluTGlzdCBhIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5MaXN0IHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




//export function getBaseUrl() {
//  return document.getElementsByTagName('base')[0].href;
//}
//const providers = [
//  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: <Array<any>>[] }
//];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
//platformBrowserDynamic(providers).bootstrapModule(AppModule)
//  .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zvFi":
/*!**********************************!*\
  !*** ./src/app/entities/Pace.ts ***!
  \**********************************/
/*! exports provided: Pace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return Pace; });
class Pace {
    constructor() {
    }
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
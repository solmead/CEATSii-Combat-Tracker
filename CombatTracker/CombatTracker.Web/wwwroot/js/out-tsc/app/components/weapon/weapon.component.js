var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from '../../entities/Weapon';
var WeaponComponent = /** @class */ (function () {
    /** Armor ctor */
    function WeaponComponent() {
        this.onDelete = new EventEmitter();
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
        var weapon = new Weapon();
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
        Input(),
        __metadata("design:type", Array)
    ], WeaponComponent.prototype, "weapons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], WeaponComponent.prototype, "charId", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], WeaponComponent.prototype, "onDelete", void 0);
    WeaponComponent = __decorate([
        Component({
            selector: 'app-weapon',
            templateUrl: './weapon.component.html',
            styleUrls: ['./weapon.component.css']
        })
        /** Weapon component*/
        ,
        __metadata("design:paramtypes", [])
    ], WeaponComponent);
    return WeaponComponent;
}());
export { WeaponComponent };
//# sourceMappingURL=weapon.component.js.map
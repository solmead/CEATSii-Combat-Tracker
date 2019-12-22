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
import { Attack } from '../../entities/Attack';
var AttackComponent = /** @class */ (function () {
    /** Armor ctor */
    function AttackComponent() {
        this.onDelete = new EventEmitter();
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
        var attack = new Attack();
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
        Input(),
        __metadata("design:type", Array)
    ], AttackComponent.prototype, "attacks", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AttackComponent.prototype, "creatureId", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AttackComponent.prototype, "onDelete", void 0);
    AttackComponent = __decorate([
        Component({
            selector: 'app-attack',
            templateUrl: './attack.component.html',
            styleUrls: ['./attack.component.css']
        })
        /** Attack component*/
        ,
        __metadata("design:paramtypes", [])
    ], AttackComponent);
    return AttackComponent;
}());
export { AttackComponent };
//# sourceMappingURL=attack.component.js.map
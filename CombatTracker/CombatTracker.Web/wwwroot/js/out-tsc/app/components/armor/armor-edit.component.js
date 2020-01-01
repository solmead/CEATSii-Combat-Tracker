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
import { Armor } from '../../entities/Armor';
import { CombatRepository } from '../../repositories/Combat.repository';
var ArmorEditComponent = /** @class */ (function () {
    /** ArmorEdit ctor */
    function ArmorEditComponent(combatRepo) {
        this.combatRepo = combatRepo;
        this.onDelete = new EventEmitter();
    }
    ArmorEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.armor);
    };
    __decorate([
        Input(),
        __metadata("design:type", Armor)
    ], ArmorEditComponent.prototype, "armor", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ArmorEditComponent.prototype, "onDelete", void 0);
    ArmorEditComponent = __decorate([
        Component({
            selector: 'app-armor-edit',
            templateUrl: './armor-edit.component.html',
            styleUrls: ['./armor-edit.component.css']
        })
        /** ArmorEdit component*/
        ,
        __metadata("design:paramtypes", [CombatRepository])
    ], ArmorEditComponent);
    return ArmorEditComponent;
}());
export { ArmorEditComponent };
//# sourceMappingURL=armor-edit.component.js.map
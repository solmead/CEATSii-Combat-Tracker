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
import { CombatRepository } from '../../repositories/Combat.repository';
import { EncounterService } from "../../services/Encounter.service";
import { ReferencesService } from "../../services/References.service";
import * as Enums from '../../entities/EnumDefinitions';
var GameType = Enums.EnumDefinitions.GameType;
import { Weapon } from '../../entities/Weapon';
var AttackEditComponent = /** @class */ (function () {
    /** ArmorEdit ctor */
    function AttackEditComponent(combatRepo, encounterService, referencesService) {
        this.combatRepo = combatRepo;
        this.encounterService = encounterService;
        this.referencesService = referencesService;
        this.onDelete = new EventEmitter();
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
                this.attack.weaponUsed = new Weapon();
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
    __decorate([
        Input(),
        __metadata("design:type", Attack)
    ], AttackEditComponent.prototype, "attack", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AttackEditComponent.prototype, "onDelete", void 0);
    AttackEditComponent = __decorate([
        Component({
            selector: 'app-attack-edit',
            templateUrl: './attack-edit.component.html',
            styleUrls: ['./attack-edit.component.css']
        })
        /** AttackEdit component*/
        ,
        __metadata("design:paramtypes", [CombatRepository,
            EncounterService,
            ReferencesService])
    ], AttackEditComponent);
    return AttackEditComponent;
}());
export { AttackEditComponent };
//# sourceMappingURL=attack-edit.component.js.map
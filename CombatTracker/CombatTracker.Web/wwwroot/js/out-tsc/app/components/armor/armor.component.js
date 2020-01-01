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
var ArmorComponent = /** @class */ (function () {
    /** Armor ctor */
    function ArmorComponent() {
        this.armors = new Array();
        this.onDelete = new EventEmitter();
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
        var arm = new Armor();
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
        Input(),
        __metadata("design:type", Array)
    ], ArmorComponent.prototype, "armors", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ArmorComponent.prototype, "charId", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ArmorComponent.prototype, "onDelete", void 0);
    ArmorComponent = __decorate([
        Component({
            selector: 'app-armor',
            templateUrl: './armor.component.html',
            styleUrls: ['./armor.component.css']
        })
        /** Armor component*/
        ,
        __metadata("design:paramtypes", [])
    ], ArmorComponent);
    return ArmorComponent;
}());
export { ArmorComponent };
//# sourceMappingURL=armor.component.js.map
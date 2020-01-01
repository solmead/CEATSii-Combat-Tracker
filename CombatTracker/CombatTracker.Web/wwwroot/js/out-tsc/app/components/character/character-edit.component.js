var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../elements/modal/modal.service';
import { CharactersRepository } from '../../repositories/Characters.repository';
import { EncounterService } from "../../services/Encounter.service";
import { Character } from '../../entities/Character';
import * as Enums from '../../entities/EnumDefinitions';
var GameType = Enums.EnumDefinitions.GameType;
var CharacterType = Enums.EnumDefinitions.CharacterType;
var CharacterEditComponent = /** @class */ (function () {
    function CharacterEditComponent(encounterService, charRepo, modalService) {
        var _this = this;
        this.encounterService = encounterService;
        this.charRepo = charRepo;
        this.modalService = modalService;
        this.onDelete = new EventEmitter();
        this.onSave = new EventEmitter();
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
    __decorate([
        Input(),
        __metadata("design:type", Character)
    ], CharacterEditComponent.prototype, "character", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CharacterEditComponent.prototype, "onDelete", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CharacterEditComponent.prototype, "onSave", void 0);
    CharacterEditComponent = __decorate([
        Component({
            selector: 'app-character-edit',
            templateUrl: './character-edit.component.html',
            styleUrls: ['./character-edit.component.css']
        })
        /** characterDetail component*/
        ,
        __metadata("design:paramtypes", [EncounterService,
            CharactersRepository,
            ModalService])
    ], CharacterEditComponent);
    return CharacterEditComponent;
}());
export { CharacterEditComponent };
//# sourceMappingURL=character-edit.component.js.map
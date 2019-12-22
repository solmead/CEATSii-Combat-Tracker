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
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { SettingsRepository } from '../repositories/Settings.repository';
import { MySettings } from '../entities/MySettings';
import { UserRepository } from '../repositories/User.repository';
var SettingsService = /** @class */ (function () {
    function SettingsService(settingsRepo, userRepo) {
        var _this = this;
        this.settingsRepo = settingsRepo;
        this.userRepo = userRepo;
        this._currentUser = null;
        this.settings = new MySettings();
        this.subscribers = new Array();
        this.userSubscribers = new Array();
        this.refresh = function () {
            //this._currentUser = await
            _this.userRepo.currentUser().subscribe(function (value) {
                _this._currentUser = value;
                _this.userSubscribers.forEach(function (sub) {
                    sub.next(_this.currentUser);
                });
            });
            //this.settings = await
            _this.settingsRepo.getSetting().subscribe(function (value) {
                _this.subscribers.forEach(function (sub) {
                    sub.next(_this.settings);
                });
            });
        };
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
        this.userUpdated = new Observable(function (obs) {
            //obs.next(this.settings);
            if (_this.currentUser != null) {
                obs.next(_this.currentUser);
            }
            _this.userSubscribers.push(obs);
        });
        this.settingsUpdated = new Observable(function (obs) {
            //obs.next(this.settings);
            if (_this.settings != null) {
                obs.next(_this.settings);
            }
            _this.subscribers.push(obs);
        });
        this.refresh();
    }
    Object.defineProperty(SettingsService.prototype, "currentUser", {
        get: function () {
            return this._currentUser;
        },
        enumerable: true,
        configurable: true
    });
    SettingsService.prototype.getSiteBaseUrl = function () {
        return document.getElementsByTagName('baseapi')[0].attributes[0].nodeValue;
    };
    SettingsService.prototype.getAppBaseUrl = function () {
        return document.getElementsByTagName('base')[0].attributes[0].nodeValue;
    };
    SettingsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [SettingsRepository,
            UserRepository])
    ], SettingsService);
    return SettingsService;
}());
export { SettingsService };
//# sourceMappingURL=Settings.service.js.map
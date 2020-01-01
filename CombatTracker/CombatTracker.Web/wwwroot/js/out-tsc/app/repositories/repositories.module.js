var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { ActionsRepository } from "./Actions.repository";
import { ActorsRepository } from "./Actors.repository";
import { CharactersRepository } from "./Characters.repository";
import { CombatRepository } from "./Combat.repository";
import { CreaturesRepository } from "./Creatures.repository";
import { CriticalEffectsRepository } from "./CriticalEffects.repository";
import { EncounterRepository } from "./Encounter.repository";
import { GamesRepository } from "./Games.repository";
import { ReferenceRepository } from "./Reference.repository";
import { SampleDataRepository } from "./SampleData.repository";
import { SettingsRepository } from "./Settings.repository";
import { UserRepository } from "./User.repository";
var RepositoriesModule = /** @class */ (function () {
    function RepositoriesModule() {
    }
    RepositoriesModule = __decorate([
        NgModule({
            providers: [ActionsRepository,
                ActorsRepository,
                CriticalEffectsRepository,
                GamesRepository,
                ReferenceRepository,
                CharactersRepository,
                CreaturesRepository,
                CombatRepository,
                SampleDataRepository,
                SettingsRepository,
                EncounterRepository,
                UserRepository]
        })
    ], RepositoriesModule);
    return RepositoriesModule;
}());
export { RepositoriesModule };
//# sourceMappingURL=repositories.module.js.map
import { NgModule } from "@angular/core";
import { ActionsRepository } from "./Actions.repository";
import { ActorsRepository } from "./Actors.repository";
import { CriticalEffectsRepository } from "./CriticalEffects.repository";
import { GamesRepository } from "./Games.repository";
import { ReferenceRepository } from "./Reference.repository";
import { CharactersRepository } from "./Characters.repository";
import { CreaturesRepository } from "./Creatures.repository";
import { CombatRepository } from "./Combat.repository";
import { SampleDataRepository } from "./SampleData.repository";
import { SettingsRepository } from "./Settings.repository";
import { EncounterRepository } from "./Encounter.repository";

@NgModule({
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
        EncounterRepository]
})
export class RepositoriesModule { }
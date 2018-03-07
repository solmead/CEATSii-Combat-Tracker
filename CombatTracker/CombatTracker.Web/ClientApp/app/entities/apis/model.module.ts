import { NgModule } from "@angular/core";
import { ActionsService } from "./Actions.service";
import { ActorsService } from "./Actors.service";
import { CriticalEffectsService } from "./CriticalEffects.service";
import { GameService } from "./Games.service";
import { ReferenceService } from "./Reference.service";
import { SampleDataService } from "./SampleData.service";

@NgModule({
    providers: [ActionsService,
        ActorsService,
        CriticalEffectsService,
        GameService,
        ReferenceService,
        SampleDataService]
})
export class ModelModule { }
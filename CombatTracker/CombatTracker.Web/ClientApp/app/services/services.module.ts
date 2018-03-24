import { NgModule } from "@angular/core";
import { EncounterService } from "./Encounter.service";
import { SettingsService } from "./Settings.service";
import { ReferencesService } from "./References.service";

@NgModule({
    providers: [
        EncounterService,
        SettingsService,
        ReferencesService
    ]
})
export class ServicesModule { }
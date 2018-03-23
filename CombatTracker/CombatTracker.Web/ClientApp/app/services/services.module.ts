import { NgModule } from "@angular/core";
import { EncounterService } from "./Encounter.service";
import { SettingsService } from "./Settings.service";

@NgModule({
    providers: [
        EncounterService,
        SettingsService]
})
export class ServicesModule { }
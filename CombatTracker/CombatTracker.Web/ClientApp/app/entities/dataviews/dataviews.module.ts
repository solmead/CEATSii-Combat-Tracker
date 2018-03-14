import { NgModule } from "@angular/core";
import { GamesView } from "./GamesView.dataview";
import { EncounterView } from "./EncounterView.dataview";
import { CharactersView } from "./CharactersView.dataview";
import { SettingsView } from "./SettingsView.dataview";

@NgModule({
    providers: [GamesView,
        EncounterView,
        CharactersView,
        SettingsView]
})
export class DataViewsModule { }
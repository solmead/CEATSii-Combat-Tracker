import { NgModule } from "@angular/core";
import { GamesView } from "./GamesView.dataview";
import { EncounterView } from "./EncounterView.dataview";
import { CharactersView } from "./CharactersView.dataview";

@NgModule({
    providers: [GamesView,
        EncounterView,
        CharactersView]
})
export class DataViewsModule { }
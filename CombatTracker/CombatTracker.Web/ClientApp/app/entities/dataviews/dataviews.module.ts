import { NgModule } from "@angular/core";
import { GameView } from "./GameView.dataview";
import { CharactersView } from "./CharactersView.dataview";

@NgModule({
    providers: [GameView,
        CharactersView]
})
export class DataViewsModule { }
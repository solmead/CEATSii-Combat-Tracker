import { Component } from '@angular/core';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { Actor } from '../../entities/classes/Actor';
import { Game } from '../../entities/classes/Game';
import * as Enums from '../../entities/classes/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import { EnumEx } from "../../entities/EnumEx";

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    
    constructor(public gameView: EncounterView) {

    }

    get gameTypes(): Array<any> {
        var lst = EnumEx.getNamesAndValues(GameType);
        return lst;
    }

    get gameSystem(): string {
        return GameType[this.gameView.gameSystem];
    }

    set gameSystem(gType: string) {
        var gt = <GameType><any>GameType[<any>gType];
        this.gameView.gameSystem = gt;
    }


    get selectedActor(): Actor {
        return this.gameView.selectedActor;
    }
    selectActor(actor: Actor) {
        this.gameView.selectedActor = actor;
    }

    get actors(): Array<Actor> {
        return this.gameView.actors;
    }

    get game(): Game {
        return this.gameView.currentGame;
    }
}

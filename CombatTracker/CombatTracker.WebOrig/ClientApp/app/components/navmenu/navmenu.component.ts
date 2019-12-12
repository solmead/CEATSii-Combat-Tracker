import { Component } from '@angular/core';
import { EncounterService } from "../../services/Encounter.service";
import { Actor } from '../../entities/Actor';
import { Game } from '../../entities/Game';
import { MySettings } from '../../entities/MySettings';
import * as Enums from '../../entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import { EnumEx } from "../../entities/EnumEx";

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    
    constructor(public gameView: EncounterService) {

    }

    get gameTypes(): Array<any> {
        var lst = EnumEx.getNamesAndValues(GameType);
        return lst;
    }

    onChange(newValue: GameType) {
        this.gameView.setGameType(newValue);
    }

    get systemSettings(): MySettings {
        return this.gameView.systemSettings;
    }
    public setGameType(value: GameType) {
        this.gameView.setGameType(value);
    }

    //set gameSystem(gType: string) {
    //    var gt = <GameType><any>GameType[<any>gType];
    //    this.gameView.gameSystem = gt;
    //}


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

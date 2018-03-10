import { Component } from '@angular/core';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { Actor } from '../../entities/classes/Actor';
import { Game } from '../../entities/classes/Game';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    
    constructor(public gameView: EncounterView) {

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

import { Component } from '@angular/core';
import { GamesView } from "../../entities/dataviews/GamesView.dataview";
import { Game } from '../../entities/classes/Game';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css']
})
/** GameList component*/
export class GameListComponent {
    /** GameList ctor */
    constructor(public gameView: GamesView,
        public encounterView: EncounterView) {

    }
    newGame() {
        this.gameView.selected = new Game();
    }
    selectGame = async (gameId: number) => {
        this.gameView.selectGame(gameId);
    }
    selectEncounter = async (gameId: number) => {
        this.encounterView.selectGame(gameId);
        //redirect to encounter view
    }

    get games(): Array<Game> {
        return this.gameView.games;
    }
}
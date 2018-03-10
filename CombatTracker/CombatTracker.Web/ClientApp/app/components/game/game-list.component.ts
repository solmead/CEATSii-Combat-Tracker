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
    selectGame(game: Game) {
        this.gameView.selected = game;
    }
    selectEncounter(game: Game) {
        this.encounterView.currentGame = game;

    }

    get games(): Array<Game> {
        return this.gameView.games;
    }
}
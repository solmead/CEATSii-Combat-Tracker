import { Component } from '@angular/core';
import { GamesView } from "../../entities/dataviews/GamesView.dataview";
import { Game } from '../../entities/classes/Game';
import { GamesRepository } from '../../entities/apis/Games.repository';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";

@Component({
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css']
})
/** GameEdit component*/
export class GameEditComponent {
    /** GameEdit ctor */
    constructor(public gameView: GamesView,
        private gamesRepo: GamesRepository,
        public encounterView: EncounterView) {

    }
    get game(): Game {
        return this.gameView.selected;
    }
    saveGame = async () => {
        var g = await this.gamesRepo.saveGameAsync(this.game);
        if (!this.game.id) {
            this.game.id = g.id;

        }
        await this.gameView.refresh();

    }
    closeEdit() {
        this.gameView.refresh();
    }
    selectEncounter() {
        this.encounterView.currentGame = this.game;

    }
}
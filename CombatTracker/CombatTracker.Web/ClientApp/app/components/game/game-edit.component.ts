import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GamesView } from "../../entities/dataviews/GamesView.dataview";
import { Game } from '../../entities/classes/Game';
import { GamesRepository } from '../../entities/apis/Games.repository';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { EnumEx } from "../../entities/EnumEx";
import * as Enums from '../../entities/classes/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;


@Component({
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css']
})
/** GameEdit component*/
export class GameEditComponent {
    /** GameEdit ctor */
    constructor(private router: Router,
        public gameView: GamesView,
        private gamesRepo: GamesRepository,
        public encounterView: EncounterView) {

    }


    get game(): Game {
        var _game = this.gameView.selected;
        if (_game != null && !_game.id && this.gameView.systemSettings!=null) {
            _game.gameType = this.gameView.systemSettings.gameSystem;
            _game.gameTypeString = this.gameView.systemSettings.gameSystemString;
        }

        return _game;
    }
    saveGame = async () => {
        if (!this.game.id && this.gameView.systemSettings != null) {
            this.game.gameType = this.gameView.systemSettings.gameSystem;
        }
        var g = await this.gamesRepo.saveGameAsync(this.game);
        if (!this.game.id) {
            this.game.id = g.id;

        }
        await this.gameView.refresh();
        await this.encounterView.refresh();

    }
    closeEdit() {
        this.gameView.refresh();
    }
    selectEncounter() {
        this.encounterView.currentGame = this.game;
        this.router.navigate(['/encounter', this.game.id]);
    }
}
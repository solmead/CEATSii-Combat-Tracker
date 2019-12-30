import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EncounterService } from "@/services";
import { GamesRepository } from '@/repositories';
import { Game } from '@/entities/Game';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
/** Game component*/
export class GameComponent {

    public games: Array<Game> = new Array<Game>();
    public selectedGame: Game;

    /** character ctor */
    constructor(private gameRepo: GamesRepository,
        private encounterService: EncounterService) {

        this.refresh();
    }

    ngOnChanges() {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            } else {
                this.selectGame(this.games[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.games.length > 0) {
            if (this.selectedGame != null) {
                this.selectGame(this.selectedGame.id);
            } else {
                this.selectGame(this.games[0].id);
            }
        }
    }

    refresh = async () => {
        //this.games = await this.gameRepo.getGamesAsync(this.encounterService.systemSettings.gameSystem);
    }

    newGame() {
        //var _game = new Game();
        //_game.gameType = this.encounterService.systemSettings.gameSystem;
        //_game.gameTypeString = this.encounterService.systemSettings.gameSystemString;
        //this.selectedGame = _game;
    }
    selectGame = async (gameId: number) => {
        this.selectedGame = await this.gameRepo.getGameAsync(gameId);
    }
    onGameSave = (game: Game) => {
        this.refresh();
    }
    onGameDeleted = (game: Game) => {
        this.refresh();
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Game } from '@/entities/Game';
import { GamesRepository } from '@/repositories';
import { EncounterService } from "@/services";
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;


@Component({
    selector: 'app-game-edit',
    templateUrl: './game-edit.component.html',
    styleUrls: ['./game-edit.component.css']
})
/** GameEdit component*/
export class GameEditComponent {


    @Input() game: Game;
    @Output() onDelete = new EventEmitter<Game>();
    @Output() onSave = new EventEmitter<Game>();

    constructor(private router: Router,
        private gamesRepo: GamesRepository,
        public encounterService: EncounterService) {

    }

    saveGame = async () => {
        //if (!this.game.id && this.encounterService.systemSettings != null) {
        //    this.game.gameType = this.encounterService.systemSettings.gameSystem;
        //}
        var g = await this.gamesRepo.saveGameAsync(this.game);
        if (!this.game.id) {
            this.game.id = g.id;

        }
        await this.encounterService.refresh();

        this.onSave.emit(this.game);
    }
    closeEdit() {
        //this.gameView.refresh();
    }
    selectEncounter() {
        this.encounterService.currentGame = this.game;
        this.router.navigate(['/encounter', this.game.id]);
    }
}

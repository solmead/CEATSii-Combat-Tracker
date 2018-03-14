import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { GamesRepository } from '../../entities/apis/Games.repository';
import { Game } from '../classes/Game';
import { SettingsView } from './SettingsView.dataview';
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class GamesView {
    public games: Array<Game> = new Array<Game>();

    public selected: Game;


    constructor(private gameRepo: GamesRepository,
        private settings: SettingsView) {
        this.refresh();
    }
    get gameSystem(): GameType {
        if (this.settings.settings == null) {
            return GameType.RMSS;
        }
        return this.settings.settings.gameSystem;
    }
    set gameSystem(value: GameType) {
        if (this.settings.settings == null) {
            return;
        }
        this.settings.settings.gameSystem = value;
    }

    public refresh = async () => {
        this.selected = null;
        this.games = await this.gameRepo.getGamesAsync();
    }

    public selectGame = async (gameId: number) => {
        this.selected = await this.gameRepo.getGameAsync(gameId);
    }
}
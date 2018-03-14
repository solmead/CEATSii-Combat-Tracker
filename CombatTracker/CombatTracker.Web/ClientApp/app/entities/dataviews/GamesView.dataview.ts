import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { GamesRepository } from '../../entities/apis/Games.repository';
import { Game } from '../classes/Game';
import { SettingsView } from './SettingsView.dataview';
import { MySettings } from '../classes/MySettings';
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class GamesView {
    public games: Array<Game> = new Array<Game>();

    public selected: Game;


    constructor(private gameRepo: GamesRepository,
        private settings: SettingsView) {
        this.settings.settingsUpdated.subscribe((settings) => {
            this.refresh();
        });
    }

    get systemSettings(): MySettings {
        return this.settings.settings;
    }
    public setGameType(value: GameType) {
        this.settings.setGameType(value);
    }

    public refresh = async () => {
        this.selected = null;
        this.games = await this.gameRepo.getGamesAsync(this.systemSettings.gameSystem);
    }

    public selectGame = async (gameId: number) => {
        this.selected = await this.gameRepo.getGameAsync(gameId);
    }
}
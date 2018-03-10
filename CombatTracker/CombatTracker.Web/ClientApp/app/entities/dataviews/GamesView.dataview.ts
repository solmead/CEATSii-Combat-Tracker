import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { GamesRepository } from '../../entities/apis/Games.repository';
import { Game } from '../classes/Game';

@Injectable()
export class GamesView {
    public games: Array<Game> = new Array<Game>();

    public selected: Game;


    constructor(private gameRepo: GamesRepository) {
        this.refresh();
    }

    public refresh = async () => {
        this.selected = null;
        this.games = await this.gameRepo.getGamesAsync();
    }
}
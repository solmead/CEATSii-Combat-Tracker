import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { GameService } from '../../entities/apis/Games.service';
import { Game } from '../../entities/classes/Game';

@Component({
    selector: 'combat',
    templateUrl: './combat.component.html',
    styleUrls: ['./combat.component.css']
})
export class CombatComponent {

    public games: Array<Game>;

    constructor(private gameRepo: GameService) {
        gameRepo.getGames().subscribe((response: Array<Game>) => this.games = response);
    }
    

}

import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { GameController } from '../../entities/apis/GamesController';
import { Game } from '../../entities/current/Game';

@Component({
    selector: 'combat',
    templateUrl: './combat.component.html',
    styleUrls: ['./combat.component.css']
})
export class CombatComponent {

    private _games: Array<Game>;

    constructor(private gameRepo: GameController) {
        gameRepo.getGames();
    }

    get games(): Array<Game> {
        return _games;
    }
    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    /*http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
    //        this.forecasts = result.json() as WeatherForecast[];
    //    }, error => console.error(error));*/
    //}
}

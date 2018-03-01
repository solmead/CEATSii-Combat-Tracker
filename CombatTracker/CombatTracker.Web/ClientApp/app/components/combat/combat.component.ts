import { Component } from '@angular/core';

@Component({
    selector: 'combat',
    templateUrl: './combat.component.html',
    styleUrls: ['./combat.component.css']
})
export class CombatComponent {


    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        /*http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));*/
    }
}

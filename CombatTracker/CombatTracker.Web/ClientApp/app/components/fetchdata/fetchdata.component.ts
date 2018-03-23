import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleDataRepository } from '../../repositories/SampleData.repository';
import { WeatherForecast } from '../../entities/WeatherForecast';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[] = new Array<WeatherForecast>();

    constructor(private sampleRepo: SampleDataRepository) {
        sampleRepo.weatherForecasts().subscribe((response: Array<WeatherForecast>) => this.forecasts = response);
    }
}



import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as reference from "../current/Game";

//module App { 

    export class SampleDataController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public weatherForecasts = () : ng.IHttpPromise<WeatherForecast[]> => {
            
            return this.$http<WeatherForecast[]>({
                url: `api/SampleData/weatherForecasts`, 
                method: "get", 
                data: null
            });
        };
    }
    
//    angular.module("App").service("SampleDataService", ["$http", SampleDataController]);
//}
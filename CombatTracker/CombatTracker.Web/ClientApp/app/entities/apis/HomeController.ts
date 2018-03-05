
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as reference from "../current/Game";

//module App { 

    export class HomeController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public index = () : ng.IHttpPromise<IActionResult> => {
            
            return this.$http<IActionResult>({
                url: `api/Home/`, 
                method: "post", 
                data: null
            });
        };
        
        public error = () : ng.IHttpPromise<IActionResult> => {
            
            return this.$http<IActionResult>({
                url: `api/Home/`, 
                method: "post", 
                data: null
            });
        };
    }
    
//    angular.module("App").service("HomeService", ["$http", HomeController]);
//}
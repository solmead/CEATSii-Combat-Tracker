
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as reference from "../current/Game";

//module App { 

    export class GameController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public getGames = () : ng.IHttpPromise<Game[]> => {
            
            return this.$http<Game[]>({
                url: `api/Game/api/Game/`, 
                method: "get", 
                data: null
            });
        };
        
        public getGame = (id: number) : ng.IHttpPromise<Game> => {
            
            return this.$http<Game>({
                url: `api/Game/api/Game/${id}`, 
                method: "get", 
                data: null
            });
        };
        
        public saveGame = (game: Game) : ng.IHttpPromise<Game> => {
            
            return this.$http<Game>({
                url: `api/Game/api/Game/`, 
                method: "post", 
                data: game
            });
        };
    }
    
//    angular.module("App").service("GameService", ["$http", GameController]);
//}
﻿


//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";

    import * as Enums from '@/entities/EnumDefinitions'
    import { Game } from '@/entities/Game';
import GameType = Enums.EnumDefinitions.GameType;


@Injectable({ providedIn: 'root' })
export class GamesRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/Games/getGames?gameType=${gameType}

	//public getGames = (gameType: GameType, callback: (data: Game[])=>void) : void => {
	//	this.getGamesObserve(gameType).subscribe(response => callback(response));
	//}

	public getGamesAsync = (gameType: GameType) : Promise<Game[]> => {

        return new Promise<Game[]>((resolve, reject) => {
            this.getGames(gameType)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getGames = (gameType: GameType) : Observable<Game[]> => {
        var _Url = `api/Games/getGames?gameType=${gameType}`;
            return this._httpClient.get<Game[]>(_Url);
	};

    
    // get: api/Games/getGame?id=${id}

	//public getGame = (id: number, callback: (data: Game)=>void) : void => {
	//	this.getGameObserve(id).subscribe(response => callback(response));
	//}

	public getGameAsync = (id: number) : Promise<Game> => {

        return new Promise<Game>((resolve, reject) => {
            this.getGame(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getGame = (id: number) : Observable<Game> => {
        var _Url = `api/Games/getGame?id=${id}`;
            return this._httpClient.get<Game>(_Url);
	};

    
    // post: api/Games/saveGame

	//public saveGame = (game: Game, callback: (data: Game)=>void) : void => {
	//	this.saveGameObserve(game).subscribe(response => callback(response));
	//}

	public saveGameAsync = (game: Game) : Promise<Game> => {

        return new Promise<Game>((resolve, reject) => {
            this.saveGame(game)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public saveGame = (game: Game) : Observable<Game> => {
        var _Url = `api/Games/saveGame`;
            return this._httpClient.post<Game>(_Url, game);
	};

    
    // delete: api/Games/deleteGame?id=${id}

	//public deleteGame = (id: number, callback: (data: void)=>void) : void => {
	//	this.deleteGameObserve(id).subscribe(response => callback(response));
	//}

	public deleteGameAsync = (id: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.deleteGame(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public deleteGame = (id: number) : Observable<void> => {
        var _Url = `api/Games/deleteGame?id=${id}`;
            return this._httpClient.delete<void>(_Url);
	};

    
}





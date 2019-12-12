﻿


//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import {Observable} from "rxjs";
import { map, catchError } from "rxjs/operators";

    import * as Enums from '../entities/EnumDefinitions'
    import { MySettings } from '../entities/MySettings';
import { GameType } from '../entities/GameType';

@Injectable()
export class SettingsRepository {

    constructor(private _httpClient: HttpClient) { }        
    
    // get: api/Settings/getSetting   

	//public getSetting = (, callback: (data: MySettings)=>void) : void => {
	//	this.getSettingObserve().subscribe(response => callback(response));
	//}

	public getSettingAsync = () : Promise<MySettings> => {
        
        return new Promise<MySettings>((resolve, reject) => {
            this.getSetting()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public getSetting = () : Observable<MySettings> => {
        var _Url = `api/Settings/getSetting`;
            return this._httpClient.get<MySettings>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/Settings/setGameType   

	//public setGameType = (gameType: GameType, callback: (data: void)=>void) : void => {
	//	this.setGameTypeObserve(gameType).subscribe(response => callback(response));
	//}

	public setGameTypeAsync = (gameType: GameType) : Promise<void> => {
        
        return new Promise<void>((resolve, reject) => {
            this.setGameType(gameType)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public setGameType = (gameType: GameType) : Observable<void> => {
        var _Url = `api/Settings/setGameType`;
            return this._httpClient.post<void>(_Url, gameType)
                .pipe(catchError(this.handleError));
	};

    
    // Utility
    private handleError(error: HttpErrorResponse) {
        console.error(error);
        let customError: string = "";
        if (error.error) {
            customError = error.status === 400 ? error.error : error.statusText
        }
        return Observable.throw(customError || 'Server error');
    }
}


	
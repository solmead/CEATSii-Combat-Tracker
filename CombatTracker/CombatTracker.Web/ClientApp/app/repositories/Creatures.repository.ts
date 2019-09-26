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
    import { Creature } from '../entities/Creature';
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class CreaturesRepository {

    constructor(private _httpClient: HttpClient) { }        
    
    // get: api/Creature/getCreatures?gameType=${gameType}   

	//public getCreatures = (gameType: GameType, callback: (data: Creature[])=>void) : void => {
	//	this.getCreaturesObserve(gameType).subscribe(response => callback(response));
	//}

	public getCreaturesAsync = (gameType: GameType) : Promise<Creature[]> => {
        
        return new Promise<Creature[]>((resolve, reject) => {
            this.getCreatures(gameType)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public getCreatures = (gameType: GameType) : Observable<Creature[]> => {
        var _Url = `api/Creature/getCreatures?gameType=${gameType}`;
            return this._httpClient.get<Creature[]>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // get: api/Creature/getCreature?id=${id}   

	//public getCreature = (id: number, callback: (data: Creature)=>void) : void => {
	//	this.getCreatureObserve(id).subscribe(response => callback(response));
	//}

	public getCreatureAsync = (id: number) : Promise<Creature> => {
        
        return new Promise<Creature>((resolve, reject) => {
            this.getCreature(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public getCreature = (id: number) : Observable<Creature> => {
        var _Url = `api/Creature/getCreature?id=${id}`;
            return this._httpClient.get<Creature>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/Creature/saveCreature   

	//public saveCreature = (creature: Creature, callback: (data: Creature)=>void) : void => {
	//	this.saveCreatureObserve(creature).subscribe(response => callback(response));
	//}

	public saveCreatureAsync = (creature: Creature) : Promise<Creature> => {
        
        return new Promise<Creature>((resolve, reject) => {
            this.saveCreature(creature)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public saveCreature = (creature: Creature) : Observable<Creature> => {
        var _Url = `api/Creature/saveCreature`;
            return this._httpClient.post<Creature>(_Url, creature)
                .pipe(catchError(this.handleError));
	};

    
    // delete: api/Creature/deleteCreature?id=${id}   

	//public deleteCreature = (id: number, callback: (data: void)=>void) : void => {
	//	this.deleteCreatureObserve(id).subscribe(response => callback(response));
	//}

	public deleteCreatureAsync = (id: number) : Promise<void> => {
        
        return new Promise<void>((resolve, reject) => {
            this.deleteCreature(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public deleteCreature = (id: number) : Observable<void> => {
        var _Url = `api/Creature/deleteCreature?id=${id}`;
            return this._httpClient.delete<void>(_Url)
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


	
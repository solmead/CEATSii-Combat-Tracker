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
    import { Actor } from '../entities/Actor';

@Injectable()
export class ActorsRepository {

    constructor(private _httpClient: HttpClient) { }        
    
    // get: api/Actors/getActors?gameId=${gameId}   

	//public getActors = (gameId: number, callback: (data: Actor[])=>void) : void => {
	//	this.getActorsObserve(gameId).subscribe(response => callback(response));
	//}

	public getActorsAsync = (gameId: number) : Promise<Actor[]> => {
        
        return new Promise<Actor[]>((resolve, reject) => {
            this.getActors(gameId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public getActors = (gameId: number) : Observable<Actor[]> => {
        var _Url = `api/Actors/getActors?gameId=${gameId}`;
            return this._httpClient.get<Actor[]>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // get: api/Actors/getActor?id=${id}   

	//public getActor = (id: number, callback: (data: Actor)=>void) : void => {
	//	this.getActorObserve(id).subscribe(response => callback(response));
	//}

	public getActorAsync = (id: number) : Promise<Actor> => {
        
        return new Promise<Actor>((resolve, reject) => {
            this.getActor(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public getActor = (id: number) : Observable<Actor> => {
        var _Url = `api/Actors/getActor?id=${id}`;
            return this._httpClient.get<Actor>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/Actors/saveActor   

	//public saveActor = (actor: Actor, callback: (data: Actor)=>void) : void => {
	//	this.saveActorObserve(actor).subscribe(response => callback(response));
	//}

	public saveActorAsync = (actor: Actor) : Promise<Actor> => {
        
        return new Promise<Actor>((resolve, reject) => {
            this.saveActor(actor)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public saveActor = (actor: Actor) : Observable<Actor> => {
        var _Url = `api/Actors/saveActor`;
            return this._httpClient.post<Actor>(_Url, actor)
                .pipe(catchError(this.handleError));
	};

    
    // delete: api/Actors/deleteActor?id=${id}   

	//public deleteActor = (id: number, callback: (data: void)=>void) : void => {
	//	this.deleteActorObserve(id).subscribe(response => callback(response));
	//}

	public deleteActorAsync = (id: number) : Promise<void> => {
        
        return new Promise<void>((resolve, reject) => {
            this.deleteActor(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}  

	public deleteActor = (id: number) : Observable<void> => {
        var _Url = `api/Actors/deleteActor?id=${id}`;
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


	
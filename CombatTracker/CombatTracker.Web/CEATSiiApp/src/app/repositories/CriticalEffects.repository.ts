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
    import { CriticalEffect } from '@/entities';

var version = "1.0";

@Injectable({ providedIn: 'root' })
export class CriticalEffectsRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/v${version}/CriticalEffects/getCriticalEffects/${actorId}

	//public getCriticalEffects = (actorId: number, callback: (data: CriticalEffect[])=>void) : void => {
	//	this.getCriticalEffectsObserve(actorId).subscribe(response => callback(response));
	//}

	public getCriticalEffectsAsync = (actorId: number) : Promise<CriticalEffect[]> => {

        return new Promise<CriticalEffect[]>((resolve, reject) => {
            this.getCriticalEffects(actorId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getCriticalEffects = (actorId: number) : Observable<CriticalEffect[]> => {
        actorId = (actorId == null ? <number><any>"" : actorId);
        
        var _Url = `api/v${version}/CriticalEffects/getCriticalEffects/${actorId}`;
            return this._httpClient.get<CriticalEffect[]>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // get: api/v${version}/CriticalEffects/getCriticalEffect/${id}

	//public getCriticalEffect = (id: number, callback: (data: CriticalEffect)=>void) : void => {
	//	this.getCriticalEffectObserve(id).subscribe(response => callback(response));
	//}

	public getCriticalEffectAsync = (id: number) : Promise<CriticalEffect> => {

        return new Promise<CriticalEffect>((resolve, reject) => {
            this.getCriticalEffect(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getCriticalEffect = (id: number) : Observable<CriticalEffect> => {
        id = (id == null ? <number><any>"" : id);
        
        var _Url = `api/v${version}/CriticalEffects/getCriticalEffect/${id}`;
            return this._httpClient.get<CriticalEffect>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/CriticalEffects/SaveCriticalEffect

	//public saveCriticalEffect = (criticalEffect: CriticalEffect, callback: (data: CriticalEffect)=>void) : void => {
	//	this.saveCriticalEffectObserve(criticalEffect).subscribe(response => callback(response));
	//}

	public saveCriticalEffectAsync = (criticalEffect: CriticalEffect) : Promise<CriticalEffect> => {

        return new Promise<CriticalEffect>((resolve, reject) => {
            this.saveCriticalEffect(criticalEffect)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public saveCriticalEffect = (criticalEffect: CriticalEffect) : Observable<CriticalEffect> => {
        criticalEffect = (criticalEffect == null ? <CriticalEffect><any>"" : criticalEffect);
        
        var _Url = `api/v${version}/CriticalEffects/SaveCriticalEffect`;
            return this._httpClient.post<CriticalEffect>(_Url, criticalEffect)
                .pipe(catchError(this.handleError));
	};

    
    // delete: api/v${version}/CriticalEffects/deleteCriticalEffect/${id}

	//public deleteCriticalEffect = (id: number, callback: (data: void)=>void) : void => {
	//	this.deleteCriticalEffectObserve(id).subscribe(response => callback(response));
	//}

	public deleteCriticalEffectAsync = (id: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.deleteCriticalEffect(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public deleteCriticalEffect = (id: number) : Observable<void> => {
        id = (id == null ? <number><any>"" : id);
        
        var _Url = `api/v${version}/CriticalEffects/deleteCriticalEffect/${id}`;
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





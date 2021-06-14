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
    import { Character } from '@/entities';

var version = "1.0";

@Injectable({ providedIn: 'root' })
export class CharactersRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/v${version}/Characters/getCharacters

	//public getCharacters = (, callback: (data: Character[])=>void) : void => {
	//	this.getCharactersObserve().subscribe(response => callback(response));
	//}

	public getCharactersAsync = () : Promise<Character[]> => {

        return new Promise<Character[]>((resolve, reject) => {
            this.getCharacters()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getCharacters = () : Observable<Character[]> => {
        
        var _Url = `api/v${version}/Characters/getCharacters`;
            return this._httpClient.get<Character[]>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // get: api/v${version}/Characters/getCharacter/${id}

	//public getCharacter = (id: number, callback: (data: Character)=>void) : void => {
	//	this.getCharacterObserve(id).subscribe(response => callback(response));
	//}

	public getCharacterAsync = (id: number) : Promise<Character> => {

        return new Promise<Character>((resolve, reject) => {
            this.getCharacter(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getCharacter = (id: number) : Observable<Character> => {
        id = (id == null ? <number><any>"" : id);
        
        var _Url = `api/v${version}/Characters/getCharacter/${id}`;
            return this._httpClient.get<Character>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Characters/SaveCharacter

	//public saveCharacter = (character: Character, callback: (data: Character)=>void) : void => {
	//	this.saveCharacterObserve(character).subscribe(response => callback(response));
	//}

	public saveCharacterAsync = (character: Character) : Promise<Character> => {

        return new Promise<Character>((resolve, reject) => {
            this.saveCharacter(character)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public saveCharacter = (character: Character) : Observable<Character> => {
        character = (character == null ? <Character><any>"" : character);
        
        var _Url = `api/v${version}/Characters/SaveCharacter`;
            return this._httpClient.post<Character>(_Url, character)
                .pipe(catchError(this.handleError));
	};

    
    // delete: api/v${version}/Characters/deleteCharacter/${id}

	//public deleteCharacter = (id: number, callback: (data: void)=>void) : void => {
	//	this.deleteCharacterObserve(id).subscribe(response => callback(response));
	//}

	public deleteCharacterAsync = (id: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.deleteCharacter(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public deleteCharacter = (id: number) : Observable<void> => {
        id = (id == null ? <number><any>"" : id);
        
        var _Url = `api/v${version}/Characters/deleteCharacter/${id}`;
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





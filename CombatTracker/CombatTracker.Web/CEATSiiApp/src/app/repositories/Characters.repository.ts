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


@Injectable({ providedIn: 'root' })
export class CharactersRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/Characters/getCharacters

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
        var _Url = `api/Characters/getCharacters`;
            return this._httpClient.get<Character[]>(_Url);
	};

    
    // get: api/Characters/getCharacter?id=${id}

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
        var _Url = `api/Characters/getCharacter?id=${id}`;
            return this._httpClient.get<Character>(_Url);
	};

    
    // post: api/Characters/saveCharacter

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
        var _Url = `api/Characters/saveCharacter`;
            return this._httpClient.post<Character>(_Url, character);
	};

    
    // delete: api/Characters/deleteCharacter?id=${id}

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
        var _Url = `api/Characters/deleteCharacter?id=${id}`;
            return this._httpClient.delete<void>(_Url);
	};

    
}





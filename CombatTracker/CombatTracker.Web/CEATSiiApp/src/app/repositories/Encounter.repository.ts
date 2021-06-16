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
    import { Game } from '@/entities';
import { Actor } from '@/entities';
import { MoveNextResult } from '@/entities';
import { BaseAction } from '@/entities';
import { CriticalEffect } from '@/entities';

var version = "1";

@Injectable({ providedIn: 'root' })
export class EncounterRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/v${version}/Encounter/getCurrentGame

	//public getCurrentGame = (, callback: (data: Game)=>void) : void => {
	//	this.getCurrentGameObserve().subscribe(response => callback(response));
	//}

	public getCurrentGameAsync = () : Promise<Game> => {

        return new Promise<Game>((resolve, reject) => {
            this.getCurrentGame()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getCurrentGame = () : Observable<Game> => {
        
        var _Url = `api/v${version}/Encounter/getCurrentGame`;
            return this._httpClient.get<Game>(_Url)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/SetCurrentGame/${gameId}

	//public setCurrentGame = (gameId: number, callback: (data: Game)=>void) : void => {
	//	this.setCurrentGameObserve(gameId).subscribe(response => callback(response));
	//}

	public setCurrentGameAsync = (gameId: number) : Promise<Game> => {

        return new Promise<Game>((resolve, reject) => {
            this.setCurrentGame(gameId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public setCurrentGame = (gameId: number) : Observable<Game> => {
        gameId = (gameId == null ? <number><any>"" : gameId);
        
        var _Url = `api/v${version}/Encounter/SetCurrentGame/${gameId}`;
            return this._httpClient.post<Game>(_Url, gameId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/CreateActorFromCreature/${creatureId}

	//public createActorFromCreature = (creatureId: number, callback: (data: Actor)=>void) : void => {
	//	this.createActorFromCreatureObserve(creatureId).subscribe(response => callback(response));
	//}

	public createActorFromCreatureAsync = (creatureId: number) : Promise<Actor> => {

        return new Promise<Actor>((resolve, reject) => {
            this.createActorFromCreature(creatureId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public createActorFromCreature = (creatureId: number) : Observable<Actor> => {
        creatureId = (creatureId == null ? <number><any>"" : creatureId);
        
        var _Url = `api/v${version}/Encounter/CreateActorFromCreature/${creatureId}`;
            return this._httpClient.post<Actor>(_Url, creatureId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/CreateActorFromCharacter/${characterId}?rolledInit=${rolledInit}

	//public createActorFromCharacter = (characterId: number, rolledInit: number, callback: (data: Actor)=>void) : void => {
	//	this.createActorFromCharacterObserve(characterId, rolledInit).subscribe(response => callback(response));
	//}

	public createActorFromCharacterAsync = (characterId: number, rolledInit: number) : Promise<Actor> => {

        return new Promise<Actor>((resolve, reject) => {
            this.createActorFromCharacter(characterId, rolledInit)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public createActorFromCharacter = (characterId: number, rolledInit: number) : Observable<Actor> => {
        characterId = (characterId == null ? <number><any>"" : characterId);
        rolledInit = (rolledInit == null ? <number><any>"" : rolledInit);
        
        var _Url = `api/v${version}/Encounter/CreateActorFromCharacter/${characterId}?rolledInit=${rolledInit}`;
            return this._httpClient.post<Actor>(_Url, characterId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/MoveToNext?none=${none}

	//public moveToNext = (none: boolean, callback: (data: MoveNextResult)=>void) : void => {
	//	this.moveToNextObserve(none).subscribe(response => callback(response));
	//}

	public moveToNextAsync = (none: boolean) : Promise<MoveNextResult> => {

        return new Promise<MoveNextResult>((resolve, reject) => {
            this.moveToNext(none)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public moveToNext = (none: boolean) : Observable<MoveNextResult> => {
        none = (none == null ? <boolean><any>"" : none);
        
        var _Url = `api/v${version}/Encounter/MoveToNext?none=${none}`;
            return this._httpClient.post<MoveNextResult>(_Url, none)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/ProposeActionUnconscious?actorId=${actorId}

	//public proposeActionUnconscious = (actorId: number, callback: (data: BaseAction)=>void) : void => {
	//	this.proposeActionUnconsciousObserve(actorId).subscribe(response => callback(response));
	//}

	public proposeActionUnconsciousAsync = (actorId: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.proposeActionUnconscious(actorId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public proposeActionUnconscious = (actorId: number) : Observable<BaseAction> => {
        actorId = (actorId == null ? <number><any>"" : actorId);
        
        var _Url = `api/v${version}/Encounter/ProposeActionUnconscious?actorId=${actorId}`;
            return this._httpClient.post<BaseAction>(_Url, actorId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/ProposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}

	//public proposeAction = (actionDefId: number, whomId: number, modifier: number, attackId: number, callback: (data: BaseAction)=>void) : void => {
	//	this.proposeActionObserve(actionDefId, whomId, modifier, attackId).subscribe(response => callback(response));
	//}

	public proposeActionAsync = (actionDefId: number, whomId: number, modifier: number, attackId: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.proposeAction(actionDefId, whomId, modifier, attackId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public proposeAction = (actionDefId: number, whomId: number, modifier: number, attackId: number) : Observable<BaseAction> => {
        actionDefId = (actionDefId == null ? <number><any>"" : actionDefId);
        whomId = (whomId == null ? <number><any>"" : whomId);
        modifier = (modifier == null ? <number><any>"" : modifier);
        attackId = (attackId == null ? <number><any>"" : attackId);
        
        var _Url = `api/v${version}/Encounter/ProposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}`;
            return this._httpClient.post<BaseAction>(_Url, actionDefId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/ProposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}

	//public proposeActionContinue = (previousActionId: number, whomId: number, callback: (data: BaseAction)=>void) : void => {
	//	this.proposeActionContinueObserve(previousActionId, whomId).subscribe(response => callback(response));
	//}

	public proposeActionContinueAsync = (previousActionId: number, whomId: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.proposeActionContinue(previousActionId, whomId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public proposeActionContinue = (previousActionId: number, whomId: number) : Observable<BaseAction> => {
        previousActionId = (previousActionId == null ? <number><any>"" : previousActionId);
        whomId = (whomId == null ? <number><any>"" : whomId);
        
        var _Url = `api/v${version}/Encounter/ProposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}`;
            return this._httpClient.post<BaseAction>(_Url, previousActionId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/AddBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}

	//public addBleedEffect = (whomId: number, bleedRate: number, callback: (data: BaseAction)=>void) : void => {
	//	this.addBleedEffectObserve(whomId, bleedRate).subscribe(response => callback(response));
	//}

	public addBleedEffectAsync = (whomId: number, bleedRate: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.addBleedEffect(whomId, bleedRate)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public addBleedEffect = (whomId: number, bleedRate: number) : Observable<BaseAction> => {
        whomId = (whomId == null ? <number><any>"" : whomId);
        bleedRate = (bleedRate == null ? <number><any>"" : bleedRate);
        
        var _Url = `api/v${version}/Encounter/AddBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}`;
            return this._httpClient.post<BaseAction>(_Url, whomId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/AddCriticalEffect?whomId=${whomId}&rounds=${rounds}

	//public addCriticalEffect = (whomId: number, crit: CriticalEffect, rounds: number, callback: (data: BaseAction)=>void) : void => {
	//	this.addCriticalEffectObserve(whomId, crit, rounds).subscribe(response => callback(response));
	//}

	public addCriticalEffectAsync = (whomId: number, crit: CriticalEffect, rounds: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.addCriticalEffect(whomId, crit, rounds)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public addCriticalEffect = (whomId: number, crit: CriticalEffect, rounds: number) : Observable<BaseAction> => {
        whomId = (whomId == null ? <number><any>"" : whomId);
        crit = (crit == null ? <CriticalEffect><any>"" : crit);
        rounds = (rounds == null ? <number><any>"" : rounds);
        
        var _Url = `api/v${version}/Encounter/AddCriticalEffect?whomId=${whomId}&rounds=${rounds}`;
            return this._httpClient.post<BaseAction>(_Url, whomId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/AddPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}

	//public addPsychicEffect = (whomId: number, psychicLevel: number, callback: (data: BaseAction)=>void) : void => {
	//	this.addPsychicEffectObserve(whomId, psychicLevel).subscribe(response => callback(response));
	//}

	public addPsychicEffectAsync = (whomId: number, psychicLevel: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.addPsychicEffect(whomId, psychicLevel)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public addPsychicEffect = (whomId: number, psychicLevel: number) : Observable<BaseAction> => {
        whomId = (whomId == null ? <number><any>"" : whomId);
        psychicLevel = (psychicLevel == null ? <number><any>"" : psychicLevel);
        
        var _Url = `api/v${version}/Encounter/AddPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}`;
            return this._httpClient.post<BaseAction>(_Url, whomId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/AddSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}

	//public addSpellEffect = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number, callback: (data: BaseAction)=>void) : void => {
	//	this.addSpellEffectObserve(effectedActorId, casterId, spellName, rounds, hastePercent).subscribe(response => callback(response));
	//}

	public addSpellEffectAsync = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number) : Promise<BaseAction> => {

        return new Promise<BaseAction>((resolve, reject) => {
            this.addSpellEffect(effectedActorId, casterId, spellName, rounds, hastePercent)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public addSpellEffect = (effectedActorId: number, casterId: number, spellName: string, rounds: number, hastePercent: number) : Observable<BaseAction> => {
        effectedActorId = (effectedActorId == null ? <number><any>"" : effectedActorId);
        casterId = (casterId == null ? <number><any>"" : casterId);
        spellName = (spellName == null ? <string><any>"" : spellName);
        rounds = (rounds == null ? <number><any>"" : rounds);
        hastePercent = (hastePercent == null ? <number><any>"" : hastePercent);
        
        var _Url = `api/v${version}/Encounter/AddSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}`;
            return this._httpClient.post<BaseAction>(_Url, effectedActorId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/RemoveEffect/${actionId}

	//public removeEffect = (actionId: number, callback: (data: void)=>void) : void => {
	//	this.removeEffectObserve(actionId).subscribe(response => callback(response));
	//}

	public removeEffectAsync = (actionId: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.removeEffect(actionId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public removeEffect = (actionId: number) : Observable<void> => {
        actionId = (actionId == null ? <number><any>"" : actionId);
        
        var _Url = `api/v${version}/Encounter/RemoveEffect/${actionId}`;
            return this._httpClient.post<void>(_Url, actionId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/RemoveCriticalsFromActor/${whomId}?count=${count}

	//public removeCriticalsFromActor = (whomId: number, count: number, callback: (data: void)=>void) : void => {
	//	this.removeCriticalsFromActorObserve(whomId, count).subscribe(response => callback(response));
	//}

	public removeCriticalsFromActorAsync = (whomId: number, count: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.removeCriticalsFromActor(whomId, count)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public removeCriticalsFromActor = (whomId: number, count: number) : Observable<void> => {
        whomId = (whomId == null ? <number><any>"" : whomId);
        count = (count == null ? <number><any>"" : count);
        
        var _Url = `api/v${version}/Encounter/RemoveCriticalsFromActor/${whomId}?count=${count}`;
            return this._httpClient.post<void>(_Url, whomId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/DoProposedAction/${whomId}

	//public doProposedAction = (whomId: number, callback: (data: void)=>void) : void => {
	//	this.doProposedActionObserve(whomId).subscribe(response => callback(response));
	//}

	public doProposedActionAsync = (whomId: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.doProposedAction(whomId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public doProposedAction = (whomId: number) : Observable<void> => {
        whomId = (whomId == null ? <number><any>"" : whomId);
        
        var _Url = `api/v${version}/Encounter/DoProposedAction/${whomId}`;
            return this._httpClient.post<void>(_Url, whomId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/SetModifierOnAction?actionId=${actionId}&modifier=${modifier}

	//public setModifierOnAction = (actionId: number, modifier: number, callback: (data: void)=>void) : void => {
	//	this.setModifierOnActionObserve(actionId, modifier).subscribe(response => callback(response));
	//}

	public setModifierOnActionAsync = (actionId: number, modifier: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.setModifierOnAction(actionId, modifier)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public setModifierOnAction = (actionId: number, modifier: number) : Observable<void> => {
        actionId = (actionId == null ? <number><any>"" : actionId);
        modifier = (modifier == null ? <number><any>"" : modifier);
        
        var _Url = `api/v${version}/Encounter/SetModifierOnAction?actionId=${actionId}&modifier=${modifier}`;
            return this._httpClient.post<void>(_Url, actionId)
                .pipe(catchError(this.handleError));
	};

    
    // post: api/v${version}/Encounter/SetAttackOnAction?actionId=${actionId}&attackId=${attackId}

	//public setAttackOnAction = (actionId: number, attackId: number, callback: (data: void)=>void) : void => {
	//	this.setAttackOnActionObserve(actionId, attackId).subscribe(response => callback(response));
	//}

	public setAttackOnActionAsync = (actionId: number, attackId: number) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.setAttackOnAction(actionId, attackId)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public setAttackOnAction = (actionId: number, attackId: number) : Observable<void> => {
        actionId = (actionId == null ? <number><any>"" : actionId);
        attackId = (attackId == null ? <number><any>"" : attackId);
        
        var _Url = `api/v${version}/Encounter/SetAttackOnAction?actionId=${actionId}&attackId=${attackId}`;
            return this._httpClient.post<void>(_Url, actionId)
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





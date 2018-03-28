﻿

//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

    import * as Enums from '../entities/EnumDefinitions'
    import { Game } from '../entities/Game';
import { Actor } from '../entities/Actor';
import { MoveNextResult } from '../entities/MoveNextResult';
import { BaseAction } from '../entities/BaseAction';
import { CriticalEffect } from '../entities/CriticalEffect';

@Injectable()
export class EncounterRepository {

    constructor(private _httpClient: HttpClient) { }        
    
    // get: api/Encounter/getCurrentGame   

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
        var _Url = `api/Encounter/getCurrentGame`;
            return this._httpClient.get<Game>(_Url)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/setCurrentGame?gameId=${gameId}   

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
        var _Url = `api/Encounter/setCurrentGame?gameId=${gameId}`;
            return this._httpClient.post(_Url, gameId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/createActorFromCreature?creatureId=${creatureId}   

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
        var _Url = `api/Encounter/createActorFromCreature?creatureId=${creatureId}`;
            return this._httpClient.post(_Url, creatureId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/createActorFromCharacter?characterId=${characterId}&rolledInit=${rolledInit}   

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
        var _Url = `api/Encounter/createActorFromCharacter?characterId=${characterId}&rolledInit=${rolledInit}`;
            return this._httpClient.post(_Url, characterId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/moveToNext?none=${none}   

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
        var _Url = `api/Encounter/moveToNext?none=${none}`;
            return this._httpClient.post(_Url, none)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/proposeActionUnconscious?actorId=${actorId}   

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
        var _Url = `api/Encounter/proposeActionUnconscious?actorId=${actorId}`;
            return this._httpClient.post(_Url, actorId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/proposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}   

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
        var _Url = `api/Encounter/proposeAction?actionDefId=${actionDefId}&whomId=${whomId}&modifier=${modifier}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionDefId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/proposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}   

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
        var _Url = `api/Encounter/proposeActionContinue?previousActionId=${previousActionId}&whomId=${whomId}`;
            return this._httpClient.post(_Url, previousActionId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/addBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}   

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
        var _Url = `api/Encounter/addBleedEffect?whomId=${whomId}&bleedRate=${bleedRate}`;
            return this._httpClient.post(_Url, whomId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/addCriticalEffect?whomId=${whomId}&rounds=${rounds}   

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
        var _Url = `api/Encounter/addCriticalEffect?whomId=${whomId}&rounds=${rounds}`;
            return this._httpClient.post(_Url, whomId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/addPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}   

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
        var _Url = `api/Encounter/addPsychicEffect?whomId=${whomId}&psychicLevel=${psychicLevel}`;
            return this._httpClient.post(_Url, whomId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/addSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}   

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
        var _Url = `api/Encounter/addSpellEffect?effectedActorId=${effectedActorId}&casterId=${casterId}&spellName=${encodeURIComponent(spellName)}&rounds=${rounds}&hastePercent=${hastePercent}`;
            return this._httpClient.post(_Url, effectedActorId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/removeEffect?actionId=${actionId}   

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
        var _Url = `api/Encounter/removeEffect?actionId=${actionId}`;
            return this._httpClient.post(_Url, actionId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/removeCriticalsFromActor?whomId=${whomId}&count=${count}   

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
        var _Url = `api/Encounter/removeCriticalsFromActor?whomId=${whomId}&count=${count}`;
            return this._httpClient.post(_Url, whomId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/doProposedAction?whomId=${whomId}   

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
        var _Url = `api/Encounter/doProposedAction?whomId=${whomId}`;
            return this._httpClient.post(_Url, whomId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/setModifierOnAction?actionId=${actionId}&modifier=${modifier}   

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
        var _Url = `api/Encounter/setModifierOnAction?actionId=${actionId}&modifier=${modifier}`;
            return this._httpClient.post(_Url, actionId)
                .catch(this.handleError);
	};

    
    // post: api/Encounter/setAttackOnAction?actionId=${actionId}&attackId=${attackId}   

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
        var _Url = `api/Encounter/setAttackOnAction?actionId=${actionId}&attackId=${attackId}`;
            return this._httpClient.post(_Url, actionId)
                .catch(this.handleError);
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


	
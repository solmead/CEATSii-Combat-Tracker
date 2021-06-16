import { Injectable } from '@angular/core';
import { EnumDefinitions } from '@/entities/EnumDefinitions'
import { Game } from '@/entities';
import { Actor } from '@/entities';
import { BaseAction } from '@/entities';
import { GamesRepository } from '@/repositories';
import { ActorsRepository } from '@/repositories';
import { ActionsRepository } from '@/repositories';
import { MySettings } from '@/entities';
import { Character } from '@/entities';
import { Creature } from '@/entities';
import { EncounterRepository } from '@/repositories';
import { AuthenticationService } from './Authentication.service';


import GameType = EnumDefinitions.GameType;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;
import CharacterType = EnumDefinitions.CharacterType;

@Injectable()
export class EncounterService {

    private _currentGame: Game;
    public actors: Array<Actor> = new Array<Actor>();
    public allActions: Array<BaseAction> = new Array<BaseAction>();

    //public selectedAction: BaseAction;

    private _selectedActor: Actor;
    private _selectedAction: BaseAction;



    constructor(private authService: AuthenticationService,
        private gameRepo: GamesRepository,
        private actorRepo: ActorsRepository,
        private actionRepo: ActionsRepository,
        private encounterRepo: EncounterRepository) {

        //authService.currentUser.subscribe((user) => {
        //    ////debugger;
        //    if (user != null) {
        //        this.refresh();
        //    } else {
        //        this._currentGame = null;
        //        this.actors = new Array<Actor>();
        //        this.actions = new Array<BaseAction>();
        //        this._selectedActor = null;
        //        this._selectedAction = null;
        //    }
        //});

        this.refresh();

    }

    get actions(): Array<BaseAction> {
        var acts = this.allActions;
        
        if (this.authService.currentUser == null) {

            acts = acts.filter((element, index, array) => {
                var isNext = element.actionType == ActionTypeEnum.Next;
                var isEffect = element.actionType == ActionTypeEnum.Effect && element.type != ActorActionType.SpellEffect;
                var isSpellOnNPC = element.actionType == ActionTypeEnum.Effect && element.type == ActorActionType.SpellEffect && element.whoIsActing.type == CharacterType.NPC;


                return !isNext && !isEffect;
            });


        }


        return acts;
    }

    //get systemSettings(): MySettings {
    //    return this.settings.settings;
    //}
    //public setGameType(value: GameType) {
    //    this.settings.setGameType(value);
    //}

    get selectedAction(): BaseAction {
        return this._selectedAction;
    }
    set selectedAction(action: BaseAction) {
        this._selectedAction = action;
        var who = this.actors.find(item => item.id === action.whoIsActing_ID);
        this._selectedActor = who;
    }
    get selectedActor(): Actor {
        return this._selectedActor;
    }
    set selectedActor(actor: Actor) {
        var act = this.actions.find(item => item.whoIsActing_ID === actor.id && item.actionType == EnumDefinitions.ActionTypeEnum.Current);
        this._selectedAction = act;

        this._selectedActor = actor;
    }
    public selectActor(actorId: number) {
        this.selectedActor = this.actors.find((a) => a.id == actorId);
    }


    get currentGame(): Game {
        return this._currentGame;
    }
    set currentGame(game: Game) {
        this.selectGame(game.id);
    }

    public selectGame = async (gameId: number) => {
        await this.encounterRepo.setCurrentGameAsync(gameId);
        await this.refresh();
    }

    public refresh = async () => {
        //debugger;
        this._currentGame = await this.encounterRepo.getCurrentGameAsync();
        if (this._currentGame.id == 0) {
            this._currentGame = null;
        }
        if (this.currentGame != null) {
            //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);

            this.actors = await this.actorRepo.getActorsInGameAsync(this.currentGame.id);
            this.allActions = await this.actionRepo.getActionsInGameAsync(this.currentGame.id);
            if (this.selectedActor == null) {

                this.selectedAction = this.actions[0];
            }
        }

    }

    public addCreatureToEncounter = async (creature: Creature) => {
        await this.encounterRepo.createActorFromCreatureAsync(creature.id);

        await this.refresh();

    }
    public addCharacterToEncounter = async (character: Character, rolledInit?: number) => {
        await this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);

        await this.refresh();

    }

}

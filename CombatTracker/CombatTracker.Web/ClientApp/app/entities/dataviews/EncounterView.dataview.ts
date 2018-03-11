import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { Game } from '../classes/Game';
import { Actor } from '../classes/Actor';
import { BaseAction } from '../classes/BaseAction';
import { GamesRepository } from '../../entities/apis/Games.repository';
import { ActorsRepository } from '../../entities/apis/Actors.repository';
import { ActionsRepository } from '../../entities/apis/Actions.repository';
import { EnumDefinitions } from '../classes/EnumDefinitions';

@Injectable()
export class EncounterView {

    private _currentGame: Game;
    public actors: Array<Actor> = new Array<Actor>();
    public actions: Array<BaseAction> = new Array<BaseAction>();

    //public selectedAction: BaseAction;

    private _selectedActor: Actor;
    private _selectedAction: BaseAction;


    constructor(private gameRepo: GamesRepository,
        private actorRepo: ActorsRepository,
        private actionRepo: ActionsRepository) {
        this.refresh();
    }

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
    get currentGame(): Game {
        return this._currentGame;
    }
    set currentGame(game: Game) {
        this._currentGame = game;
        this.refresh();
    }

    public refresh = async () => {
        if (this.currentGame!= null) {

            this.actors = await this.actorRepo.getActorsAsync(this.currentGame.id);
            this.actions = await this.actionRepo.getActionsInGameAsync(this.currentGame.id);
            if (this.selectedActor == null) {

                this.selectedAction = this.actions[0];
            }
        }
        
    }
}
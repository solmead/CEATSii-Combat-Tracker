import { Injectable } from '@angular/core';
import * as Enums from '../entities/EnumDefinitions'
import { Game } from '../entities/Game';
import { Actor } from '../entities/Actor';
import { BaseAction } from '../entities/BaseAction';
import { GamesRepository } from '../repositories/Games.repository';
import { ActorsRepository } from '../repositories/Actors.repository';
import { ActionsRepository } from '../repositories/Actions.repository';
import { EnumDefinitions } from '../entities/EnumDefinitions';
import { SettingsService } from './Settings.service';
import { MySettings } from '../entities/MySettings';
import GameType = Enums.EnumDefinitions.GameType;
import { Character } from '../entities/Character';
import { EncounterRepository } from '../repositories/Encounter.repository';

@Injectable()
export class EncounterService {

    private _currentGame: Game;
    public actors: Array<Actor> = new Array<Actor>();
    public actions: Array<BaseAction> = new Array<BaseAction>();

    //public selectedAction: BaseAction;

    private _selectedActor: Actor;
    private _selectedAction: BaseAction;


    constructor(private gameRepo: GamesRepository,
        private actorRepo: ActorsRepository,
        private actionRepo: ActionsRepository,
        private encounterRepo: EncounterRepository,
        private settings: SettingsService) {
        this.refresh();
    }

    get systemSettings(): MySettings {
        return this.settings.settings;
    }
    public setGameType(value: GameType) {
        this.settings.setGameType(value);
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
    public selectActor(actorId: number) {
        this.selectedActor =  this.actors.find((a) => a.id == actorId);
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
        this._currentGame = await this.encounterRepo.getCurrentGameAsync();
        if (this.currentGame != null) {
            //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);

            this.actors = await this.actorRepo.getActorsAsync(this.currentGame.id);
            this.actions = await this.actionRepo.getActionsInGameAsync(this.currentGame.id);
            if (this.selectedActor == null) {

                this.selectedAction = this.actions[0];
            }
        }
        
    }

    public addCharacterToEncounter = async (character: Character, rolledInit?:number) => {
        await this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);

        await this.refresh();

    }

}
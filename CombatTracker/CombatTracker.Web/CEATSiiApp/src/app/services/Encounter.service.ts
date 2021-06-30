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
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;
import { RecurringTask, whenTrue } from '@/_helpers/Tasks';
import { pipe } from 'rxjs';

@Injectable()
export class EncounterService {

    private _currentGame: Game;
    public allActors: Array<Actor> = new Array<Actor>();
    public allActions: Array<BaseAction> = new Array<BaseAction>();

    //public selectedAction: BaseAction;

    //private _selectedActor: Actor;
    //private _selectedAction: BaseAction;

    private _timedService: RecurringTask = new RecurringTask(async () => {
        this._timedService.lock();
        await this.refresh();
        this._timedService.unLock();

    }, 15000, 60000);



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



        this.init();

    }

    async init(): Promise<void> {
        await this.refresh();

        debugger;
        this._timedService.start();
    }

    get isGM(): boolean {
        if (this.authService.currentUserValue != null && this.currentGame != null) {
            return this.authService.currentUserValue.id == this.currentGame.gM_ID;
        }
        return false;
    }

    get isPlayer(): boolean {
        if (this.authService.currentUserValue != null && this.currentGame != null) {
            return this.authService.currentUserValue.id != this.currentGame.gM_ID;
        }
        return false;
    }

    get isViewOnly(): boolean {
        return this.authService.currentUserValue == null;
    }

    get viewType(): ViewTypeEnum {
        if (this.isViewOnly) {
            return ViewTypeEnum.Overview;
        }
        if (this.isPlayer) {
            return ViewTypeEnum.Player;
        }
        if (this.isGM) {
            return ViewTypeEnum.GM;
        }
        return ViewTypeEnum.Overview;
    }

    get actors(): Array<Actor> {
        var acts = this.allActors;

        acts.sort((a, b) => {
            var CAa = a.currentAction;
            var CAb = b.currentAction;



            if (CAa == null || CAb == null) {
                return 0;
            }
            if (CAa.endTime < CAb.endTime) {
                return -1;
            }
            if (CAa.endTime > CAb.endTime) {
                return 1;
            }
            return 0;
        });


        return acts;
    }

    get actions(): Array<BaseAction> {
        var acts = this.allActions;
        //debugger;
        if (this.isViewOnly && acts.length>0) {

            acts = acts.filter((element, index, array) => {
                //element.actionType == ActionTypeEnum.Next && 
                var isCurrent = element.actionType == ActionTypeEnum.Current || (element.actionType == ActionTypeEnum.Proposed && element.whoIsActing.type == CharacterType.PC);
                var isForPC = element.whoIsActing.type == CharacterType.PC;
                var isEffect = element.actionType == ActionTypeEnum.Effect && element.type != ActorActionType.SpellEffect;
                var isSpellOnNPC = element.actionType == ActionTypeEnum.Effect && element.type == ActorActionType.SpellEffect && element.whoIsActing.type == CharacterType.NPC;


                return isCurrent || (isForPC && !isEffect) || (isSpellOnNPC);
            });


        }
        if (acts.length > 0) {
            var min = acts[0].endTime;
            var max = acts[acts.length - 1].endTime;
            var range = max - min;

            acts.forEach((act) => {
                act.leftPercent = (act.endTime - min) / range;

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

    get selectedActions(): Array<BaseAction> {
        var acts = this.actions.filter(item => item.isSelected);
        return acts;
    }
    set selectedAction(action: BaseAction) {
        var acts = this.actions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.actors.find(item => item.isSelected);
        if (ac != null) {
            ac.isSelected = false;
        }

        action.isSelected = true;
        action.whoIsActing.isSelected = true;


    }
    get selectedActor(): Actor {
        var ac = this.actors.find(item => item.isSelected);
        return ac;
    }
    set selectedActor(actor: Actor) {
        var acts = this.actions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.actors.find(item => item.isSelected);
        if (ac != null) {
            ac.isSelected = false;
        }

        actor.isSelected = true;
        actor.actions.forEach((action) => {
            if (action.actionType == ActionTypeEnum.Current || action.actionType == ActionTypeEnum.Next || action.actionType == ActionTypeEnum.Proposed) {
                action.isSelected = true;
            }
        });

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
            var actors: Array<Actor> = null;
            var actions: Array<BaseAction> = null;

            this.actorRepo.getActorsInGame(this.currentGame.id).subscribe((acts) => {
                actors = acts;
            });

            this.actionRepo.getActionsInGame(this.currentGame.id).subscribe((acts) => {
                actions = acts;
            });

            await whenTrue(() => {
                return actors != null && actions != null;
            });


            actors.forEach((act) => {
                act.actions = actions.filter((action) => {
                    return action.whoIsActing_ID == act.id;
                });

                act.actions.forEach((action) => {
                    action.whoIsActing = act;
                });
            });

            actions[0].whoIsActing.isActive = true;

            this.allActors = actors;
            this.allActions = actions;
            if (this.isGM) {
                if (this.selectedAction == null) {

                    this.selectedAction = this.actions[0];
                }
                if (this.selectedActor == null) {

                    this.selectedActor = this.selectedAction.whoIsActing;
                }
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

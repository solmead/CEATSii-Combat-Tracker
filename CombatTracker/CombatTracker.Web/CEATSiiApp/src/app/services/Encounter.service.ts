import { Injectable } from '@angular/core';
import { EnumDefinitions } from '@/entities/EnumDefinitions'
import { ActionDefinition, Attack, Game } from '@/entities';
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
import { EncounterHubService } from './EncounterHub.service';

import ResponseEnum = EnumDefinitions.ResponseEnum;
import GameType = EnumDefinitions.GameType;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;
import CharacterType = EnumDefinitions.CharacterType;
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;
import { MutexLock, RecurringTask, whenTrue } from '@/_helpers/Tasks';
import { pipe } from 'rxjs';
import { ReferencesService, treeEntry } from './References.service';
import { AlertService } from './Alert.service';
import "@/_helpers/LinqToJs";

@Injectable()
export class EncounterService {

    private _currentGame: Game;
    public allActors: Array<Actor> = new Array<Actor>();
    public allActions: Array<BaseAction> = new Array<BaseAction>();

    private refreshLock = new MutexLock(30000);

    private _currentActionTree: treeEntry = null;

    //public selectedAction: BaseAction;

    //private _selectedActor: Actor;
    //private _selectedAction: BaseAction;

    private _timedService: RecurringTask = new RecurringTask(async () => {

        this._alertService.success("Refreshing List");
        await this.refreshAsync();
        this._alertService.success("List Refreshed");
    }, 60000, 120000);



    constructor(private authService: AuthenticationService,
        private gameRepo: GamesRepository,
        private actorRepo: ActorsRepository,
        private actionRepo: ActionsRepository,
        private encounterRepo: EncounterRepository,
        private encounterHubService: EncounterHubService,
        private referenceService: ReferencesService,
        private _alertService: AlertService    ) {

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
        await this.refreshAsync();

        await this.setupEventsAsync();

        //await this.refreshAsync();

        //debugger;
        this._timedService.start();

        var cat = await this.currentActionTreeAsync();
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


        acts.sortBy((obj) => (obj.currentAction !=null ? obj.currentAction.endTime : 0));

        //acts.sort((a, b) => {
        //    var CAa = a.currentAction;
        //    var CAb = b.currentAction;



        //    if (CAa == null || CAb == null) {
        //        return 0;
        //    }
        //    if (CAa.endTime < CAb.endTime) {
        //        return -1;
        //    }
        //    if (CAa.endTime > CAb.endTime) {
        //        return 1;
        //    }
        //    return 0;
        //});


        return acts;
    }

    get actions(): Array<BaseAction> {
        var acts = this.allActions;
        //debugger;
        if (this.isViewOnly && acts.length>0) {

            acts = acts.filter((element, index, array) => {
                //element.actionType == ActionTypeEnum.Next && 
                var isCurrent = element.actionType == ActionTypeEnum.Current || element.actionType == ActionTypeEnum.Next || (element.actionType == ActionTypeEnum.Proposed && element.whoIsActing.type == CharacterType.PC);
                var isForPC = element.whoIsActing.type == CharacterType.PC;
                var isEffect = element.actionType == ActionTypeEnum.Effect && element.type != ActorActionType.SpellEffect;
                var isSpellOnNPC = element.actionType == ActionTypeEnum.Effect && element.type == ActorActionType.SpellEffect && element.whoIsActing.type == CharacterType.NPC;


                return isCurrent || (isForPC && !isEffect) || (isSpellOnNPC);
            });


        }

        acts.sortBy((obj) => obj.endTime);


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
        this._currentActionTree = null;
        var acts = this.actions.filter(item => item.isSelected);
        return acts || new Array<BaseAction>();
    }
    
    set selectedAction(action: BaseAction) {
        if (action != null) {
            action = this.allActions.find(item => item.id == action.id);
        }


        var acts = this.allActions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.allActors.find(item => item.isSelected);
        if (ac != null) {
            ac.isSelected = false;
        }
        if (action != null) {
            action.isSelected = true;
            if (action.whoIsActing != null) {
                action.whoIsActing.isSelected = true;
                if (action.actionType == ActionTypeEnum.Current) {
                    this.checkAction(action.whoIsActing);
                }
            }
        }


        this.currentActionTreeAsync();

        //this._currentActionTree = await this.referenceService.getActionTreeAsync(ac);


        //this.updateActionTreeAsync();

    }
    get selectedActor(): Actor {
        var ac = this.actors.find(item => item.isSelected);
        return ac || null;
    }
    set selectedActor(actor: Actor) {
        if (actor != null) {
            actor = this.allActors.find(item => item.id == actor.id);
        }
        this._currentActionTree = null;

        var acts = this.allActions.filter(item => item.isSelected);
        if (acts != null) {
            acts.forEach((act) => {
                act.isSelected = false;
            });
        }
        var ac = this.allActors.find(item => item.isSelected);
        if (ac != null && (actor==null || ac.id != actor.id)) {

            if (ac.proposedAction != null) {
                this.encounterRepo.removeActionAsync(ac.proposedAction.id);
            }

            ac.isSelected = false;
        }
        if (actor != null) {
            actor.isSelected = true;
            actor.actions.forEach((action) => {
                if (action.actionType == ActionTypeEnum.Current || action.actionType == ActionTypeEnum.Next || action.actionType == ActionTypeEnum.Proposed) {
                    action.isSelected = true;
                }
            });
            this.checkAction(actor);
        }

        this.currentActionTreeAsync();

        //this._currentActionTree = await this.referenceService.getActionTreeAsync(actor);
        //this.updateActionTreeAsync();
    }


    async checkAction(actor: Actor): Promise<void> {
        if (actor != null && actor.proposedAction == null) {
            var action = actor.nextAction || actor.currentAction;
            var act = action;
            if (action.base != null) {
                act = await this.encounterRepo.proposeActionAsync(action.base.id, actor.id, action.currentModifier, action.currentAttack_ID);
                this.refreshAction(act);
            } else {
                act = await this.encounterRepo.proposeActionAsync(this.referenceService.ActionGroups[0].actions[0].id, actor.id, action.currentModifier, action.currentAttack_ID);
                this.refreshAction(act);
            }
            act = this.allActions.find((a) => a.id == act.id);

            act.isSelected = true;
        }
    }




    public selectActor(actorId: number) {
        this.selectedActor = this.actors.find((a) => a.id == actorId);
    }



    async currentActionTreeAsync(): Promise<treeEntry> {
        var actor = this.selectedActor;
        this._currentActionTree = await this.referenceService.getActionTreeAsync(actor);
        return this._currentActionTree;
    }

    get currentGame(): Game {
        return this._currentGame;
    }
    set currentGame(game: Game) {
        this.selectGameAsync(game.id);
    }

    public async  selectGameAsync(gameId: number): Promise<void> {
        await this.encounterRepo.setCurrentGameAsync(gameId);
        await this.refreshAsync();
    }

    private async setupEventsAsync(): Promise<void> {

        await whenTrue(() => {
            return this.currentGame != null;
        });

        await this.encounterHubService.registerForGame(this.currentGame.id);
        //
        //this.allActors = this.allActors.filter(item => actors.find((a) => a.id == item.id));
        this.encounterHubService.gameUpdated.subscribe((game: Game) => {
            game = Object.assign(new Game(), game);
            this._currentGame = Object.assign(this._currentGame || {}, game);
            this.setActive();
        });
        this.encounterHubService.actionRemoved.subscribe((action: BaseAction) => {
            action = Object.assign(new BaseAction(), action);
            this.removeAction(action);
            this.setActive();
        });
        this.encounterHubService.actionUpdated.subscribe((action: BaseAction) => {
            action = Object.assign(new BaseAction(), action);
            this.refreshAction(action);
            this.setActive();
        });
        this.encounterHubService.actionsUpdated.subscribe((actions: Array<BaseAction>) => {
            actions = actions.map((act) => Object.assign(new BaseAction(), act));
            this.refreshActions(actions);
            this.setActive();
        });
        this.encounterHubService.actorRemoved.subscribe((actor: Actor) => {
            actor = Object.assign(new Actor(), actor);
            this.removeActor(actor);
            this.setActive();
        });
        this.encounterHubService.actorUpdated.subscribe((actor: Actor) => {
            actor = Object.assign(new Actor(), actor);
            this.refreshActor(actor);
            this.setActive();
        });
        this.encounterHubService.actorsUpdated.subscribe((actors: Array<Actor>) => {
            actors = actors.map((act) => Object.assign(new Actor(), act));
            this.refreshActors(actors);
            this.setActive();
        });
    }

    private setActive() {

        this.allActions.forEach((act) => {
            act.isActive = false;
        });
        this.allActors.forEach((act) => {
            act.isActive = false;
        });

        this.actions[0].whoIsActing.isActive = true;
        this.actions[0].isActive = true;
    }

    private removeActor(actor: Actor) {
        var baseAct = this.allActors.find((act) => act.id == actor.id);
        baseAct.actions.forEach((action) => {
            this.allActions = this.allActions.filter(item => action.id != item.id);
        });
        this.allActors = this.allActors.filter(item => actor.id != item.id);
    }

    private refreshActors(actors: Array<Actor>) {
        actors.forEach((act) => {
            this.refreshActor(act);
        });
    }
    private refreshActor(actor: Actor) {
        var origAct = this.allActors.find((a) => a.id == actor.id);
        if (origAct == undefined) {
            origAct = actor;
            //origAct.isActive = false;
            origAct.actions = new Array<BaseAction>();
            origAct.isActive = false;
            origAct.isSelected = false;
            this.allActors.push(origAct);
        }
        Object.assign(origAct, actor);
        //origAct.actions = this.allActions.filter((a) => a.whoIsActing_ID == actor.id);

    }
    private removeAction(action: BaseAction) {
        this.allActions = this.allActions.filter(item => action.id != item.id);

        this.actors.forEach((actor) => {
            actor.actions = actor.actions.filter(item => action.id != item.id);
        });

    }

    private refreshActions(actions: Array<BaseAction>) {
        actions.forEach((act) => {
            this.refreshAction(act);
        });
    }
    private refreshAction(action: BaseAction) {
        var origAct = this.allActions.find((a) => a.id == action.id);
        if (origAct == undefined) {
            origAct = action;
            origAct.isActive = false;
            origAct.isSelected = false;
            origAct.whoIsActing = this.allActors.find((actor) => actor.id == origAct.whoIsActing_ID);
            origAct.whoIsActing.actions.push(origAct);
            this.allActions.push(origAct);
        }
        Object.assign(origAct, action);

        //origAct.whoIsActing = this.allActors.find((actor) => actor.id == origAct.whoIsActing_ID);

        //origAct.whoIsActing.actions = this.allActions.filter((a) => a.whoIsActing_ID == action.whoIsActing_ID);
    }


    public async refreshAsync():Promise<void> {
        await this.refreshLock.BeginLock();

        var game = await this.encounterRepo.getCurrentGameAsync();
        //debugger;
        if (this._currentGame == null) {
            this._currentGame = game;
        } else {
            this._currentGame = Object.assign(this._currentGame, game);
        }
        if (this._currentGame!=null && this._currentGame.id == 0) {
            this._currentGame = null;
        }
        if (this.currentGame != null) {
            //this._currentGame = await this.gameRepo.getGameAsync(this._currentGame.id);
            var tempActors: Array<Actor> = null;
            var tempActions: Array<BaseAction> = null;

            this.actorRepo.getActorsInGame(this.currentGame.id).subscribe((acts) => {
                tempActors = acts;
            });

            this.actionRepo.getActionsInGame(this.currentGame.id).subscribe((acts) => {
                tempActions = acts;
            });

            await whenTrue(() => {
                return tempActors != null && tempActions != null;
            });

            var selectedActor = this.selectedActor;

            this.refreshActors(tempActors);
            this.refreshActions(tempActions);

            var removedActions = this.allActions.filter(item => (this.actions.find((a) => a.id == item.id) == undefined));
            removedActions.forEach((a) => this.removeAction(a));


            var removedActors = this.allActors.filter(item => (this.actors.find((a) => a.id == item.id) == undefined));
            removedActors.forEach((a) => this.removeActor(a));

            this.setActive();

            if (this.isGM) {
                //debugger;
                if (selectedActor != null && (this.selectedActor == null ||  selectedActor.id != this.selectedActor.id)) {
                    this.selectActor(selectedActor.id);
                }

                if (this.selectedActions.length == 0) {
                    this.selectedAction = this.actions[0];
                }

                if (this.selectedActions.length>0  && this.selectedActor == null) {

                    this.selectedActor = this.selectedActions[0].whoIsActing;
                }
            }
        }



        await this.refreshLock.EndLock();
    }

    public async addCreatureToEncounterAsync(creature: Creature): Promise<void> {
        await this.encounterRepo.createActorFromCreatureAsync(creature.id);
        await this.refreshAsync();
        this.selectedActor = this.actors[0];

        //await this.refresh();

    }
    public async addCharacterToEncounterAsync(character: Character, rolledInit?: number): Promise<void> {
        await this.encounterRepo.createActorFromCharacterAsync(character.id, rolledInit);
        await this.refreshAsync();
        this.selectedActor = this.actors[0];

        //await this.refresh();

    }

    public async moveToNextAsync(): Promise<void> {
        var result = await this.encounterRepo.moveToNextAsync(false);
        if (result.response == ResponseEnum.DisplayMessage) {
            this._alertService.success(result.message);
        }
        if (result.response == ResponseEnum.AutoAdvance) {
            await this.moveToNextAsync();
            return;
        }
        await this.refreshAsync();
        this.selectedAction = this.actions[0];
    }

    public async deleteActionAsync(action: BaseAction): Promise<void> {
        await this.encounterRepo.removeActionAsync(action.id);
        await this.refreshAsync();
    }

    public async deleteActorAsync(actor: Actor): Promise<void> {
        await this.encounterRepo.removeActorAsync(actor.id);
        await this.refreshAsync();
    }

    public async proposeActionAsync(actor: Actor, action: ActionDefinition, attack: Attack = null, modifier: number = 0): Promise<BaseAction> {
        var act = await this.encounterRepo.proposeActionAsync(action.id, actor.id, modifier, (attack != null ? attack.id : null));
        await this.refreshAsync();

        act = this.allActions.find((a) => a.id == act.id);
        act.isSelected = true;
        return act;
    }

    public async doProposedActionAsync(actor: Actor): Promise<void> {
        await this.encounterRepo.doProposedActionAsync(actor.id);
        await this.refreshAsync();
    }

}

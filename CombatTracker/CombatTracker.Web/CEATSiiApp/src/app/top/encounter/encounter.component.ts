import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Actor, Attack, BaseAction, Message, Game } from '@/entities';
import { AuthenticationService, EncounterService, treeEntry } from '@/services';
import { ModalService } from '@/elements/modal/modal.service';
import { ActivatedRoute } from '@angular/router';
import { EnumDefinitions } from '@/entities/EnumDefinitions';
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import { ProposeAction } from '@/components/encounter';
import { delay } from '../../_helpers';


@Component({
    selector: 'app-encounter',
    templateUrl: './encounter.component.html',
    styleUrls: ['./encounter.component.css']
})
/** encounter component*/
export class EncounterComponent implements OnInit, OnChanges {


    //public actions: Array<BaseAction> = null;

    private _currentActionTree: treeEntry = null;


    /** encounter ctor */
    constructor(public gameView: EncounterService,
        private ref: ChangeDetectorRef,
        private _route: ActivatedRoute,
        private _userService: AuthenticationService,
        private modalService: ModalService,
        private router: Router     ) {
        this._route.paramMap.subscribe(params => {
            let id = params.get('id');
            this.idChangeEvent(id);
        })
        this.ngInit();

    }
    ngOnChanges(changes: SimpleChanges): void {
        //throw new Error('Method not implemented.');
    }
    ngOnInit(): void {


    }

    private async idChangeEvent(id:string): Promise<void> {

        //debugger;
        await this.gameView.selectGameAsync(parseInt(id));
        this._currentActionTree = await this.gameView.currentActionTreeAsync();
        this.ref.markForCheck();

    }

    public get game(): Game {
        return this.gameView.currentGame;
    }

    public get currentActionTree(): treeEntry {
        return this._currentActionTree;
    }

    private async ngInit(): Promise<void> {
        this._currentActionTree = await this.gameView.currentActionTreeAsync();
    }


    get currentTime(): string {
        if (this.gameView != null && this.gameView.currentGame != null) {
            return '' + Math.floor(this.gameView.currentGame.currentTime * 100) / 100;
        }
        return "";
    }
    get viewType(): ViewTypeEnum {
        return this.gameView.viewType;
    }
    get messages(): Array<Message> {
        return this.gameView.allMessages;
    }

    get isGM(): boolean {
        return this.viewType == ViewTypeEnum.GM;
    }

    get isPlayer(): boolean {
        return this.viewType == ViewTypeEnum.Player;
    }

    get isViewOnly(): boolean {
        return this.viewType == ViewTypeEnum.Overview;
    }


    get actions(): Array<BaseAction> {
        var acts = this.gameView.actions;

        return acts;
    }
    get actors(): Array<Actor> {
        var acts = this.gameView.actors;

        return acts;
    }

    get selectedAction(): BaseAction {
        var actor = this.gameView.selectedActor;
        if (actor != null) {
            var actions = this.gameView.selectedActions;
            var action: BaseAction = null;

            if (actions.length == 1) {
                action = actions[0];
            }

            if (action != null && action.actionType == ActionTypeEnum.Effect) {
                return null;
            }

            if (action == null  || action.actionType == ActionTypeEnum.Current) {
                if (actor.currentAction == null || actor.currentAction.isActive) {
                    action = actor.proposedAction || actor.nextAction;
                } else {
                    action = actor.proposedAction || actor.currentAction;
                }
            }


            //debugger;
            return action;
        } else {
            return null;
        }
    }

    async onDoAction(action: BaseAction): Promise<void> {
        if (this.isGM) {
            //var cur = action.whoIsActing.isActive;
            //await this.gameView.doProposedActionAsync(action.whoIsActing);
            //if (cur) {
            //    await this.gameView.moveToNextAsync();
            //}
            
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }

    async onProposeAction(action:ProposeAction): Promise<void> {
        if (this.isGM) {
            //var act = await this.gameView.proposeActionAsync(action.actor, action.action, action.attack, action.modifier);

            ////await delay(100);

            //this.gameView.selectedAction = act;

            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }


    async deleteAction(action: BaseAction): Promise<void> {
        if (this.isGM) {
            await this.gameView.deleteActionAsync(action);
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }

    async deleteActor(actor: Actor): Promise<void> {
        if (this.isGM) {
            await this.gameView.deleteActorAsync(actor);
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }

    async selectActor(actor: Actor):Promise<void> {
        if (this.isGM) {
            this.gameView.selectedActor = actor;
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }
    async selectAction(action: BaseAction): Promise<void> {
        if (this.isGM) {
            this.gameView.selectedAction = action;
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }


    async moveToNext():Promise<void> {
        if (this.isGM) {
            await this.gameView.moveToNextAsync();
            this._currentActionTree = await this.gameView.currentActionTreeAsync();
        }
    }

}
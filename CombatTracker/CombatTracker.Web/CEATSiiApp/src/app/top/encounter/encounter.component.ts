import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Actor, BaseAction } from '@/entities';
import { AuthenticationService, EncounterService } from '@/services';
import { ActivatedRoute } from '@angular/router';
import { EnumDefinitions } from '@/entities/EnumDefinitions';
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;



@Component({
    selector: 'app-encounter',
    templateUrl: './encounter.component.html',
    styleUrls: ['./encounter.component.css']
})
/** encounter component*/
export class EncounterComponent implements OnInit, OnChanges {


    //public actions: Array<BaseAction> = null;




    /** encounter ctor */
    constructor(public gameView: EncounterService,
        private _route: ActivatedRoute,
        private _userService: AuthenticationService    ) {
        this._route.paramMap.subscribe(params => {
            let id = params.get('id');
            //debugger;
            this.gameView.selectGame(parseInt(id));
        })

    }
    ngOnChanges(changes: SimpleChanges): void {
        //throw new Error('Method not implemented.');
    }
    ngOnInit(): void {
    }
    get viewType(): ViewTypeEnum {
        return this.gameView.viewType;
    }
    get actions(): Array<BaseAction> {
        var acts = this.gameView.actions;

        return acts;
    }
    get actors(): Array<Actor> {
        var acts = this.gameView.actors;

        return acts;
    }

    selectActor(actor: Actor) {
        if (this.isGM) {
            this.gameView.selectedActor = actor;
        }
    }
    selectAction(action: BaseAction) {
        if (this.isGM) {
            this.gameView.selectedAction = action;
        }
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

}
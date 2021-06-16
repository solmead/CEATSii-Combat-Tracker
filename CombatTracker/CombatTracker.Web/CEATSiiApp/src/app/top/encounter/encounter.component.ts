import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseAction } from '@/entities';
import { AuthenticationService, EncounterService } from '@/services';
import { ActivatedRoute } from '@angular/router';

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

    get actions(): Array<BaseAction> {
        var acts = this.gameView.actions;

        return acts;
    }

}
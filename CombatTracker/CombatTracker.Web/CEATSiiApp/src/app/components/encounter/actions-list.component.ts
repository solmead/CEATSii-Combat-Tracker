import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BaseAction } from '@/entities';


@Component({
    selector: 'actions-list',
    templateUrl: './actions-list.component.html',
    styleUrls: ['./actions-list.component.css']
})
/** actions-list component*/
export class ActionsListComponent implements OnInit, OnChanges {


    @Input() actions: Array<BaseAction> = new Array<BaseAction>();

    @Input() isSelectable: boolean = false;


    @Output() onSelect = new EventEmitter<BaseAction>();

    public selectedAction: BaseAction = null;
    /** actions-list ctor */
    constructor() {

    }

    ngOnInit() { }

    ngOnChanges() {
        //this.cdr.detectChanges();
    }

    selectAction(action: BaseAction) {
        this.selectedAction = action;
        if (this.isSelectable) {
            this.onSelect.next(action);
        }
    }

    getLeft(action: BaseAction):string {
        //<%=int((Model.LeftPercent * 156)) %> px;


        return Math.round(action.leftPercent*100) + "%";

    }


}
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BaseAction } from '@/entities';
import { EnumDefinitions } from '@/entities/EnumDefinitions';
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;


@Component({
    selector: 'actions-list',
    templateUrl: './actions-list.component.html',
    styleUrls: ['./actions-list.component.css']
})
/** actions-list component*/
export class ActionsListComponent implements OnInit, OnChanges {


    @Input() actions: Array<BaseAction> = new Array<BaseAction>();

    @Input() isSelectable: boolean = false;

    @Input() viewType: ViewTypeEnum = ViewTypeEnum.Overview;


    @Output() onSelect = new EventEmitter<BaseAction>();

    //public selectedAction: BaseAction = null;
    /** actions-list ctor */
    constructor() {

    }

    ngOnInit() { }

    ngOnChanges() {
        //this.cdr.detectChanges();
    }

    selectAction(action: BaseAction) {
        if (this.isSelectable) {
            this.onSelect.next(action);
        }
    }

    getLeft(action: BaseAction):string {
        //<%=int((Model.LeftPercent * 156)) %> px;


        return Math.round(action.leftPercent*100) + "%";

    }


}
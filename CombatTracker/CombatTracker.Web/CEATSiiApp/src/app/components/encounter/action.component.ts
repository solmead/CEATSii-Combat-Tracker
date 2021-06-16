import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseAction } from '@/entities';

@Component({
    selector: 'action-view',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.css']
})
/** action component*/
export class ActionComponent {
    @Input() action: BaseAction;

    @Input() isSelectable: boolean = false;


    @Output() onSelect = new EventEmitter<BaseAction>();

    /** action ctor */
    constructor() {
        //this.action.note

        //this.action.actionTypeString
        //this.action.stateString
        //this.action.typeString
        //this.action.reoccuring
    }



    getColor(): string {
        return "rgba(" + this.action.color + ")";
    }
}
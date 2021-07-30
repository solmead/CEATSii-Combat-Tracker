import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor, Armor, BaseAction, CriticalEffect } from '@/entities';
import { EnumDefinitions } from '@/entities/EnumDefinitions'


import ParryType = EnumDefinitions.ParryType;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;
import CharacterType = EnumDefinitions.CharacterType;


//ParryType

@Component({
    selector: 'action-view',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.css']
})
/** action component*/
export class ActionComponent {
    @Input() action: BaseAction;

    @Input() isSelectable: boolean = false;
    @Input() viewType: ViewTypeEnum = ViewTypeEnum.Overview;


    @Output() onSelect = new EventEmitter<BaseAction>();
    @Output() onDeleteClick = new EventEmitter<BaseAction>();

    /** action ctor */
    constructor() {
        
        //this.action.note

        //this.action.actionTypeString
        //this.action.stateString
        //this.action.typeString
        //this.action.reoccuring
        //this.action.whoIsActing.
        //this.action.currentAttack.
        //[style.border-color]="currentBorderColor"
    }
    async deleteAction() {
        if (this.isSelectable) {
            this.onDeleteClick.next(this.action);
        }
    }

    selectAction = async () => {
        if (this.isSelectable) {
            this.onSelect.next(this.action);
        }
    }

    get isEffect(): boolean {
        return this.action.actionType == ActionTypeEnum.Effect;
    }


    get cssClasses(): string {
        var cStr = "ActorAction " + this.action.actionTypeString + " " + this.action.typeString + " " + this.action.stateString + " ";
        if (this.action.whoIsActing != null) {
            cStr = cStr + this.action.whoIsActing.typeString;

            if (this.action.whoIsActing.isConcentrating) {
                cStr = cStr + " concentrating";
            }
            if (this.action.whoIsActing.isMoving) {
                cStr = cStr + " moving";
            }
            if (this.action.whoIsActing.suprised) {
                cStr = cStr + " suprised";
            }
            if (this.action.whoIsActing.usingAdrenalDB) {
                cStr = cStr + " usingAdrenalDB";
            }
        }
        if (this.action.isHasted) {
            cStr = cStr + " hasted";
        }
        if (this.action.isSlowed) {
            cStr = cStr + " slowed";
        }
        if (this.action.reoccuring) {
            cStr = cStr + " reoccurring";
        }
        if (this.action.characterAction) {
            cStr = cStr + " characterAction";
        }

        return cStr;
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

    get isPC(): boolean {
        if (this.action != null && this.action.whoIsActing != null) {
            return this.action.whoIsActing.type == CharacterType.PC;
        }
        return false;
    }
    get isCurrentUser(): boolean {
        return false;
    }

    get isControlledVisible(): boolean {
        return this.isGM || (this.isViewOnly && this.isPC) || (this.isPlayer && this.isCurrentUser);
    }

    get isCurrent(): boolean {
        //return true;


        return this.action.actionType == ActionTypeEnum.Current || this.action.actionType == ActionTypeEnum.Proposed;
    }
    get whoIsActing(): Actor {
        return this.action.whoIsActing;
    }
    get currentTime(): string {
        return '' + Math.floor(this.action.endTime * 100) / 100;
    }
    get currentCrits(): CriticalEffect {
        var cc = this.action.whoIsActing.currentCrits;
        if (cc == null) {
            cc = new CriticalEffect();
        }
        
        return cc;
    }
    get currentArmor(): string {

        if (this.action != null && this.action.whoIsActing != null && this.action.whoIsActing.currentArmor != null) {
            return '' + this.action.whoIsActing.currentArmor.type;
        }
        return "";
    }
    get currentWeapon(): string {
        var ac = this.action;
        //debugger;
        if (this.action.currentAttack != null && this.action.currentAttack.attackType!=null) {
            if (this.action.currentAttack.attackType.name == "Weapon") {
                if (this.action.currentAttack.weaponUsed != null) {
                    return this.action.currentAttack.weaponUsed.name;
                }
            } else {
                return ac.currentAttack.sizeRating.name + " " + ac.currentAttack.attackType.name
            }
        }


        return "None";
    }

    get isMustParry(): boolean {
        return this.currentCrits.parry == ParryType.Must_Parry;
    }
    get isNoParry(): boolean {
        return this.currentCrits.parry == ParryType.No_Parry;
    }
    get currentOB(): string {
        if (this.action != null && this.action.currentAttack != null) {
            var i = 0;
            if (this.action.whoIsActing.currentCrits != null) {
                i = this.action.whoIsActing.currentCrits.parryNegative;
            }
            return '' + this.action.currentAttack.ob + i;
        }
        return "";
    }
    get currentDB(): string {
        if (this.action != null && this.action.whoIsActing != null && this.action.whoIsActing.currentArmor != null) {
            return '' + this.action.whoIsActing.currentArmor.db;
        }
        return "";
    }

    get currentBorderColor(): string {
        return "rgb(" + this.action.whoIsActing.color + ")";
    }
    get currentBackColor(): string {
        return "rgba(" + this.action.whoIsActing.color + ", 0.25)";
    }
}
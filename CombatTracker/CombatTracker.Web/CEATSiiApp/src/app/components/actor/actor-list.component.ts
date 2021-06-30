import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnumDefinitions } from '@/entities/EnumDefinitions'
import { Actor, BaseAction, CriticalEffect } from '@/entities';
import ParryType = EnumDefinitions.ParryType;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;
import CharacterType = EnumDefinitions.CharacterType;
import { EncounterService } from '@/services';



@Component({
    selector: 'actor-list',
    templateUrl: './actor-list.component.html',
    styleUrls: ['./actor-list.component.less']
})
/** Actor-List component*/
export class ActorListComponent {

    @Input() actors: Array<Actor> = new Array<Actor>();
    //@Input() actions: Array<BaseAction> = new Array<BaseAction>();

    @Input() isSelectable: boolean = false;
    @Input() viewType: ViewTypeEnum = ViewTypeEnum.Overview;


    @Output() onSelect = new EventEmitter<Actor>();

    //public selectedActor: Actor = null;


    /** Actor-List ctor */
    constructor(public gameView: EncounterService) {

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

    isPC(actor:Actor): boolean {
        if (actor != null) {
            return actor.type == CharacterType.PC;
        }
        return false;
    }
    get isCurrentUser(): boolean {
        return false;
    }

    isControlledVisible(actor: Actor): boolean {
        return this.isGM || (this.isViewOnly && this.isPC(actor)) || (this.isPlayer && this.isCurrentUser);
    }


    selectActor = async (actor: Actor) => {
        if (this.isSelectable) {
            this.onSelect.next(actor);
        }
    }

    curAction = (actor: Actor): BaseAction => {
        var act = actor.currentAction;
        return act;
    }

    currentTime(actor: Actor): string {
        if (actor.currentAction != null) {
            return '' + Math.floor(actor.currentAction.endTime * 100) / 100;
        }
        return "";
    }

    currentArmor = (actor:Actor): string => {

        if (actor != null && actor.currentArmor != null) {
            return '' + actor.currentArmor.type;
        }
        return "";
    }
    currentWeapon = (actor: Actor): string => {
        var ac = this.curAction(actor);
        //debugger;
        if (ac != null && ac.currentAttack != null && ac.currentAttack.attackType != null) {
            if (ac.currentAttack.attackType.name == "Weapon") {
                if (ac.currentAttack.weaponUsed != null) {
                    return ac.currentAttack.weaponUsed.name;
                }
            } else {
                return ac.currentAttack.sizeRating.name + " " + ac.currentAttack.attackType.name
            }
        }


        return "None";
    }
    currentModifier = (actor: Actor): number => {
        var ac = this.curAction(actor);
        if (ac != null) {
            return this.curAction(actor).currentModifier;
        }
        return 0;
    }
    

    isMustParry = (actor: Actor): boolean => {
        return this.currentCrits(actor).parry == ParryType.Must_Parry;
    }
    isNoParry = (actor: Actor): boolean => {
        return this.currentCrits(actor).parry == ParryType.No_Parry;
    }

    currentCrits = (actor: Actor): CriticalEffect => {
        if (actor.currentCrits == null) {
            return new CriticalEffect();
        }
        return actor.currentCrits;
    }
    currentOB = (actor: Actor): string => {
        var ac = this.curAction(actor);
        if (ac != null && ac.currentAttack != null) {
            var i = 0;
            if (actor.currentCrits != null) {
                i = actor.currentCrits.parryNegative;
            }
            return '' + ac.currentAttack.ob + i;
        }
        return "";
    }
    baseDB = (actor: Actor): string => {
        var ac = this.curAction(actor);
        if (ac != null && actor != null && actor.currentArmor != null) {
            return '' + actor.currentArmor.db;
        }
        return "";
    }
    currentDB = (actor: Actor): string => {
        var ac = this.curAction(actor);
        if (ac != null && actor != null && actor.currentArmor != null) {
            if (ac.currentAttack != null) {
                return '' + (actor.currentArmor.db);
            }


            return '' + actor.currentArmor.db;
        }
        return "";
    }

    currentBackColor = (actor: Actor): string => {
        //var ac = this.curAction(actor);
        return "rgba(" + actor.color + ")";
    }
}
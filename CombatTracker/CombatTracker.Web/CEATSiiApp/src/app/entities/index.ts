import { Actor as ActorBase } from './Actor';
import { BaseAction as ActionBase } from './BaseAction';
import { EnumDefinitions } from './EnumDefinitions';

import GameType = EnumDefinitions.GameType;
import ActionTypeEnum = EnumDefinitions.ActionTypeEnum;
import ActorActionType = EnumDefinitions.ActorActionType;
import CharacterType = EnumDefinitions.CharacterType;
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;


export * from './ActionDefinition';
export * from './ActionGroup';
export * from './ApplicationUser';
export * from './Armor';
export * from './Attack';
export * from './AttackType';
export * from './AuthenticateModel';
//export * from './BaseAction';
export * from './Book';
export * from './Character';
export * from './ConstitutionBonusChart';
export * from './ConstitutionBonusChartValues';
export * from './Creature';
export * from './CriticalCode';
export * from './CriticalEffect';
export * from './CriticalIgnore';
export * from './CriticalType';
export * from './Dice';
export * from './EnumDefinitions';
export * from './Game';
export * from './IQ';
export * from './LevelChart';
export * from './LevelChartValue';
export * from './Message';
export * from './MoveNextResult';
export * from './MySettings';
export * from './Outlook';
export * from './Pace';
export * from './PsychicRefractoryPeriodEntry';
export * from './ReferenceEntry';
export * from './RegisterModel';
export * from './SizeRating';
export * from './SpeedChart';
export * from './UpdateModel';
export * from './UserModel';
export * from './Weapon';
export * from './WeaponType';




export class Actor extends ActorBase {


    // starts as unknown until initilized in refresh functions

    public actions: BaseAction[];

    public isSelected: boolean;

    public isActive: boolean;


    public get currentAction(): BaseAction {
        //debugger;
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Current;
            });
            return ac;
        }
        return null;
    }
    public get nextAction(): BaseAction {
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Next;
            });
            return ac;
        }
        return null;
    }
    public get proposedAction(): BaseAction {
        if (this.actions != null && this.actions.length > 0) {
            var ac = this.actions.find((act) => {
                return act.actionType == ActionTypeEnum.Proposed;
            });
            return ac;
        }
        return null;
    }

}

export class BaseAction extends ActionBase {
    // starts as unknown until initilized in refresh functions
    public whoIsActing: Actor;

    public isSelected: boolean;

    public isActive: boolean;


}

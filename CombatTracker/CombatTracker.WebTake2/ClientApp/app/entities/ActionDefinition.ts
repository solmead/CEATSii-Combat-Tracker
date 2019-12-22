




    import * as Enums from './EnumDefinitions'
    import { ActionGroup } from './ActionGroup';
import BaseActionType = Enums.EnumDefinitions.BaseActionType;
    export class ActionDefinition {
        id: number;
        actionGroup_ID?: number;
        name: string;
        basePercent: number;
        isAttack: boolean;
        isSpell: boolean;
        nextAction_ID?: number;
        type: BaseActionType;
        typeString: string;
        actionGroup: ActionGroup;
        nextAction: ActionDefinition;

        constructor() {
        }
    }



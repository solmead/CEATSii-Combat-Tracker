




    import * as Enums from '../classes/EnumDefinitions'
    import { ActionGroup } from '../classes/ActionGroup';
import BaseActionType = Enums.EnumDefinitions.BaseActionType;
    export interface ActionDefinition {
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
    }

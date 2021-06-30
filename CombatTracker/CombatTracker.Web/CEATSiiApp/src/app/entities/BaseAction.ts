﻿


    import * as Enums from './EnumDefinitions'
    import { ActionDefinition } from './ActionDefinition';
import { Attack } from './Attack';
import ActorActionType = Enums.EnumDefinitions.ActorActionType;
import ActionProblem = Enums.EnumDefinitions.ActionProblem;
import ActionTypeEnum = Enums.EnumDefinitions.ActionTypeEnum;
    export class BaseAction {
        id: number;
        name: string;
        startTime: number;
        endTime: number;
        type: ActorActionType;
        typeString: string;
        basePercent: number;
        interrupted: boolean;
        note: string;
        state: ActionProblem;
        stateString: string;
        currentModifier: number;
        criticalGiven: boolean;
        bleeder: number;
        count: number;
        totalRounds: number;
        levelDifference: number;
        isHasted: boolean;
        isSlowed: boolean;
        hastedPercent: number;
        leftPercent: number;
        actionType: ActionTypeEnum;
        actionTypeString: string;
        reoccuring: boolean;
        characterAction: boolean;
        base: ActionDefinition;
        currentAttack: Attack;
        game_ID: number;
        whoIsActing_ID: number;
        baseAction_ID?: number;
        currentAttack_ID?: number;
        critical_ID?: number;


        constructor() {
        }
    }






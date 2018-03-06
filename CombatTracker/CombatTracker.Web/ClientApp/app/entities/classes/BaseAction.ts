﻿



    import * as Enums from '../classes/EnumDefinitions'
    import { ActionDefinition } from '../classes/ActionDefinition';
import { Actor } from '../classes/Actor';
import { Attack } from '../classes/Attack';
import ActorActionType = Enums.EnumDefinitions.ActorActionType;
import ActionProblem = Enums.EnumDefinitions.ActionProblem;
import ActionTypeEnum = Enums.EnumDefinitions.ActionTypeEnum;
    export interface BaseAction {
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
        leftPercent: number;
        actionType: ActionTypeEnum;
        actionTypeString: string;
        base: ActionDefinition;
        whoIsActing: Actor;
        currentAttack: Attack;
        game_ID: number;
        whoIsActing_ID: number;
        baseAction_ID?: number;
        currentAttack_ID?: number;
        color: string;
    }

﻿




    import * as Enums from '../classes/EnumDefinitions'
    import ParryType = Enums.EnumDefinitions.ParryType;
    export class CriticalEffect {
        id: number;
        isStunned: boolean;
        parry: ParryType;
        parryString: string;
        parryNegative: number;
        negative: number;
        timeStart: number;
        timeEnd: number;
        actor_ID: number;

        constructor() {
        }
    }

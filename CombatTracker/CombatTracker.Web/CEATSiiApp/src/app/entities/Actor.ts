



    import * as Enums from './EnumDefinitions'
    import { Armor } from './Armor';
import { Attack } from './Attack';
import { CriticalEffect } from './CriticalEffect';
import CharacterType = Enums.EnumDefinitions.CharacterType;
    export class Actor {
        id: number;
        name: string;
        type: CharacterType;
        typeString: string;
        level: number;
        hitsTotal: number;
        hitsRemaining: number;
        baseInititive: number;
        rolledInititive: number;
        exhaustionTotal: number;
        exhaustionRemaining: number;
        powerPointsTotal: number;
        powerPointsRemaining: number;
        isConcentrating: boolean;
        isMoving: boolean;
        suprised: boolean;
        usingAdrenalDB: boolean;
        percentRequiredAdrenalDB: number;
        percentAction: number;
        strengthBonus: number;
        critNegatives: number;
        nextSpellTime: number;
        constitutionStat: number;
        movement: number;
        color: string;
        game_ID: number;
        baseCreature_ID?: number;
        baseCharacter_ID?: number;
        currentArmor_ID?: number;
        currentArmor: Armor;
        attacks: Attack[];
        criticalEffects: CriticalEffect[];
        inititive: number;
        stunRounds: number;
        parryRounds: number;
        negativeRounds: number;
        currentCrits: CriticalEffect;
        negatives: number;


        constructor() {
        }
    }






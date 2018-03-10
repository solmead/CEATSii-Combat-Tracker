




    import * as Enums from '../classes/EnumDefinitions'
    import { CriticalType } from '../classes/CriticalType';
import { AttackType } from '../classes/AttackType';
import { SizeRating } from '../classes/SizeRating';
import { Weapon } from '../classes/Weapon';
import CriticalLevels = Enums.EnumDefinitions.CriticalLevels;
    export class Attack {
        id: number;
        percentChance: number;
        ob: number;
        maxOB: number;
        number: number;
        damageMultiplier: number;
        criticalLevel: CriticalLevels;
        criticalLevelString: string;
        additionalCritsIsOr: boolean;
        attackType_ID: number;
        sizeRating_ID?: number;
        useCriticalInstead_ID?: number;
        thisRoundSuccess_ID?: number;
        nextRoundSuccess_ID?: number;
        parentAttack_ID?: number;
        creatureOn_ID?: number;
        weaponUsed_ID?: number;
        criticalUseInstead: CriticalType;
        attackType: AttackType;
        thisRoundSuccess: Attack;
        nextRoundSuccess: Attack;
        sizeRating: SizeRating;
        weaponUsed: Weapon;
        additionalCrits: CriticalType[];

        constructor() {
        }
    }

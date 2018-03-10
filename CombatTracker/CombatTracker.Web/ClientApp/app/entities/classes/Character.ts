




    import * as Enums from '../classes/EnumDefinitions'
    import { Armor } from '../classes/Armor';
import { Weapon } from '../classes/Weapon';
import CharacterType = Enums.EnumDefinitions.CharacterType;
    export class Character {
        id: number;
        name: string;
        level: number;
        baseInititive: number;
        hitPoints: number;
        exhaustionPoints: number;
        powerPoints: number;
        type: CharacterType;
        strengthBonus: number;
        percentRequiredAdrenalDB: number;
        walkSpeed: number;
        armors: Armor[];
        weapons: Weapon[];
        rolledInititive: number;
        typeString: string;

        constructor() {
        }
    }

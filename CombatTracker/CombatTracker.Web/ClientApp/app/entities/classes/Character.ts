




    import * as Enums from '../classes/EnumDefinitions'
    import { Armor } from '../classes/Armor';
import { Weapon } from '../classes/Weapon';
import CharacterType = Enums.EnumDefinitions.CharacterType;
import GameType = Enums.EnumDefinitions.GameType;
    export class Character {
        id: number;
        name: string;
        level: number;
        baseInititive: number;
        hitPoints: number;
        exhaustionPoints: number;
        powerPoints: number;
        type: CharacterType;
        typeString: string;
        strengthBonus: number;
        percentRequiredAdrenalDB: number;
        walkSpeed: number;
        gameType: GameType;
        gameTypeString: string;
        armors: Armor[];
        weapons: Weapon[];
        rolledInititive: number;

        constructor() {
        }
    }






    import * as Enums from '../classes/EnumDefinitions'
    
    export class Weapon {
        id: number;
        name: string;
        minWeight: number;
        maxWeight: number;
        weight: number;
        bonus: number;
        is2Handed: boolean;
        ob: number;
        characterId?: number;

        constructor() {
        }
    }

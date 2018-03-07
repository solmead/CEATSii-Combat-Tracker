




    import * as Enums from '../classes/EnumDefinitions'
    
    export interface Armor {
        id: number;
        type: number;
        description: string;
        movingManeuverMod: number;
        db: number;
        characterId?: number;
    }

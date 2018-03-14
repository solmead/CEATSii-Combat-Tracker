




    import * as Enums from '../classes/EnumDefinitions'
    import GameType = Enums.EnumDefinitions.GameType;
    export class Game {
        id: number;
        name: string;
        currentTime: number;
        gameType: GameType;
        gameTypeString: string;
        baseRoundTime: number;
        sizeOfSquare: number;

        constructor() {
        }
    }

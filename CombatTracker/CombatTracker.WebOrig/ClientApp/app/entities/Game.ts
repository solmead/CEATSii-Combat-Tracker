




    import * as Enums from './EnumDefinitions'
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

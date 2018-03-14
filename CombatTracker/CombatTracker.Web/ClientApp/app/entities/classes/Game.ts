




    import * as Enums from '../classes/EnumDefinitions'
    import GameType = Enums.EnumDefinitions.GameType;
    export class Game {
        id: number;
        name: string;
        currentTime: number;
        gameType: GameType;
        baseRoundTime: number;
        sizeOfSquare: number;

        constructor() {
        }
    }





    import * as Enums from '../classes/EnumDefinitions'
    import { Actor } from '../classes/Actor';
import { BaseAction } from '../classes/BaseAction';
    export interface Game {
        id: number;
        name: string;
        currentTime: number;
        actors: Actor[];
        gameActions: BaseAction[];
        nextAction: BaseAction;
        lastAction: BaseAction;
    }

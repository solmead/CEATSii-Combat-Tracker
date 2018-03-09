import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { Game } from '../classes/Game';
import { BaseAction } from '../classes/BaseAction';

@Injectable()
export class GameView {

    public currentGame: Game;
    public actions: Array<BaseAction> = new Array<BaseAction>();

    public selectedAction: BaseAction;


    constructor() {

    }

}
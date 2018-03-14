import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../classes/Character';
import { SettingsView } from './SettingsView.dataview';
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class CharactersView {
    public characters: Array<Character> = new Array<Character>();

    public selected: Character;


    constructor(private charRepo: CharactersRepository,
        private settings: SettingsView) {
        this.refresh();
    }

    get gameSystem(): GameType {
        return this.settings.settings.gameSystem;
    }
    set gameSystem(value: GameType) {
        this.settings.settings.gameSystem = value;
    }
    public refresh = async () => {
        this.selected = null;
        this.characters = await this.charRepo.getCharactersAsync();

    }

    public selectCharacter = async (charId: number) => {
        this.selected = await this.charRepo.getCharacterAsync(charId);
    }

}
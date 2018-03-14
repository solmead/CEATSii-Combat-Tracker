import { Injectable } from '@angular/core';
import * as Enums from '../classes/EnumDefinitions'
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../classes/Character';
import { MySettings } from '../classes/MySettings';
import { SettingsView } from './SettingsView.dataview';
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class CharactersView {
    public characters: Array<Character> = new Array<Character>();

    public selected: Character;


    constructor(private charRepo: CharactersRepository,
        private settings: SettingsView) {
        this.settings.settingsUpdated.subscribe((settings) => {
            this.refresh();
        });
    }

    get systemSettings(): MySettings {
        return this.settings.settings;
    }
    public setGameType(value: GameType) {
        this.settings.setGameType(value);
    }
    public refresh = async () => {
        this.selected = null;
        this.characters = await this.charRepo.getCharactersAsync(this.systemSettings.gameSystem);

    }

    public selectCharacter = async (charId: number) => {
        this.selected = await this.charRepo.getCharacterAsync(charId);
    }

}
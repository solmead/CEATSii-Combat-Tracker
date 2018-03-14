import { Injectable } from '@angular/core';
import { SettingsRepository } from '../../entities/apis/Settings.repository';
import { MySettings } from '../classes/MySettings';
import * as Enums from '../classes/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class SettingsView {
    public settings: MySettings;


    constructor(private settingsRepo: SettingsRepository) {
        this.refresh();
    }

    public refresh = async () => {
        this.settings = await this.settingsRepo.getSettingAsync();
    }

    public setGameType = async (gameType: GameType) => {
        await this.settingsRepo.setGameTypeAsync(gameType);
        await this.refresh();
    }
}
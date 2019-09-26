import { Injectable } from '@angular/core';
import { Observable, Subscriber } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SettingsRepository } from '../repositories/Settings.repository';
import { MySettings } from '../entities/MySettings';
import * as Enums from '../entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;

@Injectable()
export class SettingsService {
    public settings: MySettings = new MySettings();
    private subscribers: Array<Subscriber<MySettings>> = new Array<Subscriber<MySettings>>();
    
    public settingsUpdated: Observable<MySettings>;

    constructor(private settingsRepo: SettingsRepository) {
        this.refresh();

        this.settingsUpdated = new Observable((obs) => {
            //obs.next(this.settings);
            if (this.settings != null) {
                obs.next(this.settings);
            }
            this.subscribers.push(obs);
        });
    }

    public refresh = async () => {
        this.settings = await this.settingsRepo.getSettingAsync();
        
        this.subscribers.forEach((sub) => {
            sub.next(this.settings);
        });
    }

    public setGameType = async (gameType: GameType) => {
        await this.settingsRepo.setGameTypeAsync(gameType);
        await this.refresh();
    }
}
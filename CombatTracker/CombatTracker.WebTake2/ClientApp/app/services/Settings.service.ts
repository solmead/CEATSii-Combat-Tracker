import { Injectable } from '@angular/core';
import { Observable, Subscriber } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { SettingsRepository } from '../repositories/Settings.repository';
import { MySettings } from '../entities/MySettings';
import * as Enums from '../entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import { User } from '../entities/User';
import { UserRepository } from '../repositories/User.repository';

@Injectable()
export class SettingsService {
    private _currentUser: User = null;

    public settings: MySettings = new MySettings();
    private subscribers: Array<Subscriber<MySettings>> = new Array<Subscriber<MySettings>>();
    
    public settingsUpdated: Observable<MySettings>;

    public userUpdated: Observable<User>;
    private userSubscribers: Array<Subscriber<User>> = new Array<Subscriber<User>>();

    constructor(private settingsRepo: SettingsRepository,
                private userRepo: UserRepository) {

        this.userUpdated = new Observable((obs) => {
            //obs.next(this.settings);
            if (this.currentUser != null) {
                obs.next(this.currentUser);
            }
            this.userSubscribers.push(obs);
        });

        this.settingsUpdated = new Observable((obs) => {
            //obs.next(this.settings);
            if (this.settings != null) {
                obs.next(this.settings);
            }
            this.subscribers.push(obs);
        });

        this.refresh();
    }


    get currentUser(): User {
        return this._currentUser;
    }

    public refresh = () => {
        //this._currentUser = await
        this.userRepo.currentUser().subscribe((value) => {
            this._currentUser = value;

            this.userSubscribers.forEach((sub) => {
                sub.next(this.currentUser);
            });
        });
        //this.settings = await
        this.settingsRepo.getSetting().subscribe((value) => {
            this.subscribers.forEach((sub) => {
                sub.next(this.settings);
            });
        });
        
    }

    public setGameType = async (gameType: GameType) => {
        await this.settingsRepo.setGameTypeAsync(gameType);
        await this.refresh();
    }


    public getSiteBaseUrl(): string {
        return (<any>document.getElementsByTagName('baseapi')[0]).attributes[0].nodeValue;
    }

    public getAppBaseUrl(): string {
        return (<any>document.getElementsByTagName('base')[0]).attributes[0].nodeValue;
    }
}
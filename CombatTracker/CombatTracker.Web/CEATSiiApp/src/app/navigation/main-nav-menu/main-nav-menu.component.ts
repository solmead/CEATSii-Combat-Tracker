import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser, Game } from '@/entities';
import { EnumEx } from '@/_helpers';
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import { GamesRepository } from '@/repositories';

@Component({
    selector: 'main-nav-menu',
    templateUrl: './main-nav-menu.component.html',
    styleUrls: ['./main-nav-menu.component.less']
})
/** mainNavMenu component*/
export class MainNavMenuComponent {

    public games: Array<Game>;

    /** mainNavMenu ctor */
    constructor(private authenticationService: AuthenticationService, private gameRepository: GamesRepository) {

        this.init();
    }

    get currentUser(): ApplicationUser {
        return this.authenticationService.currentUserValue;
    }

    private async init(): Promise<void> {

        this.authenticationService.currentUser.subscribe(async (user): Promise<void> => {
            if (user == null) {
                this.games = new Array<Game>();
                return;
            }
            //debugger;
            var gms = await this.gameRepository.getGamesAsync();
            gms = gms.filter((gm) => {
                return gm.gM_ID == user.id;
            });
            this.games = gms;
        });
    }

}


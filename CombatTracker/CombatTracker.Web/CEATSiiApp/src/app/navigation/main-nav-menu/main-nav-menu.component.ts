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
    currentUser: ApplicationUser;

    games: Array<Game>;

    /** mainNavMenu ctor */
    constructor(private authenticationService: AuthenticationService, private gameRepository: GamesRepository) {

        this.init();
    }


    get gameTypes(): Array<any> {
        var lst = EnumEx.getNamesAndValues(GameType);
        return lst;
    }

    private async init(): Promise<void> {

        var u = await this.authenticationService.currentUserAsync();
        this.currentUser = u;

        var gms =await this.gameRepository.getGamesAsync();

        gms = gms.filter((gm) => {
            gm.gM_ID == this.currentUser.id;
        });

        this.games = gms;

    }

}


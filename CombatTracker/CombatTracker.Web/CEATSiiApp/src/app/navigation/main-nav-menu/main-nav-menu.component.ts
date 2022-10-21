import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '@/elements/modal/modal.service';
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

    public selectedGame: Game;

    /** mainNavMenu ctor */
    constructor(private authenticationService: AuthenticationService,
        private gameRepository: GamesRepository,
        private modalService: ModalService,
        private router: Router    ) {

        this.init();
    }

    get currentUser(): ApplicationUser {
        return this.authenticationService.currentUserValue;
    }

    public async createEncounter(): Promise<void> {


        this.selectedGame = new Game();
        this.selectedGame.gM_ID = this.currentUser.id;
        debugger;
        this.modalService.open('createGame-modal');

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

    //(openEvent)="" (closedEvent)="">
    //[game]="selectedGame" (onDelete)="" (onSave)=""

    onOpen(): void {

    }

    onClosed(): void {

    }

    onDelete(): void {

    }

    async onSave(): Promise<void> {
        this.modalService.close('createGame-modal');


        var gms = await this.gameRepository.getGamesAsync();
        gms = gms.filter((gm) => {
            return gm.gM_ID == this.currentUser.id;
        });
        this.games = gms;


        this.router.navigate(['/encounter', this.selectedGame.id]);
    }

}


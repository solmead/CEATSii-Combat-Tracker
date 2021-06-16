import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities';
import { EnumEx } from '@/_helpers';
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;


@Component({
    selector: 'main-nav-menu',
    templateUrl: './main-nav-menu.component.html',
    styleUrls: ['./main-nav-menu.component.less']
})
/** mainNavMenu component*/
export class MainNavMenuComponent {
    currentUser: ApplicationUser;
    /** mainNavMenu ctor */
    constructor(private authenticationService: AuthenticationService) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }


    get gameTypes(): Array<any> {
        var lst = EnumEx.getNamesAndValues(GameType);
        return lst;
    }
}


import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities/ApplicationUser';

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
}

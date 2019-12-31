import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities/ApplicationUser';

@Component({
  selector: 'account-nav-menu',
  templateUrl: './account-nav-menu.component.html',
  styleUrls: ['./account-nav-menu.component.less']
})
/** account-nav-menu component*/
export class AccountNavMenuComponent {
  currentUser: ApplicationUser;
  /** account-nav-menu ctor */
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


}

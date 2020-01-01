import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities/ApplicationUser';
import { Router } from '@angular/router';

@Component({
  selector: 'account-nav-menu',
  templateUrl: './account-nav-menu.component.html',
  styleUrls: ['./account-nav-menu.component.less']
})
/** account-nav-menu component*/
export class AccountNavMenuComponent {
  currentUser: ApplicationUser;
  /** account-nav-menu ctor */
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}

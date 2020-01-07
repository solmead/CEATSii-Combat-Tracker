import { Component } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities';
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


  async logout():Promise<void> {
    await this.authenticationService.logoutAsync();
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
//import { AuthenticationResultStatus, AuthorizeService } from '../authorize.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@/services';

// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authorizeService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  async ngOnInit() {
      await this.authorizeService.logoutAsync();

      this.router.navigateByUrl("/");
  }

}


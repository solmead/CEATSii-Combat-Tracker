import { Component, VERSION, OnInit } from '@angular/core';
import { AuthenticationService } from '@/services';
import { ApplicationUser } from '@/entities/ApplicationUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'CEATSiiApp';
  public name: string;
  currentUser: ApplicationUser;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.name = `Angular! v${VERSION.full}`;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
    
  }

}

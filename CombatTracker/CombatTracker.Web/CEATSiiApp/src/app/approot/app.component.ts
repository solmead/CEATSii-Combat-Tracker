import { Component, VERSION, OnInit } from '@angular/core';
import { AuthenticationService, EncounterService } from '@/services';
import { ApplicationUser } from '@/entities';
import { Router } from '@angular/router';
import { EnumDefinitions } from '@/entities/EnumDefinitions';
import ViewTypeEnum = EnumDefinitions.ViewTypeEnum;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
      title = 'CEATSiiApp';
    public name: string;

      currentUser: ApplicationUser;

    constructor(public gameView: EncounterService,
        private router: Router,
        private authenticationService: AuthenticationService) {
        this.name = `Angular! v${VERSION.full}`;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

      }

      ngOnInit() {
    
    }

    async rollD100Open() {

    }

    async rollD100() {

    }

    get viewType(): ViewTypeEnum {
        return this.gameView.viewType;
    }
    get isGM(): boolean {
        return this.viewType == ViewTypeEnum.GM;
    }



}

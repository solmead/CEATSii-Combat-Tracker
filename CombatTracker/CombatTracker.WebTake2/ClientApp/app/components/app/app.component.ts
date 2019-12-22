import { Component, VERSION, OnInit } from '@angular/core';
import { SettingsService } from '../../services/Settings.service';
import { User } from '../../entities/User';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public name: string;

    constructor(private systemService: SettingsService) {
        this.name = `Angular! v${VERSION.full}`
    }

    ngOnInit() {
        this.systemService.userUpdated.subscribe((value: User) => {
            $(".displayInfo").html(value.userName + " " + this.name);
        });
    }

}

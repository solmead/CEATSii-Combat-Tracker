import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { EncounterService } from "../../services/Encounter.service";

@Component({
    selector: 'app-actor',
    templateUrl: './actor.component.html',
    styleUrls: ['./actor.component.css']
})
/** actor component*/
export class ActorComponent {
    /** actor ctor */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public encounterService: EncounterService) {

    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.encounterService.selectActor(id);

    }
}
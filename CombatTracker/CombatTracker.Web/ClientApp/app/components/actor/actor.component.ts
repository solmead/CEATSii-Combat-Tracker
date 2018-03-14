import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";

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
        public encounterView: EncounterView) {

    }

    ngOnInit() {

        this.route.paramMap
            .switchMap((params: ParamMap) => params.get('id'))
            .subscribe((idS) => {
                var id = parseInt(idS);
                this.encounterView.selectActor(id);
            });

    }
}
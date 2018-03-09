import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview";
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../../entities/classes/Character';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})
/** characterDetail component*/
export class CharacterDetailComponent {
    /** characterDetail ctor */
    constructor(public charView: CharactersView, private charRepo: CharactersRepository)
    {

    }


    get character(): Character {
        return this.charView.selected;
    }
}
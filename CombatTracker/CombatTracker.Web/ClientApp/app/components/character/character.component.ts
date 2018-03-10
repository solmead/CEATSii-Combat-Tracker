import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview";
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../../entities/classes/Character';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
/** character component*/
export class CharacterComponent {

    /** character ctor */
    constructor()
    {
        
    }
    

}
import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview";
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { Character } from '../../entities/classes/Character';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
/** CharacterList component*/
export class CharacterListComponent {
    /** CharacterList ctor */
    constructor(public charView: CharactersView) {
        
    }
    newCharacter() {
        this.charView.selected = new Character();
    }
    selectCharacter(char: Character) {
        this.charView.selected = char;
    }

    get characters(): Array<Character> {
        return this.charView.characters;
    }
}
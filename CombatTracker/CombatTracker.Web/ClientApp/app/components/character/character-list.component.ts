import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview";
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { Character } from '../../entities/classes/Character';

@Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})
/** CharacterList component*/
export class CharacterListComponent {
    /** CharacterList ctor */
    constructor(public charView: CharactersView,
        public encounterView: EncounterView) {
        
    }
    newCharacter() {
        this.charView.selected = new Character();
    }
    selectCharacter = async (charId: number) => {
        this.charView.selectCharacter(charId);
    }
    //addToEncounter = async (charId: number) => {



    //    this.encounterView.refresh();
    //}

    get characters(): Array<Character> {
        return this.charView.characters;
    }
}
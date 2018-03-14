import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview"; 
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { Character } from '../../entities/classes/Character';

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css']
})
/** characterDetail component*/
export class CharacterEditComponent {
    /** characterDetail ctor */
    constructor(public charView: CharactersView,
        public encounterView: EncounterView,
        private charRepo: CharactersRepository)
    {

    }

    saveCharacter = async () => {
        var g = await this.charRepo.saveCharacterAsync(this.character);
        if (!this.character.id) {
            this.character.id = g.id;

        }
        await this.charView.refresh();

    }
    closeEdit() {
        this.charView.refresh();
    }

    get character(): Character {
        return this.charView.selected;
    }
}
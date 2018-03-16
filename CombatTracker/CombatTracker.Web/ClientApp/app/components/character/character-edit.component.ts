import { Component } from '@angular/core';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview"; 
import { CharactersRepository } from '../../entities/apis/Characters.repository';
import { EncounterView } from "../../entities/dataviews/EncounterView.dataview";
import { Character } from '../../entities/classes/Character';
import { Armor } from '../../entities/classes/Armor';
import { Weapon } from '../../entities/classes/Weapon';
import * as Enums from '../../entities/classes/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;

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

    get isRolemaster(): boolean {
        return this.charView.systemSettings.gameSystem == GameType.RMSS;
    }

    onWeaponDeleted(weapon: Weapon) {
        const index: number = this.character.weapons.indexOf(weapon);
        if (index !== -1) {
            this.character.weapons.splice(index, 1);
        }
    }
    onArmorDeleted(armor: Armor) {
        const index: number = this.character.armors.indexOf(armor);
        if (index !== -1) {
            this.character.armors.splice(index, 1);
        }
    }

    addToEncounter() {
        this.encounterView.addCharacterToEncounter(this.character);
    }

    saveCharacter = async () => {
        this.character.gameType = this.charView.systemSettings.gameSystem;
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
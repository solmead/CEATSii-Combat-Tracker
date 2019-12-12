import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharactersRepository } from '../../repositories/Characters.repository';
import { EncounterService } from "../../services/Encounter.service";
import { Character } from '../../entities/Character';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
/** character component*/
export class CharacterComponent {

    public characters: Array<Character> = new Array<Character>();
    public selectedCharacter: Character;

    /** character ctor */
    constructor(private characterRepo: CharactersRepository,
        private encounterService: EncounterService)
    {

        this.refresh();
    }

    ngOnChanges() {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            } else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.characters.length > 0) {
            if (this.selectedCharacter != null) {
                this.selectCharacter(this.selectedCharacter.id);
            } else {
                this.selectCharacter(this.characters[0].id);
            }
        }
    }

    refresh = async () => {
        this.characters = await this.characterRepo.getCharactersAsync(this.encounterService.systemSettings.gameSystem);
    }

    newCharacter() {
        this.selectedCharacter = new Character();
    }
    selectCharacter = async (charId: number) => {
        this.selectedCharacter = await this.characterRepo.getCharacterAsync(charId);
    }
    onCharacterSave = (character: Character) => {
        this.refresh();
    }
    onCharacterDeleted = (character: Character) => {
        this.refresh();
    }
}
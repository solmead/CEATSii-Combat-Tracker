import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '@/elements/modal/modal.service';
import { CharactersRepository } from '@/repositories';
import { EncounterService } from "@/services";
import { Character } from '@/entities';
import { Armor } from '@/entities';
import { Weapon } from '@/entities';
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import CharacterType = Enums.EnumDefinitions.CharacterType;

@Component({
    selector: 'app-character-edit',
    templateUrl: './character-edit.component.html',
    styleUrls: ['./character-edit.component.css']
})
/** characterDetail component*/
export class CharacterEditComponent {

    @Input() character: Character;
    @Output() onDelete = new EventEmitter<Character>();
    @Output() onSave = new EventEmitter<Character>();

    public rolledInit: number;

    constructor(public encounterService: EncounterService,
        private charRepo: CharactersRepository,
        private modalService: ModalService)
    {
        
    }

    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}

    get hasCurrentGame(): boolean {
        return (this.encounterService.currentGame != null);
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
        if (this.character.type == CharacterType.PC) {
            this.modalService.open('custom-modal-2');
        } else {
            this.encounterService.addCharacterToEncounterAsync(this.character);
        }
    }
    saveCharacter = async () => {
        //this.character.gameType = this.encounterService.systemSettings.gameSystem;
        var g = await this.charRepo.saveCharacterAsync(this.character);
        if (!this.character.id) {
            this.character.id = g.id;
        }

        this.onSave.emit(this.character);

    }
    closeEdit() {
        //this.charView.refresh();
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
        this.encounterService.addCharacterToEncounterAsync(this.character, this.rolledInit);
    }
}

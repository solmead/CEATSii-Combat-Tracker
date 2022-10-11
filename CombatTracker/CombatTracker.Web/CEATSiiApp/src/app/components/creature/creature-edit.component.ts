import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '@/elements/modal/modal.service';
import { CreaturesRepository } from '@/repositories';
import { EncounterService } from "@/services";
import { ReferencesService } from "@/services";
import { Creature } from '@/entities';
import { Armor } from '@/entities';
import { Weapon } from '@/entities';
import { Attack } from '@/entities';
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;


@Component({
    selector: 'app-creature-edit',
    templateUrl: './creature-edit.component.html',
    styleUrls: ['./creature-edit.component.css']
})
/** CreatureEdit component*/
export class CreatureEditComponent {
    @Input() creature: Creature;
    @Output() onDelete = new EventEmitter<Creature>();
    @Output() onSave = new EventEmitter<Creature>();

    public rolledInit: number;

    constructor(public encounterService: EncounterService,
        private creatureRepo: CreaturesRepository,
        private modalService: ModalService,
        public referencesService: ReferencesService) {

    }

    get isRolemaster(): boolean {
        return this.encounterService.currentGame?.gameType == GameType.RMSS;
    }

    get hasCurrentGame(): boolean {
        return (this.encounterService.currentGame != null);
    }

    onAttackDeleted(attack: Attack) {
        const index: number = this.creature.attacks.indexOf(attack);
        if (index !== -1) {
            this.creature.attacks.splice(index, 1);
        }
    }


    addToEncounter() {
        this.encounterService.addCreatureToEncounterAsync(this.creature);
    }
    saveCreature = async () => {
        //this.creature.gameType = this.encounterService.systemSettings.gameSystem;
        var g = await this.creatureRepo.saveCreatureAsync(this.creature);
        if (!this.creature.id) {
            this.creature.id = g.id;
        }

        this.onSave.emit(this.creature);

    }
    closeEdit() {
        //this.charView.refresh();
    }
}

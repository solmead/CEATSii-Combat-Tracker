import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreaturesRepository } from '../../repositories/Creatures.repository';
import { EncounterService } from "../../services/Encounter.service";
import { Creature } from '../../entities/Creature';

@Component({
    selector: 'app-creature',
    templateUrl: './creature.component.html',
    styleUrls: ['./creature.component.css']
})
/** creature component*/
export class CreatureComponent {

    public creatures: Array<Creature> = new Array<Creature>();
    public selectedCreature: Creature;

    /** character ctor */
    constructor(private creatureRepo: CreaturesRepository,
        private encounterService: EncounterService) {

        this.refresh();
    }

    ngOnChanges() {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            } else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    }
    ngOnInit() {
        if (this.creatures.length > 0) {
            if (this.selectedCreature != null) {
                this.selectCreature(this.selectedCreature.id);
            } else {
                this.selectCreature(this.creatures[0].id);
            }
        }
    }

    refresh = async () => {
        this.creatures = await this.creatureRepo.getCreaturesAsync(this.encounterService.systemSettings.gameSystem);
    }

    newCreature() {
        this.selectedCreature = new Creature();
    }
    selectCreature = async (charId: number) => {
        this.selectedCreature = await this.creatureRepo.getCreatureAsync(charId);
    }
    onCreatureSave = (creature: Creature) => {
        this.refresh();
    }
    onCreatureDeleted = (creature: Creature) => {
        this.refresh();
    }
}
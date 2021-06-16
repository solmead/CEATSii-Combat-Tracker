import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreaturesRepository } from '@/repositories';
import { EncounterService } from "@/services";
import { Creature } from '@/entities';

@Component({
  selector: 'creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.less']
})
/** creature component*/
export class CreatureListComponent {

  public creatures: Array<Creature> = new Array<Creature>();
  public selectedCreature: Creature;

  /** character ctor */
  constructor(private creatureRepo: CreaturesRepository) {

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

    this.creatures = await this.creatureRepo.getCreaturesAsync();
  }

  newCreature() {
    this.selectedCreature = new Creature();
  }
  selectCreature = async (charId: number) => {
    this.selectedCreature = await this.creatureRepo.getCreatureAsync(charId);
    //this.selectedCreature.aqRating.name

  }
  onCreatureSave = (creature: Creature) => {
    this.refresh();
  }
  onCreatureDeleted = (creature: Creature) => {
    this.refresh();
  }
}

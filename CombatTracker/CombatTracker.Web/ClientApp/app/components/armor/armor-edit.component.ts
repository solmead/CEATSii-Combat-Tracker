import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Armor } from '../../entities/classes/Armor';
import { CombatRepository } from '../../entities/apis/Combat.repository';

@Component({
    selector: 'app-armor-edit',
    templateUrl: './armor-edit.component.html',
    styleUrls: ['./armor-edit.component.css']
})
/** ArmorEdit component*/
export class ArmorEditComponent {

    @Input() armor: Armor;
    //@Output() onSave = new EventEmitter<Armor>();

    /** ArmorEdit ctor */
    constructor(private combatRepo: CombatRepository) {

    }


    //save = async () => {
    //    var arm = await this.combatRepo.saveArmorAsync(this.armor);
    //    this.armor.id = arm.id;
    //    this.onSave.emit(arm);
    //}
}
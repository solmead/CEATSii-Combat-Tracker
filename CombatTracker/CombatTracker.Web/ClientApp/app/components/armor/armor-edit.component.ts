import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Armor } from '../../entities/Armor';
import { CombatRepository } from '../../repositories/Combat.repository';

@Component({
    selector: 'app-armor-edit',
    templateUrl: './armor-edit.component.html',
    styleUrls: ['./armor-edit.component.css']
})
/** ArmorEdit component*/
export class ArmorEditComponent {

    @Input() armor: Armor;
    @Output() onDelete = new EventEmitter<Armor>();

    /** ArmorEdit ctor */
    constructor(private combatRepo: CombatRepository) {

    }

    delete() {
        this.onDelete.emit(this.armor);
    }

    //save = async () => {
    //    var arm = await this.combatRepo.saveArmorAsync(this.armor);
    //    this.armor.id = arm.id;
    //    this.onSave.emit(arm);
    //}
}
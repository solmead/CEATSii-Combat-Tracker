import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from '../../entities/classes/Weapon';
import { CombatRepository } from '../../entities/apis/Combat.repository';

@Component({
    selector: 'app-weapon-edit',
    templateUrl: './weapon-edit.component.html',
    styleUrls: ['./weapon-edit.component.css']
})
/** WeaponEdit component*/
export class WeaponEditComponent {
    /** WeaponEdit ctor */
    @Input() weapon: Weapon;
    //@Output() onSave = new EventEmitter<Weapon>();

    /** ArmorEdit ctor */
    constructor(private combatRepo: CombatRepository) {

    }


    //save = async () => {
    //    var weap = await this.combatRepo.saveWeaponAsync(this.weapon);
    //    this.weapon.id = weap.id;
    //    this.onSave.emit(weap);
    //}
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Weapon } from '../../entities/classes/Weapon';
import { CombatRepository } from '../../entities/apis/Combat.repository';
import { CharactersView } from "../../entities/dataviews/CharactersView.dataview";
import * as Enums from '../../entities/classes/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;

@Component({
    selector: 'app-weapon-edit',
    templateUrl: './weapon-edit.component.html',
    styleUrls: ['./weapon-edit.component.css']
})
/** WeaponEdit component*/
export class WeaponEditComponent {
    /** WeaponEdit ctor */
    @Input() weapon: Weapon;
    @Output() onDelete = new EventEmitter<Weapon>();

    /** ArmorEdit ctor */
    constructor(private combatRepo: CombatRepository,
        private charView: CharactersView) {

    }

    get isRolemaster(): boolean {
        return this.charView.systemSettings.gameSystem == GameType.RMSS;
    }

    delete() {
        this.onDelete.emit(this.weapon);
    }
    //save = async () => {
    //    var weap = await this.combatRepo.saveWeaponAsync(this.weapon);
    //    this.weapon.id = weap.id;
    //    this.onSave.emit(weap);
    //}
}
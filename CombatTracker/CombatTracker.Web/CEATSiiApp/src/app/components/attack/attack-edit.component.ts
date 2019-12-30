import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Attack } from '@/entities/Attack';
import { CombatRepository } from '@/repositories';
import { EncounterService } from "@/services";
import { ReferencesService } from "@/services";
import * as Enums from '@/entities/EnumDefinitions'
import GameType = Enums.EnumDefinitions.GameType;
import { Weapon } from '@/entities/Weapon';

@Component({
    selector: 'app-attack-edit',
    templateUrl: './attack-edit.component.html',
    styleUrls: ['./attack-edit.component.css']
})
/** AttackEdit component*/
export class AttackEditComponent {
    /** WeaponEdit ctor */
    @Input() attack: Attack;
    @Output() onDelete = new EventEmitter<Attack>();

    /** ArmorEdit ctor */
    constructor(private combatRepo: CombatRepository,
        private encounterService: EncounterService,
        private referencesService: ReferencesService) {

    }

    get weaponTypeId(): number {
        var at = this.referencesService.WeaponTypes.find((a) => this.attack.weaponUsed != null && a.name == this.attack.weaponUsed.name);

        if (at != null) {
            return at.id;
        }
        return null;
    }
    set weaponTypeId(value: number) {
        var at = this.referencesService.WeaponTypes.find((a) => a.id == value);
        if (this.attack.weaponUsed == null) {
            this.attack.weaponUsed = new Weapon();
        }
        this.attack.weaponUsed.name = at.name;

    }

    //get isRolemaster(): boolean {
    //    return this.encounterService.systemSettings.gameSystem == GameType.RMSS;
    //}

    delete() {
        this.onDelete.emit(this.attack);
    }
    //save = async () => {
    //    var weap = await this.combatRepo.saveWeaponAsync(this.weapon);
    //    this.weapon.id = weap.id;
    //    this.onSave.emit(weap);
    //}
}

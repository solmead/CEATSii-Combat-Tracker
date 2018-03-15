import { Component, OnInit, Input } from '@angular/core';
import { Weapon } from '../../entities/classes/Weapon';

@Component({
    selector: 'app-weapon',
    templateUrl: './weapon.component.html',
    styleUrls: ['./weapon.component.css']
})
/** Weapon component*/
export class WeaponComponent {
    /** Weapon ctor */
    @Input() weapons: Array<Weapon>;
    @Input() charId: number;

    public selectedWeapon: Weapon;
    private cnt:number = 1;

    /** Armor ctor */
    constructor() {

    }
    ngOnChanges() {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    }
    ngOnInit() {
        if (this.weapons.length > 0) {
            this.selectedWeapon = this.weapons[0];
        }
    }

    newWeapon() {
        var weapon = new Weapon();
        //weapon.id = this.cnt;
        weapon.name = "Weapon " + this.cnt;
        weapon.characterId = this.charId;
        this.selectedWeapon = weapon;
        this.weapons.push(weapon);
        this.cnt = this.cnt + 1;
    }

    //onWeaponSaved(weapon: Weapon) {
    //    //var weapon = this.weapons.find((a) => a.id == weapon.id);
    //    //if (weapon == null) {
    //    //    this.weapons.push(weapon);
    //    //}
    //}

    selectWeapon(weapon: Weapon) {
        this.selectedWeapon = weapon;
    }

    get selectedWeaponId(): string {
        if (this.selectedWeapon != null) {
            return this.selectedWeapon.name;
        }
        return "";
    }
    set selectedWeaponId(value: string) {
        this.selectedWeapon = this.weapons.find((a) => a.name == value);
    }

}
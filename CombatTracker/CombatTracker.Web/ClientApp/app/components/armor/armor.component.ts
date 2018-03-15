import { Component, OnInit, Input } from '@angular/core';
import { Armor } from '../../entities/classes/Armor';

@Component({
    selector: 'app-armor',
    templateUrl: './armor.component.html',
    styleUrls: ['./armor.component.css']
})
/** Armor component*/
export class ArmorComponent {

    @Input() armors: Array<Armor>;
    @Input() charId: number;

    public selectedArmor: Armor;
   

    /** Armor ctor */
    constructor() {

    }

    ngOnChanges() {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    }
    ngOnInit() {
        if (this.armors.length > 0) {
            this.selectedArmor = this.armors[0];
        }
    }


    newArmor() {
        var arm = new Armor();
        arm.characterId = this.charId;
        this.selectedArmor = arm;
        this.armors.push(arm);
        //this.cnt = this.cnt + 1;
    }

    //onArmorSaved(armor: Armor) {
    //    var arm = this.armors.find((a) => a.id == armor.id);
    //    if (arm == null) {
    //        this.armors.push(armor);
    //    }
    //}

    selectArmor(armor: Armor) {
        this.selectedArmor = armor;
    }

    get selectedArmorId(): number {
        if (this.selectedArmor != null) {
            return this.selectedArmor.type;
        }
        return 0;
    }
    set selectedArmorId(value: number) {
        this.selectedArmor = this.armors.find((a) => a.type == value);
    }

}
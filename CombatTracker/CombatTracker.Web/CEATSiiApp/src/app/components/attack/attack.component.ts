import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Attack } from '@/entities/Attack';

@Component({
    selector: 'app-attack',
    templateUrl: './attack.component.html',
    styleUrls: ['./attack.component.css']
})
/** Attack component*/
export class AttackComponent {
    @Input() attacks: Array<Attack>;
    @Input() creatureId: number;
    @Output() onDelete = new EventEmitter<Attack>();

    public selectedAttack: Attack;
    private cnt: number = 1;

    /** Armor ctor */
    constructor() {

    }
    ngOnChanges() {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    }
    ngOnInit() {
        if (this.attacks.length > 0) {
            this.selectedAttack = this.attacks[0];
        }
    }

    newAttack() {
        var attack = new Attack();
        //weapon.id = this.cnt;
        attack.name = "Attack " + this.cnt;
        attack.creatureOn_ID = this.creatureId;
        this.selectedAttack = attack;
        this.attacks.push(attack);
        this.cnt = this.cnt + 1;
    }

    onAttackDeleted(attack: Attack) {
        this.onDelete.emit(attack);
    }

    selectAttack(attack: Attack) {
        this.selectedAttack = attack;
    }

    get selectedAttackId(): number {
        if (this.selectedAttack != null) {
            return this.selectedAttack.id;
        }
        return null;
    }
    set selectedAttackId(value: number) {
        this.selectedAttack = this.attacks.find((a) => a.id == value);
    }

}

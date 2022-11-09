import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Actor } from '@/entities/Actor';

@Component({
  selector: 'app-add-damage',
  templateUrl: './add-damage.component.html',
  styleUrls: ['./add-damage.component.less']
})
export class AddDamageComponent implements OnInit {

    @Input() actor: Actor;
    @Output() onSaved = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

}

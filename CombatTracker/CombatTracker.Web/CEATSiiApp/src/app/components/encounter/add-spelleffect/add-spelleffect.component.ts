import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Actor } from '@/entities/Actor';

@Component({
  selector: 'app-add-spelleffect',
  templateUrl: './add-spelleffect.component.html',
  styleUrls: ['./add-spelleffect.component.less']
})
export class AddSpelleffectComponent implements OnInit {

    @Input() actor: Actor;
    @Output() onSaved = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

}

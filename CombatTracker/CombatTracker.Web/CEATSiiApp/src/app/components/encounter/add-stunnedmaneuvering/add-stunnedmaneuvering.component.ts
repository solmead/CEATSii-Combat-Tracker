import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from '@/entities/Actor';

@Component({
  selector: 'app-add-stunnedmaneuvering',
  templateUrl: './add-stunnedmaneuvering.component.html',
  styleUrls: ['./add-stunnedmaneuvering.component.less']
})
export class AddStunnedmaneuveringComponent implements OnInit {

    @Input() actor: Actor;
    @Output() onSaved = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

}

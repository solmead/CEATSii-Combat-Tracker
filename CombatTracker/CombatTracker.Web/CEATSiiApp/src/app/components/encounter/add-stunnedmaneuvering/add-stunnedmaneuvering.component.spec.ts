import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStunnedmaneuveringComponent } from './add-stunnedmaneuvering.component';

describe('AddStunnedmaneuveringComponent', () => {
  let component: AddStunnedmaneuveringComponent;
  let fixture: ComponentFixture<AddStunnedmaneuveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStunnedmaneuveringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStunnedmaneuveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

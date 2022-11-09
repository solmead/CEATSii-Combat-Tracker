import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpelleffectComponent } from './add-spelleffect.component';

describe('AddSpelleffectComponent', () => {
  let component: AddSpelleffectComponent;
  let fixture: ComponentFixture<AddSpelleffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpelleffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpelleffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

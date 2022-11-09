import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterHeaderComponent } from './encounter-header.component';

describe('EncounterHeaderComponent', () => {
  let component: EncounterHeaderComponent;
  let fixture: ComponentFixture<EncounterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CreatureComponent } from './creature.component';

let component: CreatureComponent;
let fixture: ComponentFixture<CreatureComponent>;

describe('creature component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreatureComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CreatureComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
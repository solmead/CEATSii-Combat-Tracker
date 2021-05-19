import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MainNavMenuComponent } from './main-nav-menu.component';

let component: MainNavMenuComponent;
let fixture: ComponentFixture<MainNavMenuComponent>;

describe('mainNavMenu component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MainNavMenuComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MainNavMenuComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
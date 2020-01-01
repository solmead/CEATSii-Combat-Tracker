/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SideNavMenuComponent } from './side-nav-menu.component';

let component: SideNavMenuComponent;
let fixture: ComponentFixture<SideNavMenuComponent>;

describe('side-nav-menu component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SideNavMenuComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SideNavMenuComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
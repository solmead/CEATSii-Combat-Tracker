/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AccountNavMenuComponent } from './account-nav-menu.component';

let component: AccountNavMenuComponent;
let fixture: ComponentFixture<AccountNavMenuComponent>;

describe('account-nav-menu component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AccountNavMenuComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AccountNavMenuComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainNavMenuComponent } from '@/navigation';
import { SideNavMenuComponent } from '@/navigation';
import { HomeComponent } from '@/top/home';
import { GameComponent } from '@/components/game/game.component';
import { GameEditComponent } from './components/game/game-edit.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterEditComponent } from './components/character/character-edit.component';
import { CreatureEditComponent } from './components/creature/creature-edit.component';
import { ArmorComponent } from './components/armor/armor.component';
import { ArmorEditComponent } from './components/armor/armor-edit.component';
import { AttackComponent } from './components/attack/attack.component';
import { AttackEditComponent } from './components/attack/attack-edit.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { WeaponEditComponent } from './components/weapon/weapon-edit.component';
import { ActorComponent } from './components/actor/actor.component';
import { EncounterComponent } from './components/encounter/encounter.component';
import { ModalComponent } from '@/elements';
import { AlertComponent } from '@/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '@/approot';
import { JwtInterceptor, ErrorInterceptor, ApiPathInterceptor } from '@/_helpers';
import { AuthenticationService } from '@/services';
import { CreatureComponent } from '@/top/creature';
import { AuthorizeInterceptor } from './api-authorization/authorize.interceptor';
import { ApiAuthorizationModule } from './api-authorization/api-authorization.module';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameEditComponent,
    HomeComponent,
    CharacterEditComponent,
    CharacterComponent,
    CreatureComponent,
    CreatureEditComponent,
    ActorComponent,
    EncounterComponent,
    ArmorComponent,
    ArmorEditComponent,
    WeaponComponent,
    WeaponEditComponent,
    ModalComponent,
    AttackComponent,
    AttackEditComponent,
    AlertComponent,
    MainNavMenuComponent,
    SideNavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ReactiveFormsModule,
    HttpClientModule,
    //NgbModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    ApiAuthorizationModule,
    AppRoutingModule
  ],
  providers: [
    //{
    //  provide: 'BASE_URL',
    //  useFactory: getBaseUrl
    //},
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: ApiPathInterceptor,
    //  multi: true
    //},
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: JwtInterceptor,
    //  multi: true,
    //  deps: [AuthenticationService]
    //},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
      deps: [AuthenticationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


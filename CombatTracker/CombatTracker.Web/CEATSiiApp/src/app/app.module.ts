
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MainNavMenuComponent } from '@/navigation';
import { AccountNavMenuComponent } from '@/navigation';
import { SideNavMenuComponent } from '@/navigation';
import { HomeComponent } from '@/top/home';
import { LoginComponent } from '@/top/login';
import { RegisterComponent } from '@/top/register';
import { GameComponent } from '@/components/game/game.component';
import { GameEditComponent } from './components/game/game-edit.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterEditComponent } from './components/character/character-edit.component';
import { CreatureComponent } from './components/creature/creature.component';
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
import * as Services from '@/services';
import * as Repositories from '@/repositories';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
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
    AccountNavMenuComponent,
    SideNavMenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgbModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiPathInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //Services.AlertService,
    //Services.AuthenticationService,
    //Services.EncounterService,
    //Services.ReferencesService,
    //Repositories.ActionsRepository,
    //Repositories.ActorsRepository,
    //Repositories.CharactersRepository,
    //Repositories.CombatRepository,
    //Repositories.CreaturesRepository,
    //Repositories.CriticalEffectsRepository,
    //Repositories.EncounterRepository,
    //Repositories.GamesRepository,
    //Repositories.ReferenceRepository,
    //Repositories.SampleDataRepository,
    //Repositories.SettingsRepository,
    //Repositories.UsersRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

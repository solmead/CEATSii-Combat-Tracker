
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from '@/approot';
import { HomeComponent } from '@/top/home';
import { EncounterComponent } from '@/top/encounter';
import { CreatureComponent } from '@/top/creature';
import { CharacterComponent } from '@/top/character';
//import { GameComponent } from '@/top/game';


import { MainNavMenuComponent } from '@/navigation';
import { SideNavMenuComponent } from '@/navigation';


import { GameListComponent } from '@/components/game';
import { GameEditComponent } from '@/components/game';
import { CharacterListComponent } from '@/components/character';
import { CharacterEditComponent } from '@/components/character';
import { CreatureListComponent } from '@/components/creature';
import { CreatureEditComponent } from '@/components/creature';
import { ArmorListComponent } from '@/components/armor';
import { ArmorEditComponent } from '@/components/armor';
import { AttackListComponent } from '@/components/attack';
import { AttackEditComponent } from '@/components/attack';
import { WeaponListComponent } from '@/components/weapon';
import { WeaponEditComponent } from '@/components/weapon';
import { ActionsListComponent } from '@/components/encounter';
import { ActionComponent } from '@/components/encounter';
import { ActorComponent, ActorListComponent } from '@/components/actor/';
import { ModalComponent } from '@/elements';
import { AlertComponent } from '@/elements';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, ApiPathInterceptor } from '@/_helpers';

import { AuthenticationService, EncounterService, AlertService, ReferencesService } from '@/services';

import { AuthorizeInterceptor } from './api-authorization/authorize.interceptor';
import { ApiAuthorizationModule } from './api-authorization/api-authorization.module';


@NgModule({
    declarations: [
        HomeComponent,
        EncounterComponent,
        CreatureComponent,
        CharacterComponent,
        AppComponent,
        GameListComponent,
        GameEditComponent,
        CharacterEditComponent,
        CharacterListComponent,
        CreatureListComponent,
        CreatureEditComponent,
        ActorComponent,
        ActorListComponent,
        EncounterComponent,
        ArmorListComponent,
        ArmorEditComponent,
        WeaponListComponent,
        WeaponEditComponent,
        ModalComponent,
        AttackListComponent,
        AttackEditComponent,
        ActionsListComponent,
        ActionComponent,
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
        //    provide: 'BASE_URL',
        //    useFactory: getBaseUrl
        //},
        //{
        //  provide: 'BASE_URL',
        //  useFactory: getBaseUrl
        //},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiPathInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizeInterceptor,
            multi: true
        },
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
        },
        EncounterService,
        AlertService,
        ReferencesService,
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


//export function getBaseUrl() {
//    return (<any>document.getElementsByTagName('baseAction')[0]).href;
//}

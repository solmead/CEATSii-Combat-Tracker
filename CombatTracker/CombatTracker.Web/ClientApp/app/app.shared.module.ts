import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';


import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
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
import { ModalComponent } from './elements/modal/modal.component';


import { ModalService } from './elements/modal/modal.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { ServicesModule } from "./services/services.module";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
            { path: '', redirectTo: 'games', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'games', component: GameComponent },
            { path: 'character', component: CharacterComponent },
            { path: 'creature', component: CreatureComponent },
            { path: 'encounter/:id', component: EncounterComponent },
            { path: 'actor/:id', component: ActorComponent },
            { path: '**', redirectTo: 'games' }
];


@NgModule({
    providers: [
        ModalService
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
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
        AttackEditComponent
    ],
    imports: [
        NgbModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        RepositoriesModule,
        ServicesModule,
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ]
})
export class AppModuleShared {
}

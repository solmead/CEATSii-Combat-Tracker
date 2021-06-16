import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { GameComponent } from './components/game/game.component';
//import { CharacterComponent } from './components/character/character.component';
//import { ActorComponent } from './components/actor/actor.component';


import { HomeComponent } from '@/top/home';
import { CreatureComponent } from '@/top/creature';
import { CharacterComponent } from '@/top/character';
import { EncounterComponent } from '@/top/encounter';
import { AuthorizeGuard } from './api-authorization/authorize.guard';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'creatures', component: CreatureComponent, canActivate: [AuthorizeGuard] },
    { path: 'characters', component: CharacterComponent, canActivate: [AuthorizeGuard] },
    { path: 'encounter/:id', component: EncounterComponent },
    //{ path: 'mycreatures', component: CreatureComponent, canActivate: [AuthorizeGuard] },

    //{ path: 'games', component: GameComponent, canActivate: [AuthorizeGuard] },
    //{ path: 'character', component: CharacterComponent, canActivate: [AuthorizeGuard] },
    //
    //{ path: 'actor/:id', component: ActorComponent, canActivate: [AuthorizeGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
          { enableTracing: true }) // <-- debugging purposes only)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { CharacterComponent } from './components/character/character.component';
import { ActorComponent } from './components/actor/actor.component';
import { EncounterComponent } from './components/encounter/encounter.component';
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from '@/top/home';
import { LoginComponent } from '@/top/login';
import { RegisterComponent } from '@/top/register';
import { CreatureComponent } from '@/top/creature';
import { AuthorizeGuard } from './api-authorization/authorize.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'creatures', component: CreatureComponent, canActivate: [AuthorizeGuard] },
  { path: 'mycreatures', component: CreatureComponent, canActivate: [AuthGuard] },

  { path: 'games', component: GameComponent, canActivate: [AuthGuard] },
  { path: 'character', component: CharacterComponent, canActivate: [AuthGuard] },
  { path: 'encounter/:id', component: EncounterComponent, canActivate: [AuthGuard] },
  { path: 'actor/:id', component: ActorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
          { enableTracing: true }) // <-- debugging purposes only)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
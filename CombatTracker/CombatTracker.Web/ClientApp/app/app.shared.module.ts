import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character/character-list.component';
import { CharacterDetailComponent } from './components/character/character-detail.component';


import { RepositoriesModule } from './entities/apis/repositories.module';
import { DataViewsModule } from "./entities/dataviews/dataviews.module";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        CharacterListComponent,
        CharacterDetailComponent,
        CharacterComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RepositoriesModule,
        DataViewsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'character', component: CharacterComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}

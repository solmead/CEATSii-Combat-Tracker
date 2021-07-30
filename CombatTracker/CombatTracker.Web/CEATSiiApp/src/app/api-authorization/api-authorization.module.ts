import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ApplicationPaths } from './api-authorization.constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        { path: ApplicationPaths.Register, component: RegisterComponent },
        { path: ApplicationPaths.Profile, component: ProfileComponent },
        { path: ApplicationPaths.Login, component: LoginComponent },
        //{ path: ApplicationPaths.LoginFailed, component: LoginComponent },
        //{ path: ApplicationPaths.LoginCallback, component: LoginComponent },
        { path: ApplicationPaths.LogOut, component: LogoutComponent },
        //{ path: ApplicationPaths.LoggedOut, component: LogoutComponent },
        //{ path: ApplicationPaths.LogOutCallback, component: LogoutComponent }
      ]
    )
  ],
    declarations: [LoginMenuComponent, LoginComponent, LogoutComponent, RegisterComponent, ProfileComponent],
    exports: [LoginMenuComponent, LoginComponent, LogoutComponent, RegisterComponent, ProfileComponent]
})
export class ApiAuthorizationModule { }

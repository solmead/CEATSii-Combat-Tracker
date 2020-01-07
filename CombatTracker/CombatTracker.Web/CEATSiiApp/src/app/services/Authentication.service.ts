import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, concat, from, Observable } from 'rxjs';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { User, UserManager, WebStorageStateStore } from 'oidc-client';

import { UsersRepository } from '@/repositories';
import { AuthenticateModel } from '@/entities';
import { ApplicationUser } from '@/entities';
import { delay } from 'rxjs/operators';
import { AuthorizeService, AuthenticationResultStatus } from '../api-authorization/authorize.service';


export interface IUser {
  name: string;
}

export const ApplicationName = 'CEATSiiApp';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private userManager: UserManager;
    private currentUserSubject: BehaviorSubject<ApplicationUser>;
    public currentUser: Observable<ApplicationUser>;

    constructor(private http: HttpClient,
        private userRepository: UsersRepository,
        private authorizeService: AuthorizeService) {
        this.currentUserSubject = new BehaviorSubject<ApplicationUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        //debugger;
        this.refreshUserAsync();
    }


    public async refreshUserAsync(): Promise<void> {
        await delay(10);

        var user = await this.userRepository.currentUserAsync();
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (user) {
            await this.loginAuthAsync();
        } else {
            //await this.logoutAuthAsync();
        }

        this.currentUserSubject.next(user);
    }


    public get currentUserValue(): ApplicationUser {
        return this.currentUserSubject.value;
    }

    async loginAsync(username: string, password: string): Promise<ApplicationUser> {
        var auth = new AuthenticateModel();
        auth.username = username;
        auth.password = password;
        var user = await this.userRepository.authenticateAsync(auth);
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (user) {
            await this.loginAuthAsync();
        } else {
            //await this.logoutAuthAsync();
        }


        this.currentUserSubject.next(user);

        return user;
        //return null;
    }

    private async loginAuthAsync(): Promise<void> {

        const state = {};
        //const result = await this.authorizeService.signIn(state);
        const url = window.location.href;
        const result = await this.authorizeService.completeSignIn(url);

        switch (result.status) {
            case AuthenticationResultStatus.Redirect:
                debugger;
                break;
            case AuthenticationResultStatus.Success:
                //await this.navigateToReturnUrl(returnUrl);
                break;
            case AuthenticationResultStatus.Fail:
                //await this.router.navigate(ApplicationPaths.LoginFailedPathComponents, {
                //  queryParams: { [QueryParameterNames.Message]: result.message }
                //});
                debugger;
                break;
            default:
                debugger;
                throw new Error(`Invalid status result ${(result as any).status}.`);
        }
    }
    private async logoutAuthAsync(): Promise<void> {

        const state = {};
        const result = await this.authorizeService.signOut(state);
        switch (result.status) {
            case AuthenticationResultStatus.Redirect:
                debugger;
                break;
            case AuthenticationResultStatus.Success:
                //await this.navigateToReturnUrl(returnUrl);
                break;
            case AuthenticationResultStatus.Fail:
                debugger;
                //this.message.next(result.message);
                break;
            default:
                debugger;
                throw new Error('Invalid authentication result status.');
        }
    }

    async logoutAsync(): Promise<void> {
        this.userRepository.logout();
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');

        await this.logoutAuthAsync();



        this.currentUserSubject.next(null);
    }
}

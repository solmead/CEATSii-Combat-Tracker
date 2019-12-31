import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { UsersRepository } from '@/repositories';
import { AuthenticateModel } from '@/entities/AuthenticateModel';
import { ApplicationUser } from '@/entities/ApplicationUser';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' } )
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<ApplicationUser>;
  public currentUser: Observable<ApplicationUser>;

  constructor(private http: HttpClient, private userRepository: UsersRepository) {
    this.currentUserSubject = new BehaviorSubject<ApplicationUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    debugger;
    this.refreshUser();
  }

  public async refreshUser(): Promise<void> {
    await delay(10);

    this.userRepository.currentUser().subscribe((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    });
  }


  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject.value;
  }

  login(username:string, password:string): Observable<ApplicationUser> {
    var auth = new AuthenticateModel();
    auth.username = username;
    auth.password = password;
    var observeUser = this.userRepository.authenticate(auth);
    observeUser.subscribe((user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    });

    return observeUser;
    //return null;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

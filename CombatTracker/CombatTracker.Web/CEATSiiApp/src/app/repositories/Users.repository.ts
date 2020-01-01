﻿


//*************************DO NOT MODIFY**************************
//
//THESE FILES ARE AUTOGENERATED WITH TYPEWRITER AND ANY MODIFICATIONS MADE HERE WILL BE LOST
//PLEASE VISIT http://frhagn.github.io/Typewriter/ TO LEARN MORE ABOUT THIS VISUAL STUDIO EXTENSION
//
//*************************DO NOT MODIFY**************************
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";

    import * as Enums from '@/entities/EnumDefinitions'
    import { ApplicationUser } from '@/entities/ApplicationUser';
import { AuthenticateModel } from '@/entities/AuthenticateModel';
import { RegisterModel } from '@/entities/RegisterModel';
import { UpdateModel } from '@/entities/UpdateModel';


@Injectable({ providedIn: 'root' })
export class UsersRepository {

    constructor(private _httpClient: HttpClient) { }
    
    // get: api/Users/CurrentUser

	//public currentUser = (, callback: (data: ApplicationUser)=>void) : void => {
	//	this.currentUserObserve().subscribe(response => callback(response));
	//}

	public currentUserAsync = () : Promise<ApplicationUser> => {

        return new Promise<ApplicationUser>((resolve, reject) => {
            this.currentUser()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public currentUser = () : Observable<ApplicationUser> => {
        var _Url = `api/Users/CurrentUser`;
            return this._httpClient.get<ApplicationUser>(_Url);
	};

    
    // post: api/Users/logout

	//public logout = (, callback: (data: boolean)=>void) : void => {
	//	this.logoutObserve().subscribe(response => callback(response));
	//}

	public logoutAsync = () : Promise<boolean> => {

        return new Promise<boolean>((resolve, reject) => {
            this.logout()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public logout = () : Observable<boolean> => {
        var _Url = `api/Users/logout`;
            return this._httpClient.post<boolean>(_Url, null);
	};

    
    // post: api/Users/authenticate

	//public authenticate = (model: AuthenticateModel, callback: (data: ApplicationUser)=>void) : void => {
	//	this.authenticateObserve(model).subscribe(response => callback(response));
	//}

	public authenticateAsync = (model: AuthenticateModel) : Promise<ApplicationUser> => {

        return new Promise<ApplicationUser>((resolve, reject) => {
            this.authenticate(model)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public authenticate = (model: AuthenticateModel) : Observable<ApplicationUser> => {
        var _Url = `api/Users/authenticate`;
            return this._httpClient.post<ApplicationUser>(_Url, model);
	};

    
    // post: api/Users/register

	//public register = (model: RegisterModel, callback: (data: ApplicationUser)=>void) : void => {
	//	this.registerObserve(model).subscribe(response => callback(response));
	//}

	public registerAsync = (model: RegisterModel) : Promise<ApplicationUser> => {

        return new Promise<ApplicationUser>((resolve, reject) => {
            this.register(model)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public register = (model: RegisterModel) : Observable<ApplicationUser> => {
        var _Url = `api/Users/register`;
            return this._httpClient.post<ApplicationUser>(_Url, model);
	};

    
    // get: api/Users/GetAll

	//public getAll = (, callback: (data: ApplicationUser[])=>void) : void => {
	//	this.getAllObserve().subscribe(response => callback(response));
	//}

	public getAllAsync = () : Promise<ApplicationUser[]> => {

        return new Promise<ApplicationUser[]>((resolve, reject) => {
            this.getAll()
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getAll = () : Observable<ApplicationUser[]> => {
        var _Url = `api/Users/GetAll`;
            return this._httpClient.get<ApplicationUser[]>(_Url);
	};

    
    // get: api/Users/GetById/${encodeURIComponent(id)}

	//public getById = (id: string, callback: (data: ApplicationUser)=>void) : void => {
	//	this.getByIdObserve(id).subscribe(response => callback(response));
	//}

	public getByIdAsync = (id: string) : Promise<ApplicationUser> => {

        return new Promise<ApplicationUser>((resolve, reject) => {
            this.getById(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public getById = (id: string) : Observable<ApplicationUser> => {
        var _Url = `api/Users/GetById/${encodeURIComponent(id)}`;
            return this._httpClient.get<ApplicationUser>(_Url);
	};

    
    // put: api/Users/Update/${encodeURIComponent(id)}

	//public update = (id: string, model: UpdateModel, callback: (data: ApplicationUser)=>void) : void => {
	//	this.updateObserve(id, model).subscribe(response => callback(response));
	//}

	public updateAsync = (id: string, model: UpdateModel) : Promise<ApplicationUser> => {

        return new Promise<ApplicationUser>((resolve, reject) => {
            this.update(id, model)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public update = (id: string, model: UpdateModel) : Observable<ApplicationUser> => {
        var _Url = `api/Users/Update/${encodeURIComponent(id)}`;
            return this._httpClient.put<ApplicationUser>(_Url, id);
	};

    
    // delete: api/Users/Delete/${encodeURIComponent(id)}

	//public delete = (id: string, callback: (data: void)=>void) : void => {
	//	this.deleteObserve(id).subscribe(response => callback(response));
	//}

	public deleteAsync = (id: string) : Promise<void> => {

        return new Promise<void>((resolve, reject) => {
            this.delete(id)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public delete = (id: string) : Observable<void> => {
        var _Url = `api/Users/Delete/${encodeURIComponent(id)}`;
            return this._httpClient.delete<void>(_Url);
	};

    
    // post: api/Users/ForgotPassword?email=${encodeURIComponent(email)}

	//public forgotPassword = (email: string, callback: (data: boolean)=>void) : void => {
	//	this.forgotPasswordObserve(email).subscribe(response => callback(response));
	//}

	public forgotPasswordAsync = (email: string) : Promise<boolean> => {

        return new Promise<boolean>((resolve, reject) => {
            this.forgotPassword(email)
            .subscribe((res) => {
                    resolve(res);
                });

        });
	}

	public forgotPassword = (email: string) : Observable<boolean> => {
        var _Url = `api/Users/ForgotPassword?email=${encodeURIComponent(email)}`;
            return this._httpClient.post<boolean>(_Url, email);
	};

    
}





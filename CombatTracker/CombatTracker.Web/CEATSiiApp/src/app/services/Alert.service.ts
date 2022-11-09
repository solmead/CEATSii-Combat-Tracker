import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import '@/_helpers/DateEx';

export interface iAlertMessage {
    type: string;
    text: string;
    cssClass: string;
}


@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<iAlertMessage>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<iAlertMessage> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        message = (new Date()).formatDate() + " " + (new Date()).formatTime() + " - " + message;
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<iAlertMessage>{ type: 'success', text: message });
        console.log("Success -> " + message);
    }

    error(message: string, keepAfterRouteChange = false) {
        message = (new Date()).formatDate() + " " + (new Date()).formatTime() + " - " + message;
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<iAlertMessage>{ type: 'error', text: message });
        console.log("Error -> " + message);
    }

    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
}
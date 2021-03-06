﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    private authUrl: string = 'http://in-vm-544/MyNode/api';
    private loggedIn: boolean = false;

    constructor(private http: Http) {

        //Look at the localstrorage to check if the user is logged in
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    /**
    * CHeck if the user is logged in
    */
    isLoggedIn() {
        return this.loggedIn;
    }

    /**
    * Log the user In
    */
    login(name: string, password: string): Observable<any> {
        return this.http.post(`${this.authUrl}/authenticate`, { name, password })
            .map(res => res.json())
            .do(res => {
                if (res.token) {
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                }
            })
            .catch(this.handleError);
    }

    /**
    * Log the user out
    */
    logOut() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    /**
    * Handle any error from the API
    */
    private handleError(err) {
        let errorMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);
            errorMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        } else {
            errorMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errorMessage);
    }

}
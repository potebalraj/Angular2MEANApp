import { Component, OnInit} from '@angular/core';
//import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './shared/models/user';

//import { UserService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    styles: [`
    .logout {cursor:pointer}
    .active {
        color: #FFF !important;
`],
    template: ` 
    <h1>{{title}}</h1>
    <header>
  
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" routerLink="/home"
                    routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">My Angular App</a>
                </div>
                 <!--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">-->
                    <ul class="nav navbar-nav">
                        <li *ngIf="isLoggedIn"><a routerLink="/home"
                        routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
                        <li *ngIf="isLoggedIn"><a routerLink="/users"
                        routerLinkActive="active" [routerLinkActiveOptions]="{exact:false}">Users</a></li>

                        <li *ngIf="isLoggedIn" class="dropdown">
                            <a  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pipes<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a routerLink="/pipes/date">Date</a></li>
                                <li><a routerLink="/pipes">Another action</a></li>                               
                                <li role="separator" class="divider"></li>
                                <li><a routerLink="/pipes">Separated link</a></li>
                            </ul>
                        </li>

                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <!--<li *ngIf="!isLoggedIn"><a routerLink="/login">Login</a></li>-->
                        <li *ngIf="isLoggedIn"><a (click)="logOut()" class="logout" routerLinkActive="active">LogOut</a></li>
                    </ul>
                <!--</div>-->
            </div>
        </nav>
   
   </header>
    <main>
    <router-outlet></router-outlet>
    </main>
`
})

export class AppComponent implements OnInit {

    title = 'My Angular 2 App';
    users: User[]

    constructor(
                //private userservice: UserService,
                private authService: AuthService,
                private router: Router
                ) { }

    ngOnInit() {
        // this.userservice.getUsers()
        //     .subscribe(
        //     users => this.users = users,
        //     err => {
        //         console.log(err);
        //     }
        //     );
    }

    /**
    * Is the user logged in
    */
    get isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    /**
    * Log the user out
    */
    logOut() {
        this.authService.logOut();
        this.router.navigate(['/login']);
    }

}
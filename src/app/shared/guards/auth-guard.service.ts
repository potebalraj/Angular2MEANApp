import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{

constructor(private authService: AuthService,
            private router:Router) {}

    canActivate() {
        console.log('I am checking to see if you are logged in');
        //return true;

        if(this.authService.isLoggedIn())
            return true;
        else
        {
            this.router.navigate([`/login`]);
            return false;
        }
    }

    canActivateChild() {
        console.log('Checking child route access');
        //return true;
         if(this.authService.isLoggedIn())
            return true;
        else
        {
            this.router.navigate([`/login`]);
            return false;
        }
    }
}
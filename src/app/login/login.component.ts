import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service'; 

@Component({
    
    templateUrl: './login.component.html',
    styles:[`input.ng-valid.ng-touched {
            border-left: 5px solid green;
            }

            input.ng-invalid.ng-touched {
            border-left: 5px solid red;
            }`]
})

export class LoginComponent implements OnInit {
    credentials = { username: '', password: '' };
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private service: AuthService, private router: Router) { }

    ngOnInit() { }

    /**
    * Login a user
    */
    login() {
        this.errorMessage = '';
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(
            data => {
                if (data.success)
                this.router.navigate(['/home']);
                else
                this.errorMessage = data.message;
                
               
                //this.router.navigate(['/users']);                 
                //console.log(data.message);
            },
            err => {
                this.errorMessage = err;
                console.log(err);
            }
            );
    }        
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { PipesModule } from './pipes/pipes.module';
import { UserService } from './shared/services/user.service';
// import { UsersComponent } from './users/users.component';
// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserSingleComponent } from './users/user-single/user-single.component';
// import { UserEditComponent } from './users/user-edit/user-edit.component';
// import { UserCreateComponent } from './users/user-create/user-create.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        //ReactiveFormsModule,
        routing,
        UsersModule,
        PipesModule
    ],
    declarations: [
        AppComponent,
        // UsersComponent,
        // UserListComponent,
        // UserSingleComponent,
        // UserEditComponent,
        // UserCreateComponent,
        LoginComponent,
        NotFoundComponent,
        HomeComponent                
    ],
    providers: [
        UserService,
        AuthService,
        AuthGuard,
        CanDeactivateGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
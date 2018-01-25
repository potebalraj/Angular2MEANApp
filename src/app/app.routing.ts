import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsersComponent } from './users/users.component';
// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserSingleComponent } from './users/user-single/user-single.component';
// import { UserEditComponent } from './users/user-edit/user-edit.component';
// import { UserCreateComponent } from './users/user-create/user-create.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },       
    
    // {
    //     path: 'users',
    //     loadChildren: 'app/users/users.module#UsersModule'
    //     //component: UsersComponent,
    //     // children: [
    //     //     {
    //     //         path: '',
    //     //         component: UserListComponent
    //     //     },
    //     //     {
    //     //         path: 'create',
    //     //         component: UserCreateComponent
    //     //     },
    //     //     {
    //     //         path: ':id',
    //     //         component: UserSingleComponent
    //     //     },
    //     //     {
    //     //         path: ':id/edit',
    //     //         component: UserEditComponent
    //     //     }
    //     // ]
    // },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
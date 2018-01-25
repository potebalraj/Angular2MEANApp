import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

const usersRoutes: Routes = [
    {
        path: 'users',
        canActivateChild: [AuthGuard],
        component:UsersComponent,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                component: UserListComponent                
            },
            {
                path: 'create',
                canActivate: [AuthGuard],
                component: UserCreateComponent
            },
            {
                path: ':id',
                canActivateChild: [AuthGuard],
                component: UserSingleComponent
            },
            {
                path: ':id/edit',
                canActivateChild: [AuthGuard],                
                component: UserEditComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
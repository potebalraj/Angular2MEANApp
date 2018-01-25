import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes.component';
import { DateComponent } from './date/date.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserSingleComponent } from './user-single/user-single.component';
// import { UserEditComponent } from './user-edit/user-edit.component';
// import { UserCreateComponent } from './user-create/user-create.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';


const pipesRoutes: Routes = [
    {
        path: 'pipes',
        canActivate: [AuthGuard],
        component:PipesComponent,
        children: [
            {
                path: 'date',
                canActivateChild: [AuthGuard],
                component: DateComponent                
             }
            // {
            //     path: 'create',
            //     canActivate: [AuthGuard],
            //     component: UserCreateComponent
            // },
            // {
            //     path: ':id',
            //     canActivateChild: [AuthGuard],
            //     component: UserSingleComponent
            // },
            // {
            //     path: ':id/edit',
            //     canActivateChild: [AuthGuard],                
            //     component: UserEditComponent,
            //     canDeactivate: [CanDeactivateGuard]
            // }
        ]
    }
];

export const pipesRouting: ModuleWithProviders = RouterModule.forChild(pipesRoutes);
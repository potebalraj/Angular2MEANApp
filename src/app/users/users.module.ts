import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { usersRouting } from './users.routing';


@NgModule({
    imports: [
        CommonModule,
        usersRouting,
        ReactiveFormsModule
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserSingleComponent,
        UserEditComponent,
        UserCreateComponent
    ],
    providers: [
        UserService        
    ]
})

export class UsersModule {

}
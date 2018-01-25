import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserSingleComponent } from './user-single/user-single.component';
// import { UserEditComponent } from './user-edit/user-edit.component';
// import { UserCreateComponent } from './user-create/user-create.component';
import { pipesRouting } from './pipes.routing';
import { DateComponent } from './date/date.component';


@NgModule({
    imports: [
        CommonModule,
        pipesRouting
    ],
    declarations: [
        PipesComponent,
        DateComponent
        // UserListComponent,
        // UserSingleComponent,
        // UserEditComponent,
        // UserCreateComponent
    ],
    providers: []
})

export class PipesModule {

}
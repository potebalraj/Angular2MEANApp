import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
    styles: [`               
       .user-card {cursor: pointer;}
       .profile-card {
        background:#f3f3f3;
        border-radius:4px;
        padding: 30px;                
        text-align:center;
    }
        .profile-card img {
        max-width:50%;
        margin:15px auto;
    }  
    
    `],
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    users: User[];

    constructor(private service: UserService) { }

    ngOnInit() {

        this.service.getUsers()
            .subscribe(users => this.users = users);
    }
}
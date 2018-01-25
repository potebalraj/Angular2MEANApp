import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({

    templateUrl: './user-create.component.html'
})

export class UserCreateComponent implements OnInit {

    form: FormGroup;

    formErrors = {
        name: '',
        phone: '',
        email: '',
        avatar: ''
    };

    validationMessages = {
        name: {
            required: 'Name is required.',
            minlength: 'Name must be at least 3 characters.',
            maxlength: 'Name can\'t be more than 16 characters.'
        },
        phone: {
            required: 'Phone is required.',
            minlength: 'Phone must be at least 3 characters.',
            maxlength: 'Email can\'t be more than 16 characters.'
        },
        email: {
            required: 'Email is required.',            
            maxlength: 'Email can\'t be more than 16 characters.',
            pattern: 'Please enter valid email.'
        },
        avatar: {
            required: 'Avatar is required.'
        }
    };


     //user: User = {name:'', username:'', phone:'', email:'', avatar:''};
     successMessage: string = '';
     errorMessage: string = '';

    constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

    ngOnInit() {
        //build the data model for our form
        this.buildForm();
    }

    /**
     * Build the intial form
     */
    buildForm() {
        //build the form       
        this.form = this.fb.group({
            name: ['', [Validators.minLength(3), Validators.maxLength(16)]],
            phone: ['', [Validators.minLength(3), Validators.maxLength(16)]],
            email: ['', [Validators.maxLength(16), Validators.pattern("[^ @]*@[^ @]*")]],
            avatar: ['', []]
        });

        console.log(this.form);

        //watch for changes and validate
        this.form.valueChanges.subscribe(data => this.validateForm());
         console.log(this.form.value);
    }

    /**
     * Validate the entite form
     */
    validateForm() {
        for (let field in this.formErrors) {
            //clear that input field errors
            this.formErrors[field] = '';
            // grab the input field by name
            let input = this.form.get(field);
            if (input.invalid && input.dirty) {
                //figure out the type of errors
                //loop over the formErrors field names                
                for (let error in input.errors) {
                    //assign that type of error message to a variable
                    this.formErrors[field] = this.validationMessages[field][error];
                }
            }
        }        
    }

    /**
    * Create a User
    */
    createUser() {
         this.successMessage = '';
         this.errorMessage = ''        

        // this.service.createUser(this.user)
        //     .subscribe(user => {
        //         //this.successMessage = 'User was created';
        //         console.log('User was created');
        //         console.log(user);
        //         //nevigate to user list page
        //         this.router.navigate([`/users/${user.id}`]);
        //     })

                this.service.createUser(this.form.value)
            .subscribe(
            user => {
                this.successMessage = 'User was created';
                console.log('User was created');
                console.log(user);
                //nevigate to user list page
                this.router.navigate([`/users/${user.id}`]);
            },
            err => {
                this.errorMessage = 'User Could not be created';
                console.log(err);
            })
    }
}
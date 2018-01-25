import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

    templateUrl: './user-edit.component.html'
})

export class UserEditComponent implements OnInit {

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

    user: User;
     successMessage: string = '';
     errorMessage: string = '';
    constructor(private fb: FormBuilder,
                private service: UserService,
                private route: ActivatedRoute,
                private router:Router) { }

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
            avatar: ['',, []],
            id: ['',, []]
        });

        //grab the user
        let id = this.route.snapshot.params['id'];
        this.service.getUser(id).subscribe(user => {
                            this.user = user;
                            this.form.patchValue({id: this.user.id});
                            this.form.patchValue({name: this.user.name});
                            this.form.patchValue({phone: this.user.phone});
                            this.form.patchValue({email: this.user.email});
                            this.form.patchValue({avatar: this.user.avatar})                            
                        });
        
        console.log(this.form.value);

        //console.log(this.form);

        //watch for changes and validate
        this.form.valueChanges.subscribe(data => this.validateForm());
         //console.log(this.form.value);
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
    *Update the user
    */
    updateUser() {
         this.successMessage = '';
         this.errorMessage = '';

         this.user = this.form.value;

        this.service.updateUser(this.form.value)
            .subscribe(
            user => {
                this.successMessage = 'User Updated Successfully';
                let id = this.route.snapshot.params['id'];
                this.router.navigate([`/users/${id}`]);
                console.log('User was updated');
            },
            err => {
                this.errorMessage = 'User Could not be updated';
                console.log(err);
            });
    }

    canDeactivate() {
        console.log('I am nevigating away');
         console.log(this.user.name);
          console.log(this.form.value.name);
          if ((this.user.name !== this.form.value.name) ||
              (this.user.phone !== this.form.value.phone) ||
              (this.user.email !== this.form.value.email) ||
              (this.user.avatar !== this.form.value.avatar)){
              return window.confirm('Discard changes ?');
          }
        return true;
    }
}
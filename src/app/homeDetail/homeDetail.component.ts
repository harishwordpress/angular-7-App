import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {  UserService, AuthenticationService } from '@/_services';

@Component({templateUrl: 'homeDetail.component.html'})
export class HomeDetailComponent implements OnInit {
	id: number;
    private sub: any;
    formupdate: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private route: ActivatedRoute
    ) { 
        
    }

    ngOnInit() {
        this.formupdate = this.formBuilder.group({
            fristname: ['', Validators.required],
            lastname:  ['', Validators.required],
            profileimage:  ['', Validators.required],     
            address:this.formBuilder.group({
				        streetaddress: ['', Validators.required],
				        apartmentnumber: ['', Validators.required],
				        city: ['', Validators.required],
				        state: ['', Validators.required],
				        zip:['', Validators.required],
				       }),
            ordertotal:this.formBuilder.group({
				        amountfield: ['', Validators.required],
				        currency: ['', Validators.required],
				       })


        });

       this.sub = this.route.params.subscribe(params => {
           this.id = +params['id'];
       });

       this.getUsers();
    }

    // convenience getter for easy access to form fields
    get f() { return this.formupdate.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formupdate.invalid) {
            return;
        }

        this.loading = true;
        console.log(this.formupdate.value);
        this.userService.update(this.formupdate.value,this.id)
            .pipe(first())
            .subscribe(
                data => {
                    //this.router.navigate(['/login']);
                    this.loading = false;
                },
                error => {
                    this.loading = false;
                });
    }



    private getUsers() {
        this.userService.getById(this.id).pipe(first()).subscribe(users => {
            this.formupdate.patchValue(users);   
        });
    }

    private deleteUser() {
     if(confirm("Are you sure to delete ")) {
        this.userService.delete(this.id).pipe(first()).subscribe(() => {
           
        });
      }
    }
}
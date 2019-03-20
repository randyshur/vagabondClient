
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';
import { EndpointsService } from '../services/endpoints.service';
import { AlertService } from '../services/alert.service';

import { User } from '../models/user'

@Component({
    templateUrl: 'signup.component.html'})

export class SignUpComponent implements OnInit {
   newUser: User;
   signupForm: FormGroup;
   loading = false;
   submitted = false;
   data: any

   constructor(
       private formBuilder: FormBuilder,
       private router: Router,
       private authenticationService: AuthenticationService,
       private endpointsService: EndpointsService,
       private alertService: AlertService
   ) {
       // redirect to home if already logged in

       if (this.authenticationService.currentUserValue) {
         console.log("----currentUserValue---" + this.authenticationService.currentUserValue.token)
           //this.router.navigate(['/']);
       }
   }

   ngOnInit() {
       this.signupForm = this.formBuilder.group({
           username: ['', Validators.required],
           password: ['', [Validators.required, Validators.minLength(6)]],
           firstName: ['', Validators.required],
           lastName: ['', Validators.required],
           email: ['', Validators.required],
           address: ['', Validators.required],
           city: ['', Validators.required],
           state: ['', Validators.required],
           zip: ['', Validators.required],
       });
   }

   // convenience getter for easy access to form fields
   get f() { return this.signupForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.signupForm.invalid) {
           return;
       }

       this.loading = true;

       this.newUser = this.signupForm.value
       
       this.endpointsService.signup(this.newUser)
           .pipe(first())
           .subscribe(
               data => {
                   console.log(data)
                   this.alertService.success('SignUp successful', true);
                   this.newUser=data['sessionToken']
                   console.log(this.newUser);
                   localStorage.setItem('token', data['sessionToken']);
                   localStorage.setItem('admin', data['user'].admin);
                   localStorage.setItem('id', data['user'].id);
                   this.loading = false;
                   this.router.navigate(['/home']);

                //    this.endpointsService.signin(this.newUser)
                //    .pipe(map(user => {
                //      console.log("ere----"  + this.newUser.token)
                //      // login successful if there's a jwt token in the response
                //      if (user && this.newUser.token) {
                //          // store user details and jwt token in local storage to keep user logged in between page refreshes
                //          localStorage.setItem('currentUser', JSON.stringify(user));
                //          //this.currentUserSubject.next(user);
                //      }

                    //  return user;
                     
                    // this.router.navigate(['/user']);

               },
               error => {
                   this.alertService.error(error);
                   this.loading = false;
               })

            }
            
            
               logout() {
                   console.log('logged out')
               }
        }
   

   

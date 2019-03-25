import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { EndpointsService } from '../../services/endpoints.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import { User } from '../../models/user'

@Component({
  selector: 'auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.css']
})
export class AuthSigninComponent implements OnInit {

  public signInForm: FormGroup;
  newUser: User;
  loading = false;
  submitted = false;
  data: any;
  returnUrl: string;

  constructor(
    public snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private endpointsService: EndpointsService,
    private alertService: AlertService
  ) { }

  // initiate component
  public ngOnInit() {
    this.signInForm = new FormGroup({
      username:  new FormControl('', [Validators.required]),
      password:  new FormControl('', [Validators.required]),

    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.signInForm.controls[controlName].hasError(errorName);
  }

  get f() { return this.signInForm.controls; }

  public signIn() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data['user'])
                localStorage.setItem('token', data['sessionToken']);
                localStorage.setItem('admin', data['user'].admin);
                localStorage.setItem('id', data['user'].id);

                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });



  }

}

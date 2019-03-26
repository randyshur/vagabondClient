import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { EndpointsService } from '../../services/endpoints.service';
import { AlertService } from '../../services/alert.service';
import { first } from 'rxjs/operators';
import { User } from '../../models/user'

@Component({
  selector: 'auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  public signUpForm: FormGroup;
  newUser: User;
  loading = false;
  submitted = false;
  data: any

  constructor(
    public snackbar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService,
    private endpointsService: EndpointsService,
    private alertService: AlertService
  ) { }

  // initiate component
  public ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public signUp(form) {

    // right before we submit our form to the server we check if the form is valid
    // if not, we pass the form to the validateform function again. Now with check dirty false
    // this means we check every form field independent of wether it's touched

    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;

    this.newUser = this.signUpForm.value

    this.endpointsService.signup(this.newUser)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          this.alertService.success('SignUp successful', true);
          this.newUser = data['sessionToken']
          console.log(this.newUser);
          localStorage.setItem('token', data['sessionToken']);
          localStorage.setItem('admin', data['user'].admin);
          localStorage.setItem('id', data['user'].id);
          this.loading = false;
          this.snackbar.open('Succesfully submitted a valid form. yay!', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        })

  }

}

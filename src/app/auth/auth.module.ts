import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule, AuthRoutingModule ],
  declarations: [
    AuthSigninComponent,
    AuthSignupComponent,
    AuthSignoutComponent
  ]
})
export class AuthModule {}

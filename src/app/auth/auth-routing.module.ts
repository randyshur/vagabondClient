import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSignoutComponent } from './auth-signout/auth-signout.component';
import { LoginComponent } from './login/login.component';


const authRoutes: Routes = [
  { path: 'authsignup', component: AuthSignupComponent },
  { path: 'authsignin', component: AuthSigninComponent },
  { path: 'authsignout', component: AuthSignoutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }

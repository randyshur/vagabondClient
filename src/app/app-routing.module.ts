import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent} from './admin/admin.component';
import { AuthComponent} from  './auth/auth.component';
import { HomeComponent} from  './home/home.component';
import { ProfileComponent} from './profile/profile.component'

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
 
=======
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'User', component: UserComponent },
  { path: 'landmark', component: LandmarkDisplayComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
>>>>>>> f95670d1624ac32253f23d997b66105c629b9017
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





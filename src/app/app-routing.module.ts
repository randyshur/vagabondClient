import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateComponent } from './state/state.component';


import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

import { StateComponent } from './state/state.component';

import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserComponent },

  { path: 'state', component: StateComponent },


  { path: 'landmark', component: LandmarkDisplayComponent },
=======


  { path: 'landmark', component: LandmarkDisplayComponent },
  { path: 'state', component: StateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
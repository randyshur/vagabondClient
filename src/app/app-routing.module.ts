import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';
import { StateComponent } from './state/state.component';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'User', component: UserComponent },
  { path: 'landmark', component: LandmarkDisplayComponent },
  { path: 'state', component: StateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

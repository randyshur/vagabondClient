import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SignUpComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

import { StateComponent } from './state/state.component';

import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },

  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserComponent },

  { path: 'state', component: StateComponent },

  { path: 'landmark', component: LandmarkDisplayComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

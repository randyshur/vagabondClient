import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





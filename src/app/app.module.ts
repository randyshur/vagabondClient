import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeDisplayComponent } from './home/home-display/home-display.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDisplayComponent } from './profile/profile-display/profile-display.component';
import { CreateComponent } from './profile/create/create.component';
import { EditComponent } from './profile/edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CreatestateComponent } from './state/createstate/createstate.component';
import { EditstateComponent } from './state/editstate/editstate.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeDisplayComponent,
    ProfileComponent,
    ProfileDisplayComponent,
    CreateComponent,
    EditComponent,
    AdminComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    CreatestateComponent,
    EditstateComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

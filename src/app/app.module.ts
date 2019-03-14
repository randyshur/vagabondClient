import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeDisplayComponent } from './home/home-display/home-display.component';
import { ProfileComponent } from './landmark/profile.component';
import { ProfileDisplayComponent } from './landmark/profile-display/profile-display.component';
import { CreateComponent } from './landmark/create/create.component';
import { EditComponent } from './landmark/edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { CreatestateComponent } from './state/createstate/createstate.component';
import { EditstateComponent } from './state/editstate/editstate.component';
import { StateComponent } from './state/state.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

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
    CreatestateComponent,
    EditstateComponent,
    StateComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

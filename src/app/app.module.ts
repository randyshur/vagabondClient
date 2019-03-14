import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { StateComponent, StateComponentUpdate } from './state/state.component';

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
    StateComponent,
    StateComponentUpdate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  entryComponents: [
   StateComponent,
   StateComponentUpdate
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

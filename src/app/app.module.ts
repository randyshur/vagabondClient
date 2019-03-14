import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule} from '@angular/router';
import { EndpointsService } from './services/endpoints.service';
import { HttpClientModule } from '@angular/common/http';

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

import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { StateComponent } from './state/state.component';
import { StateComponentUpdate } from './state/state.component';
import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkCreateComponent } from './landmark-create/landmark-create.component';

import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeDisplayComponent,
    LandmarkDisplayComponent,
    AdminComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    StateComponent,
    LandmarkEditComponent,
    LandmarkCreateComponent,

    StateComponent,
    StateComponentUpdate

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatGridListModule,
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
  providers: [EndpointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { EndpointsService } from './services/endpoints.service';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

import { StateComponent, StateComponentUpdate } from './state/state.component';
import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkCreateComponent } from './landmark-create/landmark-create.component';

import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeDisplayComponent,

    AdminComponent,

    SignUpComponent,
    SignInComponent,
    UserComponent,

    LandmarkDisplayComponent,
    LandmarkEditComponent,
    LandmarkCreateComponent,

    StateComponent,
    StateComponentUpdate,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
    StateComponentUpdate,
  ],
  providers: [EndpointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

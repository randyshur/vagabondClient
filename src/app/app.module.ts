
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeDisplayComponent } from './home/home-display/home-display.component';

import { AdminComponent } from './admin/admin.component';

import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

import { StateComponent, StateComponentUpdate } from './state/state.component';

import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkCreateComponent } from './landmark-create/landmark-create.component';
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';
import { LandmarkService } from './services/landmark.service';
import { EndpointsService } from './services/endpoints.service';

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

    StateComponent,
    StateComponentUpdate,

    LandmarkEditComponent,
    LandmarkDisplayComponent,
    LandmarkCreateComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,

    AppRoutingModule,

  ],
  entryComponents: [
    StateComponent,
    StateComponentUpdate
  ],
  providers: [LandmarkService, EndpointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
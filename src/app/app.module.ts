import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import { StateComponent, StateComponentUpdate } from './state/state.component';
import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkDisplayComponent, CreateDialog, UpdateDialog } from './landmark-display/landmark-display.component';
import { LandmarkService } from './services/landmark.service';
import { EndpointsService } from './services/endpoints.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';

import { AdminModule }  from './admin/admin.module';
import { AuthModule }              from './auth/auth.module';
import { HomeService } from './services/home.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './services/user.service';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    StateComponent,
    StateComponentUpdate,
    LandmarkEditComponent,
    LandmarkDisplayComponent,
    CreateDialog,
    UpdateDialog
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
    MatToolbarModule,
    MatNativeDateModule,
    AuthModule,
    AdminModule,
    AppRoutingModule

  ],
  entryComponents: [
    StateComponent,
    StateComponentUpdate,
    LandmarkDisplayComponent,
    CreateDialog,
    UpdateDialog
  ],
  providers: [LandmarkService, EndpointsService, AuthenticationService, AlertService, HomeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

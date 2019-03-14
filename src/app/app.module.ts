
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatToolbarModule} from '@angular/material/toolbar';
=======


import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
>>>>>>> f95670d1624ac32253f23d997b66105c629b9017
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeDisplayComponent } from './home/home-display/home-display.component';
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';

import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


import { AdminComponent } from './admin/admin.component';
import { CreatestateComponent } from './state/createstate/createstate.component';
import { EditstateComponent } from './state/editstate/editstate.component';
import { StateComponent } from './state/state.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

import { CreatestateComponent } from './state/createstate/createstate.component';
import { EditstateComponent } from './state/editstate/editstate.component';

import { StateComponent } from './state/state.component';
import { StateComponentUpdate } from './state/state.component';
import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkCreateComponent } from './landmark-create/landmark-create.component';
import {MatGridListModule} from '@angular/material/grid-list';



import { StateComponent, StateComponentUpdate } from './state/state.component';



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

    CreatestateComponent,
    EditstateComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent
    CreatestateComponent,
    EditstateComponent,

    LandmarkEditComponent,
    LandmarkCreateComponent,
    StateComponent,
    StateComponentUpdate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatToolbarModule,
=======

    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatGridListModule,

    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

    RouterModule,
    HttpClientModule,
    MatGridListModule

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
>>>>>>> f95670d1624ac32253f23d997b66105c629b9017
  ],
  providers: [EndpointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

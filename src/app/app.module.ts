import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { EndpointsService } from './services/endpoints.service';
import { HttpClientModule } from '@angular/common/http';
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
import { CreatestateComponent } from './state/createstate/createstate.component';
import { EditstateComponent } from './state/editstate/editstate.component';
import { StateComponent } from './state/state.component';
import { LandmarkEditComponent } from './landmark-edit/landmark-edit.component';
import { LandmarkCreateComponent } from './landmark-create/landmark-create.component';

import {MatGridListModule} from '@angular/material/grid-list';


// const routes: Routes = [
//   { path: 'landmark', component: LandmarkDisplayComponent }
// ]

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
    CreatestateComponent,
    EditstateComponent,
    StateComponent,
    LandmarkEditComponent,
    LandmarkCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatGridListModule
   
  ],
  providers: [EndpointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminStatesComponent, CreateStateDialog, UpdateStateDialog } from './admin-states/admin-states.component';
import { AdminLandmarksComponent, ALCreateDialog, UpdateDialog } from './admin-landmarks/admin-landmarks.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatNativeDateModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminStatesComponent,
    AdminLandmarksComponent,
    ALCreateDialog,
    CreateStateDialog,
    UpdateDialog,
    UpdateStateDialog
  ],
  entryComponents: [
    ALCreateDialog,
    CreateStateDialog,
    UpdateDialog,
    UpdateStateDialog
  ],
})
export class AdminModule { }

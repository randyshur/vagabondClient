import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent }           from './admin/admin.component';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent }    from './admin-users/admin-users.component';
import { AdminStatesComponent }    from './admin-states/admin-states.component';
import { AdminLandmarksComponent }    from './admin-landmarks/admin-landmarks.component';

import { AdminRoutingModule }       from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminStatesComponent,
    AdminLandmarksComponent
  ]
})
export class AdminModule {}

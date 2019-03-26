import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }    from './admin/admin.component';
import { AdminDashboardComponent }    from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent }    from './admin-users/admin-users.component';
import { AdminStatesComponent }    from './admin-states/admin-states.component';
import { AdminLandmarksComponent }    from './admin-landmarks/admin-landmarks.component';

import { AdminGuard }                from './admin.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: 'adminusers', component: AdminUsersComponent },
          { path: 'adminstates', component: AdminStatesComponent },
          { path: 'adminlandmarks', component: AdminLandmarksComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }    from './admin/admin.component';
import { AdminDashboardComponent }    from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent }    from './admin-users/admin-users.component';
import { AdminStatesComponent }    from './admin-states/admin-states.component';
import { AdminLandmarksComponent }    from './admin-landmarks/admin-landmarks.component';

import { AuthGuard }                from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'users', component: AdminUsersComponent },
          { path: 'states', component: AdminStatesComponent },
          { path: 'landmarks', component: AdminLandmarksComponent },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';

const routes: Routes = [
  { path: 'landmark', component: LandmarkDisplayComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

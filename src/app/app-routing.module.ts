import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandmarkDisplayComponent } from './landmark-display/landmark-display.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  { path: 'landmark', component: LandmarkDisplayComponent },
  { path: 'state', component: StateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

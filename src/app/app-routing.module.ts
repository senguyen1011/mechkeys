import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MechListComponent } from './mech-list/mech-list.component';
import { MechDetailComponent } from './mech-detail/mech-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/mech', pathMatch: 'full' },
  { path: 'mech', component: MechListComponent },
  { path: 'detail/:name', component: MechDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
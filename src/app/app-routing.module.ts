import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisitorsComponent } from './visitors/visitors.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'visitors', component: VisitorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTimeComponent } from './user-time/user-time.component';
import { TimeWindowComponent } from './time-window/time-window.component';
import { ProhibitedAppsComponent } from './prohibited-apps/prohibited-apps.component';

const routes: Routes = [
  { path: 'user-time', component: UserTimeComponent },
  { path: 'time-window', component: TimeWindowComponent },
  { path: 'prohibited-apps', component: ProhibitedAppsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
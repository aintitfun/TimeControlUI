import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTimeComponent } from './user-time/user-time.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { TimeWindowComponent } from './time-window/time-window.component';
import { ProhibitedAppsComponent } from './prohibited-apps/prohibited-apps.component';
import { LogoutNowComponent } from './logout-now/logout-now.component';


@NgModule({
  declarations: [
    AppComponent,
    UserTimeComponent,
    MenuComponent,
    TimeWindowComponent,
    ProhibitedAppsComponent,
    LogoutNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

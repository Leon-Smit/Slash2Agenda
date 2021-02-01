import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentComponent } from './appointment-list/appointment/appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    AppointmentComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

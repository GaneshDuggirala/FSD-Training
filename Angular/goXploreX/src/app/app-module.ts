import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/user/home/home';
import { Dashboard } from './components/admin/dashboard/dashboard';
import { Addactivity } from './components/admin/addactivity/addactivity';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Adminview } from './components/admin/adminview/adminview';
import { Login } from './components/login/login';
import { Navbar } from './components/user/navbar/navbar';
import { Usersactivites } from './components/user/usersactivites/usersactivites';
import { Usersevents } from './components/user/usersevents/usersevents';
import { Allusercomponents } from './components/user/allusercomponents/allusercomponents';
import { Activitydetails } from './components/user/activitydetails/activitydetails';
import { Booking } from './components/user/booking/booking';
import { Addevents } from './components/admin/addevents/addevents';
import { Viewevents } from './components/admin/viewevents/viewevents';
import { Eventdetails } from './components/user/eventdetails/eventdetails';
import { Eventbooking } from './components/user/eventbooking/eventbooking';
import { Footer } from './components/user/footer/footer';

@NgModule({
  declarations: [
    App,
    Home,
    Dashboard,
    Addactivity,
    Adminview,
    Login,
    Navbar,
    Usersactivites,
    Usersevents,
    Allusercomponents,
    Activitydetails,
    Booking,
    Addevents,
    Viewevents,
    Eventdetails,
    Eventbooking,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

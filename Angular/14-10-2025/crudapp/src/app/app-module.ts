import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Loginpage } from './loginpage/loginpage';
import { Dashboard } from './dashboard/dashboard';
import { Addproducts } from './addproducts/addproducts';
import { Viewproducts } from './viewproducts/viewproducts';
import { Manageproducts } from './manageproducts/manageproducts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Loginpage,
    Dashboard,
    Addproducts,
    Viewproducts,
    Manageproducts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Herosection } from './components/herosection/herosection';

const routes: Routes = [
  {path: '', component: Login},
  {path:'home', component:Herosection},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

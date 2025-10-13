import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginpage } from './components/loginpage/loginpage';
import { Loadproducts } from './components/loadproducts/loadproducts';

const routes: Routes = [
  { path:'',component: Loginpage},
  {
    path:'products',component: Loadproducts
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

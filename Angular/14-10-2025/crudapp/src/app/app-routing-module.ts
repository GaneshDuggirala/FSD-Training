import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Dashboard } from './dashboard/dashboard';
import { Viewproducts } from './viewproducts/viewproducts';
import { Addproducts } from './addproducts/addproducts';
import { Manageproducts } from './manageproducts/manageproducts';

const routes: Routes = [
  {path:'',component:Loginpage},
  {
    path:'dashboard',component:Dashboard,
    children:[
      {path:'view',component:Viewproducts},
      {path:'add',component:Addproducts},
      {path:'manage',component:Manageproducts}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/admin/dashboard/dashboard';
import { Addactivity } from './components/admin/addactivity/addactivity';
import { Adminview } from './components/admin/adminview/adminview';
import { Login } from './components/login/login';
import { Home } from './components/user/home/home';
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

const routes: Routes = [
  {path:'',component:Login},
  {path :'display',component:Allusercomponents,
    children:[
      {path :'home',component:Home},
      {path:'useractivities',component:Usersactivites},
      {path:'userevents',component:Usersevents},
      {path:'activitydetails/:aid',component:Activitydetails},
      {path:'booking/:aid',component:Booking},
      {path:'eventdetails/:eid',component:Eventdetails},
      {path:'eventbooking/:eid',component:Eventbooking}
      // {path:'footer',component:Footer}
    ]
  },
  {path:'dashboard',component:Dashboard,
    children:[
      {path:'addactivity', component:Addactivity},
      {path:'viewactivity', component:Adminview},
      {path:'addevent',component:Addevents},
      {path:'viewevent',component:Viewevents}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

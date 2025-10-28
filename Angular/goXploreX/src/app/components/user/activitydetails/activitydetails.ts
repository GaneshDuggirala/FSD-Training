import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from '../../../services/activities';

@Component({
  selector: 'app-activitydetails',
  standalone: false,
  templateUrl: './activitydetails.html',
  styleUrl: './activitydetails.css'
})
export class Activitydetails {
  constructor(private route: ActivatedRoute,private activity:Activities,private router:Router) {}
  activityId:any;
  pageactivity:any;
  ngOnInit(){
    this.activityId=this.route.snapshot.paramMap.get('aid');
    this.pageactivity=this.activity.getActivityDetials(this.activityId)
  }

  booking(aid:any){
    this.router.navigateByUrl(`/display/booking/${aid}`)
  }
}

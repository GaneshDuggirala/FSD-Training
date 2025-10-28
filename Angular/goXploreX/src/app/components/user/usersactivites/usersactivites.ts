import { Component } from '@angular/core';
import { Activities } from '../../../services/activities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersactivites',
  standalone: false,
  templateUrl: './usersactivites.html',
  styleUrl: './usersactivites.css',
})
export class Usersactivites {
  constructor(private activity: Activities, private route:Router) {}
  allActivites: any;
  ngOnInit() {
    this.activity.getActivities().subscribe((data: any) => {
      this.allActivites = data;
      console.log(this.allActivites);
    });
  }

  activitydetails(aid: any) {
    this.route.navigateByUrl(`/display/activitydetails/${aid}`);
  }
}

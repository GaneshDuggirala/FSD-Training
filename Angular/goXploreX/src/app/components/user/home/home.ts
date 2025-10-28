import { Component } from '@angular/core';
import { Activities } from '../../../services/activities';
import { Router } from '@angular/router';
import { Events } from '../../../services/events';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private activity: Activities, private route: Router,private event:Events) {}
  allActivites: any;
  allEvents:any;
  ngOnInit() {
    this.activity.getActivities().subscribe((data: any) => {
      this.allActivites = data;
    });
    this.event.getEvents().subscribe((data: any) => {
      this.allEvents = data;
    });
  }

  activitydetails(aid: any) {
    this.route.navigateByUrl(`/display/activitydetails/${aid}`);
  }

  eventdetails(eid: any) {
    this.route.navigateByUrl(`/display/eventdetails/${eid}`);
  }

  booking(aid: any) {
    this.route.navigateByUrl(`/display/booking/${aid}`);
  }

  eventbooking(eid: any) {
    this.route.navigateByUrl(`/display/eventbooking/${eid}`);
  }
}

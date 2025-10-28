import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from '../../../services/activities';
import { Events } from '../../../services/events';

@Component({
  selector: 'app-eventdetails',
  standalone: false,
  templateUrl: './eventdetails.html',
  styleUrl: './eventdetails.css',
})
export class Eventdetails {
  constructor(
    private route: ActivatedRoute,
    private eve: Events,
    private router: Router
  ) {}
  eventId: any;
  pageevent: any;
  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eid');
    this.pageevent = this.eve.getEventDetials(this.eventId);
  }

  eventbooking(eid: any) {
    this.router.navigateByUrl(`/display/eventbooking/${eid}`);
  }
}

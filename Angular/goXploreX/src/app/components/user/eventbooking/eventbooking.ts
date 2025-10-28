import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../../../services/events';

@Component({
  selector: 'app-eventbooking',
  standalone: false,
  templateUrl: './eventbooking.html',
  styleUrls: ['./eventbooking.css'],
})
export class Eventbooking {
  constructor(private route: ActivatedRoute, private event: Events,private router:Router) {}
  eventId: any;
  bookingevent: any;
  count = 0;
  total=0;
  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eid');
    this.bookingevent = this.event.getEventDetials(this.eventId);
  }

  sub() {
    this.count = this.count - 1;
    this.total = this.bookingevent.price * this.count;
  }
  add() {
    this.count = this.count + 1;
    this.total = this.bookingevent.price * this.count;
  }

  paymentdone() {
    if(this.count>=1){
      alert('Payment done. Your Tickets will be forwaded in message and Email.')
      this.router.navigateByUrl('/display/home')
    }
    else{
      alert('Check Properly')
    }
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from '../../../services/activities';


@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {
  constructor(private route: ActivatedRoute, private activity: Activities,private router:Router) {}
  activityId: any;
  bookingactivity: any;
  count = 0;
  total=0;
  ngOnInit() {
    this.activityId = this.route.snapshot.paramMap.get('aid');
    this.bookingactivity = this.activity.getActivityDetials(this.activityId);
  }

  sub() {
    this.count = this.count - 1;
    this.total = this.bookingactivity.price * this.count;
  }
  add() {
    this.count = this.count + 1;
    this.total = this.bookingactivity.price * this.count;
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

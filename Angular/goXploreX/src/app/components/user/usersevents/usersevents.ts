import { Component } from '@angular/core';
import { Events } from '../../../services/events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersevents',
  standalone: false,
  templateUrl: './usersevents.html',
  styleUrl: './usersevents.css'
})
export class Usersevents {

  constructor(private eve:Events,private route:Router){}

  allEvents:any;

  ngOnInit(){
    this.eve.getEvents().subscribe((data:any)=>{
      this.allEvents=data
    })
  }

  eventdetails(eid: any) {
    this.route.navigateByUrl(`/display/eventdetails/${eid}`);
  }
}

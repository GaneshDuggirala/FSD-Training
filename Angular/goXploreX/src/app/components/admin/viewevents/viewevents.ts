import { Component } from '@angular/core';
import { Events } from '../../../services/events';

@Component({
  selector: 'app-viewevents',
  standalone: false,
  templateUrl: './viewevents.html',
  styleUrl: './viewevents.css'
})
export class Viewevents {
    constructor(private eve:Events){}
  
    allEvents:any;
  
    ngOnInit(){
      this.eve.getEvents().subscribe((data:any)=>{
        this.allEvents=data
      })
    }

      returning: any;
  deleteEvent(eventid: any) {
    this.returning = this.eve.deleteEvent(eventid);

    let activ = JSON.parse(sessionStorage.getItem('activites') || '[]');
    activ = activ.filter((i: any) => i.id != eventid);
    sessionStorage.setItem('activites', JSON.stringify(activ));
    alert(this.returning);
  }

  updating = {
    id: '',
    city: '',
    name: '',
    price: '',
    image: '',
    gallery: ([] = []),
    description: '',
    rating: '',
    directions: '',
  };

  updateEvent(htmlevent: any) {
    this.updating = { ...htmlevent };
  }

  submitEvent() {
    this.eve.updateEvent(this.updating);
  }
}

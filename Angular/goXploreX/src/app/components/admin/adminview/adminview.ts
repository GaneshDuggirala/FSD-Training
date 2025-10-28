import { Component } from '@angular/core';
import { Activities } from '../../../services/activities';

@Component({
  selector: 'app-adminview',
  standalone: false,
  templateUrl: './adminview.html',
  styleUrl: './adminview.css',
})
export class Adminview {
  constructor(private activity: Activities) {}
  allActivites: any;
  ngOnInit() {
    this.activity.getActivities().subscribe((data: any) => {
      this.allActivites = data;

      console.log(this.allActivites);
    });
  }
  returning: any;
  deleteActivity(activityid: any) {
    this.returning = this.activity.deleteActivity(activityid);

    let activ = JSON.parse(sessionStorage.getItem('activites') || '[]');
    activ = activ.filter((i: any) => i.id != activityid);
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
    category: '',
  };

  updateActivity(htmlactivity: any) {
    this.updating = { ...htmlactivity };
  }

  submitActivity() {
    this.activity.updateActivity(this.updating);
  }
}

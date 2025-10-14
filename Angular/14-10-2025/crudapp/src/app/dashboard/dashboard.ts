import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  userData: any;
  constructor(private router:Router){}

  ngOnInit(){
    let data = localStorage.getItem('loggedin');
    if (data) {
      this.userData = JSON.parse(data);
    }
    else{
      this.router.navigateByUrl("")
    }
  }

  logout(){
    localStorage.removeItem('loggedin')
    this.router.navigateByUrl("")

  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router:Router){}
  ngOnInit(){
    // let details = JSON.parse(localStorage.getItem('admindetails'))
    if(!localStorage.getItem('admindetails')){
      this.router.navigateByUrl("")
    }
  }

  adminlogout(){
    localStorage.removeItem('admindetails')
    this.router.navigateByUrl("")
  }
}

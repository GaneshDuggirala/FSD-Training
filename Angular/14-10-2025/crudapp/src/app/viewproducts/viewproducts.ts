import { Component } from '@angular/core';
import { Productservices } from '../services/productservices';

@Component({
  selector: 'app-viewproducts',
  standalone: false,
  templateUrl: './viewproducts.html',
  styleUrl: './viewproducts.css'
})
export class Viewproducts {
  alllaptops:any;
  constructor(private pro:Productservices){}

  ngOnInit(){
    this.pro.getProducts().subscribe((data:any)=>{
      this.alllaptops=data
    })
  }
}

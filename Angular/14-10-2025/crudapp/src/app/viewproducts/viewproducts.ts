import { Component } from '@angular/core';
import { products } from '../services/products';
import { productservices } from '../services/productservices';

@Component({
  selector: 'app-viewproducts',
  standalone: false,
  templateUrl: './viewproducts.html',
  styleUrl: './viewproducts.css'
})
export class Viewproducts {
  alllaptops:any;
  constructor(private pro:productservices){}

  ngOnInit(){
    this.pro.getProducts().subscribe((data:any)=>{
      this.alllaptops=data
    })
  }
}

import { Component } from '@angular/core';
import { Products } from '../../services/products';

@Component({
  selector: 'app-loadproducts',
  standalone: false,
  templateUrl: './loadproducts.html',
  styleUrl: './loadproducts.css'
})
export class Loadproducts {
  constructor(private p:Products){
  }
 allproducts :any;
  ngOnInit(){
    this.p.getProducts().subscribe((data:any)=>{
      this.allproducts=data
      console.log(this.allproducts)
    })
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { products } from '../services/products';
import { productservices } from '../services/productservices';

@Component({
  selector: 'app-addproducts',
  standalone: false,
  templateUrl: './addproducts.html',
  styleUrl: './addproducts.css',
})
export class Addproducts {
  addform: FormGroup = new FormGroup('');
  servicesreturn:any;

  constructor(private fb: FormBuilder, private router: Router,private adp:Productservices) {
    this.addform = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productDescription: ['', Validators.required],
      productImage: ['', Validators.required]
    });
  }

  addProduct(){
    this.servicesreturn=this.adp.addProducts(this.addform.value)
    alert(this.servicesreturn)
    this.addform.reset()
  }
}

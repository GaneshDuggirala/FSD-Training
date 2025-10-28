import { Component } from '@angular/core';

@Component({
  selector: 'app-manageproducts',
  standalone: false,
  templateUrl: './manageproducts.html',
  styleUrl: './manageproducts.css',
})
export class Manageproducts {
  alllaptops: any;
  constructor(private pro: Productservices) {}

  ngOnInit() {
    this.pro.getProducts().subscribe((data: any) => {
      this.alllaptops = data;
    });
  }
}

import { Injectable } from '@angular/core';
import { products } from './products';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productservices {
  allProducts: products[] = [
    {
      productId: '1',
      productName: 'HP Pavilion 14',
      productPrice: '70000',
      productDescription: 'Student laptop',
      productImage: 'https://tanphat.com.vn/media/product/3152_hp_pavilion_14.jpg',
    },
    {
      productId: '2',
      productName: 'Lenovo Ideapad',
      productPrice: '65000',
      productDescription: 'Student laptop',
      productImage: 'https://p1-ofp.static.pub/medias/26817085025_IdeaPad_Slim_5i_14_10_Luna_Grey_202411060300241738438702700.png',
    },
  ];


  getProducts(){
    return of(this.allProducts)
  }

  addProducts(laptop:any){
    this.allProducts.push(laptop)
    return "Product Added Successfully!!!"
  }
}

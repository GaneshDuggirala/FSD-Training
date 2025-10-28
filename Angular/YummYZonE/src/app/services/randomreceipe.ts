import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Randomreceipe {
  constructor(private http: HttpClient) {}
  // random: any;

  getRandomRecipe() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }
}

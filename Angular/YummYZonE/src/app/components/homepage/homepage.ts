import { Component } from '@angular/core';
import { Randomreceipe } from '../../services/randomreceipe';
import { HttpClient } from '@angular/common/http';
// In homepage.ts or main.ts
import 'animate.css/animate.min.css';



@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'], // ✅ corrected
})
export class Homepage {
  randomMeal: any;       // single random recipe
  randomMeals: any[] = []; // array of meals for featured section

  constructor(private rand: Randomreceipe, private http: HttpClient) {}

  ngOnInit() {
    // Random Recipe of the Day
    this.rand.getRandomRecipe().subscribe((data: any) => {
      this.randomMeal = data.meals[0]; // single meal
      console.log('Random Meal:', this.randomMeal);
    });

    // Featured Recipes Grid
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .subscribe(
        (data: any) => {
          if (data && data.meals) {
            this.randomMeals = data.meals; // array of meals
          }
        },
        (error) => {
          console.error('Error fetching meals', error);
        }
      );
  }
}

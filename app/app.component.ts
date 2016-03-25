import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <div class="page-header">
      <h1>Daily Food Log <small>Click a food for details</small></h1>
    </div>
    <meal-list [mealList]="meals"></meal-list>
  </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Bagel", "Plain bagel with cream cheese", 450, 0),
      new Meal("Orange", "Small mandarin orange for a snack", 37, 1),
      new Meal("Chips", "Small bag of deep fried potatoes", 37, 2),
      new Meal("Kombucha", "14 oz., refreshing, delicous", 37, 3),
      new Meal("Sangwich", "Turkey with cheese", 140, 4),
      new Meal("Spaghetti", "Breakfast, lunch, or dinner. Always delicous, always covered in cheese.", 800, 5)
    ]
  }
}

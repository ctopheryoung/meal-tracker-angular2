import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"
  [meal]="currentMeal">
  </meal-display>
  `
})
export class MealListComponent {
}

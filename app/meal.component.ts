import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
      <p class="meal-item">{{ meal.name }}</p>
  `
})
export class MealComponent {
  public meal: Meal;
}

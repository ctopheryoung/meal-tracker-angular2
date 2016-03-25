import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-details">
      <h3>Details: {{ meal.name }}, {{ meal.details }}, {{ meal.calories }}</h3>
    </div>
  `
})

export class MealDetailsComponent {
  public task: Meal;
}

import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{ meal.name }}</h3>
      </div>
      <div class="panel-body">
        <p>{{ meal.details }}</p>
        <p>Calories: {{ meal.calories }}</p>
        <button class="btn btn-warning btn-sm">Edit Meal</button>
      </div>
    </div>
  `
})

export class MealDetailsComponent {
  public task: Meal;
}

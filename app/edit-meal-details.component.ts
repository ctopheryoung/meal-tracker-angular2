import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="form-inline">
      <h3>Edit Details for {{ meal.name }}:</h3>
      <label>Meal details:</label>
      <input [(ngModel)]="meal.details" type="text-area" class="form-control">
      <label>Meal Calories:</label>
      <input [(ngModel)]="meal.calories" type="number" class="form-control">
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}

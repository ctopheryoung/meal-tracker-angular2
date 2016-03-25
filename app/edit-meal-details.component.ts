import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h3>Edit Selected {{ meal.name }} Details:</h3>
      <input [(ngModel)]="meal.details" type="text-area" class="form-control">
      <input [(ngModel)]="meal.calories" type="number" class="form-control">
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}

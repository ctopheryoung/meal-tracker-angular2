import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  outputs: ["onEditDetailsClick"],
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{ meal.name }}</h3>
      </div>
      <div class="panel-body">
        <p>{{ meal.details }}</p>
        <p>Calories: {{ meal.calories }}</p>
        <button (click)="editDetails(meal)" class="btn btn-warning btn-sm">Edit Meal</button>
      </div>
    </div>
  `
})

export class MealDetailsComponent {
  public onEditDetailsClick: EventEmitter<Meal>;
  constructor() {
    this.onEditDetailsClick = new EventEmitter();
  }
  editDetails(meal: Meal){
    this.onEditDetailsClick.emit(meal);
  }
}

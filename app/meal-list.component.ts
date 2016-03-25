import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, MealDetailsComponent],
  template: `
    <div class="row">
      <div class="col-sm-3">
        <meal-display *ngFor="#currentMeal of mealList"
        (click)="mealClicked(currentMeal)"
        [meal]="currentMeal">
        </meal-display>
      </div>
      <div class="col-sm-3 col-sm-offset-3">
        <meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></meal-details>
      </div>
    </div>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(userInput): void {
    this.mealList.push(
      new Meal(userInput[0], userInput[1], userInput[2], this.mealList.length)
    )
  }
}

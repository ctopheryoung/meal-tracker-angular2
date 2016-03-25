import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { MealCaloriePipe } from './meal-calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, MealDetailsComponent, EditMealDetailsComponent],
  pipes: [MealCaloriePipe],
  template: `
    <div class="row">

      <div class="form-inline">
        <label>Filter:</label>
        <select class="form-control filter" (change)="onChange($event.target.value)">
          <option value="all" selected="selected">All Foods</option>
          <option value="low">300 calories or less</option>
          <option value="notLow">300 calories or more</option>
        </select>
      </div>
      <div class="col-sm-4 col-sm-offset-1">
        <meal-display *ngFor="#currentMeal of mealList
        | calories:filterCalorieLevel"
        (click)="mealClicked(currentMeal)"
        [meal]="currentMeal">
        </meal-display>
      </div>
      <div class="col-sm-3 col-sm-offset-1">
        <meal-details
          *ngIf="selectedMeal"
          [meal]="selectedMeal"
          (onEditDetailsClick)="taskEditClicked($event)">
        </meal-details>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
      </div>
      <div class="col-sm-6">
        <edit-meal-details *ngIf="mealToEdit" [meal]="mealToEdit"></edit-meal-details>
      </div>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public mealToEdit: Meal;
  public filterCalorieLevel: string;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  taskEditClicked(selectedMeal: Meal): void {
    this.mealToEdit = selectedMeal;
  }
  createMeal(userInput): void {
    this.mealList.push(
      new Meal(userInput[0], userInput[1], userInput[2], this.mealList.length)
    )
  }
  onChange(filterOption) {
    this.filterCalorieLevel = filterOption;
  }
}

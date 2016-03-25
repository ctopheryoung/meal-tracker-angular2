import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form col-sm-8">
      <h3>Add a Food:</h3>
      <input placeholder="Meal Name" type="text" class="form-control" #newName>
      <input placeholder="Details" type="text-area" class="form-control" #newDetails>
      <input placeholder="Calories" type="number" class="form-control" #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-success add-button">Save</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([newName.value, newDetails.value, newCalories.value]);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}

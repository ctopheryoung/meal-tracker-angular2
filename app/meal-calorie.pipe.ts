import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model.ts';

@Pipe({
  name: "calories",
  pure: false
})

export class MealCaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalorieLevel = args[0];
    if(desiredCalorieLevel === "low") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if(desiredCalorieLevel === "notLow") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}

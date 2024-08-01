import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nutritionEntry = {
    date: '',
    food: '',
    portionSize: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    meal: ''
  };

  
  newNutrition = { ...this.nutritionEntry };

  
  nutritionData: typeof this.nutritionEntry[] = [];

  
  addNutrition() {
    if (this.isNutritionValid(this.newNutrition)) {
      
      this.nutritionData.push({ ...this.newNutrition });

      
      this.newNutrition = { ...this.nutritionEntry };
    } else {
     
      alert('Please fill in all required fields.');
    }
  }

 
  removeNutrition(index: number) {
    if (index > -1) {
      this.nutritionData.splice(index, 1);
    }
  }


  private isNutritionValid(nutrition: typeof this.nutritionEntry) {
    return nutrition.date && nutrition.food && nutrition.portionSize &&
           nutrition.calories != null && nutrition.protein != null &&
           nutrition.carbs != null && nutrition.fat != null && nutrition.meal;
  }
}

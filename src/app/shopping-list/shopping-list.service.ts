import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Dummy Ingredient", 3),
        new Ingredient("Yummy Dummy Ingredient", 1)
      ];

      getIngrediants()
      {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line: max-line-length
            new Recipe('Shakshuka', 'This is an shakshuka recipe', 'https://prods3.imgix.net/images/articles/2017_04/Non-featured-Chorizo-egg-recipe.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=750',
            [
                new Ingredient('Egg', 3),
                new Ingredient('Tomato', 5),
            ]),
        // tslint:disable-next-line: max-line-length
            new Recipe('Strawberry Mouse Recipe', 'This is a Strawberry Mouse recipe', 'https://i.ytimg.com/vi/XFW74wMJ7Ok/hqdefault.jpg',
            [
                new Ingredient('Strawberries', 10),
                new Ingredient('Cream', 2),
                new Ingredient('Cookies', 1)
            ])
          ];

          constructor(private slService:ShoppingListService){}

          getRecipes(){
              return this.recipes.slice(); // Clone
          }

          addIngredientsToShoppingList(ingredients: Ingredient[]){
              this.slService.addIngredients(ingredients);
          }
        }
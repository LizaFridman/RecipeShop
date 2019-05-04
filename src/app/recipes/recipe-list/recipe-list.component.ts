import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
// tslint:disable-next-line: max-line-length
    new Recipe('Dummy Recipe', 'This is an example recipe', 'https://prods3.imgix.net/images/articles/2017_04/Non-featured-Chorizo-egg-recipe.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=750'),
// tslint:disable-next-line: max-line-length
    new Recipe('Second Dummy Recipe', 'This is a second example recipe', 'https://i.ytimg.com/vi/XFW74wMJ7Ok/hqdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}

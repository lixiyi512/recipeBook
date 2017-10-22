import { Recipe } from './recipe.model';
import {Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Grilled Salmon',
      'A super-tasty dish - just awesome!',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Lemon', 2),
        new Ingredient('thyme', 5)
      ]),
    new Recipe('Double Cooked Pork Belly',
      'What else you need to say?',
      'https://www.spicetheplate.com/wp-content/uploads/2016/07/Double-cooked-pork_-7.jpg',
      [
        new Ingredient('Pork Belly', 3),
        new Ingredient('Green Onion', 5),
        new Ingredient('Green Pepper', 1),
        new Ingredient('Sauce', 1)
      ])
  ];
  constructor(private slService: ShoppingListService) {}
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

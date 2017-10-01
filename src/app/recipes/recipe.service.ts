import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){};
    
    private recipes : Recipe[] = [
        new Recipe(
            'A Test', 
            'This is a test', 
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [ 
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'A Test 2', 
            'This is a test 2', 
            'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',
            [ 
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
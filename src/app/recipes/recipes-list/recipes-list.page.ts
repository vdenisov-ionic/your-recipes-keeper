import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from 'src/app/@core/recipe.model';
import { RecipesService } from 'src/app/@core/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(
    private router: Router,
    private recipesService: RecipesService,
  ) { }

  ngOnInit() {
    console.warn('*** [recipes-list] OnInit');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ngOnDestroy() {
    console.warn('*** [recipes-list] OnDestroy');
  }

  public onSelectRecipe(recipeId: string): void {
    this.router.navigate([`/recipes/${recipeId}`]);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
  ) { }

  ngOnInit() {
    console.warn('[recipe-detail] OnInit');
    const recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');
    this.loadedRecipe = this.recipesService.getRecipe(recipeId);
  }

  ngOnDestroy() {
    console.warn('[recipe-detail] OnDestroy');
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Recipe } from 'src/app/@core/recipe.model';
import { RecipesService } from 'src/app/@core/recipes.service';

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
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    console.warn('*** [recipe-detail] OnInit');

    const recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');
    if (!recipeId) { this.router.navigate(['/recipes']); }

    this.loadedRecipe = this.recipesService.getRecipe(recipeId);
  }

  ngOnDestroy() {
    console.warn('*** [recipe-detail] OnDestroy');
  }

  public onDeleteRecipe(): void {
    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          { text: 'Delete', handler: () => this._deleteRecipe() }
        ],
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  public onReturnBack(): void {
    this.router.navigate(['/recipes']);
  }

  private _deleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }
}

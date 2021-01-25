import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

import { Recipe } from 'src/app/@core/recipe.model';
import { RecipesService } from 'src/app/@core/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  public loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private alertController: AlertController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    console.log('*** [recipe-detail] OnInit');
    const recipeId = this.activatedRoute.snapshot.paramMap.get('recipeId');
    this.loadedRecipe = this.recipesService.getRecipe(recipeId);
  }

  ngOnDestroy() {
    console.log('*** [recipe-detail] OnDestroy');
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
    // this.router.navigate(['/recipes']);
    this.navCtrl.navigateRoot(`/recipes`);
  }

  private _deleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    // this.router.navigate(['/recipes']);
    this.navCtrl.navigateRoot(`/recipes`);
  }
}

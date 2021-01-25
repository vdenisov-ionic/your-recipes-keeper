import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Recipe } from 'src/app/@core/recipe.model';
import { RecipesService } from 'src/app/@core/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit, OnDestroy {
  public recipes: Recipe[];

  constructor(
    private recipesService: RecipesService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    console.log('*** [recipes-list] OnInit');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ngOnDestroy() {
    console.log('*** [recipes-list] OnDestroy');
  }

  public onSelectRecipe(recipeId: string): void {
    // this.router.navigate([`/recipes/${recipeId}`]);
    this.navCtrl.navigateRoot(`/recipes/${recipeId}`);
  }
}

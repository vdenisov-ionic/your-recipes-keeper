import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesListPage } from './recipes-list/recipes-list.page';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: RecipesListPage },
  { path: ':recipeId', component: RecipeDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}

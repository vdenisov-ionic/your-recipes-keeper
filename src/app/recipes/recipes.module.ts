import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesListPage } from './recipes-list/recipes-list.page';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
  ],
  declarations: [
    RecipesListPage,
    RecipeDetailPage,
  ],
})
export class RecipesPageModule {}

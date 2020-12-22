import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://via.placeholder.com/100x100.png?text=ABC',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://via.placeholder.com/100x100.png?text=123',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

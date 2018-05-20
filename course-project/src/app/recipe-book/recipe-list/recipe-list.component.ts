import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test recipe', 'https://www.maxpixel.net/static/photo/1x/Burgers-Burger-Chickpeas-Recipes-Food-Vegetables-2920072.jpg');
  ];

  constructor() { }

  ngOnInit() {
  }

}
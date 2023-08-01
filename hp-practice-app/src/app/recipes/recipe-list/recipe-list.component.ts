import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','Simple test','https://grantourismotravels.com/wp-content/uploads/2021/05/Thai-Nam-Prik-Ong-Recipe-Spicy-Pork-Tomato-Dip-Copyright-2021-Terence-Carter-Grantourismo-T.jpg'),
    new Recipe('Hamburger','3 step hamburgers','https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-960x1200.jpg'),
    new Recipe('Hotdog','Easy dog for the summer','https://www.katiescucina.com/wp-content/uploads/2022/05/Air-Fryer-Hot-Dog.jpg'),
    new Recipe('Tacos','Best tacos you ever had','https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2023/02/taco-recipe-13-1.jpg?resize=1365%2C2048&ssl=1')
  ];

  constructor(){}

}

import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-the-movie-database',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './the-movie-database.component.html',
  styleUrl: './the-movie-database.component.css'
})
export class TheMovieDatabaseComponent {

}

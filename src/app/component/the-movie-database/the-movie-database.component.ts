import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-the-movie-database',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './the-movie-database.component.html',
  styleUrl: './the-movie-database.component.css'
})
export class TheMovieDatabaseComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    console.log('TheMovieDatabaseComponent - ngOnInit');

    this.movieService.getPopularMovie$().subscribe(
      (movies: Movie[]) => {
        // TODO
      }
    );
  }

}

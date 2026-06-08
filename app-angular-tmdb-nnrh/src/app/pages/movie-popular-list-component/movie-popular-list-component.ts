import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopularMovie } from '../../models/movie-popular.interface';
import { MoviePopularService } from '../../services/movie-popular-service';

@Component({
  selector: 'app-movie-popular-list-component',
  imports: [RouterLink],
  templateUrl: './movie-popular-list-component.html',
  styleUrl: './movie-popular-list-component.css',
})
export class MoviePopularListComponent implements OnInit {

  cantidad = input(4);
  popularMovies: PopularMovie[] = [];

  constructor(private service: MoviePopularService) { }
  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies() {
    if (+this.cantidad == 4) {
      this.service.getPopularMovies().subscribe((resp) => {
        this.popularMovies = resp.results.slice(0, 4);
      });
    } else if (+this.cantidad == 2) {
      this.service.getPopularMovies().subscribe((resp) => {
        this.popularMovies = resp.results.slice(0, 2);
      });
    } else {
      this.service.getPopularMovies().subscribe((resp) => {
        this.popularMovies = resp.results;
      });
    }
  }

}

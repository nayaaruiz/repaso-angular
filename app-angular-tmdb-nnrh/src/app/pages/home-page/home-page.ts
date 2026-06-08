import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PeoplePopularListComponent } from '../../components/people-popular-list-component/people-popular-list-component';
import { MoviePopularListComponent } from '../movie-popular-list-component/movie-popular-list-component';

@Component({
  selector: 'app-home-page',
  imports: [ReactiveFormsModule, PeoplePopularListComponent, MoviePopularListComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  cantidad = new FormControl(4);

}

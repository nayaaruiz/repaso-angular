import { Component, input, OnInit } from '@angular/core';
import { PopularPerson } from '../../models/people-popular.interface';
import { PeopleService } from '../../services/people-popular-service';

@Component({
  selector: 'app-people-popular-list-component',
  imports: [],
  templateUrl: './people-popular-list-component.html',
  styleUrl: './people-popular-list-component.css',
})
export class PeoplePopularListComponent implements OnInit {

  cantidad = input(4);
  popularPeople: PopularPerson[] = [];

  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.loadPeoplePopular();
  }

  loadPeople() {
    console.log(this.cantidad)
    if (+this.cantidad == 4) {
      this.service.getPeoplePopular().subscribe((resp) => {
        this.popularPeople = resp.results.slice(0, 4);
      });
    } else if (+this.cantidad == 2) {
      this.service.getPeoplePopular().subscribe((resp) => {
        this.popularPeople = resp.results.slice(0, 2);
      });
    } else {
      this.service.getPeoplePopular().subscribe((resp) => {
        this.popularPeople = resp.results;
      });
    }
  }

}

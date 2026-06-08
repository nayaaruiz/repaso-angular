import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeoplePopularResponse } from '../models/people-popular.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeoplePopular(): Observable<PeoplePopularResponse> {
    return this.http.get<PeoplePopularResponse>('https://api.themoviedb.org/3/person/popular');
  }

}

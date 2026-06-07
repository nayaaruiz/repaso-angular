import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiclesResponse } from '../models/vehicle.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  private readonly apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) { }

  getVehicleList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>(this.apiUrl);
  }

}
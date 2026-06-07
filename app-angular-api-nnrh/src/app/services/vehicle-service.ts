import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiclesResponse } from '../models/vehicle.interface';
import { Observable } from 'rxjs';
import { VehicleDetail } from '../models/vehicle-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  private readonly apiUrl = 'https://swapi.dev/api/vehicles/';

  constructor(private http: HttpClient) { }

  getVehicleList(): Observable<VehiclesResponse> {
    return this.http.get<VehiclesResponse>(this.apiUrl);
  }

  getVehicle(id: number): Observable<VehicleDetail> {
    return this.http.get<VehicleDetail>(`${this.apiUrl}${id}/`);
  }

}
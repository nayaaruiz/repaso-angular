import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle.interface';
import { VehicleService } from '../../services/vehicle-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles-list-page',
  imports: [CommonModule],
  templateUrl: './vehicles-list-page.html',
  styleUrl: './vehicles-list-page.css',
})
export class VehiclesListPage implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.service.getVehicleList().subscribe((response) => {
      this.vehicles = response.results;
    });
  }
}

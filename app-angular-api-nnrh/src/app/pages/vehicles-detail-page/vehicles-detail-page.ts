import { Component, OnInit } from '@angular/core';
import { VehicleDetail } from '../../models/vehicle-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicle-service';

@Component({
  selector: 'app-vehicles-detail-page',
  imports: [],
  templateUrl: './vehicles-detail-page.html',
  styleUrl: './vehicles-detail-page.css',
})
export class VehiclesDetailPage implements OnInit {

  vehicle?: VehicleDetail;

  constructor(
    private route: ActivatedRoute,
    private service: VehicleService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getVehicle(id).subscribe((response) => {
      this.vehicle = response;
    });
  }

}

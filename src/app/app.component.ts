import { Component, OnInit  } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat: number = 39.088286;
  lng: number = 21.825884;
  arr: any[];

  // get and set the coordinates of the current locaiton from GoogleMapsService
  get currLat(): number {
    return this.googleMapsService.currLat;
  }
  set currLat(value: number) {
    this.googleMapsService.currLat = value;
  }

  get currLng(): number {
    return this.googleMapsService.currLng;
  }
  set currLng(value: number) {
    this.googleMapsService.currLng = value;
  }

  constructor(private googleMapsService: GoogleMapsService) {

  }

  ngOnInit() {
    this.googleMapsService.getCoordinates().then((response) => {
      this.arr = response.results;
      this.lat = this.arr[0].geometry.location.lat;
      this.lng = this.arr[0].geometry.location.lng;
      },
      (error) => {
        alert("Error: " + error.statusText)
      })
  }

  findMyLocation() {
    this.googleMapsService.getCurrentLocation()
      .then(pos => {
        this.lat = pos.lat;
        this.lng = pos.lng;
      });

    console.log(this.lat);
    console.log(this.lat);
  }
}

import { Injectable } from '@angular/core';
import { GoogleMaps } from './google-maps';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  currLat: number;
  currLng: number

  constructor(private http: HttpClient) {

  }

  getCoordinates() {
    let promise = new Promise<GoogleMaps>((resolve, reject) => {
      this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=Filolaou,+Athens&key=<your_api_key')
        .toPromise()
        .then((response) => {
          resolve(response as GoogleMaps)

        }, (error) => {
          reject(error);
        })
    })

    return promise;
  }

  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lng: position.coords.longitude,
          lat: position.coords.latitude
        });
      },
        err => {
          reject(err);
        });
    });
  }

}

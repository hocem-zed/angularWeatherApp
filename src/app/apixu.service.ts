import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    let url = "http://api.weatherstack.com/current?access_key=46ba7207d5f22d7698cad150f3f3ea1a&query=" + location;
    return this.http.get(url);      
  }
}

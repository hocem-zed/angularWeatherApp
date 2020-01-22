import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherSearchForm: FormGroup;
  weatherData: any;
  weatherDescription: string;
  weatherIcon: string;

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    console.log(formValues.location)
    this.apixuService.getWeather(formValues.location)
      .subscribe(
        (value) => {
          this.weatherData = value;
          this.weatherDescription = this.weatherData.current.weather_descriptions[0];
          this.weatherIcon = this.weatherData.current.weather_icons[0];
        }, (error) => {
          console.log(error);
        }, () => {
          console.log('Done !');
        }
      );
  }
}

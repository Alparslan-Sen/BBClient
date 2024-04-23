// weather.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../models/weather-forecast.model';

import { WeatherService } from './weather-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecasts: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    console.log('WeatherComponent yüklendi.');
    // this.weatherService.getWeatherForecasts().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.forecasts = data;
    //   },
    //   (error) => {
    //     console.error('Error:', error);
    //   }
    // );
  }
}

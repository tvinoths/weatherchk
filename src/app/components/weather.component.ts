import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  moduleId: module.id,
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['../../weather.css'],
  providers: [ WeatherService ]
})
export class WeatherComponent {
    name: string;
    city: string;
    weathers: Weathers;

      constructor(private weatherService: WeatherService){
        this.name = ' live weather';
        this.city = '';
      }
      method(a: string) {
      this.city = a;
      this.weatherService.getweather(this.city).subscribe(weathers => {
      this.weathers = weathers;
      });
      }
}
interface Weathers {
    name: string;
    city: string;
    body: string;
}

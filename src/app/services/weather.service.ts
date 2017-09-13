import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    result: Object;
    constructor(private http: Http) {
        // console.log('weather service initiated');
    }

    getweather(city: string) {
        // console.log('Entering into getweather method');
        // console.log('this is ', city);
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4db4cb0882c2433b55a11b7c50c28d0a')
            .map((res: Response) => res.json());
    }
}

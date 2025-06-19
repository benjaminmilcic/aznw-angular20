import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherWithForecast(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('latitude', lat.toString())
      .set('longitude', lon.toString())
      .set(
        'current',
        'temperature_2m,weathercode,wind_speed_10m,relative_humidity_2m,is_day'
      )
      .set(
        'daily',
        'temperature_2m_max,temperature_2m_min,weathercode,wind_speed_10m_max,precipitation_probability_mean'
      )
      .set(
        'hourly',
        'temperature_2m,weathercode,wind_speed_10m,precipitation_probability,relative_humidity_2m,wind_direction_10m'
      )
      .set('timezone', 'auto');

    return this.http.get('https://api.open-meteo.com/v1/forecast', { params });
  }
}

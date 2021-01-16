import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url;
  apikey = "42b6dd9e307fcce99485863ecfcfcc35";

  constructor(private http:HttpClient) {
    this.url=  "http://api.openweathermap.org/data/2.5/forecast?q=";
   } 

getweather(city){
  return this.http.get(this.url+city+ ','+'&APPID='+this.apikey)
}

}
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  city:any;

  main:any;

  lat:any;

  lng:any;

  weathers:any;

  sunrise:any;

  sunset:any;

  location ={
    city:'Hyderabad',
  };


  
  constructor(private weatherService :WeatherService) { }

  ngOnInit() {
    this.weatherService.getweather(this.location.city).subscribe((data)=>{
      // console.log(data);
      this.weathers=data;
      this.loadmap();
      
     this.sunrise = new Date(this.weathers.city.sunrise*1000).toLocaleString();
     this.sunset = new Date(this.weathers.city.sunset*1000).toLocaleString();
    
      
      console.log(this.sunrise)
    })
  }

 get(){
 
   this.weatherService.getweather(this.city).subscribe(data=>{
     this.weathers=data;
     this.loadmap();
     this.sunrise = new Date(this.weathers.city.sunrise*1000).toLocaleString();
     this.sunset = new Date(this.weathers.city.sunset*1000).toLocaleString();

   })
 }

 loadmap(){
  this.lat=this.weathers.city.coord.lat;
  this.lng=this.weathers.city.coord.lon;
  // console.log(this.lat)
  // console.log(this.lng)

 }

}

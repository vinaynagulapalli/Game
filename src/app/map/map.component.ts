import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input('parent') public lat;
  constructor() { }

  ngOnInit() {
    

  }

}

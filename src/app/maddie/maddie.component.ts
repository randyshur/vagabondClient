import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landmark-display',
  templateUrl: './landmark-display.component.html',
  styleUrls: ['./landmark-display.component.css']
})
export class LandmarkDisplayComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

}
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLandmarks: any

  constructor(private HomeService: HomeService, private http:HttpClientModule) { }

  ngOnInit() {
    

this.HomeService.getAllLandmarks().subscribe(data => {
  this.allLandmarks=data;
  console.log(this.allLandmarks)
})
  

  }

}

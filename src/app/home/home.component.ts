import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  landmarks: any

  constructor(private Homeservice: HomeService, private http:HttpClientModule, ) { }

  ngOnInit() {
    this.Homeservice.getAllLandmarks().subscribe(data => {
      this.landmarks=data;
      console.log(this.landmarks)
    })
  }


  }

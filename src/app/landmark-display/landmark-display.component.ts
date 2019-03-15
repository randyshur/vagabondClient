import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { HttpClientModule} from '@angular/common/http';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-landmark-display',
  templateUrl: './landmark-display.component.html',
  styleUrls: ['./landmark-display.component.css']
})
export class LandmarkDisplayComponent implements OnInit {

  userLandmarks: any
  userLandmark: any
  userId: number

  constructor(private endpointsservice: EndpointsService, private http:HttpClientModule, public dialog: MatDialog) { }

  ngOnInit() {

    // let token = localStorage.getItem('token');

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization':   token
    //   })

    this.endpointsservice.getUserLandmarks().subscribe(data => {
      this.userLandmarks=data;
      console.log(this.userLandmarks)
    })
  }

  getLandmark(id){
  this.endpointsservice.getUserLandmark(id).subscribe(data => {
    this.userLandmark=data;
    console.log(this.userLandmark);
  })
  }

  deleteLandmark(id){
    this.endpointsservice.deleteLandmark(id).subscribe(data => {
      console.log('deleted');
    })
  }

  openDialog() {
    // const dialogRef = this.dialog.open();

    // dialogRef.afterClosed().subscribe(result => {
    // //   console.log(`Dialog result: ${result}`);
    // });
  }
}

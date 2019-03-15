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
  userId: any
  token: any
  constructor(private endpointsservice: EndpointsService, private http:HttpClientModule, public dialog: MatDialog) { }
  
  ngOnInit() {
    // this.userId=this.endpointsservice.token
    // let userId = this.userLandmarks.state.userId
    // let userIthis.userLandmarks[0].state.userId)
    this.endpointsservice.getUserLandmarks().subscribe(data => {
      this.userLandmarks=data;
      console.log(this.userLandmarks)
      console.log(this.userLandmarks[0].state.userId)
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

  // openDialog() {
  //   const dialogRef = this.dialog.open(LandmarkDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

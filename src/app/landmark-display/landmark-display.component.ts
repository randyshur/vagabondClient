import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { Injectable } from '@angular/core';

// const token = localStorage.getItem('token')
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': token
//   })
// };

@Injectable({
  providedIn: 'root'
})
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
  constructor(private landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.setToken()
    this.getAll()
  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  getAll(){
    this.landmarkService.getUserLandmarks().subscribe(data => {
      console.log(data)
     this.userLandmarks=data
      // this.userLandmarks=data;
      // console.log(this.userLandmarks)
    }
    )}

  getLandmark(id){
  this.landmarkService.getUserLandmark(id).subscribe(data => {
    this.userLandmark=data;
    console.log(this.userLandmark);
  })
  }

  deleteLandmark(id){
    this.landmarkService.deleteLandmark(id).subscribe(data => {
      console.log('deleted');
      this.getAll()
    })
  }


  openDialog() {
  /*  const dialogRef = this.dialog.open();

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
  }



  // openDialog() {
  //   const dialogRef = this.dialog.open(LandmarkDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}

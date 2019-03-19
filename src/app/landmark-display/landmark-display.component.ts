import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


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
  token: any
  landmarkForm: FormGroup

  constructor(private landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }
  
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
    const dialogRef = this.dialog.open(CreateDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }

}

// import {Component, Inject} from '@angular/core';
// import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'create-dialog',
  templateUrl: 'create-dialog.html',
  // template: 'passed in {{ data.user }}'
})
export class CreateDialog {

  userLandmarks: any
  userLandmark: any
  userId: any
  token: any
  landmarkForm: FormGroup

  constructor(private landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.setToken()
    // this.getAll()

    this.landmarkForm = new FormGroup({
      title: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
      dateLastVisited: new FormControl(),
      imageURL: new FormControl(),
      comments: new FormControl(),
      state: new FormControl()
    })
  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  onSubmit(){
    console.log(this.landmarkForm.value)
  
    this.landmarkService.createLandmark(this.landmarkForm.value).subscribe(data => {
      console.log(data);
    })
    this.closeDialog()
  }

  closeDialog(){
    const dialogRef = this.dialog.closeAll();
  }
}

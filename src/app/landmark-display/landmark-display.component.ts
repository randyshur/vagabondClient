import { Component, OnInit, Inject } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA, MatButton, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface DialogData {
  userLandmark
}

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
    
      // getLandmark(id){
      // this.landmarkService.getUserLandmark(id).subscribe(data => {
      //   this.userLandmark=data;
      //   console.log(this.userLandmark);
      // })
      // }
  deleteLandmark(id){
    this.landmarkService.deleteLandmark(id).subscribe(data => {
      console.log('deleted');
      this.getAll()
    })
  }

  openCreateDialog() {
    this.dialog.open(CreateDialog);

  }

  getLandmark(id){
    // this.data = this.dialogRef.componentInstance;
    console.log(id)
     this.landmarkService.getUserLandmark(id)
    
     }

  openUpdateDialog(id) {
    this.getLandmark(id);
    
    this.dialog.open(UpdateDialog)
    
  }
}


@Component({
  selector: 'create-dialog',
  templateUrl: 'create-dialog.html',
})
export class CreateDialog {

  userLandmarks: any
  userLandmark: any
  userId: any
  token: any
  landmarkForm: FormGroup

  constructor(private landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder,) { }
  
  ngOnInit() {
    this.setToken()

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

  onSubmit(form){
    console.log(this.landmarkForm.value)
  
    this.landmarkService.createLandmark(this.landmarkForm.value).subscribe(data => {
      console.log(data);
    })
    this.closeDialog()
  }

  closeDialog(){
    this.dialog.closeAll();
  }
}


@Component({
  selector: 'update-dialog',
  templateUrl: 'update-dialog.html',
  // template: '{{ userLandmark.id }}'
})
export class UpdateDialog {

  userLandmarks: any
  userLandmark: any
  userId: any
  token: any
  updateForm: FormGroup
  // data: any

  
  
  constructor(private landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any  ) { }
  
  ngOnInit() {
    this.setToken()
    // this.getLandmark()

    this.updateForm = new FormGroup({
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

  onSubmitUpdate(form){
    console.log(this.updateForm.value)
  
    this.landmarkService.updateLandmark(this.updateForm.value).subscribe(data => {
      console.log(data);
    })
    this.closeDialog()
  }

  // getLandmark(id){
  //   // this.data = this.dialogRef.componentInstance;
  //    this.landmarkService.getUserLandmark(this.data).subscribe(data => {
  //      this.userLandmark=data;
  //      console.log(this.userLandmark);
  //    })
  //    }

  closeDialog(){
    const dialogRef = this.dialog.closeAll();
  }
}

import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import  { Router } from '@angular/router'

export interface DialogData {
  userLandmark
  userLandmarks
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

  constructor(private landmarkService: LandmarkService, private http: HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.setToken()
    this.getAll()
  }

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token
  }

  getAll() {
    this.landmarkService.getUserLandmarks().subscribe(data => {
      console.log(data)
      this.userLandmarks = data
    }
    )
  }

  deleteLandmark(id) {
    this.landmarkService.deleteLandmark(id).subscribe(data => {
      console.log('deleted');
      this.getAll()
    })
  }

  openCreateDialog() {
    this.dialog.open(CreateDialog);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.userLandmarks
    console.log(this.userLandmarks)
  }

  openUpdateDialog(id) {
    this.landmarkService.getUserLandmark(id)
    console.log(this.landmarkService.userLandmark)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.landmarkService.userLandmark
    console.log(this.landmarkService.userLandmark)

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


  constructor(public router:Router, 
    public landmarkService: LandmarkService, 
    private http: HttpClientModule, 
    public dialog: MatDialog, 

    @Inject(MAT_DIALOG_DATA) public data: any,
    // @Output() public itemCreated: EventEmitter<any> = new EventEmitter()
    ) { }

  ngOnInit() {
    this.setToken()
    this.userLandmarks = this.data
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

  getAll() {
    this.landmarkService.getUserLandmarks().subscribe(data => {
      console.log(data)
      this.userLandmarks = data
    }
    )
  }

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token
  }

  onSubmit() {
    console.log(this.landmarkForm.value)

    this.landmarkService.createLandmark(this.landmarkForm.value).subscribe(data => {
      console.log(data)
      // this.itemCreated.emit(data)
    })

    this.getAll()
    this.dialog.closeAll();
  }

}


@Component({
  selector: 'update-dialog',
  templateUrl: 'update-dialog.html',
})
export class UpdateDialog {

  userLandmarks: any
  userLandmark: any
  userId: any
  token: any
  updateForm: FormGroup

  constructor(private landmarkService: LandmarkService, private http: HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.setToken()

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

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token
  }

  onSubmitUpdate() {
    if (this.updateForm.value.title === null) {
      delete this.updateForm.value.title
    }

    if (this.updateForm.value.dateLastVisited === null) {
      delete this.updateForm.value.dateLastVisited
    }

    if (this.updateForm.value.imageURL === null) {
      delete this.updateForm.value.imageURL
    }

    if (this.updateForm.value.comments === null) {
      delete this.updateForm.value.comments
    }

    if (this.updateForm.value.address === null) {
      delete this.updateForm.value.address
    }

    if (this.updateForm.value.city === null) {
      delete this.updateForm.value.city
    }

    if (this.updateForm.value.zip === null) {
      delete this.updateForm.value.zip
    }

    if (this.updateForm.value.state === null) {
      delete this.updateForm.value.state
    }

    console.log(this.updateForm.value)

    this.landmarkService.updateLandmark(this.updateForm.value).subscribe(data => {
      console.log(data);
    })
    this.closeDialog()
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}

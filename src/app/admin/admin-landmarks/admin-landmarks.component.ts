import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { LandmarkService } from './admin-landmarks.service';
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
  selector: 'app-admin-landmarks',
  templateUrl: './admin-landmarks.component.html',
  styleUrls: ['./admin-landmarks.component.css']
})
export class AdminLandmarksComponent implements OnInit {

    userLandmarks: any
    userLandmark: any
    token: any
    landmarkForm: FormGroup

    constructor(public landmarkService: LandmarkService, private http: HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }

    ngOnInit() {
      this.setToken()
      this.getAll()
    }

    setToken() {
      const token = localStorage.getItem('token')
      this.token = token
    }

    getAll() {
      this.landmarkService.getLandmarks().subscribe(data => {
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
      const dialogRef=this.dialog.open(ALCreateDialog,
        {
          height: '600px',
          width: '510px',
        });
      dialogRef.afterClosed().subscribe(results=> {
        this.getAll()
         })
      // const dialogConfig = new MatDialogConfig();
      // dialogConfig.data = this.userLandmarks
      console.log(this.userLandmarks)
    }

    openUpdateDialog(id) {
      this.landmarkService.getLandmark(id)
      console.log(this.landmarkService.userLandmark)

      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = this.landmarkService.userLandmark

      const dialogRef=this.dialog.open(UpdateDialog, {
        height: '600px',
        width: '510px',
      })
      dialogRef.afterClosed().subscribe(results=> {
        this.getAll()
      })

    }
  }


  @Component({
    selector: 'admin-create-dialog',
    templateUrl: 'admin-create-dialog.html',
  })
  export class ALCreateDialog {

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

      ) { }

    ngOnInit() {
      this.setToken()
      this.userLandmarks = this.data
      this.landmarkForm = new FormGroup({
        title: new FormControl('',[Validators.required]),
        address: new FormControl(),
        city: new FormControl(),
        zip: new FormControl(),
        dateLastVisited: new FormControl('',[Validators.required]),
        imageURL: new FormControl(),
        comments: new FormControl(),
        state: new FormControl('',[Validators.required])
      })
    }

    public hasError = (controlName: string, errorName: string) => {
      return this.landmarkForm.controls[controlName].hasError(errorName);
    }

    getAll() {
      this.landmarkService.getLandmarks().subscribe(data => {
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
/*
      this.landmarkService.createLandmark(this.landmarkForm.value).subscribe(data => {
        console.log(data)
        // this.itemCreated.emit(data)
      })
*/
      this.getAll()
      this.dialog.closeAll();
    }

  }


  @Component({
    selector: 'admin-update-dialog',
    templateUrl: 'admin-update-dialog.html',
  })
  export class UpdateDialog {

    userLandmarks: any
    userLandmark: any
    userId: any
    token: any
    updateForm: FormGroup

    constructor(public landmarkService: LandmarkService, private http: HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.setToken()

      this.updateForm = new FormGroup({
        title: new FormControl('',[Validators.required]),
        address: new FormControl(),
        city: new FormControl(),
        zip: new FormControl(),
        dateLastVisited: new FormControl('',[Validators.required]),
        imageURL: new FormControl(),
        comments: new FormControl(),
        state: new FormControl('',[Validators.required])
      })
    }

    public hasError = (controlName: string, errorName: string) => {
      return this.updateForm.controls[controlName].hasError(errorName);
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


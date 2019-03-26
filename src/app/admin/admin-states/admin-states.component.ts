import {Component, OnInit, Inject, } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatButton, MatDialogRef, MatDialogConfig } from '@angular/material';
import { StateService } from './admin-states.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

export interface DialogData {
  userState
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin-states',
  templateUrl: './admin-states.component.html',
  styleUrls: ['./admin-states.component.css']
})
export class AdminStatesComponent implements OnInit {


  userState: any
  userStates: any
  stateid: number
  token: any

  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) {}



  ngOnInit() {

    this.getStates()
    this.setToken()

  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  getStates(){
    this.stateService.getStates().subscribe(data => {
      this.userStates=data
      console.log("create =>", data)
    })
  }


  // postState(){
  //   this.stateService.createState().subscribe(data => {
  //     this.allStates=data;
  //     console.log(data)
  //   })
  // }

  deleteState(id){
    console.log(id)
    this.stateService.deleteState(id).subscribe(data => {
      this.userState=data;
      this.getStates()
    })
  }

  // getState(id){
  //   this.stateService.getState(id).subscribe(data => {
  //     this.userState=data;
  //     console.log(this.userState);
  //   })
  // }




openCreateStateDialog() {

  const dialogRef=this.dialog.open(CreateStateDialog,
   {
    height: '450px',
    width: '650px',
  })
  dialogRef.afterClosed().subscribe(results => {
    this.getStates()
  })
}

openUpdateStateDialog(id) {
  this.stateService.getState(id)
  console.log(id)
  const dialogRef=this.dialog.open(UpdateStateDialog,
   {
    height: '420px',
    width: '450px',
  });
  dialogRef.afterClosed().subscribe(results => {
    this.getStates()

    const dialogConfig = new MatDialogConfig();
   dialogConfig.data = this.stateService.userState
  })
}





}



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'create-state-dialog',
  templateUrl: 'create-state-dialog.html',
})
export class CreateStateDialog {

  userStates: any
  token: any
  stateForm: FormGroup


  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }


 ngOnInit() {
   this.setToken()
   this.getStates()

   this.stateForm= new FormGroup({
     state: new FormControl('',[Validators.required]),
     dateLastVisited: new FormControl(),
     comments: new FormControl()
   })
 }

 public hasError = (controlName: string, errorName: string) => {
  return this.stateForm.controls[controlName].hasError(errorName);
}

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }


  getStates(){
    this.stateService.getStates().subscribe(data => {
      this.userStates=data
      console.log(data) //here
    })
  }

  onSubmit(){
    console.log(this.stateForm.value)
   this.stateService.createState(this.stateForm.value).subscribe(data => {
     this.userStates=data;
     this.getStates()
    })
    this.closeDialog()
  }


//   let dialogRef = this.dialog.open(Component);
// // properties
// dialogRef.componentInstance.address = address;
// dialogRef.componentInstance.canEdit = this.canEdit;
// dialogRef.componentInstance.isEdit = true;
// // subscription on close
// dialogRef.afterClosed()
// .subscribe(() => {})


  // deleteState(id){
  //   console.log(id)
  //   this.stateService.deleteState(id).subscribe(data => {
  //     this.userState=data;
  //     this.getUserStates()
  //   })
  // }


  closeDialog(){
    this.dialog.closeAll();
    this.getStates();
    console.log('dialog closing')
  }
}

@Component({
  selector: 'update-state-dialog',
  templateUrl: 'update.component.html',
})
export class UpdateStateDialog {

  userStates: any
  token: any
  public updateForm: FormGroup


  constructor(private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private stateService: StateService) { }

  public ngOnInit() {
    this.setToken()


  this.updateForm = new FormGroup({
    state: new FormControl('', [Validators.required]),
    dateLastVisited: new FormControl(),
    comments: new FormControl()
  })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.updateForm.controls[controlName].hasError(errorName);
  }

  // getState(id){
  //   this.stateService.getState(id).subscribe(data => {
  //     this.userStates=data;
  //     this.getUserStates()
  //     console.log(this.userStates);
  //   })
  // }


  getUserStates(){
    this.stateService.getStates().subscribe(data => {
      this.userStates=data
      console.log(data)
    })
  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  onSubmitUpdate(){
    console.log(this.updateForm.value)
    this.stateService.updateState(this.updateForm.value).subscribe(data => {
      this.userStates=data
      console.log(data);
    })
    this.closeDialog()
  }




  closeDialog(){
    const dialogRef = this.dialog.closeAll();
  }

}


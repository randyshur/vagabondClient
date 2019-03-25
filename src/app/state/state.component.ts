import {Component, OnInit, Inject, } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatButton, MatDialogRef, MatDialogConfig } from '@angular/material';
import { StateService } from '../services/state.service';
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
  selector: 'app-state',
  templateUrl: 'state.component.html',
  styleUrls: ['state.component.css'],
})

export class StateComponent implements OnInit {
 

  userState: any
  userStates: any
  stateid: number
  token: any

  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) {}

  

  ngOnInit() {

    this.getUserStates()
    this.setToken()
 
  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  getUserStates(){
    this.stateService.getUserStates().subscribe(data => {
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
      this.getUserStates()
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
    this.getUserStates()
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
    this.getUserStates()

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
   this.getUserStates()

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


  getUserStates(){
    this.stateService.getUserStates().subscribe(data => {
      this.userStates=data
      console.log(data) //here
    })
  }

  onSubmit(){
    console.log(this.stateForm.value)
   this.stateService.createState(this.stateForm.value).subscribe(data => {
     this.userStates=data;
     this.getUserStates()
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
    this.getUserStates();
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
    this.stateService.getUserStates().subscribe(data => {
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






import {Component, OnInit, Inject, } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatButton, MatDialogRef, MatDialogConfig } from '@angular/material';
import { StateService } from '../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
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
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: 'lightblue'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
  ];

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

  getState(id){
    this.stateService.getState(id).subscribe(data => {
      this.userState=data;
      this.getUserStates()
      console.log(this.userState);
    })
  }

  


openCreateStateDialog() {

  const dialogRef=this.dialog.open(CreateStateDialog)
  dialogRef.afterClosed().subscribe(results => {
    this.getUserStates()
  })
}

openUpdateStateDialog(id) {
  this.getState(id);
  this.dialog.open(UpdateStateDialog)
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
     state: new FormControl(),
     dateLastVisited: new FormControl(),
     comments: new FormControl()
   })
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
  updateForm: FormGroup


  constructor(private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA)private stateService: StateService) { }

  ngOnInit() {
    this.setToken()
    this.getUserStates()


  this.updateForm = new FormGroup({
    state: new FormControl(),
    dateLastVisited: new FormControl(),
    comments: new FormControl()
  })
  } 


  getState(id){
    this.stateService.getState(id).subscribe(data => {
      this.userStates=data;
      this.getUserStates()
      console.log(this.userStates);
    })
  }


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

    this.stateService.updateState(this.updateForm.value).subscribe(data => {
      this.userStates=data
      console.log(data);
      this.getUserStates()
    })
    this.closeDialog()
  }



  openUpdateStateDialog(id) {
    this.getState(id);
    this.dialog.open(UpdateStateDialog)
  }



  closeDialog(){
    const dialogRef = this.dialog.closeAll();
  }

}






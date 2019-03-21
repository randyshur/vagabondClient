import {Component, OnInit, Inject, } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatButton, MatDialogRef, MatDialogConfig } from '@angular/material';
import { StateService } from '../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StateDropdownComponent } from '../state-dropdown/state-dropdown.component';

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

    this.getAllStates()
    this.setToken()
 
  }

  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }

  getAllStates(){
    this.stateService.getAllStates().subscribe(data => {
      this.userStates=data
      console.log(data)
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
      this.getAllStates()
    })
  }

  getState(id){
    this.stateService.getUserStates(id).subscribe(data => {
      this.userState=data;
      this.getAllStates()
      console.log(this.userState);
    })
  }

  


openCreateStateDialog() {
  this.dialog.open(CreateStateDialog)
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

  userState: any
  userStates: any
  userid: number
  token: any
  stateForm: FormGroup


  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder) { }

  
 ngOnInit() {
   this.setToken()
   this.getAllStates()

   this.stateForm= new FormGroup({
     state: new FormControl(),
     dateLastVisited: new FormControl(),
     comments: new FormControl()
   })

   this.getAllStates()
 }


  setToken(){
    const token = localStorage.getItem('token')
    this.token=token
  }


  getAllStates(){
    this.stateService.getAllStates().subscribe(data => {
      this.userStates=data
      console.log(data)
    })
  }

  onSubmit(){
    console.log(this.stateForm.value)
   this.stateService.createState(this.stateForm.value).subscribe(data => {
     this.userState=data
     this.getAllStates()
   })
    
    this.closeDialog()
  }



  // deleteState(id){
  //   console.log(id)
  //   this.stateService.deleteState(id).subscribe(data => {
  //     this.userState=data;
  //     this.getAllStates()
  //   })
  // }

  closeDialog(){
    this.dialog.closeAll();
  }
}



@Component({
  selector: 'update-state-dialog',
  templateUrl: 'update.component.html',
})
export class UpdateStateDialog {

  userState: any
  userStates: any
  userid: number
  token: any
  updateForm: FormGroup


  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public stateDropDown: StateDropdownComponent) { }

  ngOnInit() {
    this.setToken()
    this.getAllStates()


  this.updateForm = new FormGroup({
    state: new FormControl(),
    dateLastVisited: new FormControl(),
    comments: new FormControl()
  })
  } 


  getState(id){
    this.stateService.getUserStates(id).subscribe(data => {
      this.userState=data;
      this.getAllStates()
      console.log(this.userState);
    })
  }


  getAllStates(){
    this.stateService.getAllStates().subscribe(data => {
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
      this.getAllStates()
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






import {Component, OnInit, } from '@angular/core';
import {MatDialog} from '@angular/material';
import { StateService } from '../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
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

  searchForm: FormGroup;
  baseUrl = 'http://localhost:4050/api/state'
  _data = {};

  allStates: any
  userStates: any
  stateid: number

  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog) {}

  

  ngOnInit() {

    // this.stateService.getUserStates().subscribe(data => {
    //   this.userStates=data;
    //   console.log(this.userStates)
    //   console.log(this.userStates[0].state.userId)
    // })
  }

  // data not read
  postState(){
    this.stateService.createState().subscribe(data => {
      this.allStates=data;
      console.log(data)
    })
  }

  // need more possibly
  deleteState(id){
    this.stateService.deleteState(id).subscribe(data => {
      console.log('state deleted');
    })
  }

  getState(id){
    this.stateService.getUserStates(id).subscribe(data => {
      this.userStates=data;
      console.log(this.userStates);
    })
  }

  // updateState(id){
  //   this.stateService.updateState(id).subscribe(data => {
  //     this.userStates=data;
  //     console.log(this.userStates)
  //   })
  // }




  openDialog() {
    const dialogRef = this.dialog.open(StateComponentUpdate);

    dialogRef.afterClosed().subscribe(
    );
  }
}

@Component({
  selector: 'app-state-update',
  templateUrl: 'update.component.html',
})
export class StateComponentUpdate {


  searchForm: FormGroup;
  baseUrl = 'http://localhost:4050/api/state'
  _data = {};

  allStates: any
  userStates: any
  stateid: number

  updateState(id){
    this.stateService.updateState(id).subscribe(data => {
      this.userStates=data;
      console.log(this.userStates)
    })
  }


  constructor(private stateService: StateService, private http:HttpClientModule, public dialog: MatDialog, public stateDropDown: StateDropdownComponent) {}




  

}


























// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-state',
//   templateUrl: './state.component.html',
//   styleUrls: ['./state.component.css']
// })
// export class StateComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }




// import { Component, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
//   styleUrls: ['dialog-overview-example.css'],
// })
// export class StateComponent {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     const dialogRef = this.dialog.open(StateComponent, {
//       width: '250px',
//       data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }

// @Component({
//   selector: 'app-updateState',
//   templateUrl: 'update.component.html',
// })
// export class UpdateStateComponent {

//   constructor(
//     public dialogRef: MatDialogRef<UpdateStateComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
import {Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-state',
  templateUrl: 'state.component.html',
  styleUrls: ['state.component.css'],
})
export class StateComponent implements OnInit {

  allStates: any
  allUserStates: any
  UserState: any



  constructor(private StateService: StateService, private http:HttpClientModule, public dialog: MatDialog) {}

  ngOnInit() {

    this.StateService.getAllStates().subscribe(data => {
      this.allStates
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(StateComponentUpdate);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-state-update',
  templateUrl: 'update.component.html',
})
export class StateComponentUpdate {}














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
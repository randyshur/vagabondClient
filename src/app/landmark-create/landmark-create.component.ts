import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule} from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { LandmarkDisplayComponent } from '../landmark-display/landmark-display.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-landmark-create',
  templateUrl: './landmark-create.component.html',
  styleUrls: ['./landmark-create.component.css']
})
export class LandmarkCreateComponent implements OnInit {

  userLandmark: any
  landmarkForm: FormGroup
  token: any
  
  constructor(public landmarkService: LandmarkService, public dialog: MatDialog, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.setToken()
    this.landmarkForm = this.fb.group({
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

  }

  // getLandmark(id){
  //   this.landmarkService.getUserLandmark(id).subscribe(data => {
  //     this.userLandmark=data;
  //     console.log(this.userLandmark);
  //   })
  //   }

}

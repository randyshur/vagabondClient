import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../services/landmark.service';
import { HttpClientModule} from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LandmarkDisplayComponent } from '../landmark-display/landmark-display.component';

@Component({
  selector: 'app-landmark-create',
  templateUrl: './landmark-create.component.html',
  styleUrls: ['./landmark-create.component.css']
})
export class LandmarkCreateComponent implements OnInit {
  // @Input() group: FormGroup;

  userLandmark: any
  landmarkForm: any
  token: any
  
  constructor(public landmarkService: LandmarkService, private http:HttpClientModule, public dialog: MatDialog, public display:LandmarkDisplayComponent, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.formInit()  
    this.setToken()
    }
    
    setToken(){
      const token = localStorage.getItem('token')
      this.token=token
    }

    formInit(){
        this.landmarkForm = this.fb.group({
          title: ['', Validators.required],
          dateLastVisited: ['', Validators.required],
          imageURL: [''],
          comments: [''],
          location: this.fb.group({
            address: [''],
            city: [''],
            zip: ['']
          })
      })
      
    }

  onSubmit(){
    console.log(this.landmarkForm.value)
    let form = JSON.stringify(this.landmarkForm.value)
    this.landmarkService.createLandmark(form).subscribe(data => {
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

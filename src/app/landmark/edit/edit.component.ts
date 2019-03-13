import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../services/endpoints.service';

const token = localStorage.getItem('token');

const headers = {
  'Content-Type':'application/json', 
  'Authorization': token
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private endpoints:EndpointsService) { }

  ngOnInit() {
  }

  deleteLandmark(){
    //delete landmark by id
  }

  updateLandmark(){
    //update landamrk by id
  }

}

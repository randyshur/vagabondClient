import { Component, OnInit, Injectable } from '@angular/core';
import { EndpointsService } from '../../services/endpoints.service';

const token = localStorage.getItem('token');

const headers = {
  'Content-Type':'application/json', 
  'Authorization': token
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private endpoints:EndpointsService) { }

  ngOnInit() {
  }

  //create single state
  createState(){
  }

  //create single landmark
  createLandmark(){
  }

}

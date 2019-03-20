import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

const token = localStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
};

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  userLandmark: any

  constructor(private http: HttpClient) { }

  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${APIURL}/api/landmark/mylandmarks`, httpOptions);
  }

  //create single landmark
  createLandmark(form){
    console.log(form)
    JSON.stringify(form)
    return this.http.post(`${APIURL}/api/landmark/mylandmark`, form, httpOptions)

  }

  //get single landmark by id for updating
  getUserLandmark(id){
    this.http.get(`${APIURL}/api/landmark/mylandmark/${id}`, httpOptions).subscribe(data => {
      this.userLandmark=data['id']
      
   })}

  //update landmark by id
  updateLandmark(form){
    console.log(form)
    // console.log(id)
    return this.http.put(`${APIURL}/api/landmark/mylandmark/${this.userLandmark}`, form, httpOptions)

  }

  deleteLandmark(id){
    return this.http.delete(`${APIURL}/api/landmark/mylandmark/${id}`, httpOptions)
  }
}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4050'

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
    return this.http.get(`${baseUrl}/api/landmark/mylandmarks`, httpOptions);
  }

  //create single landmark
  createLandmark(form){
    console.log(form)
    JSON.stringify(form)
    return this.http.post(`${baseUrl}/api/landmark/mylandmark`, form, httpOptions)

  }

  //get single landmark by id for updating
  getUserLandmark(id){
    this.http.get(`${baseUrl}/api/landmark/mylandmark/${id}`, httpOptions).subscribe(data => {
      this.userLandmark=data['id']
      
   })}

  //update landmark by id
  updateLandmark(form){
    console.log(form)
    // console.log(id)
    return this.http.put(`${baseUrl}/api/landmark/mylandmark/${this.userLandmark}`, form, httpOptions)

  }

  deleteLandmark(id){
    return this.http.delete(`${baseUrl}/api/landmark/mylandmark/${id}`, httpOptions)
  }
}

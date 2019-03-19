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

  constructor(private http: HttpClient) { }

  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${baseUrl}/api/landmark/user`, httpOptions);
  }

  //create single landmark
  createLandmark(form){
    console.log(form)
    JSON.stringify(form)
    return this.http.post(`${baseUrl}/api/landmark/`, form, httpOptions)

  }

  //get single landmark by id for updating
  getUserLandmark(id){
    return this.http.get(`${baseUrl}/api/landmark/id/${id}`, httpOptions)
   }

  //update landmark by id
  updateLandmark(id){
    // return this.http.put(`${baseUrl}/api/landmark/${id}`)

  }

  deleteLandmark(id){
    return this.http.delete(`${baseUrl}/api/landmark/${id}`, httpOptions)
  }
}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4050'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTUyOTEzMjQ2LCJleHAiOjE1NTI5OTk2NDZ9.J1_ZLvyHf4yrcHUtFP3hWcMobEPWpBeE9sb2zCWgCd4'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  constructor(private http: HttpClient) { }

  //get all user landmarks
  getUserLandmarks(user_id){
    return this.http.get(`${baseUrl}/api/landmark/user/${user_id}`, httpOptions);
  }

  //create single landmark
  createLandmark(){
    // return this.http.post(`${baseUrl}api/landmark/`)

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

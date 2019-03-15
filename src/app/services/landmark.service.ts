import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4050'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTUyNjU0ODA5LCJleHAiOjE1NTI3NDEyMDl9.9MVyd7iy5g4WXWXp0lEUDP0zijIKu4Ehdn6Rfv4tuso'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  constructor(private http: HttpClient) { }

  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${baseUrl}/api/landmark/user/2`, httpOptions);
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
    return this.http.delete(`${baseUrl}/api/landmark/${id}`)
  }
}

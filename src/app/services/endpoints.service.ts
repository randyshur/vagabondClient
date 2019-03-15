import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../models/user'

const baseUrl = 'http://localhost:4050'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTUyNTY4OTIzLCJleHAiOjE1NTI2NTUzMjN9.dwveL9K6U6_rRCHmPV4q6JSbWeNM0RXna8oljb8nYxM'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) {}

  //////USERS/////////////

  signup(user: User) {
    return this.http.post(`${baseUrl}/api/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${baseUrl}/api/user/signup`, user);
  }

  //update user by id


  updateUser(id){
    // return this.http.put(`${baseUrl}api/user/${id}`)

  }

  // updateUser(id){
  //   this.http.put(`${baseUrl}api/user/${id}`)
  // }


  //delete user by id

  deleteUser(id){
    return this.http.delete(`${baseUrl}/api/user/${id}`);

  }

  ////////STATES///////////////
  //create state

  

  /////////LANDMARKS///////////////
  //get all landmarks, for home, admin



  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${baseUrl}/api/landmark/`, httpOptions);

  }


  //create single landmark

  createLandmark(){
    // return this.http.post(`${baseUrl}api/landmark/`)

  }


  getUserLandmark(id){
    return this.http.get(`${baseUrl}/api/landmark/id/${id}`)

  }


  //update landmark by id

  updateLandmark(id){
    // return this.http.put(`${baseUrl}api/landmark/${id}`)

  }

  // //update landmark by id
  // updateLandmark(id){
  //   this.http.put(`${baseUrl}api/landmark/${id}`)
  // }


  //delete landmark by id

  deleteLandmark(id){
    return this.http.delete(`${baseUrl}/api/landmark/${id}`)

  }


}

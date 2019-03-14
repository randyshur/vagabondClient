import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../models/user'

const baseUrl = 'http://localhost:4050/api'

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
    return this.http.post(`${baseUrl}/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${baseUrl}/user/signup`, user);
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
    return this.http.delete(`${baseUrl}api/user/${id}`);

  }

  ////////STATES///////////////
  //create state

  createState(){
    // return this.http.post(`${baseUrl}api/state/`)

  }

  getUserStates(userId){
    return this.http.get(`${baseUrl}api/state/${userId}`)
  }
  
  //get all states

  getAllStates(){
    return this.http.get(`${baseUrl}api/state/`)
  }

  //get all unique states
  getAllUnique(){
    return this.http.get(`${baseUrl}api/state/unique`)
  }

  //get state by id for updating
  getState(id){
    return this.http.get(`${baseUrl}api/id/${id}`)

  }

  //update state by id

  updateState(id){
    // return this.http.put(`${baseUrl}api/state/${id}`)

  }

  // updateState(id){
  //   this.http.put(`${baseUrl}api/state/${id}`)
  // }


  //delete state by id

  deleteState(id){
    return this.http.delete(`${baseUrl}api/state/${id}`)

  }

  /////////LANDMARKS///////////////
  //get all landmarks, for home, admin

  getAllLandmarks(){
    return this.http.get(`${baseUrl}api/landmark/`)
  }

  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${baseUrl}api/landmark/user/3`, httpOptions);

  }


  //create single landmark

  createLandmark(){
    // return this.http.post(`${baseUrl}api/landmark/`)

  }

  // //create single landmark
  // createLandmark(){
  //   this.http.post(`${baseUrl}api/landmark/`)
  // }


  //get single landmark by id for updating

  getUserLandmark(id){
    return this.http.get(`${baseUrl}api/landmark/id/${id}`)

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
    return this.http.delete(`${baseUrl}api/landmark/${id}`)

  }


}

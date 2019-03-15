import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user'

const baseUrl = 'http://localhost:4050/'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTUyNjU0ODA5LCJleHAiOjE1NTI3NDEyMDl9.9MVyd7iy5g4WXWXp0lEUDP0zijIKu4Ehdn6Rfv4tuso'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  public token = localStorage.getItem('token')
          // public httpOptions = {
          //   headers: new HttpHeaders({
          //     'Content-Type':  'application/json',
          //     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTU1MjYwOTY0OCwiZXhwIjoxNTUyNjk2MDQ4fQ.yQ3Rts7FBdxVU6QvnPUqrx57whrhow53yZxApKzJDlU'
          //   })
          // };

  constructor(private http: HttpClient) {}

  //////USERS/////////////

  signup(user: User) {
    // console.log(user)
    return this.http.post(`${baseUrl}api/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${baseUrl}api/user/signin`, user);
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
    return this.http.get(`${baseUrl}api/state/${userId}`, httpOptions)
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
    return this.http.get(`${baseUrl}api/landmark/user/2`, httpOptions);
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
    return this.http.get(`${baseUrl}api/landmark/id/${id}`, httpOptions)

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
    return this.http.delete(`${baseUrl}api/landmark/${id}`, httpOptions)

  }


}

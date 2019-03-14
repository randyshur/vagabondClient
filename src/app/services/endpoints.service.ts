import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl='http://localhost:4050/'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUyNTg0Nzk3LCJleHAiOjE1NTI2NzExOTd9.j3biSGoFRT60m3nc9Cdh5ASrbYVd9AK4ROgm6zqBOM4'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  constructor(private http: HttpClient) {}

  //////USERS/////////////
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

  // createState(){
  //   this.http.post(`${baseUrl}api/state/`)
  // }


  //get all states
  getAllStates(){
    return this.http.get(`${baseUrl}api/state/`)
  }

  getUserStates(){
    return this.http.get(`${baseUrl}api/state/1`)
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
    return this.http.delete(`${baseUrl}api/state/3`)
  }

  /////////LANDMARKS///////////////
  //get all landmarks, for home, admin
  getAllLandmarks(){
    return this.http.get(`${baseUrl}api/landmark/`)
  }

  //get all user landmarks
  getUserLandmarks(){
    return this.http.get(`${baseUrl}api/landmark/user/5`, httpOptions);
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../models/user'

const baseUrl = 'http://localhost:4050/api'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  //////USERS/////////////

  signup(user: User) {
    return this.http.post(`${baseUrl}/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${baseUrl}/user/signup`, user);
  }

  //update user by id
  updateUser(id) {
    //this.http.put(`${baseUrl}api/user/${id}`)
  }

  //delete user by id
  deleteUser(id) {
    this.http.delete(`${baseUrl}api/user/${id}`);
  }

  ////////STATES///////////////
  //create state
  createState() {
    //this.http.post(`${baseUrl}api/state/`)
  }

  //get all states
  getAllStates() {
    this.http.get(`${baseUrl}api/state/`)
  }

  //get all unique states
  getAllUnique() {
    this.http.get(`${baseUrl}api/state/unique`)
  }

  //get state by id for updating
  getState(id) {
    this.http.get(`${baseUrl}api/id/${id}`)
  }

  //update state by id
  updateState(id) {
    //this.http.put(`${baseUrl}api/state/${id}`)
  }

  //delete state by id
  deleteState(id) {
    this.http.delete(`${baseUrl}api/state/${id}`)
  }

  /////////LANDMARKS///////////////
  //get all landmarks, for home, admin
  getAllLandmarks() {
    this.http.get(`${baseUrl}api/landmark/`)
  }

  //get all user landmarks
  getUserLandamarks(userId) {
    this.http.get(`${baseUrl}api/landmark//user/${userId}`)
  }

  //create single landmark
  createLandmark() {
    //this.http.post(`${baseUrl}api/landmark/`)
  }

  //get single landmark by id for updating
  getUserLandmark(id) {
    this.http.get(`${baseUrl}api/landmark/id/${id}`)
  }

  //update landmark by id
  updateLandmark(id) {
    //this.http.put(`${baseUrl}api/landmark/${id}`)
  }

  //delete landmark by id
  deleteLandmark(id) {
    this.http.delete(`${baseUrl}api/landmark`)
  }


}

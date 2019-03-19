import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user'

const baseUrl = 'http://localhost:4050'

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

  signup(user: User) {
    return this.http.post(`${baseUrl}/api/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${baseUrl}/api/user/signin`, user);
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

}

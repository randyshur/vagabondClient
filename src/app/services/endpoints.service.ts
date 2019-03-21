import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user'
import { APIURL } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  constructor(private http: HttpClient) {}

  //////USERS/////////////

  signup(user: User) {
    return this.http.post(`${APIURL}api/user/signup`, user);
  }

  signin(user: User) {
    return this.http.post(`${APIURL}api/user/signin`, user);
  }

  //update user by id


  updateUser(id){
    // return this.http.put(`${APIURL}api/user/${id}`)

  }

  // updateUser(id){
  //   this.http.put(`${APIURL}api/user/${id}`)
  // }


  //delete user by id

  deleteUser(id){
    return this.http.delete(`${APIURL}api/user/${id}`);

  }

}



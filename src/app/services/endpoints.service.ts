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

}

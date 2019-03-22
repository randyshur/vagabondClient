import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

const token = localStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    //get all user landmarks
    getUser(){
      //return 'bob';
      return this.http.get(`${APIURL}api/user/myuser`, httpOptions)
    }
}

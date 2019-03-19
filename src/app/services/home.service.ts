import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


//import { User } from '../models/user'

const baseUrl = 'http://localhost:4050'

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
export class HomeService {

  constructor(private http: HttpClient) {}

getAllLandmarks(){
  return this.http.get(`${baseUrl}/api/home/`, httpOptions)
}}

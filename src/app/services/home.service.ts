import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


//import { User } from '../models/user'

const baseUrl = 'http://localhost:4050'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTUzMDA0MDg4LCJleHAiOjE1NTMwOTA0ODh9.yRPGjlDogfjpWzUoOdmVyO1A7Vy9QLLTpHMYU6Iqdjo'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

getAllLandmarks(){
  return this.http.get(`${baseUrl}/api/home/`)
}}

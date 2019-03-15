import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


// import { User } from '../models/user'

const baseUrl = 'http://localhost:4050'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTUyNTY4OTIzLCJleHAiOjE1NTI2NTUzMjN9.dwveL9K6U6_rRCHmPV4q6JSbWeNM0RXna8oljb8nYxM'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}



getAllLandmarks(){
  return this.http.get(`${baseUrl}/api/landmark/`)
} }
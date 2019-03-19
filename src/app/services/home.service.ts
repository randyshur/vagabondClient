import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:4050'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

getAllLandmarks(){
  return this.http.get(`${baseUrl}/api/home/`)
}}

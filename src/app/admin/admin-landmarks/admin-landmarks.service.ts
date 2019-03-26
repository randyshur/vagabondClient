import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../../environments/environment.prod';

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
export class LandmarkService {

  userLandmark: any

  constructor(private http: HttpClient) { }

  //get all user landmarks
  getLandmarks(){
    return this.http.get(`${APIURL}api/landmark`, httpOptions)
  }

  //get single landmark by id for updating
  getLandmark(id){
    this.http.get(`${APIURL}api/landmark/admin/${id}`, httpOptions).subscribe(data => {

     this.userLandmark=data
      console.log(this.userLandmark)

   })}

   getUpdateItem(){
     return this.http.get(`${APIURL}api/landmark/admin/${this.userLandmark}`, httpOptions)
   }

  //update landmark by id
  updateLandmark(form){
    console.log(form)
    // console.log(id)

    return this.http.put(`${APIURL}api/landmark/admin/${this.userLandmark.id}`, form, httpOptions)

  }

  deleteLandmark(id){
    return this.http.delete(`${APIURL}api/landmark/admin/${id}`, httpOptions)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTUyNTY4OTIzLCJleHAiOjE1NTI2NTUzMjN9.dwveL9K6U6_rRCHmPV4q6JSbWeNM0RXna8oljb8nYxM'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) {}
createState(){
  // return this.http.post(`${APIURL}api/state/`)

}

getUserStates(userId){
  return this.http.get(`${APIURL}api/state/${userId}`)
}

//get all states

getAllStates(){
  return this.http.get(`${APIURL}api/state/`)
}

//get all unique states
getAllUnique(){
  return this.http.get(`${APIURL}api/state/unique`)
}

//get state by id for updating
getState(id){
  return this.http.get(`${APIURL}api/id/${id}`)

}

//update state by id

updateState(id){
  // return this.http.put(`${APIURL}api/state/${id}`)

}

// updateState(id){
//   this.http.put(`${APIURL}api/state/${id}`)
// }


//delete state by id

deleteState(id){
  return this.http.delete(`${APIURL}api/state/${id}`)

}}

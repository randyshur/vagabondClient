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
export class StateService {

  constructor(private http: HttpClient) {}

  //create state
// createState(){
//   return this.http.post(`${baseUrl}api/state/`)

// }

// post user state
createState(){
    return this.http.post(`${baseUrl}/api/state/mystate/`, httpOptions)
  
  }

// get user states
getUserStates(id){
  return this.http.get(`${baseUrl}/api/state/mystates/${id}`, httpOptions)
}

//get all states

getAllStates(){
  return this.http.get(`${baseUrl}/api/state/`, httpOptions)
}

//get all unique states
getAllUnique(){
  return this.http.get(`${baseUrl}/api/state/unique`, httpOptions)
}

//get state by id for updating
getState(id){
  return this.http.get(`${baseUrl}/api/state/id/${id}`, httpOptions)

}

//update state by id

updateState(id){
  return this.http.put(`${baseUrl}/api/state/mystates/:id/${id}`, httpOptions)

}

// might be useful
// updateState(id){
// return this.http.put(`${baseUrl}/api/state/`)
// }


//delete state by id

deleteState(id){
  return this.http.delete(`${baseUrl}/api/state/mystates/:id/${id}`, httpOptions)

}}






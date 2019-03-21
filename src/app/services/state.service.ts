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

  userState: any

  constructor(private http: HttpClient) {}
createState(form){
  JSON.stringify(form)
  return this.http.post(`${baseUrl}/api/state/mystate`, form,  httpOptions)

}

getUserStates(userId){
  return this.http.get(`${baseUrl}/api/state/mystate/${userId}`, httpOptions)
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
  return this.http.get(`${baseUrl}/api/mystate/:id/${id}`, httpOptions)

}

//update state by id

// updateState(id){
//   return this.http.put(`${baseUrl}api/state/${id}`)

// }

updateState(form){
  console.log(form)
  return this.http.put(`${baseUrl}/api/state/mystate/:id/${this.userState}`, form, httpOptions)
}


//delete state by id

deleteState(id){
  return this.http.delete(`${baseUrl}/api/state/mystate/${id}`, httpOptions)

}}

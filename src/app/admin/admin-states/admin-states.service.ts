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
export class StateService {

  userState: any

  constructor(private http: HttpClient) {}
createState(form){
  JSON.stringify(form)
  return this.http.post(`${APIURL}api/state/mystate`, form,  httpOptions)


}

getStates(){
  return this.http.get(`${APIURL}api/state/`, httpOptions)
}

//get all states

getAllStates(){
  return this.http.get(`${APIURL}api/state/`, httpOptions)
}

//get all unique states
getAllUnique(){
  return this.http.get(`${APIURL}api/state/unique`, httpOptions)
}

//get state by id for updating
getState(id){
 this.http.get(`${APIURL}api/state/admin/${id}`, httpOptions).subscribe(data => {
    this.userState=data;
console.log(this.userState)
})}

updateState(form){
  console.log(form)
  return this.http.put(`${APIURL}api/state/admin/${this.userState.id}`, form, httpOptions)
}


//delete state by id

deleteState(id){
  return this.http.delete(`${APIURL}api/state/admin/${id}`, httpOptions)
  // return this.http.delete(`http://localhost:4050/api/state/${id}`)

}}


// http://localhost:4050/

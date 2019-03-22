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
export class StateService {

  userState: any

  constructor(private http: HttpClient) {}
createState(form){
  JSON.stringify(form)
  return this.http.post(`${APIURL}api/state/mystate`, form,  httpOptions)


}

getUserStates(){
  return this.http.get(`${APIURL}api/state/mystates/`, httpOptions)
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
  return this.http.get(`${APIURL}api/state/mystate/${id}`, httpOptions)

}

updateState(form){
  console.log(form)
  return this.http.put(`${APIURL}api/state/mystate/:id/${this.userState}`, form, httpOptions)
}


//delete state by id

deleteState(id){
  return this.http.delete(`${APIURL}api/state/mystate/${id}`, httpOptions)
  // return this.http.delete(`http://localhost:4050/api/state/${id}`)

}}


// http://localhost:4050/

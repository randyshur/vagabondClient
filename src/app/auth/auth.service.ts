import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn: any;
  expireDate: any;
  token: any;
  user: any;
  isAdmin: any;
  now: any;

  constructor(
    private userService: UserService
  ) { }


  // store the URL so we can redirect after logging in
  redirectUrl: string;

  isValidToken(token?: string): boolean {

    // Check if we even have a token
    if (!token) token = localStorage.getItem('token');
    if (!token) return false;

    //console.log('--------HERE 1')

    // Check if token has an expiration date
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;

    //console.log('--------HERE 2')

    // Check if token has expired
    if (!(date.valueOf() > new Date().valueOf())) return false;

    //console.log('--------HERE 3')

    return true;

  }

  isValidAdminToken(token?: string): boolean {

    // Check if we even have a token
    if (!token) token = localStorage.getItem('token');
    if (!token) return false;

    //console.log('--------HERE 1')

    // Check if token has an expiration date
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;

    //console.log('--------HERE 2')

    // Check if token has expired
    if (!(date.valueOf() > new Date().valueOf())) return false;

    //console.log('--------HERE 3');

    // Check if token belongs to admin
    /*
    this.userService.getUser().subscribe(data => {
      this.user = data
      console.log('--------HERE 4' + this.user.admin)
      this.isAdmin = this.user.admin
      console.log('--------HERE 5' + this.isAdmin)
      return this.isAdmin;
    })
    */
    /*this.userService.getUser().subscribe(data => {
     console.log(data)
     this.user = data
    })
    */

    this.isAdmin = localStorage.getItem('admin')
    //console.log('--------HERE 6' + this.isAdmin);
    return this.isAdmin;

  }



  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token;

    if (this.token) {
      const dateNow = new Date();
      this.now = dateNow;

      let tokenInfo = jwt_decode(this.token);
      this.expireDate = new Date(tokenInfo.exp);

      this.userService.getUser().subscribe(data => {
        console.log(data)
        this.user = data
        console.log(this.user.username)
      }

      )
    }


  }

}

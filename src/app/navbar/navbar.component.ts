import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";
import {
  Router,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;
  username: any;
  user: any;
  expireDate: any;
  now: any;
  fdate: any;
  TokenExpired: any;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService, private http: HttpClientModule,
    private router: Router
  ) {
    // redirect to home if already logged in
    //if (this.authenticationService.currentUserValue) {
    //    this.router.navigate(['/']);
    //}
  }

  ngOnInit() {
    this.setToken()
    this.TokenExpired = this.isTokenExpired()
  }

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token;

    if (this.token) {
    const dateNow = new Date();
    this.now = dateNow;
    //this.fdate = this.now;
    //this.now = now.toLocaleTimeString();
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

  getToken(): string {
    return localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  /*
  isTokenExpired() {
    return true;
  }
  */


  isTokenExpired(token?: string): boolean {

    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());

  }

  getStatus(): string {
    return "User status goes here";
  }


  logout(): void {
      // remove token from local storage to log user out
      localStorage.removeItem('token');
      this.router.navigate(['']);
      //this.router.navigate([this.returnUrl]);
  }

  //const user = 'bubba';
  //this.username = user;

}


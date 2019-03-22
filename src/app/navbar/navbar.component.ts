import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: any;
  username: any;
  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService, private http: HttpClientModule
  ) {
    // redirect to home if already logged in
    //if (this.authenticationService.currentUserValue) {
    //    this.router.navigate(['/']);
    //}
  }

  ngOnInit() {
    this.setToken()
  }

  setToken() {
    const token = localStorage.getItem('token')
    this.token = token;

    this.userService.getUser().subscribe(data => {
      console.log(data)
      this.user = data
      console.log(this.user.username)
    }
    )
  }

  //const user = 'bubba';
  //this.username = user;

}


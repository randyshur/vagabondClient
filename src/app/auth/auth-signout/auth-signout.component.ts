import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-signout',
  templateUrl: './auth-signout.component.html',
  styleUrls: ['./auth-signout.component.css']
})
export class AuthSignoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.removeItem('id');
  }

}

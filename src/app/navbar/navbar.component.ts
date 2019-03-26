import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  validToken: any;
  validAdminToken: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.setValidToken()
    this.setValidAdminToken()
  }

  setValidToken() {
    this.validToken = this.authService.isValidToken();
  }

  setValidAdminToken() {
    this.validAdminToken = this.authService.isValidAdminToken();
  }

  getValidToken() {
    return this.authService.isValidToken();
  }

  getValidAdminToken() {
    this.validAdminToken = this.authService.isValidAdminToken();
    return this.validAdminToken;
  }



}

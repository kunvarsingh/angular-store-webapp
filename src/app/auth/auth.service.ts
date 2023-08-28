import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }

isAuthenticated(){
    return this.getUserName()&&this.getPassword();
  }

  getUserName(){
    return localStorage.getItem('username');
  }

  getPassword(){
    return localStorage.getItem('password');
  }
}
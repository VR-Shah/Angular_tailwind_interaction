import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loggedIn:boolean = true;

  isLoggedIn() {
    // return !localStorage.getItem("token");
    this.loggedIn = true;
    return this.loggedIn;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogin = false;
  constructor() { }
  
  setAuthStatus(loginStatus: boolean) {
    this.isLogin = loginStatus;
  }
  getAuthStatus() {
    return this.isLogin;
  }
}

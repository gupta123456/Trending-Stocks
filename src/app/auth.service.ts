import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  validate(data) {
    console.log(data.value);
    if (data.value.username == 'admin' && data.value.pswd == '1234') {
      localStorage.setItem('username', 'admin');
      return true;
    }
    else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){
  }
  canActivate() {
    if(localStorage.getItem('username')!=null){
    return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}

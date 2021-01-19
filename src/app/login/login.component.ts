import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  output:boolean = false;;
  constructor(private auth: AuthGuard, private service: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null,[Validators.required]),
      pswd:new FormControl(null,[Validators.required])
   });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.output = this.service.validate(this.loginForm);
      console.log(this.output)
      if(this.output){
        this.router.navigateByUrl('dashboard')
      }
      else{
        this.router.navigateByUrl('login');
      }
    }
  }

}

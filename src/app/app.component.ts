import { Component,OnInit } from '@angular/core';
import {AuthGuard} from './guard/auth.guard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tradingstocks';
  show:boolean = false;
  constructor(private guard:AuthGuard){}

  ngOnInit(){
    var output = this.guard.canActivate();
    if(output){
      this.show = true;
    }
  }
}

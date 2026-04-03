import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  //email=suryansh1@gmail.com
  //pass=123@Anshu
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })

  onLogin(){

  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
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

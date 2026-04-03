import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';

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

  loginService = inject(LoginService)

  onLogin(){
    debugger
    const formValue = this.loginForm.value;
    this.loginService.onUserLogin(formValue).subscribe({
      next:(res)=>{
        debugger
        alert("User Logged In Successfully")
        console.log(res)
      },
      error:()=>{
        debugger
        alert("Wrong Credentials")
      }
    })
  }

}

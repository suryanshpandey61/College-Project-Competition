import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm:any={ 
  "fullName": "",
  "email": "",
  "password": "",
  "collegeName": "",
  "role": ""
  }

}

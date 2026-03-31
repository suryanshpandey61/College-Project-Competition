import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
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

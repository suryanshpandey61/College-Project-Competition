import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form-service';

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

  registerService = inject(RegisterFormService);

  onSubmit(){
    this.registerService.onSubmitRegisterForm(this.registerForm).subscribe({
      next:(response)=>{
        console.log("Success -->",response);
        alert("User Registered Successfully")
      },
      error:(err)=>{
        console.log("Error -->",err)
        alert("Error in Registering new User")
      }
    })
  }



}

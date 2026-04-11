import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  //form
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
        debugger
        console.log("Success -->",response);
        alert("User Registered Successfully")
      },
      error:(err)=>{
        debugger
        console.log("Error -->",err)
        alert("Error in Registering new User")
      }
    })
  }



}

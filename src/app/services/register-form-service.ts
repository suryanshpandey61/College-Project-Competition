import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {

  // we use HttpClient to call api
  httpClient = inject(HttpClient)

  //url
  submitUrl='https://api.freeprojectapi.com/api/ProjectCompetition/register';

  //method to call api for register-form
  onSubmitRegisterForm(registerForm:any):Observable<any>{
   return this.httpClient.post(this.submitUrl,registerForm);
  }
  
}

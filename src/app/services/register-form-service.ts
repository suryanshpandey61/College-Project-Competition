import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {

  //use to call api we use HttpClient
  httpClient = inject(HttpClient)

  submitUrl='https://api.freeprojectapi.com/api/ProjectCompetition/register';

  onSubmitRegisterForm(registerForm:any):Observable<any>{
   return this.httpClient.post(this.submitUrl,registerForm);
  }
  
}

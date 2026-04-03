import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

 private httpClient = inject(HttpClient)

 login_url='https://api.freeprojectapi.com/api/ProjectCompetition/login'

 onUserLogin():Observable<any>{
  return this.httpClient
 }
  
}

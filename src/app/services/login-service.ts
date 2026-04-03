import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
 loggedUserId:string = "";
 private httpClient = inject(HttpClient)

 constructor(){
    const loggedData = sessionStorage.getItem('user-id')
    if(loggedData!=null){
      this.loggedUserId=loggedData;
    }
  }

 login_url='https://api.freeprojectapi.com/api/ProjectCompetition/login'

 onUserLogin(loginObj:any):Observable<any>{
  return this.httpClient.post(this.login_url,loginObj);
 }
  
}

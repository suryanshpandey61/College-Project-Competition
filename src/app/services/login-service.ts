import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../constant/constant';

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


 onUserLogin(loginObj:any):Observable<any>{
  return this.httpClient.post(constant.API_URL+"login",loginObj);
 }
  
}

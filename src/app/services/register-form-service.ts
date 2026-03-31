import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {

  //use to call api we use HttpClient
  httpClient = inject(HttpClient)
  
}

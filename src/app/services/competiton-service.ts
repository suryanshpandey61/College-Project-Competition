import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { constant } from '../constant/constant';
import { CompetitonModel } from '../model/competition.model';

@Injectable({
  providedIn: 'root',
})
export class CompetitonService {

  private httpClient = inject(HttpClient);

createCompetition(obj:CompetitonModel){
    return this.httpClient.post(constant.API_URL+"competiton",obj)
}

fetchCompetitionDetails(){
  
}
  
}

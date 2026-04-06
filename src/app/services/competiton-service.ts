import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { constant } from '../constant/constant';
import { CompetitonModel } from '../model/competition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitonService {

  private httpClient = inject(HttpClient);

createCompetition(obj:CompetitonModel){
    return this.httpClient.post(constant.API_URL+"competition",obj)
}

fetchCompetitionDetails():Observable<CompetitonModel[]>{
    return this.httpClient.get<CompetitonModel[]>(constant.API_URL+"GetAllCompetition");
}

fetchCompetitionById(id:number):Observable<CompetitonModel>{
  return this.httpClient.get<CompetitonModel>(constant.API_URL+"competition/"+id);
}

deleteCompetiton(id:number){
  return this.httpClient.delete(constant.API_URL+"delete/"+id);
}

updateCompetition(id:number,obj:CompetitonModel){
  return this.httpClient.put(constant.API_URL+"update/"+id,obj);
}
  
}

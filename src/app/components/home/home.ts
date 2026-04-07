import { Component, inject } from '@angular/core';
import { Footer } from '../common/footer/footer';
import { CompetitonService } from '../../services/competiton-service';
import { Observable } from 'rxjs';
import { CompetitonModel } from '../../model/competition.model';

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   title = 'College Project Competition';
   src = inject(CompetitonService);

   competitionList$:Observable<CompetitonModel[]> = new Observable<CompetitonModel[]>
   
}

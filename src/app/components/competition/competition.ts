import { Component } from '@angular/core';
import { CompetitonModel } from '../../model/competition.model';

@Component({
  selector: 'app-competition',
  imports: [],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export class Competition {

  newObj: CompetitonModel = new CompetitonModel();

}

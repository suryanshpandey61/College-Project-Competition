import { Component, inject } from '@angular/core';
import { CompetitonModel } from '../../model/competition.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompetitonService } from '../../services/competiton-service';

@Component({
  selector: 'app-competition',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export class Competition {
  competitionService = inject(CompetitonService)
  newObj: CompetitonModel = new CompetitonModel();

  onCreateCompetiton(){

  }
} 

import { Component, inject } from '@angular/core';
import { CompetitonService } from '../../services/competiton-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-project',
  imports: [],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css',
})
export class SubmitProject {


  competitionService = inject(CompetitonService)
  currentCompetitionId:number=0;
  constructor(private activatedRoute:ActivatedRoute){
    
  }

}

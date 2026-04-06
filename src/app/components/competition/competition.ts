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
  competitionList:CompetitonModel [] = [];
  onCreateCompetiton(){
    this.competitionService.createCompetition(this.newObj).subscribe({
      next:()=>{
        alert("Competiton-Created Successfully")
      },
      error:()=>{
        alert("API Error while creating competition")
      }
    })
  }

  getAllCompetitions(){
    this.competitionService.fetchCompetitionDetails().subscribe({
      next:()=>{
        
      },
      error:()=>{

      }
    })
  }

} 

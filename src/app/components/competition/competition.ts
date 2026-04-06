import { Component, inject, OnInit } from '@angular/core';
import { CompetitonModel } from '../../model/competition.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompetitonService } from '../../services/competiton-service';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-competition',
  imports: [DatePipe, FormsModule, NgClass],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export class Competition implements OnInit {
  competitionService = inject(CompetitonService)
  newObj: CompetitonModel = new CompetitonModel();
  competitionList:CompetitonModel [] = [];

  ngOnInit(): void {
      this.getAllCompetitions();
  }

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
      next:(res)=>{
        this.competitionList=res;
        console.log("response-from-api--->",res)
      },
      error:()=>{
        alert("Error while fetching competition-details")
      }
    })
  }

} 

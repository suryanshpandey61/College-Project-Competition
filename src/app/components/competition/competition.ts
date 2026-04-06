import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitonModel } from '../../model/competition.model';
import { CompetitonService } from '../../services/competiton-service';

@Component({
  selector: 'app-competition',
  imports: [DatePipe, FormsModule],
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
        alert("Competiton Created Successfully")
        this.getAllCompetitions()
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
      },
      error:()=>{
        alert("Error while fetching competition-details")
      }
    })
  }

  onDelete(id:number){
    this.competitionService.deleteCompetiton(id).subscribe({
      next:()=>{
        alert("Successfully Deleted the Competiton")
        this.getAllCompetitions();
      },
      error:()=>{
        alert("Error while deleting the competition")
      }
    })
  }

} 

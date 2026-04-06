import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
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

  resetForm(){
    this.newObj=new CompetitonModel();
  }

  saveCompetition(){
   if (this.newObj.competitionId === 0) {

    //  ADD
    this.competitionService.createCompetition(this.newObj).subscribe({
      next: () => {
        alert("Competition Created");
        this.getAllCompetitions();
        this.resetForm();
      },
      error: () => {
        alert("Error while creating");
      }
    });

  } else {

    //  UPDATE
    this.competitionService.updateCompetition(this.newObj.competitionId, this.newObj).subscribe({
      next: () => {
        alert("Competition Updated");
        this.getAllCompetitions();
        this.resetForm();
      },
      error: () => {
        alert("Error while updating");
      }
    });

  }
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

  formatDate(date: any): string {
    if (!date) return '';
    return date.split('T')[0];
  }

  getCompetitionById(id:number){
    this.competitionService.fetchCompetitionById(id).subscribe({
      next:(res)=>{
         res.startDate = this.formatDate(res.startDate);
         res.endDate = this.formatDate(res.endDate);
         this.newObj=res;
      },
      error:()=>{
        alert("Error while fetching competition for requested id")
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

import { Component, inject, OnInit } from '@angular/core';
import { CompetitonService } from '../../services/competiton-service';
import { ActivatedRoute } from '@angular/router';
import { CompetitonModel } from '../../model/competition.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-submit-project',
  imports: [DatePipe],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css',
})
export class SubmitProject implements OnInit {


  competitionService = inject(CompetitonService)
  currentCompetitionId:number=0;
  currentCompetitonData:CompetitonModel= new CompetitonModel();
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.currentCompetitionId=res.id
    })
  }

  ngOnInit(): void {
      this.getCompetitionById();
  }

  getCompetitionById(){
    this.competitionService.fetchCompetitionById(this.currentCompetitionId).subscribe({
      next:(res)=>{
        this.currentCompetitonData=res
      },
      error:(error)=>{
        alert("Error while fetching competiton details by id")
      }

    })
  }

  submitProject(){
    
  }

}

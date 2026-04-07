import { Component, inject, OnInit } from '@angular/core';
import { CompetitonService } from '../../services/competiton-service';
import { ActivatedRoute } from '@angular/router';
import { CompetitonModel } from '../../model/competition.model';
import { DatePipe, NgClass } from '@angular/common';
import { ProjectSubmissionModel } from '../../model/project-submission.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-project',
  imports: [DatePipe, FormsModule, NgClass],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css',
})
export class SubmitProject implements OnInit {


  competitionService = inject(CompetitonService)
  currentCompetitionId:number=0;
  currentCompetitonData:CompetitonModel= new CompetitonModel();
  projectObj:ProjectSubmissionModel = new ProjectSubmissionModel();
  userId:number=0;

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
    this.projectObj.userId = Number(sessionStorage.getItem('user-id'));
    this.projectObj.competitionId = this.currentCompetitionId;
    this.competitionService.submitProject(this.projectObj).subscribe({
      next:()
    })
  }

}

import { Component, inject, OnInit } from '@angular/core';
import { CompetitonService } from '../../services/competiton-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-project',
  imports: [],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css',
})
export class SubmitProject implements OnInit {


  competitionService = inject(CompetitonService)
  currentCompetitionId:number=0;
  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.currentCompetitionId=res.id
    })
  }



}

import { Component } from '@angular/core';
import { CompetitonModel } from '../../model/competition.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-competition',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
})
export class Competition {

  newObj: CompetitonModel = new CompetitonModel();

  onCreateCompetiton(){
    
  }
} 

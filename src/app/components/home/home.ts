import { Component, inject } from '@angular/core';
import { Footer } from '../common/footer/footer';
import { CompetitonService } from '../../services/competiton-service';

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   title = 'College Project Competition';
   src = inject(CompetitonService)
}

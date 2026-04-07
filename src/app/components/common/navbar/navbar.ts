import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
//navbar 
export class Navbar implements OnInit {
  userName:string | null = null;
  isOpen = false;
  userId:number=0;

  loginService = inject(LoginService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadUser();
    window.addEventListener('user-changed', () => {
      this.loadUser();
      this.cdr.detectChanges();
    });
  }

  loadUser(){
    this.userName = sessionStorage.getItem('user-name');
    this.userId = Number(sessionStorage.getItem('user-id'))
    this.loginService.loggedUserId = sessionStorage.getItem('user-id') || "";
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


  onLogOut(){
   sessionStorage.clear();
   window.dispatchEvent(new Event('user-changed'))
   this.router.navigateByUrl('/home');
  }

}

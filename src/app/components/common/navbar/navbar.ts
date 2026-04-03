import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  userName:string | null = null;
  isOpen = false;
  ngOnInit(): void {
    this.loadUser();
    window.addEventListener('user-changed', () => {
      this.loadUser();
    });
  }

  loadUser(){
      this.userName = sessionStorage.getItem('user-name');
  }
  // role = sessionStorage.getItem('role');
  // roleId = sessionStorage.getItem('user-id');

  loginService = inject(LoginService);  
  router = inject(Router)
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onLogOut(){
   sessionStorage.clear();
   window.dispatchEvent(new Event('user-changed'))
   this.router.navigateByUrl('/home');
  }

}

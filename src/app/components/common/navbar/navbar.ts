import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isOpen = false;
  // userName = sessionStorage.getItem('user-name');
  // role = sessionStorage.getItem('role');
  // roleId = sessionStorage.getItem('user-id');

  loginService = inject(LoginService);  

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

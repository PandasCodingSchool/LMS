import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showUserMenu = false;
  user;
  constructor(private authService:AuthService){
    this.user = authService.getUser();
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
}

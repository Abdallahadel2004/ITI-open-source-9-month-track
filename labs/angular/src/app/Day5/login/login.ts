import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {
  username = 'admin';
  password = 'password';

  constructor(private authService: Auth, private router: Router) { }

  login() {
    if (this.username && this.password) {
      this.authService.login();
      this.router.navigate(['/about']);
    }
  }
}

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth } from './Day5/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.html'
})
export class App {
  constructor(public authService: Auth, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type UserInfo = {
  email?: string;
  username?: string;
  name?: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  get currentUserName(): string {
    const userRaw = localStorage.getItem('user');
    if (!userRaw) {
      return '';
    }

    try {
      const user: UserInfo = JSON.parse(userRaw);
      return user.username || user.name || user.email || '';
    } catch {
      return '';
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
